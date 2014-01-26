(ns lt.plugins.note
  (:require
   [clojure.string  :as string]
   [lt.object       :as object]
   [lt.objs.command :as cmd]
   [lt.objs.sidebar.command :as scmd]
   [lt.objs.files   :as files]
   [lt.objs.tabs    :as tabs]
   [lt.objs.plugins :as plugins]
   [lt.util.dom     :as dom]
   [crate.core      :as crate])
  (:require-macros
   [lt.macros :refer [behavior defui]]))

(def APP_NAME "Note")
(def DEFAULT_CONTENT "[# \n\n]YYYY-MM-DD HH:mm:ss[\n\n]")
(def TITLE_REGEXP #"#\s?(.+)\s*")

;; Plugin variable
; FIXME
;(def note-dir (atom (files/join (files/home ".notes"))))
(def note-dir (atom "/Users/uochan/opt/notes"))
(def note-filename-format (atom "YYYY/MM/YYYY-MM-DD-HHmmss[.md]"))
(def close-tab-when-open-file-from-list (atom true))


(defn load-node-module
  "Load node.js module."
  [module-name]
  (js/require
   (plugins/local-module APP_NAME module-name)
   ;(files/join (plugins/find-plugin APP_NAME) "node_modules" module-name)
   ))

(def moment (load-node-module "moment"))
(def mkdirp (load-node-module "mkdirp"))



;; Note: New
;; -----------------------------------
(defn save-new-file
  "Save new file."
  [filename content callback]
  (mkdirp (files/parent filename)
          (fn [err]
            (files/save filename content
                        (fn [& [err]]
                          (callback err))))))


(defn create-new-note
  []
  (let [now      (moment)
        filename (.format now @note-filename-format)
        filename (files/join @note-dir filename)
        content  DEFAULT_CONTENT
        content  (.format now content)]
    (save-new-file filename content #(cmd/exec! :open-path filename))))

;; Note: List
(defui note-button-ui [note]
  [:button (:title note)]
  :click (fn []
           (when @close-tab-when-open-file-from-list
             (cmd/exec! :tabs.close))
           (cmd/exec! :open-path (:file-path note))))

(defn get-note-list
  []
  (let [ls (files/filter-walk files/file? @note-dir)]
    (map (fn [file-path]
           (let [title (->> file-path files/open-sync :content (re-seq TITLE_REGEXP) first second)]
             {:title title
              :file-path file-path}))
         ls)))

;; Note: Search
(defn search-note [keyword]
  (filter
   (fn [note]
     (let [content (-> note :file-path files/open-sync :content)]
       (not= -1 (.indexOf content keyword))))
   (get-note-list)))


(defui note-li-item-ui [note]
  [:li
   [:span.date
    (-> note :file-path files/basename files/without-ext)]
   ": "
   (note-button-ui note)])

(defn- pressed-enter? [keyevent]
  (= 13 (.-keyCode keyevent)))

(defui search-input-ui [& [f]]
  [:input {:type "text" :class "search-keyword" :placeholder "Search keyword"}]
  :keyup (fn [e]
           (when (and f (pressed-enter? e))
             (f (dom/val (dom/$ ".search-keyword"))))))

(defn update-note-list [notes]
  (let [elem (dom/$ ".note-list")]
    (dom/html elem "")
    (dom/append elem (crate/html [:ul (map note-li-item-ui notes)]))))

(defui note-list-ui [notes]
  [:div#ltnote
   [:h1 "Notes"]
   (search-input-ui #(update-note-list (search-note %)))
   [:hr]
   [:div {:class "note-list"}
    [:ul (map note-li-item-ui notes)]]])

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(object/object*
 ::note-list
 :name "Notes"
 :behaviors [::on-close-destroy]
 :init (fn [this & [notes]]
         (note-list-ui
          (if notes notes (get-note-list)))))


(defn open-note-list []
  (let [x (object/create ::note-list)]
    (tabs/add! x)
    (tabs/active! x)
    (.focus (dom/$ ".search-keyword"))))


(defn clean-up []
  (let [now (moment)
        default-size (count (.format now DEFAULT_CONTENT))]
    (doseq [file (files/filter-walk files/file? @note-dir)]
      (when (= default-size (-> file files/open-sync :content count))
        (files/delete! file)))))



(behavior ::set-note-dir
          :triggers #{:object.instant}
          :type     :user
          :desc     "Note: Set note directory"
          :params   [{:label "Directory" :type :string}]
          :reaction (fn [this dir]
                      (when (files/exists? dir)
                        (reset! note-dir dir))))

(behavior ::set-note-filename-format
          :triggers #{:object.instant}
          :type     :user
          :desc     "Note: Set note filename format"
          :params   [{:label "Format (YYYY/MM/YYYY-MM-DD-HHmmss[.md])" :type :string}]
          :reaction (fn [this s]
                      (reset! note-filename-format s)))


(cmd/command {:command :new-note
              :desc "Note: New"
              :exec create-new-note})

(cmd/command {:command :note-list
              :desc "Note: List"
              :exec open-note-list})

(cmd/command {:command :note-clean-up
              :desc "Note: Cleanup"
              :exec clean-up})


(def search-keyword-input
  (scmd/options-input {:placeholder "Search"}))

(behavior ::exec-active!
          :triggers #{:select}
          :reaction (fn [this search-keyword]
                      (scmd/exec-active! search-keyword)))

(object/add-behavior! search-keyword-input ::exec-active!)

(cmd/command {:command :note-search
              :desc "Note: Search"
              :options search-keyword-input
              :exec (fn [search-keyword]
                      (let [notes (search-note search-keyword)
                            x     (object/create ::note-list notes)]
                        (tabs/add! x)
                        (tabs/active! x)
                        (let [elem (dom/$ ".search-keyword")]
                          (dom/val elem search-keyword)
                          (.focus elem))))})
