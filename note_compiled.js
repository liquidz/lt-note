if(!lt.util.load.provided_QMARK_('lt.plugins.note')) {
goog.provide('lt.plugins.note');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.tabs');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.command');

lt.plugins.note.APP_NAME = "note";

lt.plugins.note.DEFAULT_CONTENT = "[# \n\n]YYYY-MM-DD HH:mm:ss[\n\n]";

lt.plugins.note.TITLE_REGEXP = /#\s?(.+)\s*/;

lt.plugins.note._STAR_note_dir_STAR_ = "/Users/uochan/opt/note";

lt.plugins.note._STAR_note_file_name_STAR_ = "YYYY/MM/YYYY-MM-DD-HHmmss[.md]";

/**
* Load node.js module.
*/
lt.plugins.note.load_node_module = (function load_node_module(module_name){return require(lt.objs.files.join.call(null,lt.objs.plugins.user_plugins_dir,lt.plugins.note.APP_NAME,"node_modules",module_name));
});

lt.plugins.note.moment = lt.plugins.note.load_node_module.call(null,"moment");

lt.plugins.note.mkdirp = lt.plugins.note.load_node_module.call(null,"mkdirp");

/**
* Create a new note file based on current time.
*/
lt.plugins.note.create_new_note_file = (function create_new_note_file(filename,content){lt.plugins.note.mkdirp.call(null,lt.objs.files.parent.call(null,filename));
return lt.objs.files.save.call(null,filename,content);
});

lt.plugins.note.note_new = (function note_new(){var now = lt.plugins.note.moment.call(null);var filename = now.format(lt.plugins.note._STAR_note_file_name_STAR_);var filename__$1 = lt.objs.files.join.call(null,lt.plugins.note._STAR_note_dir_STAR_,filename);var content = lt.plugins.note.DEFAULT_CONTENT;var content__$1 = now.format(content);lt.plugins.note.create_new_note_file.call(null,filename__$1,content__$1);
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),filename__$1);
});

lt.plugins.note.get_note_list = (function get_note_list(){var ls = lt.objs.files.filter_walk.call(null,lt.objs.files.file_QMARK_,lt.plugins.note._STAR_note_dir_STAR_);return cljs.core.map.call(null,(function (file){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file,cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,lt.plugins.note.TITLE_REGEXP,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))], null);
}),ls);
});

lt.plugins.note.note_button = (function note_button(note){var e__7145__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),cljs.core.second.call(null,note)], null));var seq__8909_8935 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),cljs.core.first.call(null,note));
})], null)));var chunk__8910_8936 = null;var count__8911_8937 = 0;var i__8912_8938 = 0;while(true){
if((i__8912_8938 < count__8911_8937))
{var vec__8913_8939 = cljs.core._nth.call(null,chunk__8910_8936,i__8912_8938);var ev__7146__auto___8940 = cljs.core.nth.call(null,vec__8913_8939,0,null);var func__7147__auto___8941 = cljs.core.nth.call(null,vec__8913_8939,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___8940,func__7147__auto___8941);
{
var G__8942 = seq__8909_8935;
var G__8943 = chunk__8910_8936;
var G__8944 = count__8911_8937;
var G__8945 = (i__8912_8938 + 1);
seq__8909_8935 = G__8942;
chunk__8910_8936 = G__8943;
count__8911_8937 = G__8944;
i__8912_8938 = G__8945;
continue;
}
} else
{var temp__4092__auto___8946 = cljs.core.seq.call(null,seq__8909_8935);if(temp__4092__auto___8946)
{var seq__8909_8947__$1 = temp__4092__auto___8946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8909_8947__$1))
{var c__6528__auto___8948 = cljs.core.chunk_first.call(null,seq__8909_8947__$1);{
var G__8949 = cljs.core.chunk_rest.call(null,seq__8909_8947__$1);
var G__8950 = c__6528__auto___8948;
var G__8951 = cljs.core.count.call(null,c__6528__auto___8948);
var G__8952 = 0;
seq__8909_8935 = G__8949;
chunk__8910_8936 = G__8950;
count__8911_8937 = G__8951;
i__8912_8938 = G__8952;
continue;
}
} else
{var vec__8914_8953 = cljs.core.first.call(null,seq__8909_8947__$1);var ev__7146__auto___8954 = cljs.core.nth.call(null,vec__8914_8953,0,null);var func__7147__auto___8955 = cljs.core.nth.call(null,vec__8914_8953,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___8954,func__7147__auto___8955);
{
var G__8956 = cljs.core.next.call(null,seq__8909_8947__$1);
var G__8957 = null;
var G__8958 = 0;
var G__8959 = 0;
seq__8909_8935 = G__8956;
chunk__8910_8936 = G__8957;
count__8911_8937 = G__8958;
i__8912_8938 = G__8959;
continue;
}
}
} else
{}
}
break;
}
return e__7145__auto__;
});

lt.plugins.note.notes_screen = (function notes_screen(notes){var e__7145__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Notes"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,(function (note){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.objs.files.without_ext.call(null,lt.objs.files.basename.call(null,cljs.core.first.call(null,note))),": ",lt.plugins.note.note_button.call(null,note)], null);
}),notes)], null)], null));var seq__8921_8960 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8922_8961 = null;var count__8923_8962 = 0;var i__8924_8963 = 0;while(true){
if((i__8924_8963 < count__8923_8962))
{var vec__8925_8964 = cljs.core._nth.call(null,chunk__8922_8961,i__8924_8963);var ev__7146__auto___8965 = cljs.core.nth.call(null,vec__8925_8964,0,null);var func__7147__auto___8966 = cljs.core.nth.call(null,vec__8925_8964,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___8965,func__7147__auto___8966);
{
var G__8967 = seq__8921_8960;
var G__8968 = chunk__8922_8961;
var G__8969 = count__8923_8962;
var G__8970 = (i__8924_8963 + 1);
seq__8921_8960 = G__8967;
chunk__8922_8961 = G__8968;
count__8923_8962 = G__8969;
i__8924_8963 = G__8970;
continue;
}
} else
{var temp__4092__auto___8971 = cljs.core.seq.call(null,seq__8921_8960);if(temp__4092__auto___8971)
{var seq__8921_8972__$1 = temp__4092__auto___8971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8921_8972__$1))
{var c__6528__auto___8973 = cljs.core.chunk_first.call(null,seq__8921_8972__$1);{
var G__8974 = cljs.core.chunk_rest.call(null,seq__8921_8972__$1);
var G__8975 = c__6528__auto___8973;
var G__8976 = cljs.core.count.call(null,c__6528__auto___8973);
var G__8977 = 0;
seq__8921_8960 = G__8974;
chunk__8922_8961 = G__8975;
count__8923_8962 = G__8976;
i__8924_8963 = G__8977;
continue;
}
} else
{var vec__8926_8978 = cljs.core.first.call(null,seq__8921_8972__$1);var ev__7146__auto___8979 = cljs.core.nth.call(null,vec__8926_8978,0,null);var func__7147__auto___8980 = cljs.core.nth.call(null,vec__8926_8978,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___8979,func__7147__auto___8980);
{
var G__8981 = cljs.core.next.call(null,seq__8921_8972__$1);
var G__8982 = null;
var G__8983 = 0;
var G__8984 = 0;
seq__8921_8960 = G__8981;
chunk__8922_8961 = G__8982;
count__8923_8962 = G__8983;
i__8924_8963 = G__8984;
continue;
}
}
} else
{}
}
break;
}
return e__7145__auto__;
});

lt.plugins.note.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8985 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8985))
{var ts_8986 = temp__4092__auto___8985;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8986))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8986);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.note","on-close-destroy","lt.plugins.note/on-close-destroy",4533274264),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.note.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.note","note-list","lt.plugins.note/note-list",651909814),new cljs.core.Keyword(null,"name","name",1017277949),"Notes",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.note","on-close-destroy","lt.plugins.note/on-close-destroy",4533274264)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.note.notes_screen.call(null,lt.plugins.note.get_note_list.call(null));
}));

lt.plugins.note.open_note_list = (function open_note_list(){var x = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.note","note-list","lt.plugins.note/note-list",651909814));lt.objs.tabs.add_BANG_.call(null,x);
return lt.objs.tabs.active_BANG_.call(null,x);
});

lt.plugins.note.clean_up = (function clean_up(){var now = lt.plugins.note.moment.call(null);var default_size = cljs.core.count.call(null,now.format(lt.plugins.note.DEFAULT_CONTENT));var seq__8931 = cljs.core.seq.call(null,lt.objs.files.filter_walk.call(null,lt.objs.files.file_QMARK_,lt.plugins.note._STAR_note_dir_STAR_));var chunk__8932 = null;var count__8933 = 0;var i__8934 = 0;while(true){
if((i__8934 < count__8933))
{var file = cljs.core._nth.call(null,chunk__8932,i__8934);if(cljs.core._EQ_.call(null,default_size,cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))
{lt.objs.files.delete_BANG_.call(null,file);
} else
{}
{
var G__8987 = seq__8931;
var G__8988 = chunk__8932;
var G__8989 = count__8933;
var G__8990 = (i__8934 + 1);
seq__8931 = G__8987;
chunk__8932 = G__8988;
count__8933 = G__8989;
i__8934 = G__8990;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8931);if(temp__4092__auto__)
{var seq__8931__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8931__$1))
{var c__6528__auto__ = cljs.core.chunk_first.call(null,seq__8931__$1);{
var G__8991 = cljs.core.chunk_rest.call(null,seq__8931__$1);
var G__8992 = c__6528__auto__;
var G__8993 = cljs.core.count.call(null,c__6528__auto__);
var G__8994 = 0;
seq__8931 = G__8991;
chunk__8932 = G__8992;
count__8933 = G__8993;
i__8934 = G__8994;
continue;
}
} else
{var file = cljs.core.first.call(null,seq__8931__$1);if(cljs.core._EQ_.call(null,default_size,cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))
{lt.objs.files.delete_BANG_.call(null,file);
} else
{}
{
var G__8995 = cljs.core.next.call(null,seq__8931__$1);
var G__8996 = null;
var G__8997 = 0;
var G__8998 = 0;
seq__8931 = G__8995;
chunk__8932 = G__8996;
count__8933 = G__8997;
i__8934 = G__8998;
continue;
}
}
} else
{return null;
}
}
break;
}
});

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"note-new","note-new",2593880247),new cljs.core.Keyword(null,"desc","desc",1016984067),"Note: new",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.note.note_new], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"note-list","note-list",2748464395),new cljs.core.Keyword(null,"desc","desc",1016984067),"Note: list",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.note.open_note_list], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"note-clean-up","note-clean-up",645728140),new cljs.core.Keyword(null,"desc","desc",1016984067),"Note: cleanup",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.note.clean_up], null));

}

//# sourceMappingURL=