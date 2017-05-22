goog.provide('org_html_slideshow.dispatch');
goog.require('cljs.core');
/**
* Stores the current reactions.
*/
org_html_slideshow.dispatch.reactions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
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
var react_to__2 = (function (event_pred,reactor){return react_to.cljs$core$IFn$_invoke$arity$3(null,event_pred,reactor);
});
var react_to__3 = (function (max_count,event_pred,reactor){var reaction = cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$14,max_count,cljs.core.constant$keyword$15,event_pred,cljs.core.constant$keyword$16,reactor], true);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(org_html_slideshow.dispatch.reactions,cljs.core.assoc,reaction,0);
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
org_html_slideshow.dispatch.delete_reaction = (function delete_reaction(reaction){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(org_html_slideshow.dispatch.reactions,cljs.core.dissoc,reaction);
});
/**
* Raise an event to any reactors whose event-pred returns true for
* `event-id`. The `event-id` and `event-data`, if specified, are passed to
* the reactor.
*/
org_html_slideshow.dispatch.fire = (function() {
var fire = null;
var fire__1 = (function (event_id){return fire.cljs$core$IFn$_invoke$arity$2(event_id,null);
});
var fire__2 = (function (event_id,event_data){var matching_reactions = cljs.core.filter((function (p__5963){var vec__5964 = p__5963;var map__5965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5964,0,null);var map__5965__$1 = ((cljs.core.seq_QMARK_(map__5965))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5965):map__5965);var event_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5965__$1,cljs.core.constant$keyword$15);var run_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5964,1,null);return (event_pred.cljs$core$IFn$_invoke$arity$1 ? event_pred.cljs$core$IFn$_invoke$arity$1(event_id) : event_pred.call(null,event_id));
}),cljs.core.deref(org_html_slideshow.dispatch.reactions));var seq__5966 = cljs.core.seq(matching_reactions);var chunk__5967 = null;var count__5968 = 0;var i__5969 = 0;while(true){
if((i__5969 < count__5968))
{var vec__5970 = chunk__5967.cljs$core$IIndexed$_nth$arity$2(chunk__5967,i__5969);var reaction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5970,0,null);var run_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5970,1,null);var map__5971_5974 = reaction;var map__5971_5975__$1 = ((cljs.core.seq_QMARK_(map__5971_5974))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5971_5974):map__5971_5974);var reactor_5976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5971_5975__$1,cljs.core.constant$keyword$16);var max_count_5977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5971_5975__$1,cljs.core.constant$keyword$14);var run_count_5978__$1 = (run_count + 1);(reactor_5976.cljs$core$IFn$_invoke$arity$2 ? reactor_5976.cljs$core$IFn$_invoke$arity$2(event_id,event_data) : reactor_5976.call(null,event_id,event_data));
if(cljs.core.truth_((function (){var and__3941__auto__ = max_count_5977;if(cljs.core.truth_(and__3941__auto__))
{return (max_count_5977 <= run_count_5978__$1);
} else
{return and__3941__auto__;
}
})()))
{org_html_slideshow.dispatch.delete_reaction(reaction);
} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(org_html_slideshow.dispatch.reactions,cljs.core.assoc,reaction,run_count_5978__$1);
}
{
var G__5979 = seq__5966;
var G__5980 = chunk__5967;
var G__5981 = count__5968;
var G__5982 = (i__5969 + 1);
seq__5966 = G__5979;
chunk__5967 = G__5980;
count__5968 = G__5981;
i__5969 = G__5982;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__5966);if(temp__4092__auto__)
{var seq__5966__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__5966__$1))
{var c__3565__auto__ = cljs.core.chunk_first(seq__5966__$1);{
var G__5983 = cljs.core.chunk_rest(seq__5966__$1);
var G__5984 = c__3565__auto__;
var G__5985 = cljs.core.count(c__3565__auto__);
var G__5986 = 0;
seq__5966 = G__5983;
chunk__5967 = G__5984;
count__5968 = G__5985;
i__5969 = G__5986;
continue;
}
} else
{var vec__5972 = cljs.core.first(seq__5966__$1);var reaction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5972,0,null);var run_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5972,1,null);var map__5973_5987 = reaction;var map__5973_5988__$1 = ((cljs.core.seq_QMARK_(map__5973_5987))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5973_5987):map__5973_5987);var reactor_5989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5973_5988__$1,cljs.core.constant$keyword$16);var max_count_5990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5973_5988__$1,cljs.core.constant$keyword$14);var run_count_5991__$1 = (run_count + 1);(reactor_5989.cljs$core$IFn$_invoke$arity$2 ? reactor_5989.cljs$core$IFn$_invoke$arity$2(event_id,event_data) : reactor_5989.call(null,event_id,event_data));
if(cljs.core.truth_((function (){var and__3941__auto__ = max_count_5990;if(cljs.core.truth_(and__3941__auto__))
{return (max_count_5990 <= run_count_5991__$1);
} else
{return and__3941__auto__;
}
})()))
{org_html_slideshow.dispatch.delete_reaction(reaction);
} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(org_html_slideshow.dispatch.reactions,cljs.core.assoc,reaction,run_count_5991__$1);
}
{
var G__5992 = cljs.core.next(seq__5966__$1);
var G__5993 = null;
var G__5994 = 0;
var G__5995 = 0;
seq__5966 = G__5992;
chunk__5967 = G__5993;
count__5968 = G__5994;
i__5969 = G__5995;
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
