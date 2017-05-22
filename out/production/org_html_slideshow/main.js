goog.provide('org_html_slideshow.main');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.dom.classes');
goog.require('goog.events.KeyCodes');
goog.require('goog.window');
goog.require('goog.events');
goog.require('goog.Timer');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('org_html_slideshow.dispatch');
goog.require('goog.events.KeyHandler');
goog.require('goog.debug.Console');
goog.require('goog.string.format');
goog.require('goog.style');
goog.require('goog.debug.Logger');
goog.require('org_html_slideshow.domina');
goog.require('goog.array');
goog.require('goog.events.EventType');
/**
* Atom containing map from mode ("projection" or "screen") to set
* of stylesheet URLs used only in that mode.
*/
org_html_slideshow.main.stylesheet_urls = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
* Atom containing Vector of slide data
*/
org_html_slideshow.main.slides = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
org_html_slideshow.main.slideshow_mode_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
org_html_slideshow.main.presenter_window = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
org_html_slideshow.main.presenter_start_time = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
* @param {...*} var_args
*/
org_html_slideshow.main.info = (function() { 
var info__delegate = function (msgs){return goog.debug.Logger.getLogger("org_html_slideshow.main").info(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,msgs));
};
var info = function (var_args){
var msgs = null;if (arguments.length > 0) {
  msgs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return info__delegate.call(this,msgs);};
info.cljs$lang$maxFixedArity = 0;
info.cljs$lang$applyTo = (function (arglist__5525){
var msgs = cljs.core.seq(arglist__5525);
return info__delegate(msgs);
});
info.cljs$core$IFn$_invoke$arity$variadic = info__delegate;
return info;
})()
;
org_html_slideshow.main.dom_tags = (function() {
var dom_tags = null;
var dom_tags__1 = (function (tag_name){return goog.array.toArray(goog.dom.getElementsByTagNameAndClass(tag_name));
});
var dom_tags__2 = (function (tag_name,class_name){return goog.array.toArray(goog.dom.getElementsByTagNameAndClass(tag_name,class_name));
});
var dom_tags__3 = (function (tag_name,class_name,inside_elem){return goog.array.toArray(goog.dom.getElementsByTagNameAndClass(tag_name,class_name,inside_elem));
});
dom_tags = function(tag_name,class_name,inside_elem){
switch(arguments.length){
case 1:
return dom_tags__1.call(this,tag_name);
case 2:
return dom_tags__2.call(this,tag_name,class_name);
case 3:
return dom_tags__3.call(this,tag_name,class_name,inside_elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_tags.cljs$core$IFn$_invoke$arity$1 = dom_tags__1;
dom_tags.cljs$core$IFn$_invoke$arity$2 = dom_tags__2;
dom_tags.cljs$core$IFn$_invoke$arity$3 = dom_tags__3;
return dom_tags;
})()
;
/**
* Remove a node from the DOM tree.
*/
org_html_slideshow.main.remove_elem = (function remove_elem(elem){return elem.parentNode.removeChild(elem);
});
org_html_slideshow.main.add_to_head = (function() {
var add_to_head = null;
var add_to_head__1 = (function (elem){return add_to_head.cljs$core$IFn$_invoke$arity$2(elem,null);
});
var add_to_head__2 = (function (elem,parent){return cljs.core.first(org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$3("head",null,parent)).appendChild(elem);
});
add_to_head = function(elem,parent){
switch(arguments.length){
case 1:
return add_to_head__1.call(this,elem);
case 2:
return add_to_head__2.call(this,elem,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_to_head.cljs$core$IFn$_invoke$arity$1 = add_to_head__1;
add_to_head.cljs$core$IFn$_invoke$arity$2 = add_to_head__2;
return add_to_head;
})()
;
org_html_slideshow.main.body_elem = (function body_elem(){return cljs.core.first(org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$1("body"));
});
org_html_slideshow.main.next_elem = (function next_elem(elem){var or__3943__auto__ = elem.firstChild;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = elem.nextSibling;if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var temp__4092__auto__ = elem.parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return parent.nextSibling;
} else
{return null;
}
}
}
});
org_html_slideshow.main.location_fragment = (function location_fragment(){return goog.Uri.parse(window.location).getFragment();
});
org_html_slideshow.main.set_location_fragment = (function set_location_fragment(fragment_id){var uri = goog.Uri.parse(window.location);uri.setFragment(fragment_id);
return window.location = [cljs.core.str(uri)].join('');
});
org_html_slideshow.main.fire_handler = (function fire_handler(event_id){return (function (goog_event){if(cljs.core.truth_(goog_event))
{goog_event.preventDefault();
goog_event.stopPropagation();
} else
{}
return org_html_slideshow.dispatch.fire.cljs$core$IFn$_invoke$arity$2(event_id,goog_event);
});
});
org_html_slideshow.main.show_BANG_ = (function show_BANG_(content){if(cljs.core.truth_(content))
{return goog.style.showElement(org_html_slideshow.domina.single_node(content),true);
} else
{return null;
}
});
org_html_slideshow.main.hide_BANG_ = (function hide_BANG_(content){if(cljs.core.truth_(content))
{return goog.style.showElement(org_html_slideshow.domina.single_node(content),false);
} else
{return null;
}
});
org_html_slideshow.main.stylesheets = (function stylesheets(media_type){return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__5526_SHARP_){return org_html_slideshow.domina.attr(p1__5526_SHARP_,"href");
}),cljs.core.filter((function (elem){var and__3941__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stylesheet",org_html_slideshow.domina.attr(elem,"rel"));if(and__3941__auto__)
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(media_type,org_html_slideshow.domina.attr(elem,"media"));
} else
{return and__3941__auto__;
}
}),org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$1("link"))));
});
org_html_slideshow.main.remove_stylesheets = (function remove_stylesheets(urls){var seq__5531 = cljs.core.seq(cljs.core.filter((function (elem){var and__3941__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stylesheet",org_html_slideshow.domina.attr(elem,"rel"));if(and__3941__auto__)
{return cljs.core.contains_QMARK_(urls,org_html_slideshow.domina.attr(elem,"href"));
} else
{return and__3941__auto__;
}
}),org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$1("link")));var chunk__5532 = null;var count__5533 = 0;var i__5534 = 0;while(true){
if((i__5534 < count__5533))
{var elem = chunk__5532.cljs$core$IIndexed$_nth$arity$2(chunk__5532,i__5534);org_html_slideshow.main.remove_elem(elem);
{
var G__5535 = seq__5531;
var G__5536 = chunk__5532;
var G__5537 = count__5533;
var G__5538 = (i__5534 + 1);
seq__5531 = G__5535;
chunk__5532 = G__5536;
count__5533 = G__5537;
i__5534 = G__5538;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__5531);if(temp__4092__auto__)
{var seq__5531__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__5531__$1))
{var c__3565__auto__ = cljs.core.chunk_first(seq__5531__$1);{
var G__5539 = cljs.core.chunk_rest(seq__5531__$1);
var G__5540 = c__3565__auto__;
var G__5541 = cljs.core.count(c__3565__auto__);
var G__5542 = 0;
seq__5531 = G__5539;
chunk__5532 = G__5540;
count__5533 = G__5541;
i__5534 = G__5542;
continue;
}
} else
{var elem = cljs.core.first(seq__5531__$1);org_html_slideshow.main.remove_elem(elem);
{
var G__5543 = cljs.core.next(seq__5531__$1);
var G__5544 = null;
var G__5545 = 0;
var G__5546 = 0;
seq__5531 = G__5543;
chunk__5532 = G__5544;
count__5533 = G__5545;
i__5534 = G__5546;
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
org_html_slideshow.main.add_stylesheets = (function() {
var add_stylesheets = null;
var add_stylesheets__1 = (function (urls){return add_stylesheets.cljs$core$IFn$_invoke$arity$2(urls,null);
});
var add_stylesheets__2 = (function (urls,parent){var seq__5553 = cljs.core.seq(urls);var chunk__5554 = null;var count__5555 = 0;var i__5556 = 0;while(true){
if((i__5556 < count__5555))
{var url = chunk__5554.cljs$core$IIndexed$_nth$arity$2(chunk__5554,i__5556);org_html_slideshow.main.add_to_head.cljs$core$IFn$_invoke$arity$2((function (){var G__5557 = goog.dom.createDom("link");G__5557.setAttribute("rel","stylesheet");
G__5557.setAttribute("type","text/css");
G__5557.setAttribute("href",url);
return G__5557;
})(),parent);
{
var G__5559 = seq__5553;
var G__5560 = chunk__5554;
var G__5561 = count__5555;
var G__5562 = (i__5556 + 1);
seq__5553 = G__5559;
chunk__5554 = G__5560;
count__5555 = G__5561;
i__5556 = G__5562;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__5553);if(temp__4092__auto__)
{var seq__5553__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__5553__$1))
{var c__3565__auto__ = cljs.core.chunk_first(seq__5553__$1);{
var G__5563 = cljs.core.chunk_rest(seq__5553__$1);
var G__5564 = c__3565__auto__;
var G__5565 = cljs.core.count(c__3565__auto__);
var G__5566 = 0;
seq__5553 = G__5563;
chunk__5554 = G__5564;
count__5555 = G__5565;
i__5556 = G__5566;
continue;
}
} else
{var url = cljs.core.first(seq__5553__$1);org_html_slideshow.main.add_to_head.cljs$core$IFn$_invoke$arity$2((function (){var G__5558 = goog.dom.createDom("link");G__5558.setAttribute("rel","stylesheet");
G__5558.setAttribute("type","text/css");
G__5558.setAttribute("href",url);
return G__5558;
})(),parent);
{
var G__5567 = cljs.core.next(seq__5553__$1);
var G__5568 = null;
var G__5569 = 0;
var G__5570 = 0;
seq__5553 = G__5567;
chunk__5554 = G__5568;
count__5555 = G__5569;
i__5556 = G__5570;
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
add_stylesheets = function(urls,parent){
switch(arguments.length){
case 1:
return add_stylesheets__1.call(this,urls);
case 2:
return add_stylesheets__2.call(this,urls,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_stylesheets.cljs$core$IFn$_invoke$arity$1 = add_stylesheets__1;
add_stylesheets.cljs$core$IFn$_invoke$arity$2 = add_stylesheets__2;
return add_stylesheets;
})()
;
org_html_slideshow.main.get_folds = (function get_folds(){return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (elem){return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$17,elem.parentNode.parentNode,cljs.core.constant$keyword$18,cljs.core.first(org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$3("div",null,(org_html_slideshow.main.nearest_containing_div.cljs$core$IFn$_invoke$arity$1 ? org_html_slideshow.main.nearest_containing_div.cljs$core$IFn$_invoke$arity$1(elem) : org_html_slideshow.main.nearest_containing_div.call(null,elem))))], true);
}),org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$2("span","fold")));
});
org_html_slideshow.main.show_hide_html = " <a href=\"#\" class=\"show-hide\"><span>show/hide</span></a>";
org_html_slideshow.main.toggle_visibility = (function toggle_visibility(head,body){if(cljs.core.truth_(goog.style.isElementShown(body)))
{goog.style.showElement(body,false);
goog.dom.classes.remove(head,"unfolded");
return goog.dom.classes.add(head,"folded");
} else
{goog.style.showElement(body,true);
goog.dom.classes.remove(head,"folded");
return goog.dom.classes.add(head,"unfolded");
}
});
org_html_slideshow.main.handle_show_hide = (function handle_show_hide(event){event.preventDefault();
var head_elem = event.currentTarget;var body_elem = cljs.core.first(org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$3("div",null,(org_html_slideshow.main.nearest_containing_div.cljs$core$IFn$_invoke$arity$1 ? org_html_slideshow.main.nearest_containing_div.cljs$core$IFn$_invoke$arity$1(head_elem) : org_html_slideshow.main.nearest_containing_div.call(null,head_elem))));return org_html_slideshow.main.toggle_visibility(head_elem,body_elem);
});
org_html_slideshow.main.install_folds = (function install_folds(){var seq__5577 = cljs.core.seq(org_html_slideshow.main.get_folds());var chunk__5578 = null;var count__5579 = 0;var i__5580 = 0;while(true){
if((i__5580 < count__5579))
{var map__5581 = chunk__5578.cljs$core$IIndexed$_nth$arity$2(chunk__5578,i__5580);var map__5581__$1 = ((cljs.core.seq_QMARK_(map__5581))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5581):map__5581);var body_elem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5581__$1,cljs.core.constant$keyword$18);var head_elem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5581__$1,cljs.core.constant$keyword$17);org_html_slideshow.main.toggle_visibility(head_elem,body_elem);
var a_5583 = goog.dom.htmlToDocumentFragment(org_html_slideshow.main.show_hide_html);head_elem.appendChild(a_5583);
var a_5584__$1 = org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$3("a","show-hide",head_elem);goog.events.listen(head_elem,goog.events.EventType.CLICK,org_html_slideshow.main.handle_show_hide);
{
var G__5585 = seq__5577;
var G__5586 = chunk__5578;
var G__5587 = count__5579;
var G__5588 = (i__5580 + 1);
seq__5577 = G__5585;
chunk__5578 = G__5586;
count__5579 = G__5587;
i__5580 = G__5588;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__5577);if(temp__4092__auto__)
{var seq__5577__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__5577__$1))
{var c__3565__auto__ = cljs.core.chunk_first(seq__5577__$1);{
var G__5589 = cljs.core.chunk_rest(seq__5577__$1);
var G__5590 = c__3565__auto__;
var G__5591 = cljs.core.count(c__3565__auto__);
var G__5592 = 0;
seq__5577 = G__5589;
chunk__5578 = G__5590;
count__5579 = G__5591;
i__5580 = G__5592;
continue;
}
} else
{var map__5582 = cljs.core.first(seq__5577__$1);var map__5582__$1 = ((cljs.core.seq_QMARK_(map__5582))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5582):map__5582);var body_elem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5582__$1,cljs.core.constant$keyword$18);var head_elem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5582__$1,cljs.core.constant$keyword$17);org_html_slideshow.main.toggle_visibility(head_elem,body_elem);
var a_5593 = goog.dom.htmlToDocumentFragment(org_html_slideshow.main.show_hide_html);head_elem.appendChild(a_5593);
var a_5594__$1 = org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$3("a","show-hide",head_elem);goog.events.listen(head_elem,goog.events.EventType.CLICK,org_html_slideshow.main.handle_show_hide);
{
var G__5595 = cljs.core.next(seq__5577__$1);
var G__5596 = null;
var G__5597 = 0;
var G__5598 = 0;
seq__5577 = G__5595;
chunk__5578 = G__5596;
count__5579 = G__5597;
i__5580 = G__5598;
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
org_html_slideshow.main.control_html = "<div id=\"c-panel\">\n<a id=\"c-toggle\" href=\"#\">\n  <span class=\"label\">Toggle slide-show mode</span>\n  <span class=\"key\">T</span>\n</a>\n<a id=\"c-first\" href=\"#\">\n  <span class=\"label\">First slide</span>\n  <span class=\"key\">Home</span>\n</a>\n<a id=\"c-prev\" href=\"#\">\n  <span class=\"label\">Previous slide</span>\n  <span class=\"key\">P</span>\n</a>\n<a id=\"c-next\" href=\"#\">\n  <span class=\"label\">Next slide</span>\n  <span class=\"key\">N</span>\n</a>\n<a id=\"c-last\" href=\"#\">\n  <span class=\"label\">Last slide</span>\n  <span class=\"key\">End</span>\n</a>\n<a id=\"c-presenter-window\" href=\"#\">\n  <span class=\"label\">Open presenter preview</span>\n</a>\n</div>";
org_html_slideshow.main.show_control_panel = (function show_control_panel(){return goog.style.setStyle(goog.dom.getElement("c-panel"),"opacity",0.75);
});
org_html_slideshow.main.hide_control_panel = (function hide_control_panel(){return goog.style.setStyle(goog.dom.getElement("c-panel"),"opacity",0.0);
});
org_html_slideshow.main.install_control_panel = (function install_control_panel(){org_html_slideshow.main.body_elem().appendChild(goog.dom.htmlToDocumentFragment(org_html_slideshow.main.control_html));
var panel = goog.dom.getElement("c-panel");org_html_slideshow.dispatch.fire.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$19);
goog.Timer.callOnce(org_html_slideshow.main.fire_handler(cljs.core.constant$keyword$20),3000);
goog.events.listen(panel,goog.events.EventType.MOUSEOVER,org_html_slideshow.main.fire_handler(cljs.core.constant$keyword$19));
goog.events.listen(panel,goog.events.EventType.MOUSEOUT,org_html_slideshow.main.fire_handler(cljs.core.constant$keyword$20));
goog.events.listen(goog.dom.getElement("c-toggle"),goog.events.EventType.CLICK,org_html_slideshow.main.fire_handler(cljs.core.constant$keyword$21));
goog.events.listen(goog.dom.getElement("c-first"),goog.events.EventType.CLICK,org_html_slideshow.main.fire_handler(cljs.core.constant$keyword$22));
goog.events.listen(goog.dom.getElement("c-prev"),goog.events.EventType.CLICK,org_html_slideshow.main.fire_handler(cljs.core.constant$keyword$23));
goog.events.listen(goog.dom.getElement("c-next"),goog.events.EventType.CLICK,org_html_slideshow.main.fire_handler(cljs.core.constant$keyword$24));
goog.events.listen(goog.dom.getElement("c-last"),goog.events.EventType.CLICK,org_html_slideshow.main.fire_handler(cljs.core.constant$keyword$25));
return goog.events.listen(goog.dom.getElement("c-presenter-window"),goog.events.EventType.CLICK,org_html_slideshow.main.fire_handler(cljs.core.constant$keyword$26));
});
org_html_slideshow.main.current_slide_div_html = "<div id=\"current-slide\"></div>";
org_html_slideshow.main.nearest_containing_div = (function nearest_containing_div(elem){while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("DIV",elem.nodeName))
{return elem;
} else
{{
var G__5599 = elem.parentNode;
elem = G__5599;
continue;
}
}
break;
}
});
org_html_slideshow.main.heading_tag_names = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__5600_SHARP_){return [cljs.core.str("H"),cljs.core.str(p1__5600_SHARP_)].join('');
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2(1,9)));
org_html_slideshow.main.copy_heading_tags_to_div_classes = (function copy_heading_tags_to_div_classes(){var seq__5613 = cljs.core.seq(org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$2("span","tag"));var chunk__5614 = null;var count__5615 = 0;var i__5616 = 0;while(true){
if((i__5616 < count__5615))
{var tags = chunk__5614.cljs$core$IIndexed$_nth$arity$2(chunk__5614,i__5616);var div_5625 = org_html_slideshow.main.nearest_containing_div(tags);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("text-table-of-contents",div_5625.id))
{} else
{var seq__5617_5626 = cljs.core.seq(org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$3("span",null,tags));var chunk__5618_5627 = null;var count__5619_5628 = 0;var i__5620_5629 = 0;while(true){
if((i__5620_5629 < count__5619_5628))
{var tag_5630 = chunk__5618_5627.cljs$core$IIndexed$_nth$arity$2(chunk__5618_5627,i__5620_5629);goog.dom.classes.add(div_5625,goog.dom.classes.get(tag_5630));
{
var G__5631 = seq__5617_5626;
var G__5632 = chunk__5618_5627;
var G__5633 = count__5619_5628;
var G__5634 = (i__5620_5629 + 1);
seq__5617_5626 = G__5631;
chunk__5618_5627 = G__5632;
count__5619_5628 = G__5633;
i__5620_5629 = G__5634;
continue;
}
} else
{var temp__4092__auto___5635 = cljs.core.seq(seq__5617_5626);if(temp__4092__auto___5635)
{var seq__5617_5636__$1 = temp__4092__auto___5635;if(cljs.core.chunked_seq_QMARK_(seq__5617_5636__$1))
{var c__3565__auto___5637 = cljs.core.chunk_first(seq__5617_5636__$1);{
var G__5638 = cljs.core.chunk_rest(seq__5617_5636__$1);
var G__5639 = c__3565__auto___5637;
var G__5640 = cljs.core.count(c__3565__auto___5637);
var G__5641 = 0;
seq__5617_5626 = G__5638;
chunk__5618_5627 = G__5639;
count__5619_5628 = G__5640;
i__5620_5629 = G__5641;
continue;
}
} else
{var tag_5642 = cljs.core.first(seq__5617_5636__$1);goog.dom.classes.add(div_5625,goog.dom.classes.get(tag_5642));
{
var G__5643 = cljs.core.next(seq__5617_5636__$1);
var G__5644 = null;
var G__5645 = 0;
var G__5646 = 0;
seq__5617_5626 = G__5643;
chunk__5618_5627 = G__5644;
count__5619_5628 = G__5645;
i__5620_5629 = G__5646;
continue;
}
}
} else
{}
}
break;
}
}
{
var G__5647 = seq__5613;
var G__5648 = chunk__5614;
var G__5649 = count__5615;
var G__5650 = (i__5616 + 1);
seq__5613 = G__5647;
chunk__5614 = G__5648;
count__5615 = G__5649;
i__5616 = G__5650;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__5613);if(temp__4092__auto__)
{var seq__5613__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__5613__$1))
{var c__3565__auto__ = cljs.core.chunk_first(seq__5613__$1);{
var G__5651 = cljs.core.chunk_rest(seq__5613__$1);
var G__5652 = c__3565__auto__;
var G__5653 = cljs.core.count(c__3565__auto__);
var G__5654 = 0;
seq__5613 = G__5651;
chunk__5614 = G__5652;
count__5615 = G__5653;
i__5616 = G__5654;
continue;
}
} else
{var tags = cljs.core.first(seq__5613__$1);var div_5655 = org_html_slideshow.main.nearest_containing_div(tags);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("text-table-of-contents",div_5655.id))
{} else
{var seq__5621_5656 = cljs.core.seq(org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$3("span",null,tags));var chunk__5622_5657 = null;var count__5623_5658 = 0;var i__5624_5659 = 0;while(true){
if((i__5624_5659 < count__5623_5658))
{var tag_5660 = chunk__5622_5657.cljs$core$IIndexed$_nth$arity$2(chunk__5622_5657,i__5624_5659);goog.dom.classes.add(div_5655,goog.dom.classes.get(tag_5660));
{
var G__5661 = seq__5621_5656;
var G__5662 = chunk__5622_5657;
var G__5663 = count__5623_5658;
var G__5664 = (i__5624_5659 + 1);
seq__5621_5656 = G__5661;
chunk__5622_5657 = G__5662;
count__5623_5658 = G__5663;
i__5624_5659 = G__5664;
continue;
}
} else
{var temp__4092__auto___5665__$1 = cljs.core.seq(seq__5621_5656);if(temp__4092__auto___5665__$1)
{var seq__5621_5666__$1 = temp__4092__auto___5665__$1;if(cljs.core.chunked_seq_QMARK_(seq__5621_5666__$1))
{var c__3565__auto___5667 = cljs.core.chunk_first(seq__5621_5666__$1);{
var G__5668 = cljs.core.chunk_rest(seq__5621_5666__$1);
var G__5669 = c__3565__auto___5667;
var G__5670 = cljs.core.count(c__3565__auto___5667);
var G__5671 = 0;
seq__5621_5656 = G__5668;
chunk__5622_5657 = G__5669;
count__5623_5658 = G__5670;
i__5624_5659 = G__5671;
continue;
}
} else
{var tag_5672 = cljs.core.first(seq__5621_5666__$1);goog.dom.classes.add(div_5655,goog.dom.classes.get(tag_5672));
{
var G__5673 = cljs.core.next(seq__5621_5666__$1);
var G__5674 = null;
var G__5675 = 0;
var G__5676 = 0;
seq__5621_5656 = G__5673;
chunk__5622_5657 = G__5674;
count__5623_5658 = G__5675;
i__5624_5659 = G__5676;
continue;
}
}
} else
{}
}
break;
}
}
{
var G__5677 = cljs.core.next(seq__5613__$1);
var G__5678 = null;
var G__5679 = 0;
var G__5680 = 0;
seq__5613 = G__5677;
chunk__5614 = G__5678;
count__5615 = G__5679;
i__5616 = G__5680;
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
org_html_slideshow.main.remove_nested_sections = (function remove_nested_sections(slide_div_elem){var div = slide_div_elem.cloneNode(true);var seq__5686_5690 = cljs.core.seq(org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$3("div",null,div));var chunk__5687_5691 = null;var count__5688_5692 = 0;var i__5689_5693 = 0;while(true){
if((i__5689_5693 < count__5688_5692))
{var elem_5694 = chunk__5687_5691.cljs$core$IIndexed$_nth$arity$2(chunk__5687_5691,i__5689_5693);if(cljs.core.truth_(cljs.core.some(((function (seq__5686_5690,chunk__5687_5691,count__5688_5692,i__5689_5693,elem_5694){
return (function (p1__5681_SHARP_){return goog.dom.classes.has(elem_5694,[cljs.core.str("outline-"),cljs.core.str(p1__5681_SHARP_)].join(''));
});})(seq__5686_5690,chunk__5687_5691,count__5688_5692,i__5689_5693,elem_5694))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(1,9))))
{org_html_slideshow.main.remove_elem(elem_5694);
} else
{}
{
var G__5695 = seq__5686_5690;
var G__5696 = chunk__5687_5691;
var G__5697 = count__5688_5692;
var G__5698 = (i__5689_5693 + 1);
seq__5686_5690 = G__5695;
chunk__5687_5691 = G__5696;
count__5688_5692 = G__5697;
i__5689_5693 = G__5698;
continue;
}
} else
{var temp__4092__auto___5699 = cljs.core.seq(seq__5686_5690);if(temp__4092__auto___5699)
{var seq__5686_5700__$1 = temp__4092__auto___5699;if(cljs.core.chunked_seq_QMARK_(seq__5686_5700__$1))
{var c__3565__auto___5701 = cljs.core.chunk_first(seq__5686_5700__$1);{
var G__5702 = cljs.core.chunk_rest(seq__5686_5700__$1);
var G__5703 = c__3565__auto___5701;
var G__5704 = cljs.core.count(c__3565__auto___5701);
var G__5705 = 0;
seq__5686_5690 = G__5702;
chunk__5687_5691 = G__5703;
count__5688_5692 = G__5704;
i__5689_5693 = G__5705;
continue;
}
} else
{var elem_5706 = cljs.core.first(seq__5686_5700__$1);if(cljs.core.truth_(cljs.core.some(((function (seq__5686_5690,chunk__5687_5691,count__5688_5692,i__5689_5693,elem_5706,seq__5686_5700__$1,temp__4092__auto___5699){
return (function (p1__5681_SHARP_){return goog.dom.classes.has(elem_5706,[cljs.core.str("outline-"),cljs.core.str(p1__5681_SHARP_)].join(''));
});})(seq__5686_5690,chunk__5687_5691,count__5688_5692,i__5689_5693,elem_5706,seq__5686_5700__$1,temp__4092__auto___5699))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(1,9))))
{org_html_slideshow.main.remove_elem(elem_5706);
} else
{}
{
var G__5707 = cljs.core.next(seq__5686_5700__$1);
var G__5708 = null;
var G__5709 = 0;
var G__5710 = 0;
seq__5686_5690 = G__5707;
chunk__5687_5691 = G__5708;
count__5688_5692 = G__5709;
i__5689_5693 = G__5710;
continue;
}
}
} else
{}
}
break;
}
return div;
});
org_html_slideshow.main.slide_notes_html = (function slide_notes_html(slide_div_elem){var temp__4090__auto__ = cljs.core.first(cljs.core.filter((function (elem){var and__3941__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("DIV",elem.nodeName);if(and__3941__auto__)
{return goog.dom.classes.has(elem,"notes");
} else
{return and__3941__auto__;
}
}),slide_div_elem.children));if(cljs.core.truth_(temp__4090__auto__))
{var div = temp__4090__auto__;return goog.dom.getOuterHtml(div);
} else
{return "";
}
});
org_html_slideshow.main.get_slides = (function get_slides(){return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (elem){return cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$27,elem.id,cljs.core.constant$keyword$28,goog.dom.getOuterHtml(org_html_slideshow.main.remove_nested_sections(elem)),cljs.core.constant$keyword$29,org_html_slideshow.main.slide_notes_html(elem)], true);
}),org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$2("div","slide")));
});
org_html_slideshow.main.slide_from_id = (function slide_from_id(id){return cljs.core.some((function (slide){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.constant$keyword$27.call(null,slide)))
{return slide;
} else
{return null;
}
}),cljs.core.deref(org_html_slideshow.main.slides));
});
org_html_slideshow.main.find_slide_after = (function find_slide_after(id){var G__5716 = cljs.core.deref(org_html_slideshow.main.slides);var vec__5717 = G__5716;var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5717,0,null);var r = cljs.core.nthnext(vec__5717,1);var G__5716__$1 = G__5716;while(true){
var vec__5718 = G__5716__$1;var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5718,0,null);var r__$1 = cljs.core.nthnext(vec__5718,1);if(cljs.core.truth_(s__$1))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$27.call(null,s__$1),id))
{return cljs.core.first(r__$1);
} else
{{
var G__5719 = r__$1;
G__5716__$1 = G__5719;
continue;
}
}
} else
{return null;
}
break;
}
});
org_html_slideshow.main.current_slide = (function current_slide(){var fragment_id = org_html_slideshow.main.location_fragment();var target_id = (cljs.core.truth_(goog.string.startsWith(fragment_id,"outline-container-"))?fragment_id:[cljs.core.str("outline-container-"),cljs.core.str(fragment_id)].join(''));var or__3943__auto__ = org_html_slideshow.main.slide_from_id(target_id);if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (function (){var and__3941__auto__ = cljs.core.seq(fragment_id);if(and__3941__auto__)
{return org_html_slideshow.main.find_slide_after(target_id);
} else
{return and__3941__auto__;
}
})();if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return cljs.core.first(cljs.core.deref(org_html_slideshow.main.slides));
}
}
});
org_html_slideshow.main.next_slide = (function next_slide(){return org_html_slideshow.main.find_slide_after(cljs.core.constant$keyword$27.call(null,org_html_slideshow.main.current_slide()));
});
org_html_slideshow.main.show_slide = (function show_slide(p__5720){var map__5722 = p__5720;var map__5722__$1 = ((cljs.core.seq_QMARK_(map__5722))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5722):map__5722);var html = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5722__$1,cljs.core.constant$keyword$28);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5722__$1,cljs.core.constant$keyword$27);org_html_slideshow.main.set_location_fragment(id);
goog.dom.getElement("current-slide").innerHTML = html;
return (org_html_slideshow.main.show_presenter_slides.cljs$core$IFn$_invoke$arity$0 ? org_html_slideshow.main.show_presenter_slides.cljs$core$IFn$_invoke$arity$0() : org_html_slideshow.main.show_presenter_slides.call(null));
});
org_html_slideshow.main.enter_slideshow_mode = (function enter_slideshow_mode(){org_html_slideshow.main.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"enter-slideshow-mode","enter-slideshow-mode",-674560720,null))], 0));
org_html_slideshow.main.hide_BANG_(org_html_slideshow.domina.by_id("preamble"));
org_html_slideshow.main.hide_BANG_(org_html_slideshow.domina.by_id("content"));
org_html_slideshow.main.hide_BANG_(org_html_slideshow.domina.by_id("postamble"));
org_html_slideshow.main.remove_stylesheets(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org_html_slideshow.main.stylesheet_urls),"screen"));
org_html_slideshow.main.add_stylesheets.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org_html_slideshow.main.stylesheet_urls),"projection"));
org_html_slideshow.main.show_BANG_(org_html_slideshow.domina.by_id("current-slide"));
return org_html_slideshow.main.show_slide(org_html_slideshow.main.current_slide());
});
org_html_slideshow.main.leave_slideshow_mode = (function leave_slideshow_mode(){org_html_slideshow.main.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"leave-slideshow-mode","leave-slideshow-mode",1111892849,null))], 0));
org_html_slideshow.main.hide_BANG_(org_html_slideshow.domina.by_id("current-slide"));
org_html_slideshow.main.remove_stylesheets(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org_html_slideshow.main.stylesheet_urls),"projection"));
org_html_slideshow.main.add_stylesheets.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org_html_slideshow.main.stylesheet_urls),"screen"));
org_html_slideshow.main.show_BANG_(org_html_slideshow.domina.by_id("preamble"));
org_html_slideshow.main.show_BANG_(org_html_slideshow.domina.by_id("content"));
org_html_slideshow.main.show_BANG_(org_html_slideshow.domina.by_id("postamble"));
return goog.dom.getElement(org_html_slideshow.main.location_fragment()).scrollIntoView();
});
org_html_slideshow.main.change_mode = (function change_mode(){if(cljs.core.truth_(cljs.core.deref(org_html_slideshow.main.slideshow_mode_QMARK_)))
{return org_html_slideshow.main.enter_slideshow_mode();
} else
{return org_html_slideshow.main.leave_slideshow_mode();
}
});
org_html_slideshow.main.toggle_mode = (function toggle_mode(){org_html_slideshow.main.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"toggle-mode","toggle-mode",1962544693,null))], 0));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(org_html_slideshow.main.slideshow_mode_QMARK_,cljs.core.not);
});
cljs.core.add_watch(org_html_slideshow.main.slideshow_mode_QMARK_,cljs.core.constant$keyword$30,(function (k,r,o,n){return org_html_slideshow.dispatch.fire.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$30);
}));
org_html_slideshow.main.show_next_slide = (function show_next_slide(){var current = org_html_slideshow.main.current_slide();var next = cljs.core.second(cljs.core.drop_while(((function (current){
return (function (p1__5723_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current,p1__5723_SHARP_);
});})(current))
,cljs.core.deref(org_html_slideshow.main.slides)));if(cljs.core.truth_(next))
{org_html_slideshow.main.show_slide(next);
} else
{}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(org_html_slideshow.main.presenter_start_time,(function (t){if((t == null))
{return (new Date()).getTime();
} else
{return t;
}
}));
});
org_html_slideshow.main.show_prev_slide = (function show_prev_slide(){var current = org_html_slideshow.main.current_slide();var prev = cljs.core.last(cljs.core.take_while(((function (current){
return (function (p1__5724_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current,p1__5724_SHARP_);
});})(current))
,cljs.core.deref(org_html_slideshow.main.slides)));if(cljs.core.truth_(prev))
{return org_html_slideshow.main.show_slide(prev);
} else
{return null;
}
});
org_html_slideshow.main.show_first_slide = (function show_first_slide(){return org_html_slideshow.main.show_slide(cljs.core.first(cljs.core.deref(org_html_slideshow.main.slides)));
});
org_html_slideshow.main.show_last_slide = (function show_last_slide(){return org_html_slideshow.main.show_slide(cljs.core.last(cljs.core.deref(org_html_slideshow.main.slides)));
});
org_html_slideshow.main.go_to_top = (function go_to_top(){org_html_slideshow.main.set_location_fragment("top");
return window.scrollTo(0,0);
});
org_html_slideshow.main.normal_keymap = cljs.core.PersistentArrayMap.fromArray([goog.events.KeyCodes.T,cljs.core.constant$keyword$21,goog.events.KeyCodes.HOME,cljs.core.constant$keyword$31], true);
org_html_slideshow.main.slideshow_keymap = cljs.core.PersistentArrayMap.fromArray([goog.events.KeyCodes.T,cljs.core.constant$keyword$21,goog.events.KeyCodes.HOME,cljs.core.constant$keyword$22,goog.events.KeyCodes.END,cljs.core.constant$keyword$25,goog.events.KeyCodes.SPACE,cljs.core.constant$keyword$32,goog.events.KeyCodes.RIGHT,cljs.core.constant$keyword$24,goog.events.KeyCodes.N,cljs.core.constant$keyword$24,goog.events.KeyCodes.LEFT,cljs.core.constant$keyword$23,goog.events.KeyCodes.P,cljs.core.constant$keyword$23], true);
org_html_slideshow.main.handle_key = (function handle_key(event){var code = event.keyCode;var keymap = (cljs.core.truth_(cljs.core.deref(org_html_slideshow.main.slideshow_mode_QMARK_))?org_html_slideshow.main.slideshow_keymap:org_html_slideshow.main.normal_keymap);var event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(keymap,code);if(cljs.core.truth_(event_id))
{org_html_slideshow.dispatch.fire.cljs$core$IFn$_invoke$arity$1(event_id);
event.preventDefault();
return event.stopPropagation();
} else
{return null;
}
});
org_html_slideshow.main.install_keyhandler = (function install_keyhandler(document){return goog.events.listen((new goog.events.KeyHandler(document)),goog.events.KeyHandler.EventType.KEY,org_html_slideshow.main.handle_key);
});
org_html_slideshow.main.presenter_display_html = "\n<html>\n  <head>\n  </head>\n  <body class=\"presenter-display\">\n    <div id=\"presenter-slide-preview\">\n      <div id=\"presenter-current-slide-container\">\n        <span class=\"presenter-label\">Current Slide</span>\n        <div id=\"presenter-current-slide\">\n        </div>\n      </div>\n      <div id=\"presenter-next-slide-container\">\n        <span class=\"presenter-label\">Next Slide</span>\n        <div id=\"presenter-next-slide\">\n        </div>\n      </div>\n     </div>\n     <div id=\"presenter-notes-container\"></div>\n     <div id=\"presenter-times\" class=\"presenter-label\">\n       <div id=\"presenter-elapsed-time-container\">\n          <span id=\"presenter-elapsed-time\">0:00:00</span>\n          <span id=\"presenter-elapsed-time-reset-container\">\n            <a href=\"#\" id=\"presenter-elapsed-time-reset\">reset</a>\n          </span>\n       </div>\n       <div id=\"presenter-clock-time\"><span></span></div>\n     </div>\n  </body>\n</html>\n";
org_html_slideshow.main.get_presenter_window = (function get_presenter_window(){if(cljs.core.truth_(cljs.core.deref(org_html_slideshow.main.presenter_window)))
{if(cljs.core.truth_(cljs.core.deref(org_html_slideshow.main.presenter_window).closed))
{return cljs.core.reset_BANG_(org_html_slideshow.main.presenter_window,null);
} else
{return cljs.core.deref(org_html_slideshow.main.presenter_window);
}
} else
{return null;
}
});
org_html_slideshow.main.update_presenter_clock_time = (function update_presenter_clock_time(win){var elem = win.document.getElementById("presenter-clock-time");var now = (new Date());var hours = now.getHours();var display_hours = (((12 < hours))?(hours - 12):hours);return elem.innerHTML = goog.string.format("<span>%d:%02d:%02d<span id=\"presenter-clock-time-ampm\"> %s</span></span>",display_hours,now.getMinutes(),now.getSeconds(),(((12 <= hours))?"pm":"am"));
});
org_html_slideshow.main.elapsed_time_string = (function elapsed_time_string(){var elapsed = ((new Date()).getTime() - cljs.core.deref(org_html_slideshow.main.presenter_start_time));var secs = cljs.core.mod((elapsed / 1000),60);var mins = cljs.core.mod((elapsed / (60 * 1000)),60);var hours = (elapsed / ((60 * 60) * 1000));return goog.string.format("%d:%02d:%02d",hours,mins,secs);
});
org_html_slideshow.main.update_presenter_elapsed_time = (function update_presenter_elapsed_time(win){var elem = win.document.getElementById("presenter-elapsed-time");return elem.innerHTML = (cljs.core.truth_(cljs.core.deref(org_html_slideshow.main.presenter_start_time))?org_html_slideshow.main.elapsed_time_string():"0:00:00");
});
org_html_slideshow.main.update_presenter_clock = (function update_presenter_clock(){var temp__4092__auto__ = org_html_slideshow.main.get_presenter_window();if(cljs.core.truth_(temp__4092__auto__))
{var win = temp__4092__auto__;org_html_slideshow.main.update_presenter_clock_time(win);
org_html_slideshow.main.update_presenter_elapsed_time(win);
return window.setTimeout(update_presenter_clock,1000);
} else
{return null;
}
});
org_html_slideshow.main.reset_elapsed_time = (function reset_elapsed_time(){cljs.core.reset_BANG_(org_html_slideshow.main.presenter_start_time,null);
var temp__4092__auto__ = org_html_slideshow.main.get_presenter_window();if(cljs.core.truth_(temp__4092__auto__))
{var win = temp__4092__auto__;return org_html_slideshow.main.update_presenter_elapsed_time(win);
} else
{return null;
}
});
org_html_slideshow.main.show_presenter_slides = (function show_presenter_slides(){var temp__4092__auto__ = org_html_slideshow.main.get_presenter_window();if(cljs.core.truth_(temp__4092__auto__))
{var win = temp__4092__auto__;var map__5726_5727 = org_html_slideshow.main.current_slide();var map__5726_5728__$1 = ((cljs.core.seq_QMARK_(map__5726_5727))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5726_5727):map__5726_5727);var notes_html_5729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5726_5728__$1,cljs.core.constant$keyword$29);var html_5730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5726_5728__$1,cljs.core.constant$keyword$28);var div_5731 = win.document.getElementById("presenter-current-slide");div_5731.innerHTML = html_5730;
var div_5732 = win.document.getElementById("presenter-notes-container");div_5732.innerHTML = notes_html_5729;
var div = win.document.getElementById("presenter-next-slide");return div.innerHTML = cljs.core.constant$keyword$28.call(null,org_html_slideshow.main.next_slide());
} else
{return null;
}
});
org_html_slideshow.main.show_presenter_window = (function show_presenter_window(){var temp__4090__auto__ = org_html_slideshow.main.get_presenter_window();if(cljs.core.truth_(temp__4090__auto__))
{var win = temp__4090__auto__;return win.focus();
} else
{cljs.core.reset_BANG_(org_html_slideshow.main.presenter_window,goog.window.open("",cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$33,"PRESENTERDISPLAY",cljs.core.constant$keyword$34,false,cljs.core.constant$keyword$35,false,cljs.core.constant$keyword$36,false,cljs.core.constant$keyword$37,false], true).strobj));
var doc_5733 = cljs.core.deref(org_html_slideshow.main.presenter_window).document;doc_5733.write(org_html_slideshow.main.presenter_display_html);
org_html_slideshow.main.add_stylesheets.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org_html_slideshow.main.stylesheet_urls),"common"),doc_5733);
org_html_slideshow.main.add_stylesheets.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org_html_slideshow.main.stylesheet_urls),"projection"),doc_5733);
org_html_slideshow.main.add_stylesheets.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org_html_slideshow.main.stylesheet_urls),"presenter"),doc_5733);
org_html_slideshow.main.install_keyhandler(doc_5733);
goog.events.listen(doc_5733.getElementById("presenter-elapsed-time-reset"),goog.events.EventType.CLICK,org_html_slideshow.main.fire_handler(cljs.core.constant$keyword$38));
org_html_slideshow.main.show_presenter_slides();
return org_html_slideshow.main.update_presenter_clock();
}
});
org_html_slideshow.main.playpause_video = (function playpause_video(){var elt = org_html_slideshow.domina.by_id("current-slide");var mtag = (function (){var or__3943__auto__ = cljs.core.first(elt.getElementsByTagName("video"));if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.first(elt.getElementsByTagName("audio"));
}
})();var yt = cljs.core.first(elt.getElementsByClassName("ytvid"));if(cljs.core.truth_(mtag))
{var paused_QMARK_ = cljs.core.boolean$((mtag["paused"]));if(paused_QMARK_)
{return mtag.play();
} else
{return mtag.pause();
}
} else
{if(cljs.core.truth_(yt))
{var src = (yt["src"]);var auto = "?autoplay=1";var src_SINGLEQUOTE_ = (cljs.core.truth_(goog.string.endsWith(src,auto))?src.replace(auto,""):[cljs.core.str(src),cljs.core.str(auto)].join(''));return (yt["src"] = src_SINGLEQUOTE_);
} else
{if(cljs.core.constant$keyword$5)
{return null;
} else
{return null;
}
}
}
});
org_html_slideshow.main.install_event_handlers = (function install_event_handlers(){org_html_slideshow.dispatch.react_to.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([cljs.core.constant$keyword$32,null], true),(function (id,_){return org_html_slideshow.main.playpause_video();
}));
org_html_slideshow.dispatch.react_to.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([cljs.core.constant$keyword$24,null], true),(function (id,_){return org_html_slideshow.main.show_next_slide();
}));
org_html_slideshow.dispatch.react_to.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([cljs.core.constant$keyword$23,null], true),(function (id,_){return org_html_slideshow.main.show_prev_slide();
}));
org_html_slideshow.dispatch.react_to.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([cljs.core.constant$keyword$22,null], true),(function (id,_){return org_html_slideshow.main.show_first_slide();
}));
org_html_slideshow.dispatch.react_to.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([cljs.core.constant$keyword$25,null], true),(function (id,_){return org_html_slideshow.main.show_last_slide();
}));
org_html_slideshow.dispatch.react_to.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([cljs.core.constant$keyword$21,null], true),(function (id,_){return org_html_slideshow.main.toggle_mode();
}));
org_html_slideshow.dispatch.react_to.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([cljs.core.constant$keyword$31,null], true),(function (id,_){return org_html_slideshow.main.go_to_top();
}));
org_html_slideshow.dispatch.react_to.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([cljs.core.constant$keyword$19,null], true),(function (id,_){return org_html_slideshow.main.show_control_panel();
}));
org_html_slideshow.dispatch.react_to.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([cljs.core.constant$keyword$20,null], true),(function (id,_){return org_html_slideshow.main.hide_control_panel();
}));
org_html_slideshow.dispatch.react_to.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([cljs.core.constant$keyword$30,null], true),(function (id,_){return org_html_slideshow.main.change_mode();
}));
org_html_slideshow.dispatch.react_to.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([cljs.core.constant$keyword$26,null], true),(function (id,_){return org_html_slideshow.main.show_presenter_window();
}));
return org_html_slideshow.dispatch.react_to.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([cljs.core.constant$keyword$38,null], true),(function (id,_){return org_html_slideshow.main.reset_elapsed_time();
}));
});
org_html_slideshow.main.init_stylesheets = (function init_stylesheets(){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(org_html_slideshow.main.stylesheet_urls,cljs.core.assoc,"projection",org_html_slideshow.main.stylesheets("projection"),"screen",cljs.core.array_seq([org_html_slideshow.main.stylesheets("screen"),"common",org_html_slideshow.main.stylesheets(null),"presenter",org_html_slideshow.main.stylesheets("presenter")], 0));
});
org_html_slideshow.main.add_image_classes = (function add_image_classes(){var seq__5738 = cljs.core.seq(org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$1("img"));var chunk__5739 = null;var count__5740 = 0;var i__5741 = 0;while(true){
if((i__5741 < count__5740))
{var img = chunk__5739.cljs$core$IIndexed$_nth$arity$2(chunk__5739,i__5741);var p_5742 = img.parentNode;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("P",p_5742.nodeName))
{goog.dom.classes.add(p_5742,"image");
} else
{}
{
var G__5743 = seq__5738;
var G__5744 = chunk__5739;
var G__5745 = count__5740;
var G__5746 = (i__5741 + 1);
seq__5738 = G__5743;
chunk__5739 = G__5744;
count__5740 = G__5745;
i__5741 = G__5746;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__5738);if(temp__4092__auto__)
{var seq__5738__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__5738__$1))
{var c__3565__auto__ = cljs.core.chunk_first(seq__5738__$1);{
var G__5747 = cljs.core.chunk_rest(seq__5738__$1);
var G__5748 = c__3565__auto__;
var G__5749 = cljs.core.count(c__3565__auto__);
var G__5750 = 0;
seq__5738 = G__5747;
chunk__5739 = G__5748;
count__5740 = G__5749;
i__5741 = G__5750;
continue;
}
} else
{var img = cljs.core.first(seq__5738__$1);var p_5751 = img.parentNode;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("P",p_5751.nodeName))
{goog.dom.classes.add(p_5751,"image");
} else
{}
{
var G__5752 = cljs.core.next(seq__5738__$1);
var G__5753 = null;
var G__5754 = 0;
var G__5755 = 0;
seq__5738 = G__5752;
chunk__5739 = G__5753;
count__5740 = G__5754;
i__5741 = G__5755;
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
org_html_slideshow.main.add_outline_text_class = (function add_outline_text_class(){var seq__5768 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(1,9));var chunk__5769 = null;var count__5770 = 0;var i__5771 = 0;while(true){
if((i__5771 < count__5770))
{var i = chunk__5769.cljs$core$IIndexed$_nth$arity$2(chunk__5769,i__5771);var seq__5772_5780 = cljs.core.seq(org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$2("div",[cljs.core.str("outline-text-"),cljs.core.str(i)].join('')));var chunk__5773_5781 = null;var count__5774_5782 = 0;var i__5775_5783 = 0;while(true){
if((i__5775_5783 < count__5774_5782))
{var elem_5784 = chunk__5773_5781.cljs$core$IIndexed$_nth$arity$2(chunk__5773_5781,i__5775_5783);goog.dom.classes.add(elem_5784,"outline-text");
{
var G__5785 = seq__5772_5780;
var G__5786 = chunk__5773_5781;
var G__5787 = count__5774_5782;
var G__5788 = (i__5775_5783 + 1);
seq__5772_5780 = G__5785;
chunk__5773_5781 = G__5786;
count__5774_5782 = G__5787;
i__5775_5783 = G__5788;
continue;
}
} else
{var temp__4092__auto___5789 = cljs.core.seq(seq__5772_5780);if(temp__4092__auto___5789)
{var seq__5772_5790__$1 = temp__4092__auto___5789;if(cljs.core.chunked_seq_QMARK_(seq__5772_5790__$1))
{var c__3565__auto___5791 = cljs.core.chunk_first(seq__5772_5790__$1);{
var G__5792 = cljs.core.chunk_rest(seq__5772_5790__$1);
var G__5793 = c__3565__auto___5791;
var G__5794 = cljs.core.count(c__3565__auto___5791);
var G__5795 = 0;
seq__5772_5780 = G__5792;
chunk__5773_5781 = G__5793;
count__5774_5782 = G__5794;
i__5775_5783 = G__5795;
continue;
}
} else
{var elem_5796 = cljs.core.first(seq__5772_5790__$1);goog.dom.classes.add(elem_5796,"outline-text");
{
var G__5797 = cljs.core.next(seq__5772_5790__$1);
var G__5798 = null;
var G__5799 = 0;
var G__5800 = 0;
seq__5772_5780 = G__5797;
chunk__5773_5781 = G__5798;
count__5774_5782 = G__5799;
i__5775_5783 = G__5800;
continue;
}
}
} else
{}
}
break;
}
{
var G__5801 = seq__5768;
var G__5802 = chunk__5769;
var G__5803 = count__5770;
var G__5804 = (i__5771 + 1);
seq__5768 = G__5801;
chunk__5769 = G__5802;
count__5770 = G__5803;
i__5771 = G__5804;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__5768);if(temp__4092__auto__)
{var seq__5768__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__5768__$1))
{var c__3565__auto__ = cljs.core.chunk_first(seq__5768__$1);{
var G__5805 = cljs.core.chunk_rest(seq__5768__$1);
var G__5806 = c__3565__auto__;
var G__5807 = cljs.core.count(c__3565__auto__);
var G__5808 = 0;
seq__5768 = G__5805;
chunk__5769 = G__5806;
count__5770 = G__5807;
i__5771 = G__5808;
continue;
}
} else
{var i = cljs.core.first(seq__5768__$1);var seq__5776_5809 = cljs.core.seq(org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$2("div",[cljs.core.str("outline-text-"),cljs.core.str(i)].join('')));var chunk__5777_5810 = null;var count__5778_5811 = 0;var i__5779_5812 = 0;while(true){
if((i__5779_5812 < count__5778_5811))
{var elem_5813 = chunk__5777_5810.cljs$core$IIndexed$_nth$arity$2(chunk__5777_5810,i__5779_5812);goog.dom.classes.add(elem_5813,"outline-text");
{
var G__5814 = seq__5776_5809;
var G__5815 = chunk__5777_5810;
var G__5816 = count__5778_5811;
var G__5817 = (i__5779_5812 + 1);
seq__5776_5809 = G__5814;
chunk__5777_5810 = G__5815;
count__5778_5811 = G__5816;
i__5779_5812 = G__5817;
continue;
}
} else
{var temp__4092__auto___5818__$1 = cljs.core.seq(seq__5776_5809);if(temp__4092__auto___5818__$1)
{var seq__5776_5819__$1 = temp__4092__auto___5818__$1;if(cljs.core.chunked_seq_QMARK_(seq__5776_5819__$1))
{var c__3565__auto___5820 = cljs.core.chunk_first(seq__5776_5819__$1);{
var G__5821 = cljs.core.chunk_rest(seq__5776_5819__$1);
var G__5822 = c__3565__auto___5820;
var G__5823 = cljs.core.count(c__3565__auto___5820);
var G__5824 = 0;
seq__5776_5809 = G__5821;
chunk__5777_5810 = G__5822;
count__5778_5811 = G__5823;
i__5779_5812 = G__5824;
continue;
}
} else
{var elem_5825 = cljs.core.first(seq__5776_5819__$1);goog.dom.classes.add(elem_5825,"outline-text");
{
var G__5826 = cljs.core.next(seq__5776_5819__$1);
var G__5827 = null;
var G__5828 = 0;
var G__5829 = 0;
seq__5776_5809 = G__5826;
chunk__5777_5810 = G__5827;
count__5778_5811 = G__5828;
i__5779_5812 = G__5829;
continue;
}
}
} else
{}
}
break;
}
{
var G__5830 = cljs.core.next(seq__5768__$1);
var G__5831 = null;
var G__5832 = 0;
var G__5833 = 0;
seq__5768 = G__5830;
chunk__5769 = G__5831;
count__5770 = G__5832;
i__5771 = G__5833;
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
org_html_slideshow.main.remove_nbsp = (function remove_nbsp(elem){return elem.innerHTML = elem.innerHTML.replace((new RegExp("&nbsp;","g")),"");
});
/**
* Remove extraneous &nbsp; from org-mode headlines
*/
org_html_slideshow.main.remove_heading_spaces = (function remove_heading_spaces(){var seq__5850_5866 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(1,9));var chunk__5855_5867 = null;var count__5856_5868 = 0;var i__5857_5869 = 0;while(true){
if((i__5857_5869 < count__5856_5868))
{var n_5870 = chunk__5855_5867.cljs$core$IIndexed$_nth$arity$2(chunk__5855_5867,i__5857_5869);var seq__5858_5871 = cljs.core.seq(org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$1([cljs.core.str("h"),cljs.core.str(n_5870)].join('')));var chunk__5859_5872 = null;var count__5860_5873 = 0;var i__5861_5874 = 0;while(true){
if((i__5861_5874 < count__5860_5873))
{var elem_5875 = chunk__5859_5872.cljs$core$IIndexed$_nth$arity$2(chunk__5859_5872,i__5861_5874);org_html_slideshow.main.remove_nbsp(elem_5875);
{
var G__5876 = seq__5858_5871;
var G__5877 = chunk__5859_5872;
var G__5878 = count__5860_5873;
var G__5879 = (i__5861_5874 + 1);
seq__5858_5871 = G__5876;
chunk__5859_5872 = G__5877;
count__5860_5873 = G__5878;
i__5861_5874 = G__5879;
continue;
}
} else
{var temp__4092__auto___5880 = cljs.core.seq(seq__5858_5871);if(temp__4092__auto___5880)
{var seq__5858_5881__$1 = temp__4092__auto___5880;if(cljs.core.chunked_seq_QMARK_(seq__5858_5881__$1))
{var c__3565__auto___5882 = cljs.core.chunk_first(seq__5858_5881__$1);{
var G__5883 = cljs.core.chunk_rest(seq__5858_5881__$1);
var G__5884 = c__3565__auto___5882;
var G__5885 = cljs.core.count(c__3565__auto___5882);
var G__5886 = 0;
seq__5858_5871 = G__5883;
chunk__5859_5872 = G__5884;
count__5860_5873 = G__5885;
i__5861_5874 = G__5886;
continue;
}
} else
{var elem_5887 = cljs.core.first(seq__5858_5881__$1);org_html_slideshow.main.remove_nbsp(elem_5887);
{
var G__5888 = cljs.core.next(seq__5858_5881__$1);
var G__5889 = null;
var G__5890 = 0;
var G__5891 = 0;
seq__5858_5871 = G__5888;
chunk__5859_5872 = G__5889;
count__5860_5873 = G__5890;
i__5861_5874 = G__5891;
continue;
}
}
} else
{}
}
break;
}
{
var G__5892 = seq__5850_5866;
var G__5893 = chunk__5855_5867;
var G__5894 = count__5856_5868;
var G__5895 = (i__5857_5869 + 1);
seq__5850_5866 = G__5892;
chunk__5855_5867 = G__5893;
count__5856_5868 = G__5894;
i__5857_5869 = G__5895;
continue;
}
} else
{var temp__4092__auto___5896 = cljs.core.seq(seq__5850_5866);if(temp__4092__auto___5896)
{var seq__5850_5897__$1 = temp__4092__auto___5896;if(cljs.core.chunked_seq_QMARK_(seq__5850_5897__$1))
{var c__3565__auto___5898 = cljs.core.chunk_first(seq__5850_5897__$1);{
var G__5899 = cljs.core.chunk_rest(seq__5850_5897__$1);
var G__5900 = c__3565__auto___5898;
var G__5901 = cljs.core.count(c__3565__auto___5898);
var G__5902 = 0;
seq__5850_5866 = G__5899;
chunk__5855_5867 = G__5900;
count__5856_5868 = G__5901;
i__5857_5869 = G__5902;
continue;
}
} else
{var n_5903 = cljs.core.first(seq__5850_5897__$1);var seq__5851_5904 = cljs.core.seq(org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$1([cljs.core.str("h"),cljs.core.str(n_5903)].join('')));var chunk__5852_5905 = null;var count__5853_5906 = 0;var i__5854_5907 = 0;while(true){
if((i__5854_5907 < count__5853_5906))
{var elem_5908 = chunk__5852_5905.cljs$core$IIndexed$_nth$arity$2(chunk__5852_5905,i__5854_5907);org_html_slideshow.main.remove_nbsp(elem_5908);
{
var G__5909 = seq__5851_5904;
var G__5910 = chunk__5852_5905;
var G__5911 = count__5853_5906;
var G__5912 = (i__5854_5907 + 1);
seq__5851_5904 = G__5909;
chunk__5852_5905 = G__5910;
count__5853_5906 = G__5911;
i__5854_5907 = G__5912;
continue;
}
} else
{var temp__4092__auto___5913__$1 = cljs.core.seq(seq__5851_5904);if(temp__4092__auto___5913__$1)
{var seq__5851_5914__$1 = temp__4092__auto___5913__$1;if(cljs.core.chunked_seq_QMARK_(seq__5851_5914__$1))
{var c__3565__auto___5915 = cljs.core.chunk_first(seq__5851_5914__$1);{
var G__5916 = cljs.core.chunk_rest(seq__5851_5914__$1);
var G__5917 = c__3565__auto___5915;
var G__5918 = cljs.core.count(c__3565__auto___5915);
var G__5919 = 0;
seq__5851_5904 = G__5916;
chunk__5852_5905 = G__5917;
count__5853_5906 = G__5918;
i__5854_5907 = G__5919;
continue;
}
} else
{var elem_5920 = cljs.core.first(seq__5851_5914__$1);org_html_slideshow.main.remove_nbsp(elem_5920);
{
var G__5921 = cljs.core.next(seq__5851_5914__$1);
var G__5922 = null;
var G__5923 = 0;
var G__5924 = 0;
seq__5851_5904 = G__5921;
chunk__5852_5905 = G__5922;
count__5853_5906 = G__5923;
i__5854_5907 = G__5924;
continue;
}
}
} else
{}
}
break;
}
{
var G__5925 = cljs.core.next(seq__5850_5897__$1);
var G__5926 = null;
var G__5927 = 0;
var G__5928 = 0;
seq__5850_5866 = G__5925;
chunk__5855_5867 = G__5926;
count__5856_5868 = G__5927;
i__5857_5869 = G__5928;
continue;
}
}
} else
{}
}
break;
}
var seq__5862 = cljs.core.seq(org_html_slideshow.main.dom_tags.cljs$core$IFn$_invoke$arity$3("a",null,goog.dom.getElement("table-of-contents")));var chunk__5863 = null;var count__5864 = 0;var i__5865 = 0;while(true){
if((i__5865 < count__5864))
{var elem = chunk__5863.cljs$core$IIndexed$_nth$arity$2(chunk__5863,i__5865);org_html_slideshow.main.remove_nbsp(elem);
{
var G__5929 = seq__5862;
var G__5930 = chunk__5863;
var G__5931 = count__5864;
var G__5932 = (i__5865 + 1);
seq__5862 = G__5929;
chunk__5863 = G__5930;
count__5864 = G__5931;
i__5865 = G__5932;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__5862);if(temp__4092__auto__)
{var seq__5862__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__5862__$1))
{var c__3565__auto__ = cljs.core.chunk_first(seq__5862__$1);{
var G__5933 = cljs.core.chunk_rest(seq__5862__$1);
var G__5934 = c__3565__auto__;
var G__5935 = cljs.core.count(c__3565__auto__);
var G__5936 = 0;
seq__5862 = G__5933;
chunk__5863 = G__5934;
count__5864 = G__5935;
i__5865 = G__5936;
continue;
}
} else
{var elem = cljs.core.first(seq__5862__$1);org_html_slideshow.main.remove_nbsp(elem);
{
var G__5937 = cljs.core.next(seq__5862__$1);
var G__5938 = null;
var G__5939 = 0;
var G__5940 = 0;
seq__5862 = G__5937;
chunk__5863 = G__5938;
count__5864 = G__5939;
i__5865 = G__5940;
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
org_html_slideshow.main.main = (function main(){org_html_slideshow.main.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["main"], 0));
(new goog.debug.Console()).setCapturing(true);
org_html_slideshow.main.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Application started"], 0));
org_html_slideshow.main.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Preparing document"], 0));
org_html_slideshow.main.init_stylesheets();
org_html_slideshow.main.remove_stylesheets(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org_html_slideshow.main.stylesheet_urls),"projection"));
org_html_slideshow.main.remove_stylesheets(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(org_html_slideshow.main.stylesheet_urls),"presenter"));
org_html_slideshow.main.add_image_classes();
org_html_slideshow.main.copy_heading_tags_to_div_classes();
org_html_slideshow.main.add_outline_text_class();
org_html_slideshow.main.remove_heading_spaces();
org_html_slideshow.main.install_folds();
org_html_slideshow.main.body_elem().appendChild(goog.dom.htmlToDocumentFragment(org_html_slideshow.main.current_slide_div_html));
org_html_slideshow.main.hide_BANG_(org_html_slideshow.domina.by_id("current-slide"));
cljs.core.reset_BANG_(org_html_slideshow.main.slides,org_html_slideshow.main.get_slides());
org_html_slideshow.main.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"slides","slides",1754788507,null)),cljs.core.count(cljs.core.deref(org_html_slideshow.main.slides))], 0));
org_html_slideshow.main.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Installing key handler"], 0));
org_html_slideshow.main.install_event_handlers();
org_html_slideshow.main.install_control_panel();
return org_html_slideshow.main.install_keyhandler(goog.dom.getDocument());
});
org_html_slideshow.main.main();
