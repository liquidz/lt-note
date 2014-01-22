(ns lt.plugins.note
  (:require
   [clojure.string  :as string]
   [lt.object       :as object]
   [lt.objs.editor  :as editor]
   [lt.objs.command :as cmd]
   [lt.objs.files   :as files]
   [lt.objs.tabs    :as tabs]
   [lt.objs.plugins :as plugins]
   [lt.util.dom :as dom]
   [crate.core :as crate]
   )
  (:require-macros
   [lt.macros :refer [behavior defui]]))

(def APP_NAME "Note")
(def DEFAULT_CONTENT "[# \n\n]YYYY-MM-DD HH:mm:ss[\n\n]")
(def TITLE_REGEXP #"#\s?(.+)\s*")

(def note-dir (atom (files/join (files/home ".notes"))))
(def note-filename-format (atom "YYYY/MM/YYYY-MM-DD-HHmmss[.md]"))



(defn load-node-module
  "Load node.js module."
  [module-name]
  (js/require
   (files/join plugins/user_plugins_dir APP_NAME "node_modules" module-name)))

(def moment (load-node-module "moment"))
(def mkdirp (load-node-module "mkdirp"))


(defn create-new-note-file
  "Create a new note file based on current time."
  [filename content callback]
  (mkdirp (files/parent filename)
          (fn [err]
            (files/save filename content
                        (fn [& [e]]
                          (callback))))))


(defn note-new
  []
  (let [now (moment)
        filename (.format now @note-filename-format)
        filename (files/join @note-dir filename)
        content  DEFAULT_CONTENT
        content  (.format now content)
        ]
    (create-new-note-file filename content #(cmd/exec! :open-path filename))))

(defn get-note-list
  []
  (let [ls (files/filter-walk files/file? @note-dir)]
    (map (fn [file-path]
           (let [title (->> file-path files/open-sync :content (re-seq TITLE_REGEXP) first second)]
             {:title title
              :file-path file-path}))
         ls)))

(defn search-note [keyword]
  (filter
   (fn [note]
     (let [content (-> note :file-path files/open-sync :content)]
       (not= -1 (.indexOf content keyword))))
   (get-note-list)))

(defui note-button [note]
  [:button (:title note)]
  :click (fn []
           (cmd/exec! :open-path (:file-path note))))

(defui note-li-item [note]
  [:li
   [:span.date
    (-> note :file-path files/basename files/without-ext)]
   ": "
   (note-button note)])

(defui notes-screen [notes]
  [:div#ltnote
   [:h1 "Notes"]
   [:hr]
   [:ul (map note-li-item notes)]])



(defui search-input []
  [:input {:class "keyword" :type "text" :placeholder "Search"}] )
(defui search-button []
  [:button "search"]
  :click (fn []
           (let [keyword (dom/val (dom/$ "#ltnote .keyword"))
                 elem (dom/$ "#ltnote .result")
                 ]
             (dom/html elem "")
             (dom/append elem
                       (crate/html [:ul (map note-li-item (search-note keyword))])
                       )
             )
           )
  )

(defui search-screen []
  [:div#ltnote
   (search-input)
   (search-button)
   [:div.result]
   ]
  )

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
 :init (fn [this]
         (notes-screen (get-note-list))))

(object/object*
 ::note-search
 :name "Search Note"
 :behaviors [::on-close-destroy]
 :init (fn [this]
         (search-screen))
 )

(defn open-note-list []
  (let [x (object/create ::note-list)]
    (tabs/add! x)
    (tabs/active! x)))

(defn open-search-screen []
  (let [x (object/create ::note-search)]
    (tabs/add! x)
    (tabs/active! x)))

(defn clean-up []
  (let [now (moment)
        default-size (count (.format now DEFAULT_CONTENT))]
    (doseq [file (files/filter-walk files/file? @note-dir)]
      (when (= default-size (-> file files/open-sync :content count))
        (files/delete! file)))))


(cmd/command {:command :note-new
              :desc "Note: New"
              :exec note-new})

(cmd/command {:command :note-list
              :desc "Note: List"
              :exec open-note-list})

(cmd/command {:command :note-clean-up
              :desc "Note: Cleanup"
              :exec clean-up})

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

