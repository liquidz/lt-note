if(!lt.util.load.provided_QMARK_('lt.plugins.note')) {
goog.provide('lt.plugins.note');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
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
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('crate.core');
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
var G__8515__delegate = function (p__8433){var vec__8434 = p__8433;var e = cljs.core.nth.call(null,vec__8434,0,null);return callback.call(null);
};
var G__8515 = function (var_args){
var p__8433 = null;if (arguments.length > 0) {
  p__8433 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8515__delegate.call(this,p__8433);};
G__8515.cljs$lang$maxFixedArity = 0;
G__8515.cljs$lang$applyTo = (function (arglist__8516){
var p__8433 = cljs.core.seq(arglist__8516);
return G__8515__delegate(p__8433);
});
G__8515.cljs$core$IFn$_invoke$arity$variadic = G__8515__delegate;
return G__8515;
})()
);
}));
});

lt.plugins.note.create_new_note = (function create_new_note(){var now = lt.plugins.note.moment.call(null);var filename = now.format(cljs.core.deref.call(null,lt.plugins.note.note_filename_format));var filename__$1 = lt.objs.files.join.call(null,cljs.core.deref.call(null,lt.plugins.note.note_dir),filename);var content = lt.plugins.note.DEFAULT_CONTENT;var content__$1 = now.format(content);return lt.plugins.note.create_new_note_file.call(null,filename__$1,content__$1,(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),filename__$1);
}));
});

lt.plugins.note.get_note_list = (function get_note_list(){var ls = lt.objs.files.filter_walk.call(null,lt.objs.files.file_QMARK_,cljs.core.deref.call(null,lt.plugins.note.note_dir));return cljs.core.map.call(null,(function (file_path){var title = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,lt.plugins.note.TITLE_REGEXP,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file_path)))));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),title,new cljs.core.Keyword(null,"file-path","file-path",3946287432),file_path], null);
}),ls);
});

lt.plugins.note.search_note = (function search_note(keyword){return cljs.core.filter.call(null,(function (note){var content = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,new cljs.core.Keyword(null,"file-path","file-path",3946287432).cljs$core$IFn$_invoke$arity$1(note)));return cljs.core.not_EQ_.call(null,-1,content.indexOf(keyword));
}),lt.plugins.note.get_note_list.call(null));
});

lt.plugins.note.note_button = (function note_button(note){var e__8087__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(note)], null));var seq__8441_8517 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),new cljs.core.Keyword(null,"file-path","file-path",3946287432).cljs$core$IFn$_invoke$arity$1(note));
})], null)));var chunk__8442_8518 = null;var count__8443_8519 = 0;var i__8444_8520 = 0;while(true){
if((i__8444_8520 < count__8443_8519))
{var vec__8445_8521 = cljs.core._nth.call(null,chunk__8442_8518,i__8444_8520);var ev__8088__auto___8522 = cljs.core.nth.call(null,vec__8445_8521,0,null);var func__8089__auto___8523 = cljs.core.nth.call(null,vec__8445_8521,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8522,func__8089__auto___8523);
{
var G__8524 = seq__8441_8517;
var G__8525 = chunk__8442_8518;
var G__8526 = count__8443_8519;
var G__8527 = (i__8444_8520 + 1);
seq__8441_8517 = G__8524;
chunk__8442_8518 = G__8525;
count__8443_8519 = G__8526;
i__8444_8520 = G__8527;
continue;
}
} else
{var temp__4092__auto___8528 = cljs.core.seq.call(null,seq__8441_8517);if(temp__4092__auto___8528)
{var seq__8441_8529__$1 = temp__4092__auto___8528;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8441_8529__$1))
{var c__7470__auto___8530 = cljs.core.chunk_first.call(null,seq__8441_8529__$1);{
var G__8531 = cljs.core.chunk_rest.call(null,seq__8441_8529__$1);
var G__8532 = c__7470__auto___8530;
var G__8533 = cljs.core.count.call(null,c__7470__auto___8530);
var G__8534 = 0;
seq__8441_8517 = G__8531;
chunk__8442_8518 = G__8532;
count__8443_8519 = G__8533;
i__8444_8520 = G__8534;
continue;
}
} else
{var vec__8446_8535 = cljs.core.first.call(null,seq__8441_8529__$1);var ev__8088__auto___8536 = cljs.core.nth.call(null,vec__8446_8535,0,null);var func__8089__auto___8537 = cljs.core.nth.call(null,vec__8446_8535,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8536,func__8089__auto___8537);
{
var G__8538 = cljs.core.next.call(null,seq__8441_8529__$1);
var G__8539 = null;
var G__8540 = 0;
var G__8541 = 0;
seq__8441_8517 = G__8538;
chunk__8442_8518 = G__8539;
count__8443_8519 = G__8540;
i__8444_8520 = G__8541;
continue;
}
}
} else
{}
}
break;
}
return e__8087__auto__;
});

lt.plugins.note.note_li_item = (function note_li_item(note){var e__8087__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date","span.date",4619576132),lt.objs.files.without_ext.call(null,lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"file-path","file-path",3946287432).cljs$core$IFn$_invoke$arity$1(note)))], null),": ",lt.plugins.note.note_button.call(null,note)], null));var seq__8453_8542 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8454_8543 = null;var count__8455_8544 = 0;var i__8456_8545 = 0;while(true){
if((i__8456_8545 < count__8455_8544))
{var vec__8457_8546 = cljs.core._nth.call(null,chunk__8454_8543,i__8456_8545);var ev__8088__auto___8547 = cljs.core.nth.call(null,vec__8457_8546,0,null);var func__8089__auto___8548 = cljs.core.nth.call(null,vec__8457_8546,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8547,func__8089__auto___8548);
{
var G__8549 = seq__8453_8542;
var G__8550 = chunk__8454_8543;
var G__8551 = count__8455_8544;
var G__8552 = (i__8456_8545 + 1);
seq__8453_8542 = G__8549;
chunk__8454_8543 = G__8550;
count__8455_8544 = G__8551;
i__8456_8545 = G__8552;
continue;
}
} else
{var temp__4092__auto___8553 = cljs.core.seq.call(null,seq__8453_8542);if(temp__4092__auto___8553)
{var seq__8453_8554__$1 = temp__4092__auto___8553;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8453_8554__$1))
{var c__7470__auto___8555 = cljs.core.chunk_first.call(null,seq__8453_8554__$1);{
var G__8556 = cljs.core.chunk_rest.call(null,seq__8453_8554__$1);
var G__8557 = c__7470__auto___8555;
var G__8558 = cljs.core.count.call(null,c__7470__auto___8555);
var G__8559 = 0;
seq__8453_8542 = G__8556;
chunk__8454_8543 = G__8557;
count__8455_8544 = G__8558;
i__8456_8545 = G__8559;
continue;
}
} else
{var vec__8458_8560 = cljs.core.first.call(null,seq__8453_8554__$1);var ev__8088__auto___8561 = cljs.core.nth.call(null,vec__8458_8560,0,null);var func__8089__auto___8562 = cljs.core.nth.call(null,vec__8458_8560,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8561,func__8089__auto___8562);
{
var G__8563 = cljs.core.next.call(null,seq__8453_8554__$1);
var G__8564 = null;
var G__8565 = 0;
var G__8566 = 0;
seq__8453_8542 = G__8563;
chunk__8454_8543 = G__8564;
count__8455_8544 = G__8565;
i__8456_8545 = G__8566;
continue;
}
}
} else
{}
}
break;
}
return e__8087__auto__;
});

lt.plugins.note.notes_screen = (function notes_screen(notes){var e__8087__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ltnote","div#ltnote",1431776542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Notes"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,lt.plugins.note.note_li_item,notes)], null)], null));var seq__8465_8567 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8466_8568 = null;var count__8467_8569 = 0;var i__8468_8570 = 0;while(true){
if((i__8468_8570 < count__8467_8569))
{var vec__8469_8571 = cljs.core._nth.call(null,chunk__8466_8568,i__8468_8570);var ev__8088__auto___8572 = cljs.core.nth.call(null,vec__8469_8571,0,null);var func__8089__auto___8573 = cljs.core.nth.call(null,vec__8469_8571,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8572,func__8089__auto___8573);
{
var G__8574 = seq__8465_8567;
var G__8575 = chunk__8466_8568;
var G__8576 = count__8467_8569;
var G__8577 = (i__8468_8570 + 1);
seq__8465_8567 = G__8574;
chunk__8466_8568 = G__8575;
count__8467_8569 = G__8576;
i__8468_8570 = G__8577;
continue;
}
} else
{var temp__4092__auto___8578 = cljs.core.seq.call(null,seq__8465_8567);if(temp__4092__auto___8578)
{var seq__8465_8579__$1 = temp__4092__auto___8578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8465_8579__$1))
{var c__7470__auto___8580 = cljs.core.chunk_first.call(null,seq__8465_8579__$1);{
var G__8581 = cljs.core.chunk_rest.call(null,seq__8465_8579__$1);
var G__8582 = c__7470__auto___8580;
var G__8583 = cljs.core.count.call(null,c__7470__auto___8580);
var G__8584 = 0;
seq__8465_8567 = G__8581;
chunk__8466_8568 = G__8582;
count__8467_8569 = G__8583;
i__8468_8570 = G__8584;
continue;
}
} else
{var vec__8470_8585 = cljs.core.first.call(null,seq__8465_8579__$1);var ev__8088__auto___8586 = cljs.core.nth.call(null,vec__8470_8585,0,null);var func__8089__auto___8587 = cljs.core.nth.call(null,vec__8470_8585,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8586,func__8089__auto___8587);
{
var G__8588 = cljs.core.next.call(null,seq__8465_8579__$1);
var G__8589 = null;
var G__8590 = 0;
var G__8591 = 0;
seq__8465_8567 = G__8588;
chunk__8466_8568 = G__8589;
count__8467_8569 = G__8590;
i__8468_8570 = G__8591;
continue;
}
}
} else
{}
}
break;
}
return e__8087__auto__;
});

lt.plugins.note.search_input = (function search_input(){var e__8087__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Search"], null)], null));var seq__8477_8592 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8478_8593 = null;var count__8479_8594 = 0;var i__8480_8595 = 0;while(true){
if((i__8480_8595 < count__8479_8594))
{var vec__8481_8596 = cljs.core._nth.call(null,chunk__8478_8593,i__8480_8595);var ev__8088__auto___8597 = cljs.core.nth.call(null,vec__8481_8596,0,null);var func__8089__auto___8598 = cljs.core.nth.call(null,vec__8481_8596,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8597,func__8089__auto___8598);
{
var G__8599 = seq__8477_8592;
var G__8600 = chunk__8478_8593;
var G__8601 = count__8479_8594;
var G__8602 = (i__8480_8595 + 1);
seq__8477_8592 = G__8599;
chunk__8478_8593 = G__8600;
count__8479_8594 = G__8601;
i__8480_8595 = G__8602;
continue;
}
} else
{var temp__4092__auto___8603 = cljs.core.seq.call(null,seq__8477_8592);if(temp__4092__auto___8603)
{var seq__8477_8604__$1 = temp__4092__auto___8603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8477_8604__$1))
{var c__7470__auto___8605 = cljs.core.chunk_first.call(null,seq__8477_8604__$1);{
var G__8606 = cljs.core.chunk_rest.call(null,seq__8477_8604__$1);
var G__8607 = c__7470__auto___8605;
var G__8608 = cljs.core.count.call(null,c__7470__auto___8605);
var G__8609 = 0;
seq__8477_8592 = G__8606;
chunk__8478_8593 = G__8607;
count__8479_8594 = G__8608;
i__8480_8595 = G__8609;
continue;
}
} else
{var vec__8482_8610 = cljs.core.first.call(null,seq__8477_8604__$1);var ev__8088__auto___8611 = cljs.core.nth.call(null,vec__8482_8610,0,null);var func__8089__auto___8612 = cljs.core.nth.call(null,vec__8482_8610,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8611,func__8089__auto___8612);
{
var G__8613 = cljs.core.next.call(null,seq__8477_8604__$1);
var G__8614 = null;
var G__8615 = 0;
var G__8616 = 0;
seq__8477_8592 = G__8613;
chunk__8478_8593 = G__8614;
count__8479_8594 = G__8615;
i__8480_8595 = G__8616;
continue;
}
}
} else
{}
}
break;
}
return e__8087__auto__;
});

lt.plugins.note.search_button = (function search_button(){var e__8087__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),"search"], null));var seq__8489_8617 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){var keyword = lt.util.dom.val.call(null,lt.util.dom.$.call(null,"#ltnote .keyword"));var elem = lt.util.dom.$.call(null,"#ltnote .result");lt.util.dom.html.call(null,elem,"");
return lt.util.dom.append.call(null,elem,crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,lt.plugins.note.note_li_item,lt.plugins.note.search_note.call(null,keyword))], null)));
})], null)));var chunk__8490_8618 = null;var count__8491_8619 = 0;var i__8492_8620 = 0;while(true){
if((i__8492_8620 < count__8491_8619))
{var vec__8493_8621 = cljs.core._nth.call(null,chunk__8490_8618,i__8492_8620);var ev__8088__auto___8622 = cljs.core.nth.call(null,vec__8493_8621,0,null);var func__8089__auto___8623 = cljs.core.nth.call(null,vec__8493_8621,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8622,func__8089__auto___8623);
{
var G__8624 = seq__8489_8617;
var G__8625 = chunk__8490_8618;
var G__8626 = count__8491_8619;
var G__8627 = (i__8492_8620 + 1);
seq__8489_8617 = G__8624;
chunk__8490_8618 = G__8625;
count__8491_8619 = G__8626;
i__8492_8620 = G__8627;
continue;
}
} else
{var temp__4092__auto___8628 = cljs.core.seq.call(null,seq__8489_8617);if(temp__4092__auto___8628)
{var seq__8489_8629__$1 = temp__4092__auto___8628;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8489_8629__$1))
{var c__7470__auto___8630 = cljs.core.chunk_first.call(null,seq__8489_8629__$1);{
var G__8631 = cljs.core.chunk_rest.call(null,seq__8489_8629__$1);
var G__8632 = c__7470__auto___8630;
var G__8633 = cljs.core.count.call(null,c__7470__auto___8630);
var G__8634 = 0;
seq__8489_8617 = G__8631;
chunk__8490_8618 = G__8632;
count__8491_8619 = G__8633;
i__8492_8620 = G__8634;
continue;
}
} else
{var vec__8494_8635 = cljs.core.first.call(null,seq__8489_8629__$1);var ev__8088__auto___8636 = cljs.core.nth.call(null,vec__8494_8635,0,null);var func__8089__auto___8637 = cljs.core.nth.call(null,vec__8494_8635,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8636,func__8089__auto___8637);
{
var G__8638 = cljs.core.next.call(null,seq__8489_8629__$1);
var G__8639 = null;
var G__8640 = 0;
var G__8641 = 0;
seq__8489_8617 = G__8638;
chunk__8490_8618 = G__8639;
count__8491_8619 = G__8640;
i__8492_8620 = G__8641;
continue;
}
}
} else
{}
}
break;
}
return e__8087__auto__;
});

lt.plugins.note.search_screen = (function search_screen(){var e__8087__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ltnote","div#ltnote",1431776542),lt.plugins.note.search_input.call(null),lt.plugins.note.search_button.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result","div.result",2762459020)], null)], null));var seq__8501_8642 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8502_8643 = null;var count__8503_8644 = 0;var i__8504_8645 = 0;while(true){
if((i__8504_8645 < count__8503_8644))
{var vec__8505_8646 = cljs.core._nth.call(null,chunk__8502_8643,i__8504_8645);var ev__8088__auto___8647 = cljs.core.nth.call(null,vec__8505_8646,0,null);var func__8089__auto___8648 = cljs.core.nth.call(null,vec__8505_8646,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8647,func__8089__auto___8648);
{
var G__8649 = seq__8501_8642;
var G__8650 = chunk__8502_8643;
var G__8651 = count__8503_8644;
var G__8652 = (i__8504_8645 + 1);
seq__8501_8642 = G__8649;
chunk__8502_8643 = G__8650;
count__8503_8644 = G__8651;
i__8504_8645 = G__8652;
continue;
}
} else
{var temp__4092__auto___8653 = cljs.core.seq.call(null,seq__8501_8642);if(temp__4092__auto___8653)
{var seq__8501_8654__$1 = temp__4092__auto___8653;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8501_8654__$1))
{var c__7470__auto___8655 = cljs.core.chunk_first.call(null,seq__8501_8654__$1);{
var G__8656 = cljs.core.chunk_rest.call(null,seq__8501_8654__$1);
var G__8657 = c__7470__auto___8655;
var G__8658 = cljs.core.count.call(null,c__7470__auto___8655);
var G__8659 = 0;
seq__8501_8642 = G__8656;
chunk__8502_8643 = G__8657;
count__8503_8644 = G__8658;
i__8504_8645 = G__8659;
continue;
}
} else
{var vec__8506_8660 = cljs.core.first.call(null,seq__8501_8654__$1);var ev__8088__auto___8661 = cljs.core.nth.call(null,vec__8506_8660,0,null);var func__8089__auto___8662 = cljs.core.nth.call(null,vec__8506_8660,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___8661,func__8089__auto___8662);
{
var G__8663 = cljs.core.next.call(null,seq__8501_8654__$1);
var G__8664 = null;
var G__8665 = 0;
var G__8666 = 0;
seq__8501_8642 = G__8663;
chunk__8502_8643 = G__8664;
count__8503_8644 = G__8665;
i__8504_8645 = G__8666;
continue;
}
}
} else
{}
}
break;
}
return e__8087__auto__;
});

lt.plugins.note.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8667 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8667))
{var ts_8668 = temp__4092__auto___8667;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8668))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8668);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.note","on-close-destroy","lt.plugins.note/on-close-destroy",4533274264),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.note.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.note","note-list","lt.plugins.note/note-list",651909814),new cljs.core.Keyword(null,"name","name",1017277949),"Notes",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.note","on-close-destroy","lt.plugins.note/on-close-destroy",4533274264)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.note.notes_screen.call(null,lt.plugins.note.get_note_list.call(null));
}));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.note","note-search","lt.plugins.note/note-search",3873160380),new cljs.core.Keyword(null,"name","name",1017277949),"Search Note",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.note","on-close-destroy","lt.plugins.note/on-close-destroy",4533274264)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.note.search_screen.call(null);
}));

lt.plugins.note.open_note_list = (function open_note_list(){var x = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.note","note-list","lt.plugins.note/note-list",651909814));lt.objs.tabs.add_BANG_.call(null,x);
return lt.objs.tabs.active_BANG_.call(null,x);
});

lt.plugins.note.open_search_screen = (function open_search_screen(){var x = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.note","note-search","lt.plugins.note/note-search",3873160380));lt.objs.tabs.add_BANG_.call(null,x);
return lt.objs.tabs.active_BANG_.call(null,x);
});

lt.plugins.note.clean_up = (function clean_up(){var now = lt.plugins.note.moment.call(null);var default_size = cljs.core.count.call(null,now.format(lt.plugins.note.DEFAULT_CONTENT));var seq__8511 = cljs.core.seq.call(null,lt.objs.files.filter_walk.call(null,lt.objs.files.file_QMARK_,cljs.core.deref.call(null,lt.plugins.note.note_dir)));var chunk__8512 = null;var count__8513 = 0;var i__8514 = 0;while(true){
if((i__8514 < count__8513))
{var file = cljs.core._nth.call(null,chunk__8512,i__8514);if(cljs.core._EQ_.call(null,default_size,cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))
{lt.objs.files.delete_BANG_.call(null,file);
} else
{}
{
var G__8669 = seq__8511;
var G__8670 = chunk__8512;
var G__8671 = count__8513;
var G__8672 = (i__8514 + 1);
seq__8511 = G__8669;
chunk__8512 = G__8670;
count__8513 = G__8671;
i__8514 = G__8672;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8511);if(temp__4092__auto__)
{var seq__8511__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8511__$1))
{var c__7470__auto__ = cljs.core.chunk_first.call(null,seq__8511__$1);{
var G__8673 = cljs.core.chunk_rest.call(null,seq__8511__$1);
var G__8674 = c__7470__auto__;
var G__8675 = cljs.core.count.call(null,c__7470__auto__);
var G__8676 = 0;
seq__8511 = G__8673;
chunk__8512 = G__8674;
count__8513 = G__8675;
i__8514 = G__8676;
continue;
}
} else
{var file = cljs.core.first.call(null,seq__8511__$1);if(cljs.core._EQ_.call(null,default_size,cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))
{lt.objs.files.delete_BANG_.call(null,file);
} else
{}
{
var G__8677 = cljs.core.next.call(null,seq__8511__$1);
var G__8678 = null;
var G__8679 = 0;
var G__8680 = 0;
seq__8511 = G__8677;
chunk__8512 = G__8678;
count__8513 = G__8679;
i__8514 = G__8680;
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

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"note-search","note-search",1675075413),new cljs.core.Keyword(null,"desc","desc",1016984067),"Note: Search",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.note.open_search_screen], null));

}

//# sourceMappingURL=