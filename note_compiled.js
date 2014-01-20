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

lt.plugins.note.note_button = (function note_button(note){var e__7145__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),cljs.core.second.call(null,note)], null));var seq__7936_7954 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),cljs.core.first.call(null,note));
})], null)));var chunk__7937_7955 = null;var count__7938_7956 = 0;var i__7939_7957 = 0;while(true){
if((i__7939_7957 < count__7938_7956))
{var vec__7940_7958 = cljs.core._nth.call(null,chunk__7937_7955,i__7939_7957);var ev__7146__auto___7959 = cljs.core.nth.call(null,vec__7940_7958,0,null);var func__7147__auto___7960 = cljs.core.nth.call(null,vec__7940_7958,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7959,func__7147__auto___7960);
{
var G__7961 = seq__7936_7954;
var G__7962 = chunk__7937_7955;
var G__7963 = count__7938_7956;
var G__7964 = (i__7939_7957 + 1);
seq__7936_7954 = G__7961;
chunk__7937_7955 = G__7962;
count__7938_7956 = G__7963;
i__7939_7957 = G__7964;
continue;
}
} else
{var temp__4092__auto___7965 = cljs.core.seq.call(null,seq__7936_7954);if(temp__4092__auto___7965)
{var seq__7936_7966__$1 = temp__4092__auto___7965;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7936_7966__$1))
{var c__6528__auto___7967 = cljs.core.chunk_first.call(null,seq__7936_7966__$1);{
var G__7968 = cljs.core.chunk_rest.call(null,seq__7936_7966__$1);
var G__7969 = c__6528__auto___7967;
var G__7970 = cljs.core.count.call(null,c__6528__auto___7967);
var G__7971 = 0;
seq__7936_7954 = G__7968;
chunk__7937_7955 = G__7969;
count__7938_7956 = G__7970;
i__7939_7957 = G__7971;
continue;
}
} else
{var vec__7941_7972 = cljs.core.first.call(null,seq__7936_7966__$1);var ev__7146__auto___7973 = cljs.core.nth.call(null,vec__7941_7972,0,null);var func__7147__auto___7974 = cljs.core.nth.call(null,vec__7941_7972,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7973,func__7147__auto___7974);
{
var G__7975 = cljs.core.next.call(null,seq__7936_7966__$1);
var G__7976 = null;
var G__7977 = 0;
var G__7978 = 0;
seq__7936_7954 = G__7975;
chunk__7937_7955 = G__7976;
count__7938_7956 = G__7977;
i__7939_7957 = G__7978;
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

lt.plugins.note.notes_screen = (function notes_screen(notes){var e__7145__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Notes"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,(function (note){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.plugins.note.note_button.call(null,note)], null);
}),notes)], null)], null));var seq__7948_7979 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7949_7980 = null;var count__7950_7981 = 0;var i__7951_7982 = 0;while(true){
if((i__7951_7982 < count__7950_7981))
{var vec__7952_7983 = cljs.core._nth.call(null,chunk__7949_7980,i__7951_7982);var ev__7146__auto___7984 = cljs.core.nth.call(null,vec__7952_7983,0,null);var func__7147__auto___7985 = cljs.core.nth.call(null,vec__7952_7983,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7984,func__7147__auto___7985);
{
var G__7986 = seq__7948_7979;
var G__7987 = chunk__7949_7980;
var G__7988 = count__7950_7981;
var G__7989 = (i__7951_7982 + 1);
seq__7948_7979 = G__7986;
chunk__7949_7980 = G__7987;
count__7950_7981 = G__7988;
i__7951_7982 = G__7989;
continue;
}
} else
{var temp__4092__auto___7990 = cljs.core.seq.call(null,seq__7948_7979);if(temp__4092__auto___7990)
{var seq__7948_7991__$1 = temp__4092__auto___7990;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7948_7991__$1))
{var c__6528__auto___7992 = cljs.core.chunk_first.call(null,seq__7948_7991__$1);{
var G__7993 = cljs.core.chunk_rest.call(null,seq__7948_7991__$1);
var G__7994 = c__6528__auto___7992;
var G__7995 = cljs.core.count.call(null,c__6528__auto___7992);
var G__7996 = 0;
seq__7948_7979 = G__7993;
chunk__7949_7980 = G__7994;
count__7950_7981 = G__7995;
i__7951_7982 = G__7996;
continue;
}
} else
{var vec__7953_7997 = cljs.core.first.call(null,seq__7948_7991__$1);var ev__7146__auto___7998 = cljs.core.nth.call(null,vec__7953_7997,0,null);var func__7147__auto___7999 = cljs.core.nth.call(null,vec__7953_7997,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7998,func__7147__auto___7999);
{
var G__8000 = cljs.core.next.call(null,seq__7948_7991__$1);
var G__8001 = null;
var G__8002 = 0;
var G__8003 = 0;
seq__7948_7979 = G__8000;
chunk__7949_7980 = G__8001;
count__7950_7981 = G__8002;
i__7951_7982 = G__8003;
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

lt.plugins.note.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8004 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8004))
{var ts_8005 = temp__4092__auto___8004;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8005))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8005);
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

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"note-new","note-new",2593880247),new cljs.core.Keyword(null,"desc","desc",1016984067),"Note: new",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.note.note_new], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"note-list","note-list",2748464395),new cljs.core.Keyword(null,"desc","desc",1016984067),"Note: list",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.note.open_note_list], null));

}

//# sourceMappingURL=