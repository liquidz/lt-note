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

lt.plugins.note.note_button = (function note_button(note){var e__7145__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),cljs.core.second.call(null,note)], null));var seq__7549_7567 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),cljs.core.first.call(null,note));
})], null)));var chunk__7550_7568 = null;var count__7551_7569 = 0;var i__7552_7570 = 0;while(true){
if((i__7552_7570 < count__7551_7569))
{var vec__7553_7571 = cljs.core._nth.call(null,chunk__7550_7568,i__7552_7570);var ev__7146__auto___7572 = cljs.core.nth.call(null,vec__7553_7571,0,null);var func__7147__auto___7573 = cljs.core.nth.call(null,vec__7553_7571,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7572,func__7147__auto___7573);
{
var G__7574 = seq__7549_7567;
var G__7575 = chunk__7550_7568;
var G__7576 = count__7551_7569;
var G__7577 = (i__7552_7570 + 1);
seq__7549_7567 = G__7574;
chunk__7550_7568 = G__7575;
count__7551_7569 = G__7576;
i__7552_7570 = G__7577;
continue;
}
} else
{var temp__4092__auto___7578 = cljs.core.seq.call(null,seq__7549_7567);if(temp__4092__auto___7578)
{var seq__7549_7579__$1 = temp__4092__auto___7578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7549_7579__$1))
{var c__6528__auto___7580 = cljs.core.chunk_first.call(null,seq__7549_7579__$1);{
var G__7581 = cljs.core.chunk_rest.call(null,seq__7549_7579__$1);
var G__7582 = c__6528__auto___7580;
var G__7583 = cljs.core.count.call(null,c__6528__auto___7580);
var G__7584 = 0;
seq__7549_7567 = G__7581;
chunk__7550_7568 = G__7582;
count__7551_7569 = G__7583;
i__7552_7570 = G__7584;
continue;
}
} else
{var vec__7554_7585 = cljs.core.first.call(null,seq__7549_7579__$1);var ev__7146__auto___7586 = cljs.core.nth.call(null,vec__7554_7585,0,null);var func__7147__auto___7587 = cljs.core.nth.call(null,vec__7554_7585,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7586,func__7147__auto___7587);
{
var G__7588 = cljs.core.next.call(null,seq__7549_7579__$1);
var G__7589 = null;
var G__7590 = 0;
var G__7591 = 0;
seq__7549_7567 = G__7588;
chunk__7550_7568 = G__7589;
count__7551_7569 = G__7590;
i__7552_7570 = G__7591;
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
}),notes)], null)], null));var seq__7561_7592 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7562_7593 = null;var count__7563_7594 = 0;var i__7564_7595 = 0;while(true){
if((i__7564_7595 < count__7563_7594))
{var vec__7565_7596 = cljs.core._nth.call(null,chunk__7562_7593,i__7564_7595);var ev__7146__auto___7597 = cljs.core.nth.call(null,vec__7565_7596,0,null);var func__7147__auto___7598 = cljs.core.nth.call(null,vec__7565_7596,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7597,func__7147__auto___7598);
{
var G__7599 = seq__7561_7592;
var G__7600 = chunk__7562_7593;
var G__7601 = count__7563_7594;
var G__7602 = (i__7564_7595 + 1);
seq__7561_7592 = G__7599;
chunk__7562_7593 = G__7600;
count__7563_7594 = G__7601;
i__7564_7595 = G__7602;
continue;
}
} else
{var temp__4092__auto___7603 = cljs.core.seq.call(null,seq__7561_7592);if(temp__4092__auto___7603)
{var seq__7561_7604__$1 = temp__4092__auto___7603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7561_7604__$1))
{var c__6528__auto___7605 = cljs.core.chunk_first.call(null,seq__7561_7604__$1);{
var G__7606 = cljs.core.chunk_rest.call(null,seq__7561_7604__$1);
var G__7607 = c__6528__auto___7605;
var G__7608 = cljs.core.count.call(null,c__6528__auto___7605);
var G__7609 = 0;
seq__7561_7592 = G__7606;
chunk__7562_7593 = G__7607;
count__7563_7594 = G__7608;
i__7564_7595 = G__7609;
continue;
}
} else
{var vec__7566_7610 = cljs.core.first.call(null,seq__7561_7604__$1);var ev__7146__auto___7611 = cljs.core.nth.call(null,vec__7566_7610,0,null);var func__7147__auto___7612 = cljs.core.nth.call(null,vec__7566_7610,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7611,func__7147__auto___7612);
{
var G__7613 = cljs.core.next.call(null,seq__7561_7604__$1);
var G__7614 = null;
var G__7615 = 0;
var G__7616 = 0;
seq__7561_7592 = G__7613;
chunk__7562_7593 = G__7614;
count__7563_7594 = G__7615;
i__7564_7595 = G__7616;
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

lt.plugins.note.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___7617 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___7617))
{var ts_7618 = temp__4092__auto___7617;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_7618))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_7618);
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