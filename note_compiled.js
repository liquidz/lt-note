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

lt.plugins.note.note_button = (function note_button(note){var e__7145__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),cljs.core.second.call(null,note)], null));var seq__11421_11447 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),cljs.core.first.call(null,note));
})], null)));var chunk__11422_11448 = null;var count__11423_11449 = 0;var i__11424_11450 = 0;while(true){
if((i__11424_11450 < count__11423_11449))
{var vec__11425_11451 = cljs.core._nth.call(null,chunk__11422_11448,i__11424_11450);var ev__7146__auto___11452 = cljs.core.nth.call(null,vec__11425_11451,0,null);var func__7147__auto___11453 = cljs.core.nth.call(null,vec__11425_11451,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___11452,func__7147__auto___11453);
{
var G__11454 = seq__11421_11447;
var G__11455 = chunk__11422_11448;
var G__11456 = count__11423_11449;
var G__11457 = (i__11424_11450 + 1);
seq__11421_11447 = G__11454;
chunk__11422_11448 = G__11455;
count__11423_11449 = G__11456;
i__11424_11450 = G__11457;
continue;
}
} else
{var temp__4092__auto___11458 = cljs.core.seq.call(null,seq__11421_11447);if(temp__4092__auto___11458)
{var seq__11421_11459__$1 = temp__4092__auto___11458;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11421_11459__$1))
{var c__6528__auto___11460 = cljs.core.chunk_first.call(null,seq__11421_11459__$1);{
var G__11461 = cljs.core.chunk_rest.call(null,seq__11421_11459__$1);
var G__11462 = c__6528__auto___11460;
var G__11463 = cljs.core.count.call(null,c__6528__auto___11460);
var G__11464 = 0;
seq__11421_11447 = G__11461;
chunk__11422_11448 = G__11462;
count__11423_11449 = G__11463;
i__11424_11450 = G__11464;
continue;
}
} else
{var vec__11426_11465 = cljs.core.first.call(null,seq__11421_11459__$1);var ev__7146__auto___11466 = cljs.core.nth.call(null,vec__11426_11465,0,null);var func__7147__auto___11467 = cljs.core.nth.call(null,vec__11426_11465,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___11466,func__7147__auto___11467);
{
var G__11468 = cljs.core.next.call(null,seq__11421_11459__$1);
var G__11469 = null;
var G__11470 = 0;
var G__11471 = 0;
seq__11421_11447 = G__11468;
chunk__11422_11448 = G__11469;
count__11423_11449 = G__11470;
i__11424_11450 = G__11471;
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
}),notes)], null)], null));var seq__11433_11472 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11434_11473 = null;var count__11435_11474 = 0;var i__11436_11475 = 0;while(true){
if((i__11436_11475 < count__11435_11474))
{var vec__11437_11476 = cljs.core._nth.call(null,chunk__11434_11473,i__11436_11475);var ev__7146__auto___11477 = cljs.core.nth.call(null,vec__11437_11476,0,null);var func__7147__auto___11478 = cljs.core.nth.call(null,vec__11437_11476,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___11477,func__7147__auto___11478);
{
var G__11479 = seq__11433_11472;
var G__11480 = chunk__11434_11473;
var G__11481 = count__11435_11474;
var G__11482 = (i__11436_11475 + 1);
seq__11433_11472 = G__11479;
chunk__11434_11473 = G__11480;
count__11435_11474 = G__11481;
i__11436_11475 = G__11482;
continue;
}
} else
{var temp__4092__auto___11483 = cljs.core.seq.call(null,seq__11433_11472);if(temp__4092__auto___11483)
{var seq__11433_11484__$1 = temp__4092__auto___11483;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11433_11484__$1))
{var c__6528__auto___11485 = cljs.core.chunk_first.call(null,seq__11433_11484__$1);{
var G__11486 = cljs.core.chunk_rest.call(null,seq__11433_11484__$1);
var G__11487 = c__6528__auto___11485;
var G__11488 = cljs.core.count.call(null,c__6528__auto___11485);
var G__11489 = 0;
seq__11433_11472 = G__11486;
chunk__11434_11473 = G__11487;
count__11435_11474 = G__11488;
i__11436_11475 = G__11489;
continue;
}
} else
{var vec__11438_11490 = cljs.core.first.call(null,seq__11433_11484__$1);var ev__7146__auto___11491 = cljs.core.nth.call(null,vec__11438_11490,0,null);var func__7147__auto___11492 = cljs.core.nth.call(null,vec__11438_11490,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___11491,func__7147__auto___11492);
{
var G__11493 = cljs.core.next.call(null,seq__11433_11484__$1);
var G__11494 = null;
var G__11495 = 0;
var G__11496 = 0;
seq__11433_11472 = G__11493;
chunk__11434_11473 = G__11494;
count__11435_11474 = G__11495;
i__11436_11475 = G__11496;
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

lt.plugins.note.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___11497 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11497))
{var ts_11498 = temp__4092__auto___11497;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_11498))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_11498);
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

lt.plugins.note.clean_up = (function clean_up(){var now = lt.plugins.note.moment.call(null);var default_size = cljs.core.count.call(null,now.format(lt.plugins.note.DEFAULT_CONTENT));var seq__11443 = cljs.core.seq.call(null,lt.objs.files.filter_walk.call(null,lt.objs.files.file_QMARK_,lt.plugins.note._STAR_note_dir_STAR_));var chunk__11444 = null;var count__11445 = 0;var i__11446 = 0;while(true){
if((i__11446 < count__11445))
{var file = cljs.core._nth.call(null,chunk__11444,i__11446);if(cljs.core._EQ_.call(null,default_size,cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))
{lt.objs.files.delete_BANG_.call(null,file);
} else
{}
{
var G__11499 = seq__11443;
var G__11500 = chunk__11444;
var G__11501 = count__11445;
var G__11502 = (i__11446 + 1);
seq__11443 = G__11499;
chunk__11444 = G__11500;
count__11445 = G__11501;
i__11446 = G__11502;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11443);if(temp__4092__auto__)
{var seq__11443__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11443__$1))
{var c__6528__auto__ = cljs.core.chunk_first.call(null,seq__11443__$1);{
var G__11503 = cljs.core.chunk_rest.call(null,seq__11443__$1);
var G__11504 = c__6528__auto__;
var G__11505 = cljs.core.count.call(null,c__6528__auto__);
var G__11506 = 0;
seq__11443 = G__11503;
chunk__11444 = G__11504;
count__11445 = G__11505;
i__11446 = G__11506;
continue;
}
} else
{var file = cljs.core.first.call(null,seq__11443__$1);if(cljs.core._EQ_.call(null,default_size,cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))
{lt.objs.files.delete_BANG_.call(null,file);
} else
{}
{
var G__11507 = cljs.core.next.call(null,seq__11443__$1);
var G__11508 = null;
var G__11509 = 0;
var G__11510 = 0;
seq__11443 = G__11507;
chunk__11444 = G__11508;
count__11445 = G__11509;
i__11446 = G__11510;
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