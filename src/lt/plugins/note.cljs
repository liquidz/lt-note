(ns lt.plugins.note
  (:require
   [clojure.string :as string]
   [lt.object           :as object]
   [lt.objs.editor      :as editor]
   ;[lt.objs.editor.pool :as pool]
   [lt.objs.command     :as cmd]
   [lt.objs.files       :as files]
   [lt.objs.tabs :as tabs]
   [lt.objs.plugins :as plugins]
   )
  (:require-macros
   [lt.macros :refer [behavior defui]]))

(def APP_NAME "note")
(def DEFAULT_CONTENT "[# \n\n]YYYY-MM-DD HH:mm:ss[\n\n]")
(def TITLE_REGEXP #"#\s?(.+)\s*")

(def ^:dynamic *note-dir* "/Users/uochan/opt/note")
(def ^:dynamic *note-file-name* "YYYY/MM/YYYY-MM-DD-HHmmss[.md]")

(defn load-node-module
  "Load node.js module."
  [module-name]
  (js/require
   (files/join plugins/user_plugins_dir APP_NAME "node_modules" module-name)))

(def moment (load-node-module "moment"))
(def mkdirp (load-node-module "mkdirp"))


(defn create-new-note-file
  "Create a new note file based on current time."
  [filename content]
  (mkdirp (files/parent filename))
  (files/save filename content))


(defn note-new
  []
  (let [now (moment)
        filename (.format now *note-file-name*)
        filename (files/join *note-dir* filename)
        content  DEFAULT_CONTENT
        content  (.format now content)
        ]
    (create-new-note-file filename content)
    (cmd/exec! :open-path filename)))

(defn get-note-list
  []
  (let [ls (files/filter-walk files/file? *note-dir*)]
    (map (fn [file]
           [file
            (-> (re-seq TITLE_REGEXP (-> file files/open-sync :content))
                first second)]
           ) ls)))

(defui note-button [note]
  [:button (second note)]
  :click (fn []
           (cmd/exec! :open-path (first note))))

(defui notes-screen [notes]
  [:div
   [:h1 "Notes"]
   [:hr]
   [:ul
    (map (fn [note]
           [:li
            (-> note first files/basename files/without-ext)
            ": "
            (note-button note)])
         notes)]])


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

(defn open-note-list []
  (let [x (object/create ::note-list)]
    (tabs/add! x)
    (tabs/active! x)))


(defn clean-up []
  (let [now (moment)
        default-size (count (.format now DEFAULT_CONTENT))]
    (doseq [file (files/filter-walk files/file? *note-dir*)]
      (when (= default-size (-> file files/open-sync :content count))
        (files/delete! file)))))

(cmd/command {:command :note-new
              :desc "Note: new"
              :exec note-new})

(cmd/command {:command :note-list
              :desc "Note: list"
              :exec open-note-list})

(cmd/command {:command :note-clean-up
              :desc "Note: cleanup"
              :exec clean-up})
