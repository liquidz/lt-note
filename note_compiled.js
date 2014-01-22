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
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
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
var G__16335__delegate = function (p__16253){var vec__16254 = p__16253;var e = cljs.core.nth.call(null,vec__16254,0,null);return callback.call(null);
};
var G__16335 = function (var_args){
var p__16253 = null;if (arguments.length > 0) {
  p__16253 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16335__delegate.call(this,p__16253);};
G__16335.cljs$lang$maxFixedArity = 0;
G__16335.cljs$lang$applyTo = (function (arglist__16336){
var p__16253 = cljs.core.seq(arglist__16336);
return G__16335__delegate(p__16253);
});
G__16335.cljs$core$IFn$_invoke$arity$variadic = G__16335__delegate;
return G__16335;
})()
);
}));
});

lt.plugins.note.note_new = (function note_new(){var now = lt.plugins.note.moment.call(null);var filename = now.format(cljs.core.deref.call(null,lt.plugins.note.note_filename_format));var filename__$1 = lt.objs.files.join.call(null,cljs.core.deref.call(null,lt.plugins.note.note_dir),filename);var content = lt.plugins.note.DEFAULT_CONTENT;var content__$1 = now.format(content);return lt.plugins.note.create_new_note_file.call(null,filename__$1,content__$1,(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),filename__$1);
}));
});

lt.plugins.note.get_note_list = (function get_note_list(){var ls = lt.objs.files.filter_walk.call(null,lt.objs.files.file_QMARK_,cljs.core.deref.call(null,lt.plugins.note.note_dir));return cljs.core.map.call(null,(function (file_path){var title = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,lt.plugins.note.TITLE_REGEXP,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file_path)))));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),title,new cljs.core.Keyword(null,"file-path","file-path",3946287432),file_path], null);
}),ls);
});

lt.plugins.note.search_note = (function search_note(keyword){return cljs.core.filter.call(null,(function (note){var content = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,new cljs.core.Keyword(null,"file-path","file-path",3946287432).cljs$core$IFn$_invoke$arity$1(note)));return cljs.core.not_EQ_.call(null,-1,content.indexOf(keyword));
}),lt.plugins.note.get_note_list.call(null));
});

lt.plugins.note.note_button = (function note_button(note){var e__8087__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(note)], null));var seq__16261_16337 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),new cljs.core.Keyword(null,"file-path","file-path",3946287432).cljs$core$IFn$_invoke$arity$1(note));
})], null)));var chunk__16262_16338 = null;var count__16263_16339 = 0;var i__16264_16340 = 0;while(true){
if((i__16264_16340 < count__16263_16339))
{var vec__16265_16341 = cljs.core._nth.call(null,chunk__16262_16338,i__16264_16340);var ev__8088__auto___16342 = cljs.core.nth.call(null,vec__16265_16341,0,null);var func__8089__auto___16343 = cljs.core.nth.call(null,vec__16265_16341,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___16342,func__8089__auto___16343);
{
var G__16344 = seq__16261_16337;
var G__16345 = chunk__16262_16338;
var G__16346 = count__16263_16339;
var G__16347 = (i__16264_16340 + 1);
seq__16261_16337 = G__16344;
chunk__16262_16338 = G__16345;
count__16263_16339 = G__16346;
i__16264_16340 = G__16347;
continue;
}
} else
{var temp__4092__auto___16348 = cljs.core.seq.call(null,seq__16261_16337);if(temp__4092__auto___16348)
{var seq__16261_16349__$1 = temp__4092__auto___16348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16261_16349__$1))
{var c__7470__auto___16350 = cljs.core.chunk_first.call(null,seq__16261_16349__$1);{
var G__16351 = cljs.core.chunk_rest.call(null,seq__16261_16349__$1);
var G__16352 = c__7470__auto___16350;
var G__16353 = cljs.core.count.call(null,c__7470__auto___16350);
var G__16354 = 0;
seq__16261_16337 = G__16351;
chunk__16262_16338 = G__16352;
count__16263_16339 = G__16353;
i__16264_16340 = G__16354;
continue;
}
} else
{var vec__16266_16355 = cljs.core.first.call(null,seq__16261_16349__$1);var ev__8088__auto___16356 = cljs.core.nth.call(null,vec__16266_16355,0,null);var func__8089__auto___16357 = cljs.core.nth.call(null,vec__16266_16355,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___16356,func__8089__auto___16357);
{
var G__16358 = cljs.core.next.call(null,seq__16261_16349__$1);
var G__16359 = null;
var G__16360 = 0;
var G__16361 = 0;
seq__16261_16337 = G__16358;
chunk__16262_16338 = G__16359;
count__16263_16339 = G__16360;
i__16264_16340 = G__16361;
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

lt.plugins.note.note_li_item = (function note_li_item(note){var e__8087__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date","span.date",4619576132),lt.objs.files.without_ext.call(null,lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"file-path","file-path",3946287432).cljs$core$IFn$_invoke$arity$1(note)))], null),": ",lt.plugins.note.note_button.call(null,note)], null));var seq__16273_16362 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__16274_16363 = null;var count__16275_16364 = 0;var i__16276_16365 = 0;while(true){
if((i__16276_16365 < count__16275_16364))
{var vec__16277_16366 = cljs.core._nth.call(null,chunk__16274_16363,i__16276_16365);var ev__8088__auto___16367 = cljs.core.nth.call(null,vec__16277_16366,0,null);var func__8089__auto___16368 = cljs.core.nth.call(null,vec__16277_16366,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___16367,func__8089__auto___16368);
{
var G__16369 = seq__16273_16362;
var G__16370 = chunk__16274_16363;
var G__16371 = count__16275_16364;
var G__16372 = (i__16276_16365 + 1);
seq__16273_16362 = G__16369;
chunk__16274_16363 = G__16370;
count__16275_16364 = G__16371;
i__16276_16365 = G__16372;
continue;
}
} else
{var temp__4092__auto___16373 = cljs.core.seq.call(null,seq__16273_16362);if(temp__4092__auto___16373)
{var seq__16273_16374__$1 = temp__4092__auto___16373;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16273_16374__$1))
{var c__7470__auto___16375 = cljs.core.chunk_first.call(null,seq__16273_16374__$1);{
var G__16376 = cljs.core.chunk_rest.call(null,seq__16273_16374__$1);
var G__16377 = c__7470__auto___16375;
var G__16378 = cljs.core.count.call(null,c__7470__auto___16375);
var G__16379 = 0;
seq__16273_16362 = G__16376;
chunk__16274_16363 = G__16377;
count__16275_16364 = G__16378;
i__16276_16365 = G__16379;
continue;
}
} else
{var vec__16278_16380 = cljs.core.first.call(null,seq__16273_16374__$1);var ev__8088__auto___16381 = cljs.core.nth.call(null,vec__16278_16380,0,null);var func__8089__auto___16382 = cljs.core.nth.call(null,vec__16278_16380,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___16381,func__8089__auto___16382);
{
var G__16383 = cljs.core.next.call(null,seq__16273_16374__$1);
var G__16384 = null;
var G__16385 = 0;
var G__16386 = 0;
seq__16273_16362 = G__16383;
chunk__16274_16363 = G__16384;
count__16275_16364 = G__16385;
i__16276_16365 = G__16386;
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

lt.plugins.note.notes_screen = (function notes_screen(notes){var e__8087__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ltnote","div#ltnote",1431776542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Notes"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,lt.plugins.note.note_li_item,notes)], null)], null));var seq__16285_16387 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__16286_16388 = null;var count__16287_16389 = 0;var i__16288_16390 = 0;while(true){
if((i__16288_16390 < count__16287_16389))
{var vec__16289_16391 = cljs.core._nth.call(null,chunk__16286_16388,i__16288_16390);var ev__8088__auto___16392 = cljs.core.nth.call(null,vec__16289_16391,0,null);var func__8089__auto___16393 = cljs.core.nth.call(null,vec__16289_16391,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___16392,func__8089__auto___16393);
{
var G__16394 = seq__16285_16387;
var G__16395 = chunk__16286_16388;
var G__16396 = count__16287_16389;
var G__16397 = (i__16288_16390 + 1);
seq__16285_16387 = G__16394;
chunk__16286_16388 = G__16395;
count__16287_16389 = G__16396;
i__16288_16390 = G__16397;
continue;
}
} else
{var temp__4092__auto___16398 = cljs.core.seq.call(null,seq__16285_16387);if(temp__4092__auto___16398)
{var seq__16285_16399__$1 = temp__4092__auto___16398;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16285_16399__$1))
{var c__7470__auto___16400 = cljs.core.chunk_first.call(null,seq__16285_16399__$1);{
var G__16401 = cljs.core.chunk_rest.call(null,seq__16285_16399__$1);
var G__16402 = c__7470__auto___16400;
var G__16403 = cljs.core.count.call(null,c__7470__auto___16400);
var G__16404 = 0;
seq__16285_16387 = G__16401;
chunk__16286_16388 = G__16402;
count__16287_16389 = G__16403;
i__16288_16390 = G__16404;
continue;
}
} else
{var vec__16290_16405 = cljs.core.first.call(null,seq__16285_16399__$1);var ev__8088__auto___16406 = cljs.core.nth.call(null,vec__16290_16405,0,null);var func__8089__auto___16407 = cljs.core.nth.call(null,vec__16290_16405,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___16406,func__8089__auto___16407);
{
var G__16408 = cljs.core.next.call(null,seq__16285_16399__$1);
var G__16409 = null;
var G__16410 = 0;
var G__16411 = 0;
seq__16285_16387 = G__16408;
chunk__16286_16388 = G__16409;
count__16287_16389 = G__16410;
i__16288_16390 = G__16411;
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

lt.plugins.note.search_input = (function search_input(){var e__8087__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Search"], null)], null));var seq__16297_16412 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__16298_16413 = null;var count__16299_16414 = 0;var i__16300_16415 = 0;while(true){
if((i__16300_16415 < count__16299_16414))
{var vec__16301_16416 = cljs.core._nth.call(null,chunk__16298_16413,i__16300_16415);var ev__8088__auto___16417 = cljs.core.nth.call(null,vec__16301_16416,0,null);var func__8089__auto___16418 = cljs.core.nth.call(null,vec__16301_16416,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___16417,func__8089__auto___16418);
{
var G__16419 = seq__16297_16412;
var G__16420 = chunk__16298_16413;
var G__16421 = count__16299_16414;
var G__16422 = (i__16300_16415 + 1);
seq__16297_16412 = G__16419;
chunk__16298_16413 = G__16420;
count__16299_16414 = G__16421;
i__16300_16415 = G__16422;
continue;
}
} else
{var temp__4092__auto___16423 = cljs.core.seq.call(null,seq__16297_16412);if(temp__4092__auto___16423)
{var seq__16297_16424__$1 = temp__4092__auto___16423;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16297_16424__$1))
{var c__7470__auto___16425 = cljs.core.chunk_first.call(null,seq__16297_16424__$1);{
var G__16426 = cljs.core.chunk_rest.call(null,seq__16297_16424__$1);
var G__16427 = c__7470__auto___16425;
var G__16428 = cljs.core.count.call(null,c__7470__auto___16425);
var G__16429 = 0;
seq__16297_16412 = G__16426;
chunk__16298_16413 = G__16427;
count__16299_16414 = G__16428;
i__16300_16415 = G__16429;
continue;
}
} else
{var vec__16302_16430 = cljs.core.first.call(null,seq__16297_16424__$1);var ev__8088__auto___16431 = cljs.core.nth.call(null,vec__16302_16430,0,null);var func__8089__auto___16432 = cljs.core.nth.call(null,vec__16302_16430,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___16431,func__8089__auto___16432);
{
var G__16433 = cljs.core.next.call(null,seq__16297_16424__$1);
var G__16434 = null;
var G__16435 = 0;
var G__16436 = 0;
seq__16297_16412 = G__16433;
chunk__16298_16413 = G__16434;
count__16299_16414 = G__16435;
i__16300_16415 = G__16436;
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

lt.plugins.note.search_button = (function search_button(){var e__8087__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),"search"], null));var seq__16309_16437 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){var keyword = lt.util.dom.val.call(null,lt.util.dom.$.call(null,"#ltnote .keyword"));var elem = lt.util.dom.$.call(null,"#ltnote .result");lt.util.dom.html.call(null,elem,"");
return lt.util.dom.append.call(null,elem,crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,lt.plugins.note.note_li_item,lt.plugins.note.search_note.call(null,keyword))], null)));
})], null)));var chunk__16310_16438 = null;var count__16311_16439 = 0;var i__16312_16440 = 0;while(true){
if((i__16312_16440 < count__16311_16439))
{var vec__16313_16441 = cljs.core._nth.call(null,chunk__16310_16438,i__16312_16440);var ev__8088__auto___16442 = cljs.core.nth.call(null,vec__16313_16441,0,null);var func__8089__auto___16443 = cljs.core.nth.call(null,vec__16313_16441,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___16442,func__8089__auto___16443);
{
var G__16444 = seq__16309_16437;
var G__16445 = chunk__16310_16438;
var G__16446 = count__16311_16439;
var G__16447 = (i__16312_16440 + 1);
seq__16309_16437 = G__16444;
chunk__16310_16438 = G__16445;
count__16311_16439 = G__16446;
i__16312_16440 = G__16447;
continue;
}
} else
{var temp__4092__auto___16448 = cljs.core.seq.call(null,seq__16309_16437);if(temp__4092__auto___16448)
{var seq__16309_16449__$1 = temp__4092__auto___16448;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16309_16449__$1))
{var c__7470__auto___16450 = cljs.core.chunk_first.call(null,seq__16309_16449__$1);{
var G__16451 = cljs.core.chunk_rest.call(null,seq__16309_16449__$1);
var G__16452 = c__7470__auto___16450;
var G__16453 = cljs.core.count.call(null,c__7470__auto___16450);
var G__16454 = 0;
seq__16309_16437 = G__16451;
chunk__16310_16438 = G__16452;
count__16311_16439 = G__16453;
i__16312_16440 = G__16454;
continue;
}
} else
{var vec__16314_16455 = cljs.core.first.call(null,seq__16309_16449__$1);var ev__8088__auto___16456 = cljs.core.nth.call(null,vec__16314_16455,0,null);var func__8089__auto___16457 = cljs.core.nth.call(null,vec__16314_16455,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___16456,func__8089__auto___16457);
{
var G__16458 = cljs.core.next.call(null,seq__16309_16449__$1);
var G__16459 = null;
var G__16460 = 0;
var G__16461 = 0;
seq__16309_16437 = G__16458;
chunk__16310_16438 = G__16459;
count__16311_16439 = G__16460;
i__16312_16440 = G__16461;
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

lt.plugins.note.search_screen = (function search_screen(){var e__8087__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ltnote","div#ltnote",1431776542),lt.plugins.note.search_input.call(null),lt.plugins.note.search_button.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result","div.result",2762459020)], null)], null));var seq__16321_16462 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__16322_16463 = null;var count__16323_16464 = 0;var i__16324_16465 = 0;while(true){
if((i__16324_16465 < count__16323_16464))
{var vec__16325_16466 = cljs.core._nth.call(null,chunk__16322_16463,i__16324_16465);var ev__8088__auto___16467 = cljs.core.nth.call(null,vec__16325_16466,0,null);var func__8089__auto___16468 = cljs.core.nth.call(null,vec__16325_16466,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___16467,func__8089__auto___16468);
{
var G__16469 = seq__16321_16462;
var G__16470 = chunk__16322_16463;
var G__16471 = count__16323_16464;
var G__16472 = (i__16324_16465 + 1);
seq__16321_16462 = G__16469;
chunk__16322_16463 = G__16470;
count__16323_16464 = G__16471;
i__16324_16465 = G__16472;
continue;
}
} else
{var temp__4092__auto___16473 = cljs.core.seq.call(null,seq__16321_16462);if(temp__4092__auto___16473)
{var seq__16321_16474__$1 = temp__4092__auto___16473;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16321_16474__$1))
{var c__7470__auto___16475 = cljs.core.chunk_first.call(null,seq__16321_16474__$1);{
var G__16476 = cljs.core.chunk_rest.call(null,seq__16321_16474__$1);
var G__16477 = c__7470__auto___16475;
var G__16478 = cljs.core.count.call(null,c__7470__auto___16475);
var G__16479 = 0;
seq__16321_16462 = G__16476;
chunk__16322_16463 = G__16477;
count__16323_16464 = G__16478;
i__16324_16465 = G__16479;
continue;
}
} else
{var vec__16326_16480 = cljs.core.first.call(null,seq__16321_16474__$1);var ev__8088__auto___16481 = cljs.core.nth.call(null,vec__16326_16480,0,null);var func__8089__auto___16482 = cljs.core.nth.call(null,vec__16326_16480,1,null);lt.util.dom.on.call(null,e__8087__auto__,ev__8088__auto___16481,func__8089__auto___16482);
{
var G__16483 = cljs.core.next.call(null,seq__16321_16474__$1);
var G__16484 = null;
var G__16485 = 0;
var G__16486 = 0;
seq__16321_16462 = G__16483;
chunk__16322_16463 = G__16484;
count__16323_16464 = G__16485;
i__16324_16465 = G__16486;
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

lt.plugins.note.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___16487 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___16487))
{var ts_16488 = temp__4092__auto___16487;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_16488))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_16488);
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

lt.plugins.note.clean_up = (function clean_up(){var now = lt.plugins.note.moment.call(null);var default_size = cljs.core.count.call(null,now.format(lt.plugins.note.DEFAULT_CONTENT));var seq__16331 = cljs.core.seq.call(null,lt.objs.files.filter_walk.call(null,lt.objs.files.file_QMARK_,cljs.core.deref.call(null,lt.plugins.note.note_dir)));var chunk__16332 = null;var count__16333 = 0;var i__16334 = 0;while(true){
if((i__16334 < count__16333))
{var file = cljs.core._nth.call(null,chunk__16332,i__16334);if(cljs.core._EQ_.call(null,default_size,cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))
{lt.objs.files.delete_BANG_.call(null,file);
} else
{}
{
var G__16489 = seq__16331;
var G__16490 = chunk__16332;
var G__16491 = count__16333;
var G__16492 = (i__16334 + 1);
seq__16331 = G__16489;
chunk__16332 = G__16490;
count__16333 = G__16491;
i__16334 = G__16492;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16331);if(temp__4092__auto__)
{var seq__16331__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16331__$1))
{var c__7470__auto__ = cljs.core.chunk_first.call(null,seq__16331__$1);{
var G__16493 = cljs.core.chunk_rest.call(null,seq__16331__$1);
var G__16494 = c__7470__auto__;
var G__16495 = cljs.core.count.call(null,c__7470__auto__);
var G__16496 = 0;
seq__16331 = G__16493;
chunk__16332 = G__16494;
count__16333 = G__16495;
i__16334 = G__16496;
continue;
}
} else
{var file = cljs.core.first.call(null,seq__16331__$1);if(cljs.core._EQ_.call(null,default_size,cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))
{lt.objs.files.delete_BANG_.call(null,file);
} else
{}
{
var G__16497 = cljs.core.next.call(null,seq__16331__$1);
var G__16498 = null;
var G__16499 = 0;
var G__16500 = 0;
seq__16331 = G__16497;
chunk__16332 = G__16498;
count__16333 = G__16499;
i__16334 = G__16500;
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