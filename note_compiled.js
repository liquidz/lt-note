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

lt.plugins.note.APP_NAME = "Note";

lt.plugins.note.DEFAULT_CONTENT = "[# \n\n]YYYY-MM-DD HH:mm:ss[\n\n]";

lt.plugins.note.TITLE_REGEXP = /#\s?(.+)\s*/;

lt.plugins.note.note_dir = cljs.core.atom.call(null,lt.objs.files.join.call(null,lt.objs.files.home.call(null,".notes")));

lt.plugins.note.note_filename_format = cljs.core.atom.call(null,"YYYY/MM/YYYY-MM-DD-HHmmss[.md]");

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
lt.plugins.note.create_new_note_file = (function create_new_note_file(filename,content,callback){return lt.plugins.note.mkdirp.call(null,lt.objs.files.parent.call(null,filename),(function (err){return lt.objs.files.save.call(null,filename,content,(function() { 
var G__7377__delegate = function (p__7343){var vec__7344 = p__7343;var e = cljs.core.nth.call(null,vec__7344,0,null);return callback.call(null);
};
var G__7377 = function (var_args){
var p__7343 = null;if (arguments.length > 0) {
  p__7343 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7377__delegate.call(this,p__7343);};
G__7377.cljs$lang$maxFixedArity = 0;
G__7377.cljs$lang$applyTo = (function (arglist__7378){
var p__7343 = cljs.core.seq(arglist__7378);
return G__7377__delegate(p__7343);
});
G__7377.cljs$core$IFn$_invoke$arity$variadic = G__7377__delegate;
return G__7377;
})()
);
}));
});

lt.plugins.note.note_new = (function note_new(){var now = lt.plugins.note.moment.call(null);var filename = now.format(cljs.core.deref.call(null,lt.plugins.note.note_filename_format));var filename__$1 = lt.objs.files.join.call(null,cljs.core.deref.call(null,lt.plugins.note.note_dir),filename);var content = lt.plugins.note.DEFAULT_CONTENT;var content__$1 = now.format(content);return lt.plugins.note.create_new_note_file.call(null,filename__$1,content__$1,(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),filename__$1);
}));
});

lt.plugins.note.get_note_list = (function get_note_list(){var ls = lt.objs.files.filter_walk.call(null,lt.objs.files.file_QMARK_,cljs.core.deref.call(null,lt.plugins.note.note_dir));return cljs.core.map.call(null,(function (file){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file,cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,lt.plugins.note.TITLE_REGEXP,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))], null);
}),ls);
});

lt.plugins.note.note_button = (function note_button(note){var e__7145__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),cljs.core.second.call(null,note)], null));var seq__7351_7379 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),cljs.core.first.call(null,note));
})], null)));var chunk__7352_7380 = null;var count__7353_7381 = 0;var i__7354_7382 = 0;while(true){
if((i__7354_7382 < count__7353_7381))
{var vec__7355_7383 = cljs.core._nth.call(null,chunk__7352_7380,i__7354_7382);var ev__7146__auto___7384 = cljs.core.nth.call(null,vec__7355_7383,0,null);var func__7147__auto___7385 = cljs.core.nth.call(null,vec__7355_7383,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7384,func__7147__auto___7385);
{
var G__7386 = seq__7351_7379;
var G__7387 = chunk__7352_7380;
var G__7388 = count__7353_7381;
var G__7389 = (i__7354_7382 + 1);
seq__7351_7379 = G__7386;
chunk__7352_7380 = G__7387;
count__7353_7381 = G__7388;
i__7354_7382 = G__7389;
continue;
}
} else
{var temp__4092__auto___7390 = cljs.core.seq.call(null,seq__7351_7379);if(temp__4092__auto___7390)
{var seq__7351_7391__$1 = temp__4092__auto___7390;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7351_7391__$1))
{var c__6528__auto___7392 = cljs.core.chunk_first.call(null,seq__7351_7391__$1);{
var G__7393 = cljs.core.chunk_rest.call(null,seq__7351_7391__$1);
var G__7394 = c__6528__auto___7392;
var G__7395 = cljs.core.count.call(null,c__6528__auto___7392);
var G__7396 = 0;
seq__7351_7379 = G__7393;
chunk__7352_7380 = G__7394;
count__7353_7381 = G__7395;
i__7354_7382 = G__7396;
continue;
}
} else
{var vec__7356_7397 = cljs.core.first.call(null,seq__7351_7391__$1);var ev__7146__auto___7398 = cljs.core.nth.call(null,vec__7356_7397,0,null);var func__7147__auto___7399 = cljs.core.nth.call(null,vec__7356_7397,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7398,func__7147__auto___7399);
{
var G__7400 = cljs.core.next.call(null,seq__7351_7391__$1);
var G__7401 = null;
var G__7402 = 0;
var G__7403 = 0;
seq__7351_7379 = G__7400;
chunk__7352_7380 = G__7401;
count__7353_7381 = G__7402;
i__7354_7382 = G__7403;
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

lt.plugins.note.notes_screen = (function notes_screen(notes){var e__7145__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ltnote","div#ltnote",1431776542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Notes"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,(function (note){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date","span.date",4619576132),lt.objs.files.without_ext.call(null,lt.objs.files.basename.call(null,cljs.core.first.call(null,note)))], null),": ",lt.plugins.note.note_button.call(null,note)], null);
}),notes)], null)], null));var seq__7363_7404 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7364_7405 = null;var count__7365_7406 = 0;var i__7366_7407 = 0;while(true){
if((i__7366_7407 < count__7365_7406))
{var vec__7367_7408 = cljs.core._nth.call(null,chunk__7364_7405,i__7366_7407);var ev__7146__auto___7409 = cljs.core.nth.call(null,vec__7367_7408,0,null);var func__7147__auto___7410 = cljs.core.nth.call(null,vec__7367_7408,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7409,func__7147__auto___7410);
{
var G__7411 = seq__7363_7404;
var G__7412 = chunk__7364_7405;
var G__7413 = count__7365_7406;
var G__7414 = (i__7366_7407 + 1);
seq__7363_7404 = G__7411;
chunk__7364_7405 = G__7412;
count__7365_7406 = G__7413;
i__7366_7407 = G__7414;
continue;
}
} else
{var temp__4092__auto___7415 = cljs.core.seq.call(null,seq__7363_7404);if(temp__4092__auto___7415)
{var seq__7363_7416__$1 = temp__4092__auto___7415;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7363_7416__$1))
{var c__6528__auto___7417 = cljs.core.chunk_first.call(null,seq__7363_7416__$1);{
var G__7418 = cljs.core.chunk_rest.call(null,seq__7363_7416__$1);
var G__7419 = c__6528__auto___7417;
var G__7420 = cljs.core.count.call(null,c__6528__auto___7417);
var G__7421 = 0;
seq__7363_7404 = G__7418;
chunk__7364_7405 = G__7419;
count__7365_7406 = G__7420;
i__7366_7407 = G__7421;
continue;
}
} else
{var vec__7368_7422 = cljs.core.first.call(null,seq__7363_7416__$1);var ev__7146__auto___7423 = cljs.core.nth.call(null,vec__7368_7422,0,null);var func__7147__auto___7424 = cljs.core.nth.call(null,vec__7368_7422,1,null);lt.util.dom.on.call(null,e__7145__auto__,ev__7146__auto___7423,func__7147__auto___7424);
{
var G__7425 = cljs.core.next.call(null,seq__7363_7416__$1);
var G__7426 = null;
var G__7427 = 0;
var G__7428 = 0;
seq__7363_7404 = G__7425;
chunk__7364_7405 = G__7426;
count__7365_7406 = G__7427;
i__7366_7407 = G__7428;
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

lt.plugins.note.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___7429 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___7429))
{var ts_7430 = temp__4092__auto___7429;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_7430))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_7430);
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

lt.plugins.note.clean_up = (function clean_up(){var now = lt.plugins.note.moment.call(null);var default_size = cljs.core.count.call(null,now.format(lt.plugins.note.DEFAULT_CONTENT));var seq__7373 = cljs.core.seq.call(null,lt.objs.files.filter_walk.call(null,lt.objs.files.file_QMARK_,cljs.core.deref.call(null,lt.plugins.note.note_dir)));var chunk__7374 = null;var count__7375 = 0;var i__7376 = 0;while(true){
if((i__7376 < count__7375))
{var file = cljs.core._nth.call(null,chunk__7374,i__7376);if(cljs.core._EQ_.call(null,default_size,cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))
{lt.objs.files.delete_BANG_.call(null,file);
} else
{}
{
var G__7431 = seq__7373;
var G__7432 = chunk__7374;
var G__7433 = count__7375;
var G__7434 = (i__7376 + 1);
seq__7373 = G__7431;
chunk__7374 = G__7432;
count__7375 = G__7433;
i__7376 = G__7434;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7373);if(temp__4092__auto__)
{var seq__7373__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7373__$1))
{var c__6528__auto__ = cljs.core.chunk_first.call(null,seq__7373__$1);{
var G__7435 = cljs.core.chunk_rest.call(null,seq__7373__$1);
var G__7436 = c__6528__auto__;
var G__7437 = cljs.core.count.call(null,c__6528__auto__);
var G__7438 = 0;
seq__7373 = G__7435;
chunk__7374 = G__7436;
count__7375 = G__7437;
i__7376 = G__7438;
continue;
}
} else
{var file = cljs.core.first.call(null,seq__7373__$1);if(cljs.core._EQ_.call(null,default_size,cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))
{lt.objs.files.delete_BANG_.call(null,file);
} else
{}
{
var G__7439 = cljs.core.next.call(null,seq__7373__$1);
var G__7440 = null;
var G__7441 = 0;
var G__7442 = 0;
seq__7373 = G__7439;
chunk__7374 = G__7440;
count__7375 = G__7441;
i__7376 = G__7442;
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

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"note-new","note-new",2593880247),new cljs.core.Keyword(null,"desc","desc",1016984067),"Note: New",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.note.note_new], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"note-list","note-list",2748464395),new cljs.core.Keyword(null,"desc","desc",1016984067),"Note: List",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.note.open_note_list], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"note-clean-up","note-clean-up",645728140),new cljs.core.Keyword(null,"desc","desc",1016984067),"Note: Cleanup",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.note.clean_up], null));

lt.plugins.note.__BEH__set_note_dir = (function __BEH__set_note_dir(this$,dir){if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,dir)))
{return cljs.core.reset_BANG_.call(null,lt.plugins.note.note_dir,dir);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.note","set-note-dir","lt.plugins.note/set-note-dir",1002112530),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.note.__BEH__set_note_dir,new cljs.core.Keyword(null,"desc","desc",1016984067),"Note: Set note directory",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Directory",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"string","string",4416885635)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));

lt.plugins.note.__BEH__set_note_filename_format = (function __BEH__set_note_filename_format(this$,s){return cljs.core.reset_BANG_.call(null,lt.plugins.note.note_filename_format,s);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.note","set-note-filename-format","lt.plugins.note/set-note-filename-format",1730282498),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.note.__BEH__set_note_filename_format,new cljs.core.Keyword(null,"desc","desc",1016984067),"Note: Set note filename format",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Format (YYYY/MM/YYYY-MM-DD-HHmmss[.md])",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"string","string",4416885635)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));

}

//# sourceMappingURL=