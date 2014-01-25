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
lt.plugins.note.note_dir = cljs.core.atom.call(null,"/Users/uochan/opt/notes");
lt.plugins.note.note_filename_format = cljs.core.atom.call(null,"YYYY/MM/YYYY-MM-DD-HHmmss[.md]");
lt.plugins.note.close_tab_when_open_file_from_list = cljs.core.atom.call(null,true);
/**
* Load node.js module.
*/
lt.plugins.note.load_node_module = (function load_node_module(module_name){return require(lt.objs.files.join.call(null,lt.objs.plugins.find_plugin.call(null,lt.plugins.note.APP_NAME),"node_modules",module_name));
});
lt.plugins.note.moment = lt.plugins.note.load_node_module.call(null,"moment");
lt.plugins.note.mkdirp = lt.plugins.note.load_node_module.call(null,"mkdirp");
/**
* Save new file.
*/
lt.plugins.note.save_new_file = (function save_new_file(filename,content,callback){return lt.plugins.note.mkdirp.call(null,lt.objs.files.parent.call(null,filename),(function (err){return lt.objs.files.save.call(null,filename,content,(function() { 
var G__25807__delegate = function (p__25710){var vec__25711 = p__25710;var err__$1 = cljs.core.nth.call(null,vec__25711,0,null);return callback.call(null,err__$1);
};
var G__25807 = function (var_args){
var p__25710 = null;if (arguments.length > 0) {
  p__25710 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25807__delegate.call(this,p__25710);};
G__25807.cljs$lang$maxFixedArity = 0;
G__25807.cljs$lang$applyTo = (function (arglist__25808){
var p__25710 = cljs.core.seq(arglist__25808);
return G__25807__delegate(p__25710);
});
G__25807.cljs$core$IFn$_invoke$arity$variadic = G__25807__delegate;
return G__25807;
})()
);
}));
});
lt.plugins.note.create_new_note = (function create_new_note(){var now = lt.plugins.note.moment.call(null);var filename = now.format(cljs.core.deref.call(null,lt.plugins.note.note_filename_format));var filename__$1 = lt.objs.files.join.call(null,cljs.core.deref.call(null,lt.plugins.note.note_dir),filename);var content = lt.plugins.note.DEFAULT_CONTENT;var content__$1 = now.format(content);return lt.plugins.note.save_new_file.call(null,filename__$1,content__$1,(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),filename__$1);
}));
});
lt.plugins.note.note_button_ui = (function note_button_ui(note){var e__8106__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(note)], null));var seq__25718_25809 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){if(cljs.core.truth_(cljs.core.deref.call(null,lt.plugins.note.close_tab_when_open_file_from_list)))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.close","tabs.close",4150844154));
} else
{}
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),new cljs.core.Keyword(null,"file-path","file-path",3946287432).cljs$core$IFn$_invoke$arity$1(note));
})], null)));var chunk__25719_25810 = null;var count__25720_25811 = 0;var i__25721_25812 = 0;while(true){
if((i__25721_25812 < count__25720_25811))
{var vec__25722_25813 = cljs.core._nth.call(null,chunk__25719_25810,i__25721_25812);var ev__8107__auto___25814 = cljs.core.nth.call(null,vec__25722_25813,0,null);var func__8108__auto___25815 = cljs.core.nth.call(null,vec__25722_25813,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___25814,func__8108__auto___25815);
{
var G__25816 = seq__25718_25809;
var G__25817 = chunk__25719_25810;
var G__25818 = count__25720_25811;
var G__25819 = (i__25721_25812 + 1);
seq__25718_25809 = G__25816;
chunk__25719_25810 = G__25817;
count__25720_25811 = G__25818;
i__25721_25812 = G__25819;
continue;
}
} else
{var temp__4092__auto___25820 = cljs.core.seq.call(null,seq__25718_25809);if(temp__4092__auto___25820)
{var seq__25718_25821__$1 = temp__4092__auto___25820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25718_25821__$1))
{var c__7486__auto___25822 = cljs.core.chunk_first.call(null,seq__25718_25821__$1);{
var G__25823 = cljs.core.chunk_rest.call(null,seq__25718_25821__$1);
var G__25824 = c__7486__auto___25822;
var G__25825 = cljs.core.count.call(null,c__7486__auto___25822);
var G__25826 = 0;
seq__25718_25809 = G__25823;
chunk__25719_25810 = G__25824;
count__25720_25811 = G__25825;
i__25721_25812 = G__25826;
continue;
}
} else
{var vec__25723_25827 = cljs.core.first.call(null,seq__25718_25821__$1);var ev__8107__auto___25828 = cljs.core.nth.call(null,vec__25723_25827,0,null);var func__8108__auto___25829 = cljs.core.nth.call(null,vec__25723_25827,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___25828,func__8108__auto___25829);
{
var G__25830 = cljs.core.next.call(null,seq__25718_25821__$1);
var G__25831 = null;
var G__25832 = 0;
var G__25833 = 0;
seq__25718_25809 = G__25830;
chunk__25719_25810 = G__25831;
count__25720_25811 = G__25832;
i__25721_25812 = G__25833;
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
lt.plugins.note.note_li_item_ui = (function note_li_item_ui(note){var e__8106__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date","span.date",4619576132),lt.objs.files.without_ext.call(null,lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"file-path","file-path",3946287432).cljs$core$IFn$_invoke$arity$1(note)))], null),": ",lt.plugins.note.note_button_ui.call(null,note)], null));var seq__25730_25834 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__25731_25835 = null;var count__25732_25836 = 0;var i__25733_25837 = 0;while(true){
if((i__25733_25837 < count__25732_25836))
{var vec__25734_25838 = cljs.core._nth.call(null,chunk__25731_25835,i__25733_25837);var ev__8107__auto___25839 = cljs.core.nth.call(null,vec__25734_25838,0,null);var func__8108__auto___25840 = cljs.core.nth.call(null,vec__25734_25838,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___25839,func__8108__auto___25840);
{
var G__25841 = seq__25730_25834;
var G__25842 = chunk__25731_25835;
var G__25843 = count__25732_25836;
var G__25844 = (i__25733_25837 + 1);
seq__25730_25834 = G__25841;
chunk__25731_25835 = G__25842;
count__25732_25836 = G__25843;
i__25733_25837 = G__25844;
continue;
}
} else
{var temp__4092__auto___25845 = cljs.core.seq.call(null,seq__25730_25834);if(temp__4092__auto___25845)
{var seq__25730_25846__$1 = temp__4092__auto___25845;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25730_25846__$1))
{var c__7486__auto___25847 = cljs.core.chunk_first.call(null,seq__25730_25846__$1);{
var G__25848 = cljs.core.chunk_rest.call(null,seq__25730_25846__$1);
var G__25849 = c__7486__auto___25847;
var G__25850 = cljs.core.count.call(null,c__7486__auto___25847);
var G__25851 = 0;
seq__25730_25834 = G__25848;
chunk__25731_25835 = G__25849;
count__25732_25836 = G__25850;
i__25733_25837 = G__25851;
continue;
}
} else
{var vec__25735_25852 = cljs.core.first.call(null,seq__25730_25846__$1);var ev__8107__auto___25853 = cljs.core.nth.call(null,vec__25735_25852,0,null);var func__8108__auto___25854 = cljs.core.nth.call(null,vec__25735_25852,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___25853,func__8108__auto___25854);
{
var G__25855 = cljs.core.next.call(null,seq__25730_25846__$1);
var G__25856 = null;
var G__25857 = 0;
var G__25858 = 0;
seq__25730_25834 = G__25855;
chunk__25731_25835 = G__25856;
count__25732_25836 = G__25857;
i__25733_25837 = G__25858;
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
var search_input_ui__delegate = function (p__25736){var vec__25744 = p__25736;var f = cljs.core.nth.call(null,vec__25744,0,null);var e__8106__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"class","class",1108647146),"search-keyword",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Search"], null)], null));var seq__25745_25859 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (e){if(cljs.core.truth_((function (){var and__6732__auto__ = f;if(cljs.core.truth_(and__6732__auto__))
{return lt.plugins.note.pressed_enter_QMARK_.call(null,e);
} else
{return and__6732__auto__;
}
})()))
{return f.call(null,lt.util.dom.val.call(null,lt.util.dom.$.call(null,".search-keyword")));
} else
{return null;
}
})], null)));var chunk__25746_25860 = null;var count__25747_25861 = 0;var i__25748_25862 = 0;while(true){
if((i__25748_25862 < count__25747_25861))
{var vec__25749_25863 = cljs.core._nth.call(null,chunk__25746_25860,i__25748_25862);var ev__8107__auto___25864 = cljs.core.nth.call(null,vec__25749_25863,0,null);var func__8108__auto___25865 = cljs.core.nth.call(null,vec__25749_25863,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___25864,func__8108__auto___25865);
{
var G__25866 = seq__25745_25859;
var G__25867 = chunk__25746_25860;
var G__25868 = count__25747_25861;
var G__25869 = (i__25748_25862 + 1);
seq__25745_25859 = G__25866;
chunk__25746_25860 = G__25867;
count__25747_25861 = G__25868;
i__25748_25862 = G__25869;
continue;
}
} else
{var temp__4092__auto___25870 = cljs.core.seq.call(null,seq__25745_25859);if(temp__4092__auto___25870)
{var seq__25745_25871__$1 = temp__4092__auto___25870;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25745_25871__$1))
{var c__7486__auto___25872 = cljs.core.chunk_first.call(null,seq__25745_25871__$1);{
var G__25873 = cljs.core.chunk_rest.call(null,seq__25745_25871__$1);
var G__25874 = c__7486__auto___25872;
var G__25875 = cljs.core.count.call(null,c__7486__auto___25872);
var G__25876 = 0;
seq__25745_25859 = G__25873;
chunk__25746_25860 = G__25874;
count__25747_25861 = G__25875;
i__25748_25862 = G__25876;
continue;
}
} else
{var vec__25750_25877 = cljs.core.first.call(null,seq__25745_25871__$1);var ev__8107__auto___25878 = cljs.core.nth.call(null,vec__25750_25877,0,null);var func__8108__auto___25879 = cljs.core.nth.call(null,vec__25750_25877,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___25878,func__8108__auto___25879);
{
var G__25880 = cljs.core.next.call(null,seq__25745_25871__$1);
var G__25881 = null;
var G__25882 = 0;
var G__25883 = 0;
seq__25745_25859 = G__25880;
chunk__25746_25860 = G__25881;
count__25747_25861 = G__25882;
i__25748_25862 = G__25883;
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
var p__25736 = null;if (arguments.length > 0) {
  p__25736 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return search_input_ui__delegate.call(this,p__25736);};
search_input_ui.cljs$lang$maxFixedArity = 0;
search_input_ui.cljs$lang$applyTo = (function (arglist__25884){
var p__25736 = cljs.core.seq(arglist__25884);
return search_input_ui__delegate(p__25736);
});
search_input_ui.cljs$core$IFn$_invoke$arity$variadic = search_input_ui__delegate;
return search_input_ui;
})()
;
lt.plugins.note.note_list_ui = (function note_list_ui(notes){var e__8106__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ltnote","div#ltnote",1431776542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Notes"], null),lt.plugins.note.search_input_ui.call(null,(function (keyword){var elem = lt.util.dom.$.call(null,".note-list");lt.util.dom.html.call(null,elem,"");
return lt.util.dom.append.call(null,elem,crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,lt.plugins.note.note_li_item_ui,lt.plugins.note.search_note.call(null,keyword))], null)));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1013907580)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"note-list"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,lt.plugins.note.note_li_item_ui,notes)], null)], null)], null));var seq__25757_25885 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__25758_25886 = null;var count__25759_25887 = 0;var i__25760_25888 = 0;while(true){
if((i__25760_25888 < count__25759_25887))
{var vec__25761_25889 = cljs.core._nth.call(null,chunk__25758_25886,i__25760_25888);var ev__8107__auto___25890 = cljs.core.nth.call(null,vec__25761_25889,0,null);var func__8108__auto___25891 = cljs.core.nth.call(null,vec__25761_25889,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___25890,func__8108__auto___25891);
{
var G__25892 = seq__25757_25885;
var G__25893 = chunk__25758_25886;
var G__25894 = count__25759_25887;
var G__25895 = (i__25760_25888 + 1);
seq__25757_25885 = G__25892;
chunk__25758_25886 = G__25893;
count__25759_25887 = G__25894;
i__25760_25888 = G__25895;
continue;
}
} else
{var temp__4092__auto___25896 = cljs.core.seq.call(null,seq__25757_25885);if(temp__4092__auto___25896)
{var seq__25757_25897__$1 = temp__4092__auto___25896;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25757_25897__$1))
{var c__7486__auto___25898 = cljs.core.chunk_first.call(null,seq__25757_25897__$1);{
var G__25899 = cljs.core.chunk_rest.call(null,seq__25757_25897__$1);
var G__25900 = c__7486__auto___25898;
var G__25901 = cljs.core.count.call(null,c__7486__auto___25898);
var G__25902 = 0;
seq__25757_25885 = G__25899;
chunk__25758_25886 = G__25900;
count__25759_25887 = G__25901;
i__25760_25888 = G__25902;
continue;
}
} else
{var vec__25762_25903 = cljs.core.first.call(null,seq__25757_25897__$1);var ev__8107__auto___25904 = cljs.core.nth.call(null,vec__25762_25903,0,null);var func__8108__auto___25905 = cljs.core.nth.call(null,vec__25762_25903,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___25904,func__8108__auto___25905);
{
var G__25906 = cljs.core.next.call(null,seq__25757_25897__$1);
var G__25907 = null;
var G__25908 = 0;
var G__25909 = 0;
seq__25757_25885 = G__25906;
chunk__25758_25886 = G__25907;
count__25759_25887 = G__25908;
i__25760_25888 = G__25909;
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
lt.plugins.note.search_input = (function search_input(){var e__8106__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Search"], null)], null));var seq__25769_25910 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__25770_25911 = null;var count__25771_25912 = 0;var i__25772_25913 = 0;while(true){
if((i__25772_25913 < count__25771_25912))
{var vec__25773_25914 = cljs.core._nth.call(null,chunk__25770_25911,i__25772_25913);var ev__8107__auto___25915 = cljs.core.nth.call(null,vec__25773_25914,0,null);var func__8108__auto___25916 = cljs.core.nth.call(null,vec__25773_25914,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___25915,func__8108__auto___25916);
{
var G__25917 = seq__25769_25910;
var G__25918 = chunk__25770_25911;
var G__25919 = count__25771_25912;
var G__25920 = (i__25772_25913 + 1);
seq__25769_25910 = G__25917;
chunk__25770_25911 = G__25918;
count__25771_25912 = G__25919;
i__25772_25913 = G__25920;
continue;
}
} else
{var temp__4092__auto___25921 = cljs.core.seq.call(null,seq__25769_25910);if(temp__4092__auto___25921)
{var seq__25769_25922__$1 = temp__4092__auto___25921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25769_25922__$1))
{var c__7486__auto___25923 = cljs.core.chunk_first.call(null,seq__25769_25922__$1);{
var G__25924 = cljs.core.chunk_rest.call(null,seq__25769_25922__$1);
var G__25925 = c__7486__auto___25923;
var G__25926 = cljs.core.count.call(null,c__7486__auto___25923);
var G__25927 = 0;
seq__25769_25910 = G__25924;
chunk__25770_25911 = G__25925;
count__25771_25912 = G__25926;
i__25772_25913 = G__25927;
continue;
}
} else
{var vec__25774_25928 = cljs.core.first.call(null,seq__25769_25922__$1);var ev__8107__auto___25929 = cljs.core.nth.call(null,vec__25774_25928,0,null);var func__8108__auto___25930 = cljs.core.nth.call(null,vec__25774_25928,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___25929,func__8108__auto___25930);
{
var G__25931 = cljs.core.next.call(null,seq__25769_25922__$1);
var G__25932 = null;
var G__25933 = 0;
var G__25934 = 0;
seq__25769_25910 = G__25931;
chunk__25770_25911 = G__25932;
count__25771_25912 = G__25933;
i__25772_25913 = G__25934;
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
lt.plugins.note.search_button = (function search_button(){var e__8106__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),"search"], null));var seq__25781_25935 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){var keyword = lt.util.dom.val.call(null,lt.util.dom.$.call(null,"#ltnote .keyword"));var elem = lt.util.dom.$.call(null,"#ltnote .result");lt.util.dom.html.call(null,elem,"");
return lt.util.dom.append.call(null,elem,crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,lt.plugins.note.note_li_item_ui,lt.plugins.note.search_note.call(null,keyword))], null)));
})], null)));var chunk__25782_25936 = null;var count__25783_25937 = 0;var i__25784_25938 = 0;while(true){
if((i__25784_25938 < count__25783_25937))
{var vec__25785_25939 = cljs.core._nth.call(null,chunk__25782_25936,i__25784_25938);var ev__8107__auto___25940 = cljs.core.nth.call(null,vec__25785_25939,0,null);var func__8108__auto___25941 = cljs.core.nth.call(null,vec__25785_25939,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___25940,func__8108__auto___25941);
{
var G__25942 = seq__25781_25935;
var G__25943 = chunk__25782_25936;
var G__25944 = count__25783_25937;
var G__25945 = (i__25784_25938 + 1);
seq__25781_25935 = G__25942;
chunk__25782_25936 = G__25943;
count__25783_25937 = G__25944;
i__25784_25938 = G__25945;
continue;
}
} else
{var temp__4092__auto___25946 = cljs.core.seq.call(null,seq__25781_25935);if(temp__4092__auto___25946)
{var seq__25781_25947__$1 = temp__4092__auto___25946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25781_25947__$1))
{var c__7486__auto___25948 = cljs.core.chunk_first.call(null,seq__25781_25947__$1);{
var G__25949 = cljs.core.chunk_rest.call(null,seq__25781_25947__$1);
var G__25950 = c__7486__auto___25948;
var G__25951 = cljs.core.count.call(null,c__7486__auto___25948);
var G__25952 = 0;
seq__25781_25935 = G__25949;
chunk__25782_25936 = G__25950;
count__25783_25937 = G__25951;
i__25784_25938 = G__25952;
continue;
}
} else
{var vec__25786_25953 = cljs.core.first.call(null,seq__25781_25947__$1);var ev__8107__auto___25954 = cljs.core.nth.call(null,vec__25786_25953,0,null);var func__8108__auto___25955 = cljs.core.nth.call(null,vec__25786_25953,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___25954,func__8108__auto___25955);
{
var G__25956 = cljs.core.next.call(null,seq__25781_25947__$1);
var G__25957 = null;
var G__25958 = 0;
var G__25959 = 0;
seq__25781_25935 = G__25956;
chunk__25782_25936 = G__25957;
count__25783_25937 = G__25958;
i__25784_25938 = G__25959;
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
lt.plugins.note.search_screen = (function search_screen(){var e__8106__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ltnote","div#ltnote",1431776542),lt.plugins.note.search_input.call(null),lt.plugins.note.search_button.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result","div.result",2762459020)], null)], null));var seq__25793_25960 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__25794_25961 = null;var count__25795_25962 = 0;var i__25796_25963 = 0;while(true){
if((i__25796_25963 < count__25795_25962))
{var vec__25797_25964 = cljs.core._nth.call(null,chunk__25794_25961,i__25796_25963);var ev__8107__auto___25965 = cljs.core.nth.call(null,vec__25797_25964,0,null);var func__8108__auto___25966 = cljs.core.nth.call(null,vec__25797_25964,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___25965,func__8108__auto___25966);
{
var G__25967 = seq__25793_25960;
var G__25968 = chunk__25794_25961;
var G__25969 = count__25795_25962;
var G__25970 = (i__25796_25963 + 1);
seq__25793_25960 = G__25967;
chunk__25794_25961 = G__25968;
count__25795_25962 = G__25969;
i__25796_25963 = G__25970;
continue;
}
} else
{var temp__4092__auto___25971 = cljs.core.seq.call(null,seq__25793_25960);if(temp__4092__auto___25971)
{var seq__25793_25972__$1 = temp__4092__auto___25971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25793_25972__$1))
{var c__7486__auto___25973 = cljs.core.chunk_first.call(null,seq__25793_25972__$1);{
var G__25974 = cljs.core.chunk_rest.call(null,seq__25793_25972__$1);
var G__25975 = c__7486__auto___25973;
var G__25976 = cljs.core.count.call(null,c__7486__auto___25973);
var G__25977 = 0;
seq__25793_25960 = G__25974;
chunk__25794_25961 = G__25975;
count__25795_25962 = G__25976;
i__25796_25963 = G__25977;
continue;
}
} else
{var vec__25798_25978 = cljs.core.first.call(null,seq__25793_25972__$1);var ev__8107__auto___25979 = cljs.core.nth.call(null,vec__25798_25978,0,null);var func__8108__auto___25980 = cljs.core.nth.call(null,vec__25798_25978,1,null);lt.util.dom.on.call(null,e__8106__auto__,ev__8107__auto___25979,func__8108__auto___25980);
{
var G__25981 = cljs.core.next.call(null,seq__25793_25972__$1);
var G__25982 = null;
var G__25983 = 0;
var G__25984 = 0;
seq__25793_25960 = G__25981;
chunk__25794_25961 = G__25982;
count__25795_25962 = G__25983;
i__25796_25963 = G__25984;
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
lt.plugins.note.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___25985 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___25985))
{var ts_25986 = temp__4092__auto___25985;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_25986))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_25986);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.note","on-close-destroy","lt.plugins.note/on-close-destroy",4533274264),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.note.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.note","note-list","lt.plugins.note/note-list",651909814),new cljs.core.Keyword(null,"name","name",1017277949),"Notes",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.note","on-close-destroy","lt.plugins.note/on-close-destroy",4533274264)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.note.note_list_ui.call(null,lt.plugins.note.get_note_list.call(null));
}));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.note","note-search","lt.plugins.note/note-search",3873160380),new cljs.core.Keyword(null,"name","name",1017277949),"Search Note",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.note","on-close-destroy","lt.plugins.note/on-close-destroy",4533274264)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.note.search_screen.call(null);
}));
lt.plugins.note.open_note_list = (function open_note_list(){var x = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.note","note-list","lt.plugins.note/note-list",651909814));lt.objs.tabs.add_BANG_.call(null,x);
lt.objs.tabs.active_BANG_.call(null,x);
return lt.util.dom.$.call(null,".search-keyword").focus();
});
lt.plugins.note.open_search_screen = (function open_search_screen(){var x = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.note","note-search","lt.plugins.note/note-search",3873160380));lt.objs.tabs.add_BANG_.call(null,x);
return lt.objs.tabs.active_BANG_.call(null,x);
});
lt.plugins.note.clean_up = (function clean_up(){var now = lt.plugins.note.moment.call(null);var default_size = cljs.core.count.call(null,now.format(lt.plugins.note.DEFAULT_CONTENT));var seq__25803 = cljs.core.seq.call(null,lt.objs.files.filter_walk.call(null,lt.objs.files.file_QMARK_,cljs.core.deref.call(null,lt.plugins.note.note_dir)));var chunk__25804 = null;var count__25805 = 0;var i__25806 = 0;while(true){
if((i__25806 < count__25805))
{var file = cljs.core._nth.call(null,chunk__25804,i__25806);if(cljs.core._EQ_.call(null,default_size,cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))
{lt.objs.files.delete_BANG_.call(null,file);
} else
{}
{
var G__25987 = seq__25803;
var G__25988 = chunk__25804;
var G__25989 = count__25805;
var G__25990 = (i__25806 + 1);
seq__25803 = G__25987;
chunk__25804 = G__25988;
count__25805 = G__25989;
i__25806 = G__25990;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25803);if(temp__4092__auto__)
{var seq__25803__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25803__$1))
{var c__7486__auto__ = cljs.core.chunk_first.call(null,seq__25803__$1);{
var G__25991 = cljs.core.chunk_rest.call(null,seq__25803__$1);
var G__25992 = c__7486__auto__;
var G__25993 = cljs.core.count.call(null,c__7486__auto__);
var G__25994 = 0;
seq__25803 = G__25991;
chunk__25804 = G__25992;
count__25805 = G__25993;
i__25806 = G__25994;
continue;
}
} else
{var file = cljs.core.first.call(null,seq__25803__$1);if(cljs.core._EQ_.call(null,default_size,cljs.core.count.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)))))
{lt.objs.files.delete_BANG_.call(null,file);
} else
{}
{
var G__25995 = cljs.core.next.call(null,seq__25803__$1);
var G__25996 = null;
var G__25997 = 0;
var G__25998 = 0;
seq__25803 = G__25995;
chunk__25804 = G__25996;
count__25805 = G__25997;
i__25806 = G__25998;
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

//# sourceMappingURL=note_compiled.js.map