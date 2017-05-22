goog.provide('org_html_slideshow.dispatch');
goog.require('cljs.core');
/**
* Stores the current reactions.
*/
org_html_slideshow.dispatch.reactions = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Cause the specified reactor to be invoked whenever an event that
* satisfies `event-pred` is fired. reactor is a function that accepts
* two arguments: `event-id` and `event-data`.
* 
* Returns the reaction.
* 
* The reactor will continue to be invoked until one of two things
* happens:
* 
* 1. `delete-reaction` is called on this reaction.
* 
* 2. The reaction occurs `max-count` times. If `max-count` is not
* specified, the reaction will continue to be invoked until deleted.
* 
* If `max-count` is specified, `delete-reaction` will be called
* automatically when the reaction has occurred the specified number of
* times.
*/
org_html_slideshow.dispatch.react_to = (function() {
var react_to = null;
var react_to__2 = (function (event_pred,reactor){return react_to.call(null,null,event_pred,reactor);
});
var react_to__3 = (function (max_count,event_pred,reactor){var reaction = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"max-count","max-count",3628163800),max_count,new cljs.core.Keyword(null,"event-pred","event-pred",1951978726),event_pred,new cljs.core.Keyword(null,"reactor","reactor",2094298900),reactor], true);cljs.core.swap_BANG_.call(null,org_html_slideshow.dispatch.reactions,cljs.core.assoc,reaction,0);
return reaction;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case 2:
return react_to__2.call(this,max_count,event_pred);
case 3:
return react_to__3.call(this,max_count,event_pred,reactor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
react_to.cljs$core$IFn$_invoke$arity$2 = react_to__2;
react_to.cljs$core$IFn$_invoke$arity$3 = react_to__3;
return react_to;
})()
;
/**
* Delete a reaction. After calling this function, the specified
* reaction will no longer be invoked.
*/
org_html_slideshow.dispatch.delete_reaction = (function delete_reaction(reaction){return cljs.core.swap_BANG_.call(null,org_html_slideshow.dispatch.reactions,cljs.core.dissoc,reaction);
});
/**
* Raise an event to any reactors whose event-pred returns true for
* `event-id`. The `event-id` and `event-data`, if specified, are passed to
* the reactor.
*/
org_html_slideshow.dispatch.fire = (function() {
var fire = null;
var fire__1 = (function (event_id){return fire.call(null,event_id,null);
});
var fire__2 = (function (event_id,event_data){var matching_reactions = cljs.core.filter.call(null,(function (p__3969){var vec__3970 = p__3969;var map__3971 = cljs.core.nth.call(null,vec__3970,0,null);var map__3971__$1 = ((cljs.core.seq_QMARK_.call(null,map__3971))?cljs.core.apply.call(null,cljs.core.hash_map,map__3971):map__3971);var event_pred = cljs.core.get.call(null,map__3971__$1,new cljs.core.Keyword(null,"event-pred","event-pred",1951978726));var run_count = cljs.core.nth.call(null,vec__3970,1,null);return event_pred.call(null,event_id);
}),cljs.core.deref.call(null,org_html_slideshow.dispatch.reactions));var seq__3972 = cljs.core.seq.call(null,matching_reactions);var chunk__3973 = null;var count__3974 = 0;var i__3975 = 0;while(true){
if((i__3975 < count__3974))
{var vec__3976 = cljs.core._nth.call(null,chunk__3973,i__3975);var reaction = cljs.core.nth.call(null,vec__3976,0,null);var run_count = cljs.core.nth.call(null,vec__3976,1,null);var map__3977_3980 = reaction;var map__3977_3981__$1 = ((cljs.core.seq_QMARK_.call(null,map__3977_3980))?cljs.core.apply.call(null,cljs.core.hash_map,map__3977_3980):map__3977_3980);var reactor_3982 = cljs.core.get.call(null,map__3977_3981__$1,new cljs.core.Keyword(null,"reactor","reactor",2094298900));var max_count_3983 = cljs.core.get.call(null,map__3977_3981__$1,new cljs.core.Keyword(null,"max-count","max-count",3628163800));var run_count_3984__$1 = (run_count + 1);reactor_3982.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3941__auto__ = max_count_3983;if(cljs.core.truth_(and__3941__auto__))
{return (max_count_3983 <= run_count_3984__$1);
} else
{return and__3941__auto__;
}
})()))
{org_html_slideshow.dispatch.delete_reaction.call(null,reaction);
} else
{cljs.core.swap_BANG_.call(null,org_html_slideshow.dispatch.reactions,cljs.core.assoc,reaction,run_count_3984__$1);
}
{
var G__3985 = seq__3972;
var G__3986 = chunk__3973;
var G__3987 = count__3974;
var G__3988 = (i__3975 + 1);
seq__3972 = G__3985;
chunk__3973 = G__3986;
count__3974 = G__3987;
i__3975 = G__3988;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__3972);if(temp__4092__auto__)
{var seq__3972__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__3972__$1))
{var c__3565__auto__ = cljs.core.chunk_first.call(null,seq__3972__$1);{
var G__3989 = cljs.core.chunk_rest.call(null,seq__3972__$1);
var G__3990 = c__3565__auto__;
var G__3991 = cljs.core.count.call(null,c__3565__auto__);
var G__3992 = 0;
seq__3972 = G__3989;
chunk__3973 = G__3990;
count__3974 = G__3991;
i__3975 = G__3992;
continue;
}
} else
{var vec__3978 = cljs.core.first.call(null,seq__3972__$1);var reaction = cljs.core.nth.call(null,vec__3978,0,null);var run_count = cljs.core.nth.call(null,vec__3978,1,null);var map__3979_3993 = reaction;var map__3979_3994__$1 = ((cljs.core.seq_QMARK_.call(null,map__3979_3993))?cljs.core.apply.call(null,cljs.core.hash_map,map__3979_3993):map__3979_3993);var reactor_3995 = cljs.core.get.call(null,map__3979_3994__$1,new cljs.core.Keyword(null,"reactor","reactor",2094298900));var max_count_3996 = cljs.core.get.call(null,map__3979_3994__$1,new cljs.core.Keyword(null,"max-count","max-count",3628163800));var run_count_3997__$1 = (run_count + 1);reactor_3995.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3941__auto__ = max_count_3996;if(cljs.core.truth_(and__3941__auto__))
{return (max_count_3996 <= run_count_3997__$1);
} else
{return and__3941__auto__;
}
})()))
{org_html_slideshow.dispatch.delete_reaction.call(null,reaction);
} else
{cljs.core.swap_BANG_.call(null,org_html_slideshow.dispatch.reactions,cljs.core.assoc,reaction,run_count_3997__$1);
}
{
var G__3998 = cljs.core.next.call(null,seq__3972__$1);
var G__3999 = null;
var G__4000 = 0;
var G__4001 = 0;
seq__3972 = G__3998;
chunk__3973 = G__3999;
count__3974 = G__4000;
i__3975 = G__4001;
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
fire = function(event_id,event_data){
switch(arguments.length){
case 1:
return fire__1.call(this,event_id);
case 2:
return fire__2.call(this,event_id,event_data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fire.cljs$core$IFn$_invoke$arity$1 = fire__1;
fire.cljs$core$IFn$_invoke$arity$2 = fire__2;
return fire;
})()
;
