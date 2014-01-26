if(!lt.util.load.provided_QMARK_('lt.plugins.note')) {
goog.provide('lt.plugins.note');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('crate.core');
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('clojure.string');
goog.require('lt.objs.sidebar.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('crate.core');
goog.require('lt.objs.command');
lt.plugins.note.APP_NAME = "Note";
lt.plugins.note.DEFAULT_CONTENT = "[# \n\n]YYYY-MM-DD HH:mm:ss[\n\n]";
lt.plugins.note.TITLE_REGEXP = /#\s?(.+)\s*/;
lt.plugins.note.note_dir = cljs.core.atom.call(null,"/Users/uochan/opt/notes");
lt.plugins.note.note_filename_format = cljs.core.atom.call(null,"YYYY/MM/YYYY-MM-DD-HHmmss[.md]");
lt.plugins.note.close_tab_when_open_file_from_list = cljs.core.atom.call(null,true);
/**
* Load node.js module.
*/
lt.plugins.note.load_node_module = (function load_node_module(module_name){return require(lt.objs.plugins.local_module.call(null,lt.plugins.note.APP_NAME,module_name));
});
lt.plugins.note.moment = lt.plugins.note.load_node_module.call(null,"moment");
lt.plugins.note.mkdirp = lt.plugins.note.load_node_module.call(null,"mkdirp");
/**
* Save new file.
*/
lt.plugins.note.save_new_file = (function save_new_file(filename,content,callback){return lt.plugins.note.mkdirp.call(null,lt.objs.files.parent.call(null,filename),(function (err){return lt.objs.files.save.call(null,filename,content,(function() { 
var G__15374__delegate = function (p__15310){var vec__15311 = p__15310;var err__$1 = cljs.core.nth.call(null,vec__15311,0,null);return callback.call(null,err__$1);
};
var G__15374 = function (var_args){
var p__15310 = null;if (arguments.length > 0) {
  p__15310 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15374__delegate.call(this,p__15310);};
G__15374.cljs$lang$maxFixedArity = 0;
G__15374.cljs$lang$applyTo = (function (arglist__15375){
var p__15310 = cljs.core.seq(arglist__15375);
return G__15374__delegate(p__15310);
});
G__15374.cljs$core$IFn$_invoke$arity$variadic = G__15374__delegate;
return G__15374;
})()
);
}));
});
lt.plugins.note.create_new_note = (function create_new_note(){var now = lt.plugins.note.moment.call(null);var filename = now.format(cljs.core.deref.call(null,lt.plugins.note.note_filename_format));var filename__$1 = lt.objs.files.join.call(null,cljs.core.deref.call(null,lt.plugins.note.note_dir),filename);var content = lt.plugins.note.DEFAULT_CONTENT;var content__$1 = now.format(content);return lt.plugins.note.save_new_file.call(null,filename__$1,content__$1,(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),filename__$1);
}));
});
lt.plugins.note.note_button_ui = (function note_button_ui(note){var e__8106__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(note)], null));var seq__15318_15376 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){if(cljs.core.truth_(cljs.core.deref.call(null,lt.plugins.note.close_tab_when_open_file_from_list)))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.close","tabs.close",4150844154));
} else
{}
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),new cljs.core.Keyword(null,"file-path","file-path",3946287432).cljs$core$IFn$_invoke$arity$1(note));
})], null)));var chunk__15319_15377 = null;var count__15320_15378 = 0;var i__15321_15379 = 0;while(true){
if((i__15321_15379 < count__15320_15378))
{var vec__15322_15380 = cljs.core._nth.call(null,chunk__15319_15377,i__15321_15379);var ev__8107__auto___15381 = cljs.core.nth.call(null,vec__15322_15380,0,null);var func__8108__auto___15382 = cljs.core.nth.call(null,vec__15322_15380,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___15381,func__8108__auto___15382);
{
var G__15383 = seq__15318_15376;
var G__15384 = chunk__15319_15377;
var G__15385 = count__15320_15378;
var G__15386 = (i__15321_15379 + 1);
seq__15318_15376 = G__15383;
chunk__15319_15377 = G__15384;
count__15320_15378 = G__15385;
i__15321_15379 = G__15386;
continue;
}
} else
{var temp__4092__auto___15387 = cljs.core.seq.call(null,seq__15318_15376);if(temp__4092__auto___15387)
{var seq__15318_15388__$1 = temp__4092__auto___15387;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15318_15388__$1))
{var c__7486__auto___15389 = cljs.core.chunk_first.call(null,seq__15318_15388__$1);{
var G__15390 = cljs.core.chunk_rest.call(null,seq__15318_15388__$1);
var G__15391 = c__7486__auto___15389;
var G__15392 = cljs.core.count.call(null,c__7486__auto___15389);
var G__15393 = 0;
seq__15318_15376 = G__15390;
chunk__15319_15377 = G__15391;
count__15320_15378 = G__15392;
i__15321_15379 = G__15393;
continue;
}
} else
{var vec__15323_15394 = cljs.core.first.call(null,seq__15318_15388__$1);var ev__8107__auto___15395 = cljs.core.nth.call(null,vec__15323_15394,0,null);var func__8108__auto___15396 = cljs.core.nth.call(null,vec__15323_15394,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___15395,func__8108__auto___15396);
{
var G__15397 = cljs.core.next.call(null,seq__15318_15388__$1);
var G__15398 = null;
var G__15399 = 0;
var G__15400 = 0;
seq__15318_15376 = G__15397;
chunk__15319_15377 = G__15398;
count__15320_15378 = G__15399;
i__15321_15379 = G__15400;
continue;
}
}
} else
{}
}
break;
}
return e__8106__auto__;
});
lt.plugins.note.get_note_list = (function get_note_list(){var ls = lt.objs.files.filter_walk.call(null,lt.objs.files.file_QMARK_,cljs.core.deref.call(null,lt.plugins.note.note_dir));return cljs.core.map.call(null,(function (file_path){var title = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,lt.plugins.note.TITLE_REGEXP,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file_path)))));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),title,new cljs.core.Keyword(null,"file-path","file-path",3946287432),file_path], null);
}),ls);
});
lt.plugins.note.search_note = (function search_note(keyword){return cljs.core.filter.call(null,(function (note){var content = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,new cljs.core.Keyword(null,"file-path","file-path",3946287432).cljs$core$IFn$_invoke$arity$1(note)));return cljs.core.not_EQ_.call(null,-1,content.indexOf(keyword));
}),lt.plugins.note.get_note_list.call(null));
});
lt.plugins.note.note_li_item_ui = (function note_li_item_ui(note){var e__8106__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date","span.date",4619576132),lt.objs.files.without_ext.call(null,lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"file-path","file-path",3946287432).cljs$core$IFn$_invoke$arity$1(note)))], null),": ",lt.plugins.note.note_button_ui.call(null,note)], null));var seq__15330_15401 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__15331_15402 = null;var count__15332_15403 = 0;var i__15333_15404 = 0;while(true){
if((i__15333_15404 < count__15332_15403))
{var vec__15334_15405 = cljs.core._nth.call(null,chunk__15331_15402,i__15333_15404);var ev__8107__auto___15406 = cljs.core.nth.call(null,vec__15334_15405,0,null);var func__8108__auto___15407 = cljs.core.nth.call(null,vec__15334_15405,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___15406,func__8108__auto___15407);
{
var G__15408 = seq__15330_15401;
var G__15409 = chunk__15331_15402;
var G__15410 = count__15332_15403;
var G__15411 = (i__15333_15404 + 1);
seq__15330_15401 = G__15408;
chunk__15331_15402 = G__15409;
count__15332_15403 = G__15410;
i__15333_15404 = G__15411;
continue;
}
} else
{var temp__4092__auto___15412 = cljs.core.seq.call(null,seq__15330_15401);if(temp__4092__auto___15412)
{var seq__15330_15413__$1 = temp__4092__auto___15412;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15330_15413__$1))
{var c__7486__auto___15414 = cljs.core.chunk_first.call(null,seq__15330_15413__$1);{
var G__15415 = cljs.core.chunk_rest.call(null,seq__15330_15413__$1);
var G__15416 = c__7486__auto___15414;
var G__15417 = cljs.core.count.call(null,c__7486__auto___15414);
var G__15418 = 0;
seq__15330_15401 = G__15415;
chunk__15331_15402 = G__15416;
count__15332_15403 = G__15417;
i__15333_15404 = G__15418;
continue;
}
} else
{var vec__15335_15419 = cljs.core.first.call(null,seq__15330_15413__$1);var ev__8107__auto___15420 = cljs.core.nth.call(null,vec__15335_15419,0,null);var func__8108__auto___15421 = cljs.core.nth.call(null,vec__15335_15419,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___15420,func__8108__auto___15421);
{
var G__15422 = cljs.core.next.call(null,seq__15330_15413__$1);
var G__15423 = null;
var G__15424 = 0;
var G__15425 = 0;
seq__15330_15401 = G__15422;
chunk__15331_15402 = G__15423;
count__15332_15403 = G__15424;
i__15333_15404 = G__15425;
continue;
}
}
} else
{}
}
break;
}
return e__8106__auto__;
});
lt.plugins.note.pressed_enter_QMARK_ = (function pressed_enter_QMARK_(keyevent){return cljs.core._EQ_.call(null,13,keyevent.keyCode);
});
/**
* @param {...*} var_args
*/
lt.plugins.note.search_input_ui = (function() { 
var search_input_ui__delegate = function (p__15336){var vec__15344 = p__15336;var f = cljs.core.nth.call(null,vec__15344,0,null);var e__8106__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"class","class",1108647146),"search-keyword",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Search keyword"], null)], null));var seq__15345_15426 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (e){if(cljs.core.truth_((function (){var and__6732__auto__ = f;if(cljs.core.truth_(and__6732__auto__))
{return lt.plugins.note.pressed_enter_QMARK_.call(null,e);
} else
{return and__6732__auto__;
}
})()))
{return f.call(null,lt.util.dom.val.call(null,lt.util.dom.$.call(null,".search-keyword")));
} else
{return null;
}
})], null)));var chunk__15346_15427 = null;var count__15347_15428 = 0;var i__15348_15429 = 0;while(true){
if((i__15348_15429 < count__15347_15428))
{var vec__15349_15430 = cljs.core._nth.call(null,chunk__15346_15427,i__15348_15429);var ev__8107__auto___15431 = cljs.core.nth.call(null,vec__15349_15430,0,null);var func__8108__auto___15432 = cljs.core.nth.call(null,vec__15349_15430,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___15431,func__8108__auto___15432);
{
var G__15433 = seq__15345_15426;
var G__15434 = chunk__15346_15427;
var G__15435 = count__15347_15428;
var G__15436 = (i__15348_15429 + 1);
seq__15345_15426 = G__15433;
chunk__15346_15427 = G__15434;
count__15347_15428 = G__15435;
i__15348_15429 = G__15436;
continue;
}
} else
{var temp__4092__auto___15437 = cljs.core.seq.call(null,seq__15345_15426);if(temp__4092__auto___15437)
{var seq__15345_15438__$1 = temp__4092__auto___15437;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15345_15438__$1))
{var c__7486__auto___15439 = cljs.core.chunk_first.call(null,seq__15345_15438__$1);{
var G__15440 = cljs.core.chunk_rest.call(null,seq__15345_15438__$1);
var G__15441 = c__7486__auto___15439;
var G__15442 = cljs.core.count.call(null,c__7486__auto___15439);
var G__15443 = 0;
seq__15345_15426 = G__15440;
chunk__15346_15427 = G__15441;
count__15347_15428 = G__15442;
i__15348_15429 = G__15443;
continue;
}
} else
{var vec__15350_15444 = cljs.core.first.call(null,seq__15345_15438__$1);var ev__8107__auto___15445 = cljs.core.nth.call(null,vec__15350_15444,0,null);var func__8108__auto___15446 = cljs.core.nth.call(null,vec__15350_15444,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___15445,func__8108__auto___15446);
{
var G__15447 = cljs.core.next.call(null,seq__15345_15438__$1);
var G__15448 = null;
var G__15449 = 0;
var G__15450 = 0;
seq__15345_15426 = G__15447;
chunk__15346_15427 = G__15448;
count__15347_15428 = G__15449;
i__15348_15429 = G__15450;
continue;
}
}
} else
{}
}
break;
}
return e__8106__auto__;
};
var search_input_ui = function (var_args){
var p__15336 = null;if (arguments.length > 0) {
  p__15336 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return search_input_ui__delegate.call(this,p__15336);};
search_input_ui.cljs$lang$maxFixedArity = 0;
search_input_ui.cljs$lang$applyTo = (function (arglist__15451){
var p__15336 = cljs.core.seq(arglist__15451);
return search_input_ui__delegate(p__15336);
});
search_input_ui.cljs$core$IFn$_invoke$arity$variadic = search_input_ui__delegate;
return search_input_ui;
})()
;
lt.plugins.note.update_note_list = (function update_note_list(notes){var elem = lt.util.dom.$.call(null,".note-list");lt.util.dom.html.call(null,elem,"");
return lt.util.dom.append.call(null,elem,crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,lt.plugins.note.note_li_item_ui,notes)], null)));
});
lt.plugins.note.note_list_ui = (function note_list_ui(notes){var e__8106__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ltnote","div#ltnote",1431776542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Notes"], null),lt.plugins.note.search_input_ui.call(null,(function (p1__15351_SHARP_){return lt.plugins.note.update_note_list.call(null,lt.plugins.note.search_note.call(null,p1__15351_SHARP_));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"note-list"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,lt.plugins.note.note_li_item_ui,notes)], null)], null)], null));var seq__15358_15452 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__15359_15453 = null;var count__15360_15454 = 0;var i__15361_15455 = 0;while(true){
if((i__15361_15455 < count__15360_15454))
{var vec__15362_15456 = cljs.core._nth.call(null,chunk__15359_15453,i__15361_15455);var ev__8107__auto___15457 = cljs.core.nth.call(null,vec__15362_15456,0,null);var func__8108__auto___15458 = cljs.core.nth.call(null,vec__15362_15456,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___15457,func__8108__auto___15458);
{
var G__15459 = seq__15358_15452;
var G__15460 = chunk__15359_15453;
var G__15461 = count__15360_15454;
var G__15462 = (i__15361_15455 + 1);
seq__15358_15452 = G__15459;
chunk__15359_15453 = G__15460;
count__15360_15454 = G__15461;
i__15361_15455 = G__15462;
continue;
}
} else
{var temp__4092__auto___15463 = cljs.core.seq.call(null,seq__15358_15452);if(temp__4092__auto___15463)
{var seq__15358_15464__$1 = temp__4092__auto___15463;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15358_15464__$1))
{var c__7486__auto___15465 = cljs.core.chunk_first.call(null,seq__15358_15464__$1);{
var G__15466 = cljs.core.chunk_rest.call(null,seq__15358_15464__$1);
var G__15467 = c__7486__auto___15465;
var G__15468 = cljs.core.count.call(null,c__7486__auto___15465);
var G__15469 = 0;
seq__15358_15452 = G__15466;
chunk__15359_15453 = G__15467;
count__15360_15454 = G__15468;
i__15361_15455 = G__15469;
continue;
}
} else
{var vec__15363_15470 = cljs.core.first.call(null,seq__15358_15464__$1);var ev__8107__auto___15471 = cljs.core.nth.call(null,vec__15363_15470,0,null);var func__8108__auto___15472 = cljs.core.nth.call(null,vec__15363_15470,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___15471,func__8108__auto___15472);
{
var G__15473 = cljs.core.next.call(null,seq__15358_15464__$1);
var G__15474 = null;
var G__15475 = 0;
var G__15476 = 0;
seq__15358_15452 = G__15473;
chunk__15359_15453 = G__15474;
count__15360_15454 = G__15475;
i__15361_15455 = G__15476;
continue;
}
}
} else
{}
}
break;
}
return e__8106__auto__;
});
lt.plugins.note.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___15477 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___15477))
{var ts_15478 = temp__4092__auto___15477;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_15478))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_15478);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.note","on-close-destroy","lt.plugins.note/on-close-destroy",4533274264),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.note.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.note","note-list","lt.plugins.note/note-list",651909814),new cljs.core.Keyword(null,"name","name",1017277949),"Notes",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.note","on-close-destroy","lt.plugins.note/on-close-destroy",4533274264)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function() { 
var G__15479__delegate = function (this$,p__15364){var vec__15365 = p__15364;var notes = cljs.core.nth.call(null,vec__15365,0,null);return lt.plugins.note.note_list_ui.call(null,(cljs.core.truth_(notes)?notes:lt.plugins.note.get_note_list.call(null)));
};
var G__15479 = function (this$,var_args){
var p__15364 = null;if (arguments.length > 1) {
  p__15364 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__15479__delegate.call(this,this$,p__15364);};
G__15479.cljs$lang$maxFixedArity = 1;
G__15479.cljs$lang$applyTo = (function (arglist__15480){
var this$ = cljs.core.first(arglist__15480);
var p__15364 = cljs.core.rest(arglist__15480);
return G__15479__delegate(this$,p__15364);
});
G__15479.cljs$core$IFn$_invoke$arity$variadic = G__15479__delegate;
return G__15479;
})()
);
lt.plugins.note.open_note_list = (function open_note_list(){var x = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.note","note-list","lt.plugins.note/note-list",651909814));lt.objs.tabs.add_BANG_.call(null,x);
lt.objs.tabs.active_BANG_.call(null,x);
return lt.util.dom.$.call(null,".search-keyword").focus();
});
lt.plugins.note.clean_up = (function clean_up(){var now = lt.plugins.note.moment.call(null);var default_size = cljs.core.count.call(null,now.format(lt.plugins.note.DEFAULT_CONTENT));var seq__15370 = cljs.core.seq.call(null,lt.objs.files.filter_walk.call(null,lt.objs.files.file_QMARK_,cljs.core.deref.call(null,lt.plugins.note.note_dir)));var chunk__15371 = null;var count__15372 = 0;var i__15373 = 0;while(true){
if((i__15373 < count__15372))
{var file = cljs.core._nth.call(null,chunk__15371,i__15373);if(cljs.core._EQ_.call(null,default_size,cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))
{lt.objs.files.delete_BANG_.call(null,file);
} else
{}
{
var G__15481 = seq__15370;
var G__15482 = chunk__15371;
var G__15483 = count__15372;
var G__15484 = (i__15373 + 1);
seq__15370 = G__15481;
chunk__15371 = G__15482;
count__15372 = G__15483;
i__15373 = G__15484;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15370);if(temp__4092__auto__)
{var seq__15370__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15370__$1))
{var c__7486__auto__ = cljs.core.chunk_first.call(null,seq__15370__$1);{
var G__15485 = cljs.core.chunk_rest.call(null,seq__15370__$1);
var G__15486 = c__7486__auto__;
var G__15487 = cljs.core.count.call(null,c__7486__auto__);
var G__15488 = 0;
seq__15370 = G__15485;
chunk__15371 = G__15486;
count__15372 = G__15487;
i__15373 = G__15488;
continue;
}
} else
{var file = cljs.core.first.call(null,seq__15370__$1);if(cljs.core._EQ_.call(null,default_size,cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))
{lt.objs.files.delete_BANG_.call(null,file);
} else
{}
{
var G__15489 = cljs.core.next.call(null,seq__15370__$1);
var G__15490 = null;
var G__15491 = 0;
var G__15492 = 0;
seq__15370 = G__15489;
chunk__15371 = G__15490;
count__15372 = G__15491;
i__15373 = G__15492;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"new-note","new-note",2344886129),new cljs.core.Keyword(null,"desc","desc",1016984067),"Note: New",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.note.create_new_note], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"note-list","note-list",2748464395),new cljs.core.Keyword(null,"desc","desc",1016984067),"Note: List",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.note.open_note_list], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"note-clean-up","note-clean-up",645728140),new cljs.core.Keyword(null,"desc","desc",1016984067),"Note: Cleanup",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.note.clean_up], null));
lt.plugins.note.search_keyword_input = lt.objs.sidebar.command.options_input.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Search"], null));
lt.plugins.note.__BEH__exec_active_BANG_ = (function __BEH__exec_active_BANG_(this$,search_keyword){return lt.objs.sidebar.command.exec_active_BANG_.call(null,search_keyword);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.note","exec-active!","lt.plugins.note/exec-active!",2287209856),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.note.__BEH__exec_active_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.object.add_behavior_BANG_.call(null,lt.plugins.note.search_keyword_input,new cljs.core.Keyword("lt.plugins.note","exec-active!","lt.plugins.note/exec-active!",2287209856));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"note-search","note-search",1675075413),new cljs.core.Keyword(null,"desc","desc",1016984067),"Note: Search",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.note.search_keyword_input,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (search_keyword){var notes = lt.plugins.note.search_note.call(null,search_keyword);var x = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.note","note-list","lt.plugins.note/note-list",651909814),notes);lt.objs.tabs.add_BANG_.call(null,x);
lt.objs.tabs.active_BANG_.call(null,x);
var elem = lt.util.dom.$.call(null,".search-keyword");lt.util.dom.val.call(null,elem,search_keyword);
return elem.focus();
})], null));
}

//# sourceMappingURL=note_compiled.js.map