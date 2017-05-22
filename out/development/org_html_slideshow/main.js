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
org_html_slideshow.main.stylesheet_urls = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Atom containing Vector of slide data
*/
org_html_slideshow.main.slides = cljs.core.atom.call(null,null);
org_html_slideshow.main.slideshow_mode_QMARK_ = cljs.core.atom.call(null,false);
org_html_slideshow.main.presenter_window = cljs.core.atom.call(null,null);
org_html_slideshow.main.presenter_start_time = cljs.core.atom.call(null,null);
/**
* @param {...*} var_args
*/
org_html_slideshow.main.info = (function() { 
var info__delegate = function (msgs){return goog.debug.Logger.getLogger("org_html_slideshow.main").info(cljs.core.apply.call(null,cljs.core.pr_str,msgs));
};
var info = function (var_args){
var msgs = null;if (arguments.length > 0) {
  msgs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return info__delegate.call(this,msgs);};
info.cljs$lang$maxFixedArity = 0;
info.cljs$lang$applyTo = (function (arglist__4393){
var msgs = cljs.core.seq(arglist__4393);
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
var add_to_head__1 = (function (elem){return add_to_head.call(null,elem,null);
});
var add_to_head__2 = (function (elem,parent){return cljs.core.first.call(null,org_html_slideshow.main.dom_tags.call(null,"head",null,parent)).appendChild(elem);
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
org_html_slideshow.main.body_elem = (function body_elem(){return cljs.core.first.call(null,org_html_slideshow.main.dom_tags.call(null,"body"));
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
return org_html_slideshow.dispatch.fire.call(null,event_id,goog_event);
});
});
org_html_slideshow.main.show_BANG_ = (function show_BANG_(content){if(cljs.core.truth_(content))
{return goog.style.showElement(org_html_slideshow.domina.single_node.call(null,content),true);
} else
{return null;
}
});
org_html_slideshow.main.hide_BANG_ = (function hide_BANG_(content){if(cljs.core.truth_(content))
{return goog.style.showElement(org_html_slideshow.domina.single_node.call(null,content),false);
} else
{return null;
}
});
org_html_slideshow.main.stylesheets = (function stylesheets(media_type){return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__4394_SHARP_){return org_html_slideshow.domina.attr.call(null,p1__4394_SHARP_,"href");
}),cljs.core.filter.call(null,(function (elem){var and__3941__auto__ = cljs.core._EQ_.call(null,"stylesheet",org_html_slideshow.domina.attr.call(null,elem,"rel"));if(and__3941__auto__)
{return cljs.core._EQ_.call(null,media_type,org_html_slideshow.domina.attr.call(null,elem,"media"));
} else
{return and__3941__auto__;
}
}),org_html_slideshow.main.dom_tags.call(null,"link"))));
});
org_html_slideshow.main.remove_stylesheets = (function remove_stylesheets(urls){var seq__4399 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (elem){var and__3941__auto__ = cljs.core._EQ_.call(null,"stylesheet",org_html_slideshow.domina.attr.call(null,elem,"rel"));if(and__3941__auto__)
{return cljs.core.contains_QMARK_.call(null,urls,org_html_slideshow.domina.attr.call(null,elem,"href"));
} else
{return and__3941__auto__;
}
}),org_html_slideshow.main.dom_tags.call(null,"link")));var chunk__4400 = null;var count__4401 = 0;var i__4402 = 0;while(true){
if((i__4402 < count__4401))
{var elem = cljs.core._nth.call(null,chunk__4400,i__4402);org_html_slideshow.main.remove_elem.call(null,elem);
{
var G__4403 = seq__4399;
var G__4404 = chunk__4400;
var G__4405 = count__4401;
var G__4406 = (i__4402 + 1);
seq__4399 = G__4403;
chunk__4400 = G__4404;
count__4401 = G__4405;
i__4402 = G__4406;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4399);if(temp__4092__auto__)
{var seq__4399__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4399__$1))
{var c__3565__auto__ = cljs.core.chunk_first.call(null,seq__4399__$1);{
var G__4407 = cljs.core.chunk_rest.call(null,seq__4399__$1);
var G__4408 = c__3565__auto__;
var G__4409 = cljs.core.count.call(null,c__3565__auto__);
var G__4410 = 0;
seq__4399 = G__4407;
chunk__4400 = G__4408;
count__4401 = G__4409;
i__4402 = G__4410;
continue;
}
} else
{var elem = cljs.core.first.call(null,seq__4399__$1);org_html_slideshow.main.remove_elem.call(null,elem);
{
var G__4411 = cljs.core.next.call(null,seq__4399__$1);
var G__4412 = null;
var G__4413 = 0;
var G__4414 = 0;
seq__4399 = G__4411;
chunk__4400 = G__4412;
count__4401 = G__4413;
i__4402 = G__4414;
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
var add_stylesheets__1 = (function (urls){return add_stylesheets.call(null,urls,null);
});
var add_stylesheets__2 = (function (urls,parent){var seq__4421 = cljs.core.seq.call(null,urls);var chunk__4422 = null;var count__4423 = 0;var i__4424 = 0;while(true){
if((i__4424 < count__4423))
{var url = cljs.core._nth.call(null,chunk__4422,i__4424);org_html_slideshow.main.add_to_head.call(null,(function (){var G__4425 = goog.dom.createDom("link");G__4425.setAttribute("rel","stylesheet");
G__4425.setAttribute("type","text/css");
G__4425.setAttribute("href",url);
return G__4425;
})(),parent);
{
var G__4427 = seq__4421;
var G__4428 = chunk__4422;
var G__4429 = count__4423;
var G__4430 = (i__4424 + 1);
seq__4421 = G__4427;
chunk__4422 = G__4428;
count__4423 = G__4429;
i__4424 = G__4430;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4421);if(temp__4092__auto__)
{var seq__4421__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4421__$1))
{var c__3565__auto__ = cljs.core.chunk_first.call(null,seq__4421__$1);{
var G__4431 = cljs.core.chunk_rest.call(null,seq__4421__$1);
var G__4432 = c__3565__auto__;
var G__4433 = cljs.core.count.call(null,c__3565__auto__);
var G__4434 = 0;
seq__4421 = G__4431;
chunk__4422 = G__4432;
count__4423 = G__4433;
i__4424 = G__4434;
continue;
}
} else
{var url = cljs.core.first.call(null,seq__4421__$1);org_html_slideshow.main.add_to_head.call(null,(function (){var G__4426 = goog.dom.createDom("link");G__4426.setAttribute("rel","stylesheet");
G__4426.setAttribute("type","text/css");
G__4426.setAttribute("href",url);
return G__4426;
})(),parent);
{
var G__4435 = cljs.core.next.call(null,seq__4421__$1);
var G__4436 = null;
var G__4437 = 0;
var G__4438 = 0;
seq__4421 = G__4435;
chunk__4422 = G__4436;
count__4423 = G__4437;
i__4424 = G__4438;
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
org_html_slideshow.main.get_folds = (function get_folds(){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (elem){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"head-elem","head-elem",748519118),elem.parentNode.parentNode,new cljs.core.Keyword(null,"body-elem","body-elem",2220301388),cljs.core.first.call(null,org_html_slideshow.main.dom_tags.call(null,"div",null,org_html_slideshow.main.nearest_containing_div.call(null,elem)))], true);
}),org_html_slideshow.main.dom_tags.call(null,"span","fold")));
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
var head_elem = event.currentTarget;var body_elem = cljs.core.first.call(null,org_html_slideshow.main.dom_tags.call(null,"div",null,org_html_slideshow.main.nearest_containing_div.call(null,head_elem)));return org_html_slideshow.main.toggle_visibility.call(null,head_elem,body_elem);
});
org_html_slideshow.main.install_folds = (function install_folds(){var seq__4445 = cljs.core.seq.call(null,org_html_slideshow.main.get_folds.call(null));var chunk__4446 = null;var count__4447 = 0;var i__4448 = 0;while(true){
if((i__4448 < count__4447))
{var map__4449 = cljs.core._nth.call(null,chunk__4446,i__4448);var map__4449__$1 = ((cljs.core.seq_QMARK_.call(null,map__4449))?cljs.core.apply.call(null,cljs.core.hash_map,map__4449):map__4449);var body_elem = cljs.core.get.call(null,map__4449__$1,new cljs.core.Keyword(null,"body-elem","body-elem",2220301388));var head_elem = cljs.core.get.call(null,map__4449__$1,new cljs.core.Keyword(null,"head-elem","head-elem",748519118));org_html_slideshow.main.toggle_visibility.call(null,head_elem,body_elem);
var a_4451 = goog.dom.htmlToDocumentFragment(org_html_slideshow.main.show_hide_html);head_elem.appendChild(a_4451);
var a_4452__$1 = org_html_slideshow.main.dom_tags.call(null,"a","show-hide",head_elem);goog.events.listen(head_elem,goog.events.EventType.CLICK,org_html_slideshow.main.handle_show_hide);
{
var G__4453 = seq__4445;
var G__4454 = chunk__4446;
var G__4455 = count__4447;
var G__4456 = (i__4448 + 1);
seq__4445 = G__4453;
chunk__4446 = G__4454;
count__4447 = G__4455;
i__4448 = G__4456;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4445);if(temp__4092__auto__)
{var seq__4445__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4445__$1))
{var c__3565__auto__ = cljs.core.chunk_first.call(null,seq__4445__$1);{
var G__4457 = cljs.core.chunk_rest.call(null,seq__4445__$1);
var G__4458 = c__3565__auto__;
var G__4459 = cljs.core.count.call(null,c__3565__auto__);
var G__4460 = 0;
seq__4445 = G__4457;
chunk__4446 = G__4458;
count__4447 = G__4459;
i__4448 = G__4460;
continue;
}
} else
{var map__4450 = cljs.core.first.call(null,seq__4445__$1);var map__4450__$1 = ((cljs.core.seq_QMARK_.call(null,map__4450))?cljs.core.apply.call(null,cljs.core.hash_map,map__4450):map__4450);var body_elem = cljs.core.get.call(null,map__4450__$1,new cljs.core.Keyword(null,"body-elem","body-elem",2220301388));var head_elem = cljs.core.get.call(null,map__4450__$1,new cljs.core.Keyword(null,"head-elem","head-elem",748519118));org_html_slideshow.main.toggle_visibility.call(null,head_elem,body_elem);
var a_4461 = goog.dom.htmlToDocumentFragment(org_html_slideshow.main.show_hide_html);head_elem.appendChild(a_4461);
var a_4462__$1 = org_html_slideshow.main.dom_tags.call(null,"a","show-hide",head_elem);goog.events.listen(head_elem,goog.events.EventType.CLICK,org_html_slideshow.main.handle_show_hide);
{
var G__4463 = cljs.core.next.call(null,seq__4445__$1);
var G__4464 = null;
var G__4465 = 0;
var G__4466 = 0;
seq__4445 = G__4463;
chunk__4446 = G__4464;
count__4447 = G__4465;
i__4448 = G__4466;
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
org_html_slideshow.main.install_control_panel = (function install_control_panel(){org_html_slideshow.main.body_elem.call(null).appendChild(goog.dom.htmlToDocumentFragment(org_html_slideshow.main.control_html));
var panel = goog.dom.getElement("c-panel");org_html_slideshow.dispatch.fire.call(null,new cljs.core.Keyword(null,"show-control-panel","show-control-panel",2312178230));
goog.Timer.callOnce(org_html_slideshow.main.fire_handler.call(null,new cljs.core.Keyword(null,"hide-control-panel","hide-control-panel",1703161787)),3000);
goog.events.listen(panel,goog.events.EventType.MOUSEOVER,org_html_slideshow.main.fire_handler.call(null,new cljs.core.Keyword(null,"show-control-panel","show-control-panel",2312178230)));
goog.events.listen(panel,goog.events.EventType.MOUSEOUT,org_html_slideshow.main.fire_handler.call(null,new cljs.core.Keyword(null,"hide-control-panel","hide-control-panel",1703161787)));
goog.events.listen(goog.dom.getElement("c-toggle"),goog.events.EventType.CLICK,org_html_slideshow.main.fire_handler.call(null,new cljs.core.Keyword(null,"toggle-mode","toggle-mode",4616980462)));
goog.events.listen(goog.dom.getElement("c-first"),goog.events.EventType.CLICK,org_html_slideshow.main.fire_handler.call(null,new cljs.core.Keyword(null,"show-first-slide","show-first-slide",3152588022)));
goog.events.listen(goog.dom.getElement("c-prev"),goog.events.EventType.CLICK,org_html_slideshow.main.fire_handler.call(null,new cljs.core.Keyword(null,"show-prev-slide","show-prev-slide",512947673)));
goog.events.listen(goog.dom.getElement("c-next"),goog.events.EventType.CLICK,org_html_slideshow.main.fire_handler.call(null,new cljs.core.Keyword(null,"show-next-slide","show-next-slide",4201664153)));
goog.events.listen(goog.dom.getElement("c-last"),goog.events.EventType.CLICK,org_html_slideshow.main.fire_handler.call(null,new cljs.core.Keyword(null,"show-last-slide","show-last-slide",3110457340)));
return goog.events.listen(goog.dom.getElement("c-presenter-window"),goog.events.EventType.CLICK,org_html_slideshow.main.fire_handler.call(null,new cljs.core.Keyword(null,"show-presenter-window","show-presenter-window",1103105783)));
});
org_html_slideshow.main.current_slide_div_html = "<div id=\"current-slide\"></div>";
org_html_slideshow.main.nearest_containing_div = (function nearest_containing_div(elem){while(true){
if(cljs.core._EQ_.call(null,"DIV",elem.nodeName))
{return elem;
} else
{{
var G__4467 = elem.parentNode;
elem = G__4467;
continue;
}
}
break;
}
});
org_html_slideshow.main.heading_tag_names = cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__4468_SHARP_){return [cljs.core.str("H"),cljs.core.str(p1__4468_SHARP_)].join('');
}),cljs.core.range.call(null,1,9)));
org_html_slideshow.main.copy_heading_tags_to_div_classes = (function copy_heading_tags_to_div_classes(){var seq__4481 = cljs.core.seq.call(null,org_html_slideshow.main.dom_tags.call(null,"span","tag"));var chunk__4482 = null;var count__4483 = 0;var i__4484 = 0;while(true){
if((i__4484 < count__4483))
{var tags = cljs.core._nth.call(null,chunk__4482,i__4484);var div_4493 = org_html_slideshow.main.nearest_containing_div.call(null,tags);if(cljs.core._EQ_.call(null,"text-table-of-contents",div_4493.id))
{} else
{var seq__4485_4494 = cljs.core.seq.call(null,org_html_slideshow.main.dom_tags.call(null,"span",null,tags));var chunk__4486_4495 = null;var count__4487_4496 = 0;var i__4488_4497 = 0;while(true){
if((i__4488_4497 < count__4487_4496))
{var tag_4498 = cljs.core._nth.call(null,chunk__4486_4495,i__4488_4497);goog.dom.classes.add(div_4493,goog.dom.classes.get(tag_4498));
{
var G__4499 = seq__4485_4494;
var G__4500 = chunk__4486_4495;
var G__4501 = count__4487_4496;
var G__4502 = (i__4488_4497 + 1);
seq__4485_4494 = G__4499;
chunk__4486_4495 = G__4500;
count__4487_4496 = G__4501;
i__4488_4497 = G__4502;
continue;
}
} else
{var temp__4092__auto___4503 = cljs.core.seq.call(null,seq__4485_4494);if(temp__4092__auto___4503)
{var seq__4485_4504__$1 = temp__4092__auto___4503;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4485_4504__$1))
{var c__3565__auto___4505 = cljs.core.chunk_first.call(null,seq__4485_4504__$1);{
var G__4506 = cljs.core.chunk_rest.call(null,seq__4485_4504__$1);
var G__4507 = c__3565__auto___4505;
var G__4508 = cljs.core.count.call(null,c__3565__auto___4505);
var G__4509 = 0;
seq__4485_4494 = G__4506;
chunk__4486_4495 = G__4507;
count__4487_4496 = G__4508;
i__4488_4497 = G__4509;
continue;
}
} else
{var tag_4510 = cljs.core.first.call(null,seq__4485_4504__$1);goog.dom.classes.add(div_4493,goog.dom.classes.get(tag_4510));
{
var G__4511 = cljs.core.next.call(null,seq__4485_4504__$1);
var G__4512 = null;
var G__4513 = 0;
var G__4514 = 0;
seq__4485_4494 = G__4511;
chunk__4486_4495 = G__4512;
count__4487_4496 = G__4513;
i__4488_4497 = G__4514;
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
var G__4515 = seq__4481;
var G__4516 = chunk__4482;
var G__4517 = count__4483;
var G__4518 = (i__4484 + 1);
seq__4481 = G__4515;
chunk__4482 = G__4516;
count__4483 = G__4517;
i__4484 = G__4518;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4481);if(temp__4092__auto__)
{var seq__4481__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4481__$1))
{var c__3565__auto__ = cljs.core.chunk_first.call(null,seq__4481__$1);{
var G__4519 = cljs.core.chunk_rest.call(null,seq__4481__$1);
var G__4520 = c__3565__auto__;
var G__4521 = cljs.core.count.call(null,c__3565__auto__);
var G__4522 = 0;
seq__4481 = G__4519;
chunk__4482 = G__4520;
count__4483 = G__4521;
i__4484 = G__4522;
continue;
}
} else
{var tags = cljs.core.first.call(null,seq__4481__$1);var div_4523 = org_html_slideshow.main.nearest_containing_div.call(null,tags);if(cljs.core._EQ_.call(null,"text-table-of-contents",div_4523.id))
{} else
{var seq__4489_4524 = cljs.core.seq.call(null,org_html_slideshow.main.dom_tags.call(null,"span",null,tags));var chunk__4490_4525 = null;var count__4491_4526 = 0;var i__4492_4527 = 0;while(true){
if((i__4492_4527 < count__4491_4526))
{var tag_4528 = cljs.core._nth.call(null,chunk__4490_4525,i__4492_4527);goog.dom.classes.add(div_4523,goog.dom.classes.get(tag_4528));
{
var G__4529 = seq__4489_4524;
var G__4530 = chunk__4490_4525;
var G__4531 = count__4491_4526;
var G__4532 = (i__4492_4527 + 1);
seq__4489_4524 = G__4529;
chunk__4490_4525 = G__4530;
count__4491_4526 = G__4531;
i__4492_4527 = G__4532;
continue;
}
} else
{var temp__4092__auto___4533__$1 = cljs.core.seq.call(null,seq__4489_4524);if(temp__4092__auto___4533__$1)
{var seq__4489_4534__$1 = temp__4092__auto___4533__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4489_4534__$1))
{var c__3565__auto___4535 = cljs.core.chunk_first.call(null,seq__4489_4534__$1);{
var G__4536 = cljs.core.chunk_rest.call(null,seq__4489_4534__$1);
var G__4537 = c__3565__auto___4535;
var G__4538 = cljs.core.count.call(null,c__3565__auto___4535);
var G__4539 = 0;
seq__4489_4524 = G__4536;
chunk__4490_4525 = G__4537;
count__4491_4526 = G__4538;
i__4492_4527 = G__4539;
continue;
}
} else
{var tag_4540 = cljs.core.first.call(null,seq__4489_4534__$1);goog.dom.classes.add(div_4523,goog.dom.classes.get(tag_4540));
{
var G__4541 = cljs.core.next.call(null,seq__4489_4534__$1);
var G__4542 = null;
var G__4543 = 0;
var G__4544 = 0;
seq__4489_4524 = G__4541;
chunk__4490_4525 = G__4542;
count__4491_4526 = G__4543;
i__4492_4527 = G__4544;
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
var G__4545 = cljs.core.next.call(null,seq__4481__$1);
var G__4546 = null;
var G__4547 = 0;
var G__4548 = 0;
seq__4481 = G__4545;
chunk__4482 = G__4546;
count__4483 = G__4547;
i__4484 = G__4548;
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
org_html_slideshow.main.remove_nested_sections = (function remove_nested_sections(slide_div_elem){var div = slide_div_elem.cloneNode(true);var seq__4554_4558 = cljs.core.seq.call(null,org_html_slideshow.main.dom_tags.call(null,"div",null,div));var chunk__4555_4559 = null;var count__4556_4560 = 0;var i__4557_4561 = 0;while(true){
if((i__4557_4561 < count__4556_4560))
{var elem_4562 = cljs.core._nth.call(null,chunk__4555_4559,i__4557_4561);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__4554_4558,chunk__4555_4559,count__4556_4560,i__4557_4561,elem_4562){
return (function (p1__4549_SHARP_){return goog.dom.classes.has(elem_4562,[cljs.core.str("outline-"),cljs.core.str(p1__4549_SHARP_)].join(''));
});})(seq__4554_4558,chunk__4555_4559,count__4556_4560,i__4557_4561,elem_4562))
,cljs.core.range.call(null,1,9))))
{org_html_slideshow.main.remove_elem.call(null,elem_4562);
} else
{}
{
var G__4563 = seq__4554_4558;
var G__4564 = chunk__4555_4559;
var G__4565 = count__4556_4560;
var G__4566 = (i__4557_4561 + 1);
seq__4554_4558 = G__4563;
chunk__4555_4559 = G__4564;
count__4556_4560 = G__4565;
i__4557_4561 = G__4566;
continue;
}
} else
{var temp__4092__auto___4567 = cljs.core.seq.call(null,seq__4554_4558);if(temp__4092__auto___4567)
{var seq__4554_4568__$1 = temp__4092__auto___4567;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4554_4568__$1))
{var c__3565__auto___4569 = cljs.core.chunk_first.call(null,seq__4554_4568__$1);{
var G__4570 = cljs.core.chunk_rest.call(null,seq__4554_4568__$1);
var G__4571 = c__3565__auto___4569;
var G__4572 = cljs.core.count.call(null,c__3565__auto___4569);
var G__4573 = 0;
seq__4554_4558 = G__4570;
chunk__4555_4559 = G__4571;
count__4556_4560 = G__4572;
i__4557_4561 = G__4573;
continue;
}
} else
{var elem_4574 = cljs.core.first.call(null,seq__4554_4568__$1);if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__4554_4558,chunk__4555_4559,count__4556_4560,i__4557_4561,elem_4574,seq__4554_4568__$1,temp__4092__auto___4567){
return (function (p1__4549_SHARP_){return goog.dom.classes.has(elem_4574,[cljs.core.str("outline-"),cljs.core.str(p1__4549_SHARP_)].join(''));
});})(seq__4554_4558,chunk__4555_4559,count__4556_4560,i__4557_4561,elem_4574,seq__4554_4568__$1,temp__4092__auto___4567))
,cljs.core.range.call(null,1,9))))
{org_html_slideshow.main.remove_elem.call(null,elem_4574);
} else
{}
{
var G__4575 = cljs.core.next.call(null,seq__4554_4568__$1);
var G__4576 = null;
var G__4577 = 0;
var G__4578 = 0;
seq__4554_4558 = G__4575;
chunk__4555_4559 = G__4576;
count__4556_4560 = G__4577;
i__4557_4561 = G__4578;
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
org_html_slideshow.main.slide_notes_html = (function slide_notes_html(slide_div_elem){var temp__4090__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (elem){var and__3941__auto__ = cljs.core._EQ_.call(null,"DIV",elem.nodeName);if(and__3941__auto__)
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
org_html_slideshow.main.get_slides = (function get_slides(){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (elem){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",1013907597),elem.id,new cljs.core.Keyword(null,"html","html",1017117469),goog.dom.getOuterHtml(org_html_slideshow.main.remove_nested_sections.call(null,elem)),new cljs.core.Keyword(null,"notes-html","notes-html",896523945),org_html_slideshow.main.slide_notes_html.call(null,elem)], true);
}),org_html_slideshow.main.dom_tags.call(null,"div","slide")));
});
org_html_slideshow.main.slide_from_id = (function slide_from_id(id){return cljs.core.some.call(null,(function (slide){if(cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",1013907597).call(null,slide)))
{return slide;
} else
{return null;
}
}),cljs.core.deref.call(null,org_html_slideshow.main.slides));
});
org_html_slideshow.main.find_slide_after = (function find_slide_after(id){var G__4584 = cljs.core.deref.call(null,org_html_slideshow.main.slides);var vec__4585 = G__4584;var s = cljs.core.nth.call(null,vec__4585,0,null);var r = cljs.core.nthnext.call(null,vec__4585,1);var G__4584__$1 = G__4584;while(true){
var vec__4586 = G__4584__$1;var s__$1 = cljs.core.nth.call(null,vec__4586,0,null);var r__$1 = cljs.core.nthnext.call(null,vec__4586,1);if(cljs.core.truth_(s__$1))
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).call(null,s__$1),id))
{return cljs.core.first.call(null,r__$1);
} else
{{
var G__4587 = r__$1;
G__4584__$1 = G__4587;
continue;
}
}
} else
{return null;
}
break;
}
});
org_html_slideshow.main.current_slide = (function current_slide(){var fragment_id = org_html_slideshow.main.location_fragment.call(null);var target_id = (cljs.core.truth_(goog.string.startsWith(fragment_id,"outline-container-"))?fragment_id:[cljs.core.str("outline-container-"),cljs.core.str(fragment_id)].join(''));var or__3943__auto__ = org_html_slideshow.main.slide_from_id.call(null,target_id);if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (function (){var and__3941__auto__ = cljs.core.seq.call(null,fragment_id);if(and__3941__auto__)
{return org_html_slideshow.main.find_slide_after.call(null,target_id);
} else
{return and__3941__auto__;
}
})();if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return cljs.core.first.call(null,cljs.core.deref.call(null,org_html_slideshow.main.slides));
}
}
});
org_html_slideshow.main.next_slide = (function next_slide(){return org_html_slideshow.main.find_slide_after.call(null,new cljs.core.Keyword(null,"id","id",1013907597).call(null,org_html_slideshow.main.current_slide.call(null)));
});
org_html_slideshow.main.show_slide = (function show_slide(p__4588){var map__4590 = p__4588;var map__4590__$1 = ((cljs.core.seq_QMARK_.call(null,map__4590))?cljs.core.apply.call(null,cljs.core.hash_map,map__4590):map__4590);var html = cljs.core.get.call(null,map__4590__$1,new cljs.core.Keyword(null,"html","html",1017117469));var id = cljs.core.get.call(null,map__4590__$1,new cljs.core.Keyword(null,"id","id",1013907597));org_html_slideshow.main.set_location_fragment.call(null,id);
goog.dom.getElement("current-slide").innerHTML = html;
return org_html_slideshow.main.show_presenter_slides.call(null);
});
org_html_slideshow.main.enter_slideshow_mode = (function enter_slideshow_mode(){org_html_slideshow.main.info.call(null,cljs.core.list(new cljs.core.Symbol(null,"enter-slideshow-mode","enter-slideshow-mode",-674560720,null)));
org_html_slideshow.main.hide_BANG_.call(null,org_html_slideshow.domina.by_id.call(null,"preamble"));
org_html_slideshow.main.hide_BANG_.call(null,org_html_slideshow.domina.by_id.call(null,"content"));
org_html_slideshow.main.hide_BANG_.call(null,org_html_slideshow.domina.by_id.call(null,"postamble"));
org_html_slideshow.main.remove_stylesheets.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,org_html_slideshow.main.stylesheet_urls),"screen"));
org_html_slideshow.main.add_stylesheets.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,org_html_slideshow.main.stylesheet_urls),"projection"));
org_html_slideshow.main.show_BANG_.call(null,org_html_slideshow.domina.by_id.call(null,"current-slide"));
return org_html_slideshow.main.show_slide.call(null,org_html_slideshow.main.current_slide.call(null));
});
org_html_slideshow.main.leave_slideshow_mode = (function leave_slideshow_mode(){org_html_slideshow.main.info.call(null,cljs.core.list(new cljs.core.Symbol(null,"leave-slideshow-mode","leave-slideshow-mode",1111892849,null)));
org_html_slideshow.main.hide_BANG_.call(null,org_html_slideshow.domina.by_id.call(null,"current-slide"));
org_html_slideshow.main.remove_stylesheets.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,org_html_slideshow.main.stylesheet_urls),"projection"));
org_html_slideshow.main.add_stylesheets.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,org_html_slideshow.main.stylesheet_urls),"screen"));
org_html_slideshow.main.show_BANG_.call(null,org_html_slideshow.domina.by_id.call(null,"preamble"));
org_html_slideshow.main.show_BANG_.call(null,org_html_slideshow.domina.by_id.call(null,"content"));
org_html_slideshow.main.show_BANG_.call(null,org_html_slideshow.domina.by_id.call(null,"postamble"));
return goog.dom.getElement(org_html_slideshow.main.location_fragment.call(null)).scrollIntoView();
});
org_html_slideshow.main.change_mode = (function change_mode(){if(cljs.core.truth_(cljs.core.deref.call(null,org_html_slideshow.main.slideshow_mode_QMARK_)))
{return org_html_slideshow.main.enter_slideshow_mode.call(null);
} else
{return org_html_slideshow.main.leave_slideshow_mode.call(null);
}
});
org_html_slideshow.main.toggle_mode = (function toggle_mode(){org_html_slideshow.main.info.call(null,cljs.core.list(new cljs.core.Symbol(null,"toggle-mode","toggle-mode",1962544693,null)));
return cljs.core.swap_BANG_.call(null,org_html_slideshow.main.slideshow_mode_QMARK_,cljs.core.not);
});
cljs.core.add_watch.call(null,org_html_slideshow.main.slideshow_mode_QMARK_,new cljs.core.Keyword(null,"change-mode","change-mode",3608021266),(function (k,r,o,n){return org_html_slideshow.dispatch.fire.call(null,new cljs.core.Keyword(null,"change-mode","change-mode",3608021266));
}));
org_html_slideshow.main.show_next_slide = (function show_next_slide(){var current = org_html_slideshow.main.current_slide.call(null);var next = cljs.core.second.call(null,cljs.core.drop_while.call(null,((function (current){
return (function (p1__4591_SHARP_){return cljs.core.not_EQ_.call(null,current,p1__4591_SHARP_);
});})(current))
,cljs.core.deref.call(null,org_html_slideshow.main.slides)));if(cljs.core.truth_(next))
{org_html_slideshow.main.show_slide.call(null,next);
} else
{}
return cljs.core.swap_BANG_.call(null,org_html_slideshow.main.presenter_start_time,(function (t){if((t == null))
{return (new Date()).getTime();
} else
{return t;
}
}));
});
org_html_slideshow.main.show_prev_slide = (function show_prev_slide(){var current = org_html_slideshow.main.current_slide.call(null);var prev = cljs.core.last.call(null,cljs.core.take_while.call(null,((function (current){
return (function (p1__4592_SHARP_){return cljs.core.not_EQ_.call(null,current,p1__4592_SHARP_);
});})(current))
,cljs.core.deref.call(null,org_html_slideshow.main.slides)));if(cljs.core.truth_(prev))
{return org_html_slideshow.main.show_slide.call(null,prev);
} else
{return null;
}
});
org_html_slideshow.main.show_first_slide = (function show_first_slide(){return org_html_slideshow.main.show_slide.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,org_html_slideshow.main.slides)));
});
org_html_slideshow.main.show_last_slide = (function show_last_slide(){return org_html_slideshow.main.show_slide.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,org_html_slideshow.main.slides)));
});
org_html_slideshow.main.go_to_top = (function go_to_top(){org_html_slideshow.main.set_location_fragment.call(null,"top");
return window.scrollTo(0,0);
});
org_html_slideshow.main.normal_keymap = cljs.core.PersistentArrayMap.fromArray([goog.events.KeyCodes.T,new cljs.core.Keyword(null,"toggle-mode","toggle-mode",4616980462),goog.events.KeyCodes.HOME,new cljs.core.Keyword(null,"go-to-top","go-to-top",4416015098)], true);
org_html_slideshow.main.slideshow_keymap = cljs.core.PersistentArrayMap.fromArray([goog.events.KeyCodes.T,new cljs.core.Keyword(null,"toggle-mode","toggle-mode",4616980462),goog.events.KeyCodes.HOME,new cljs.core.Keyword(null,"show-first-slide","show-first-slide",3152588022),goog.events.KeyCodes.END,new cljs.core.Keyword(null,"show-last-slide","show-last-slide",3110457340),goog.events.KeyCodes.SPACE,new cljs.core.Keyword(null,"playpause-video","playpause-video",742038946),goog.events.KeyCodes.RIGHT,new cljs.core.Keyword(null,"show-next-slide","show-next-slide",4201664153),goog.events.KeyCodes.N,new cljs.core.Keyword(null,"show-next-slide","show-next-slide",4201664153),goog.events.KeyCodes.LEFT,new cljs.core.Keyword(null,"show-prev-slide","show-prev-slide",512947673),goog.events.KeyCodes.P,new cljs.core.Keyword(null,"show-prev-slide","show-prev-slide",512947673)], true);
org_html_slideshow.main.handle_key = (function handle_key(event){var code = event.keyCode;var keymap = (cljs.core.truth_(cljs.core.deref.call(null,org_html_slideshow.main.slideshow_mode_QMARK_))?org_html_slideshow.main.slideshow_keymap:org_html_slideshow.main.normal_keymap);var event_id = cljs.core.get.call(null,keymap,code);if(cljs.core.truth_(event_id))
{org_html_slideshow.dispatch.fire.call(null,event_id);
event.preventDefault();
return event.stopPropagation();
} else
{return null;
}
});
org_html_slideshow.main.install_keyhandler = (function install_keyhandler(document){return goog.events.listen((new goog.events.KeyHandler(document)),goog.events.KeyHandler.EventType.KEY,org_html_slideshow.main.handle_key);
});
org_html_slideshow.main.presenter_display_html = "\n<html>\n  <head>\n  </head>\n  <body class=\"presenter-display\">\n    <div id=\"presenter-slide-preview\">\n      <div id=\"presenter-current-slide-container\">\n        <span class=\"presenter-label\">Current Slide</span>\n        <div id=\"presenter-current-slide\">\n        </div>\n      </div>\n      <div id=\"presenter-next-slide-container\">\n        <span class=\"presenter-label\">Next Slide</span>\n        <div id=\"presenter-next-slide\">\n        </div>\n      </div>\n     </div>\n     <div id=\"presenter-notes-container\"></div>\n     <div id=\"presenter-times\" class=\"presenter-label\">\n       <div id=\"presenter-elapsed-time-container\">\n          <span id=\"presenter-elapsed-time\">0:00:00</span>\n          <span id=\"presenter-elapsed-time-reset-container\">\n            <a href=\"#\" id=\"presenter-elapsed-time-reset\">reset</a>\n          </span>\n       </div>\n       <div id=\"presenter-clock-time\"><span></span></div>\n     </div>\n  </body>\n</html>\n";
org_html_slideshow.main.get_presenter_window = (function get_presenter_window(){if(cljs.core.truth_(cljs.core.deref.call(null,org_html_slideshow.main.presenter_window)))
{if(cljs.core.truth_(cljs.core.deref.call(null,org_html_slideshow.main.presenter_window).closed))
{return cljs.core.reset_BANG_.call(null,org_html_slideshow.main.presenter_window,null);
} else
{return cljs.core.deref.call(null,org_html_slideshow.main.presenter_window);
}
} else
{return null;
}
});
org_html_slideshow.main.update_presenter_clock_time = (function update_presenter_clock_time(win){var elem = win.document.getElementById("presenter-clock-time");var now = (new Date());var hours = now.getHours();var display_hours = (((12 < hours))?(hours - 12):hours);return elem.innerHTML = goog.string.format("<span>%d:%02d:%02d<span id=\"presenter-clock-time-ampm\"> %s</span></span>",display_hours,now.getMinutes(),now.getSeconds(),(((12 <= hours))?"pm":"am"));
});
org_html_slideshow.main.elapsed_time_string = (function elapsed_time_string(){var elapsed = ((new Date()).getTime() - cljs.core.deref.call(null,org_html_slideshow.main.presenter_start_time));var secs = cljs.core.mod.call(null,(elapsed / 1000),60);var mins = cljs.core.mod.call(null,(elapsed / (60 * 1000)),60);var hours = (elapsed / ((60 * 60) * 1000));return goog.string.format("%d:%02d:%02d",hours,mins,secs);
});
org_html_slideshow.main.update_presenter_elapsed_time = (function update_presenter_elapsed_time(win){var elem = win.document.getElementById("presenter-elapsed-time");return elem.innerHTML = (cljs.core.truth_(cljs.core.deref.call(null,org_html_slideshow.main.presenter_start_time))?org_html_slideshow.main.elapsed_time_string.call(null):"0:00:00");
});
org_html_slideshow.main.update_presenter_clock = (function update_presenter_clock(){var temp__4092__auto__ = org_html_slideshow.main.get_presenter_window.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var win = temp__4092__auto__;org_html_slideshow.main.update_presenter_clock_time.call(null,win);
org_html_slideshow.main.update_presenter_elapsed_time.call(null,win);
return window.setTimeout(update_presenter_clock,1000);
} else
{return null;
}
});
org_html_slideshow.main.reset_elapsed_time = (function reset_elapsed_time(){cljs.core.reset_BANG_.call(null,org_html_slideshow.main.presenter_start_time,null);
var temp__4092__auto__ = org_html_slideshow.main.get_presenter_window.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var win = temp__4092__auto__;return org_html_slideshow.main.update_presenter_elapsed_time.call(null,win);
} else
{return null;
}
});
org_html_slideshow.main.show_presenter_slides = (function show_presenter_slides(){var temp__4092__auto__ = org_html_slideshow.main.get_presenter_window.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var win = temp__4092__auto__;var map__4594_4595 = org_html_slideshow.main.current_slide.call(null);var map__4594_4596__$1 = ((cljs.core.seq_QMARK_.call(null,map__4594_4595))?cljs.core.apply.call(null,cljs.core.hash_map,map__4594_4595):map__4594_4595);var notes_html_4597 = cljs.core.get.call(null,map__4594_4596__$1,new cljs.core.Keyword(null,"notes-html","notes-html",896523945));var html_4598 = cljs.core.get.call(null,map__4594_4596__$1,new cljs.core.Keyword(null,"html","html",1017117469));var div_4599 = win.document.getElementById("presenter-current-slide");div_4599.innerHTML = html_4598;
var div_4600 = win.document.getElementById("presenter-notes-container");div_4600.innerHTML = notes_html_4597;
var div = win.document.getElementById("presenter-next-slide");return div.innerHTML = new cljs.core.Keyword(null,"html","html",1017117469).call(null,org_html_slideshow.main.next_slide.call(null));
} else
{return null;
}
});
org_html_slideshow.main.show_presenter_window = (function show_presenter_window(){var temp__4090__auto__ = org_html_slideshow.main.get_presenter_window.call(null);if(cljs.core.truth_(temp__4090__auto__))
{var win = temp__4090__auto__;return win.focus();
} else
{cljs.core.reset_BANG_.call(null,org_html_slideshow.main.presenter_window,goog.window.open("",cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"target","target",4427965699),"PRESENTERDISPLAY",new cljs.core.Keyword(null,"toolbar","toolbar",4168777453),false,new cljs.core.Keyword(null,"location","location",2914947879),false,new cljs.core.Keyword(null,"statusbar","statusbar",3238675027),false,new cljs.core.Keyword(null,"menubar","menubar",1964272070),false], true).strobj));
var doc_4601 = cljs.core.deref.call(null,org_html_slideshow.main.presenter_window).document;doc_4601.write(org_html_slideshow.main.presenter_display_html);
org_html_slideshow.main.add_stylesheets.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,org_html_slideshow.main.stylesheet_urls),"common"),doc_4601);
org_html_slideshow.main.add_stylesheets.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,org_html_slideshow.main.stylesheet_urls),"projection"),doc_4601);
org_html_slideshow.main.add_stylesheets.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,org_html_slideshow.main.stylesheet_urls),"presenter"),doc_4601);
org_html_slideshow.main.install_keyhandler.call(null,doc_4601);
goog.events.listen(doc_4601.getElementById("presenter-elapsed-time-reset"),goog.events.EventType.CLICK,org_html_slideshow.main.fire_handler.call(null,new cljs.core.Keyword(null,"reset-elapsed-time","reset-elapsed-time",598803374)));
org_html_slideshow.main.show_presenter_slides.call(null);
return org_html_slideshow.main.update_presenter_clock.call(null);
}
});
org_html_slideshow.main.playpause_video = (function playpause_video(){var elt = org_html_slideshow.domina.by_id.call(null,"current-slide");var mtag = (function (){var or__3943__auto__ = cljs.core.first.call(null,elt.getElementsByTagName("video"));if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.first.call(null,elt.getElementsByTagName("audio"));
}
})();var yt = cljs.core.first.call(null,elt.getElementsByClassName("ytvid"));if(cljs.core.truth_(mtag))
{var paused_QMARK_ = cljs.core.boolean$.call(null,(mtag["paused"]));if(paused_QMARK_)
{return mtag.play();
} else
{return mtag.pause();
}
} else
{if(cljs.core.truth_(yt))
{var src = (yt["src"]);var auto = "?autoplay=1";var src_SINGLEQUOTE_ = (cljs.core.truth_(goog.string.endsWith(src,auto))?src.replace(auto,""):[cljs.core.str(src),cljs.core.str(auto)].join(''));return (yt["src"] = src_SINGLEQUOTE_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
org_html_slideshow.main.install_event_handlers = (function install_event_handlers(){org_html_slideshow.dispatch.react_to.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"playpause-video","playpause-video",742038946),null], true),(function (id,_){return org_html_slideshow.main.playpause_video.call(null);
}));
org_html_slideshow.dispatch.react_to.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"show-next-slide","show-next-slide",4201664153),null], true),(function (id,_){return org_html_slideshow.main.show_next_slide.call(null);
}));
org_html_slideshow.dispatch.react_to.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"show-prev-slide","show-prev-slide",512947673),null], true),(function (id,_){return org_html_slideshow.main.show_prev_slide.call(null);
}));
org_html_slideshow.dispatch.react_to.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"show-first-slide","show-first-slide",3152588022),null], true),(function (id,_){return org_html_slideshow.main.show_first_slide.call(null);
}));
org_html_slideshow.dispatch.react_to.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"show-last-slide","show-last-slide",3110457340),null], true),(function (id,_){return org_html_slideshow.main.show_last_slide.call(null);
}));
org_html_slideshow.dispatch.react_to.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"toggle-mode","toggle-mode",4616980462),null], true),(function (id,_){return org_html_slideshow.main.toggle_mode.call(null);
}));
org_html_slideshow.dispatch.react_to.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"go-to-top","go-to-top",4416015098),null], true),(function (id,_){return org_html_slideshow.main.go_to_top.call(null);
}));
org_html_slideshow.dispatch.react_to.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"show-control-panel","show-control-panel",2312178230),null], true),(function (id,_){return org_html_slideshow.main.show_control_panel.call(null);
}));
org_html_slideshow.dispatch.react_to.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"hide-control-panel","hide-control-panel",1703161787),null], true),(function (id,_){return org_html_slideshow.main.hide_control_panel.call(null);
}));
org_html_slideshow.dispatch.react_to.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"change-mode","change-mode",3608021266),null], true),(function (id,_){return org_html_slideshow.main.change_mode.call(null);
}));
org_html_slideshow.dispatch.react_to.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"show-presenter-window","show-presenter-window",1103105783),null], true),(function (id,_){return org_html_slideshow.main.show_presenter_window.call(null);
}));
return org_html_slideshow.dispatch.react_to.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"reset-elapsed-time","reset-elapsed-time",598803374),null], true),(function (id,_){return org_html_slideshow.main.reset_elapsed_time.call(null);
}));
});
org_html_slideshow.main.init_stylesheets = (function init_stylesheets(){return cljs.core.swap_BANG_.call(null,org_html_slideshow.main.stylesheet_urls,cljs.core.assoc,"projection",org_html_slideshow.main.stylesheets.call(null,"projection"),"screen",org_html_slideshow.main.stylesheets.call(null,"screen"),"common",org_html_slideshow.main.stylesheets.call(null,null),"presenter",org_html_slideshow.main.stylesheets.call(null,"presenter"));
});
org_html_slideshow.main.add_image_classes = (function add_image_classes(){var seq__4606 = cljs.core.seq.call(null,org_html_slideshow.main.dom_tags.call(null,"img"));var chunk__4607 = null;var count__4608 = 0;var i__4609 = 0;while(true){
if((i__4609 < count__4608))
{var img = cljs.core._nth.call(null,chunk__4607,i__4609);var p_4610 = img.parentNode;if(cljs.core._EQ_.call(null,"P",p_4610.nodeName))
{goog.dom.classes.add(p_4610,"image");
} else
{}
{
var G__4611 = seq__4606;
var G__4612 = chunk__4607;
var G__4613 = count__4608;
var G__4614 = (i__4609 + 1);
seq__4606 = G__4611;
chunk__4607 = G__4612;
count__4608 = G__4613;
i__4609 = G__4614;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4606);if(temp__4092__auto__)
{var seq__4606__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4606__$1))
{var c__3565__auto__ = cljs.core.chunk_first.call(null,seq__4606__$1);{
var G__4615 = cljs.core.chunk_rest.call(null,seq__4606__$1);
var G__4616 = c__3565__auto__;
var G__4617 = cljs.core.count.call(null,c__3565__auto__);
var G__4618 = 0;
seq__4606 = G__4615;
chunk__4607 = G__4616;
count__4608 = G__4617;
i__4609 = G__4618;
continue;
}
} else
{var img = cljs.core.first.call(null,seq__4606__$1);var p_4619 = img.parentNode;if(cljs.core._EQ_.call(null,"P",p_4619.nodeName))
{goog.dom.classes.add(p_4619,"image");
} else
{}
{
var G__4620 = cljs.core.next.call(null,seq__4606__$1);
var G__4621 = null;
var G__4622 = 0;
var G__4623 = 0;
seq__4606 = G__4620;
chunk__4607 = G__4621;
count__4608 = G__4622;
i__4609 = G__4623;
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
org_html_slideshow.main.add_outline_text_class = (function add_outline_text_class(){var seq__4636 = cljs.core.seq.call(null,cljs.core.range.call(null,1,9));var chunk__4637 = null;var count__4638 = 0;var i__4639 = 0;while(true){
if((i__4639 < count__4638))
{var i = cljs.core._nth.call(null,chunk__4637,i__4639);var seq__4640_4648 = cljs.core.seq.call(null,org_html_slideshow.main.dom_tags.call(null,"div",[cljs.core.str("outline-text-"),cljs.core.str(i)].join('')));var chunk__4641_4649 = null;var count__4642_4650 = 0;var i__4643_4651 = 0;while(true){
if((i__4643_4651 < count__4642_4650))
{var elem_4652 = cljs.core._nth.call(null,chunk__4641_4649,i__4643_4651);goog.dom.classes.add(elem_4652,"outline-text");
{
var G__4653 = seq__4640_4648;
var G__4654 = chunk__4641_4649;
var G__4655 = count__4642_4650;
var G__4656 = (i__4643_4651 + 1);
seq__4640_4648 = G__4653;
chunk__4641_4649 = G__4654;
count__4642_4650 = G__4655;
i__4643_4651 = G__4656;
continue;
}
} else
{var temp__4092__auto___4657 = cljs.core.seq.call(null,seq__4640_4648);if(temp__4092__auto___4657)
{var seq__4640_4658__$1 = temp__4092__auto___4657;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4640_4658__$1))
{var c__3565__auto___4659 = cljs.core.chunk_first.call(null,seq__4640_4658__$1);{
var G__4660 = cljs.core.chunk_rest.call(null,seq__4640_4658__$1);
var G__4661 = c__3565__auto___4659;
var G__4662 = cljs.core.count.call(null,c__3565__auto___4659);
var G__4663 = 0;
seq__4640_4648 = G__4660;
chunk__4641_4649 = G__4661;
count__4642_4650 = G__4662;
i__4643_4651 = G__4663;
continue;
}
} else
{var elem_4664 = cljs.core.first.call(null,seq__4640_4658__$1);goog.dom.classes.add(elem_4664,"outline-text");
{
var G__4665 = cljs.core.next.call(null,seq__4640_4658__$1);
var G__4666 = null;
var G__4667 = 0;
var G__4668 = 0;
seq__4640_4648 = G__4665;
chunk__4641_4649 = G__4666;
count__4642_4650 = G__4667;
i__4643_4651 = G__4668;
continue;
}
}
} else
{}
}
break;
}
{
var G__4669 = seq__4636;
var G__4670 = chunk__4637;
var G__4671 = count__4638;
var G__4672 = (i__4639 + 1);
seq__4636 = G__4669;
chunk__4637 = G__4670;
count__4638 = G__4671;
i__4639 = G__4672;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4636);if(temp__4092__auto__)
{var seq__4636__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4636__$1))
{var c__3565__auto__ = cljs.core.chunk_first.call(null,seq__4636__$1);{
var G__4673 = cljs.core.chunk_rest.call(null,seq__4636__$1);
var G__4674 = c__3565__auto__;
var G__4675 = cljs.core.count.call(null,c__3565__auto__);
var G__4676 = 0;
seq__4636 = G__4673;
chunk__4637 = G__4674;
count__4638 = G__4675;
i__4639 = G__4676;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__4636__$1);var seq__4644_4677 = cljs.core.seq.call(null,org_html_slideshow.main.dom_tags.call(null,"div",[cljs.core.str("outline-text-"),cljs.core.str(i)].join('')));var chunk__4645_4678 = null;var count__4646_4679 = 0;var i__4647_4680 = 0;while(true){
if((i__4647_4680 < count__4646_4679))
{var elem_4681 = cljs.core._nth.call(null,chunk__4645_4678,i__4647_4680);goog.dom.classes.add(elem_4681,"outline-text");
{
var G__4682 = seq__4644_4677;
var G__4683 = chunk__4645_4678;
var G__4684 = count__4646_4679;
var G__4685 = (i__4647_4680 + 1);
seq__4644_4677 = G__4682;
chunk__4645_4678 = G__4683;
count__4646_4679 = G__4684;
i__4647_4680 = G__4685;
continue;
}
} else
{var temp__4092__auto___4686__$1 = cljs.core.seq.call(null,seq__4644_4677);if(temp__4092__auto___4686__$1)
{var seq__4644_4687__$1 = temp__4092__auto___4686__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4644_4687__$1))
{var c__3565__auto___4688 = cljs.core.chunk_first.call(null,seq__4644_4687__$1);{
var G__4689 = cljs.core.chunk_rest.call(null,seq__4644_4687__$1);
var G__4690 = c__3565__auto___4688;
var G__4691 = cljs.core.count.call(null,c__3565__auto___4688);
var G__4692 = 0;
seq__4644_4677 = G__4689;
chunk__4645_4678 = G__4690;
count__4646_4679 = G__4691;
i__4647_4680 = G__4692;
continue;
}
} else
{var elem_4693 = cljs.core.first.call(null,seq__4644_4687__$1);goog.dom.classes.add(elem_4693,"outline-text");
{
var G__4694 = cljs.core.next.call(null,seq__4644_4687__$1);
var G__4695 = null;
var G__4696 = 0;
var G__4697 = 0;
seq__4644_4677 = G__4694;
chunk__4645_4678 = G__4695;
count__4646_4679 = G__4696;
i__4647_4680 = G__4697;
continue;
}
}
} else
{}
}
break;
}
{
var G__4698 = cljs.core.next.call(null,seq__4636__$1);
var G__4699 = null;
var G__4700 = 0;
var G__4701 = 0;
seq__4636 = G__4698;
chunk__4637 = G__4699;
count__4638 = G__4700;
i__4639 = G__4701;
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
org_html_slideshow.main.remove_heading_spaces = (function remove_heading_spaces(){var seq__4718_4734 = cljs.core.seq.call(null,cljs.core.range.call(null,1,9));var chunk__4723_4735 = null;var count__4724_4736 = 0;var i__4725_4737 = 0;while(true){
if((i__4725_4737 < count__4724_4736))
{var n_4738 = cljs.core._nth.call(null,chunk__4723_4735,i__4725_4737);var seq__4726_4739 = cljs.core.seq.call(null,org_html_slideshow.main.dom_tags.call(null,[cljs.core.str("h"),cljs.core.str(n_4738)].join('')));var chunk__4727_4740 = null;var count__4728_4741 = 0;var i__4729_4742 = 0;while(true){
if((i__4729_4742 < count__4728_4741))
{var elem_4743 = cljs.core._nth.call(null,chunk__4727_4740,i__4729_4742);org_html_slideshow.main.remove_nbsp.call(null,elem_4743);
{
var G__4744 = seq__4726_4739;
var G__4745 = chunk__4727_4740;
var G__4746 = count__4728_4741;
var G__4747 = (i__4729_4742 + 1);
seq__4726_4739 = G__4744;
chunk__4727_4740 = G__4745;
count__4728_4741 = G__4746;
i__4729_4742 = G__4747;
continue;
}
} else
{var temp__4092__auto___4748 = cljs.core.seq.call(null,seq__4726_4739);if(temp__4092__auto___4748)
{var seq__4726_4749__$1 = temp__4092__auto___4748;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4726_4749__$1))
{var c__3565__auto___4750 = cljs.core.chunk_first.call(null,seq__4726_4749__$1);{
var G__4751 = cljs.core.chunk_rest.call(null,seq__4726_4749__$1);
var G__4752 = c__3565__auto___4750;
var G__4753 = cljs.core.count.call(null,c__3565__auto___4750);
var G__4754 = 0;
seq__4726_4739 = G__4751;
chunk__4727_4740 = G__4752;
count__4728_4741 = G__4753;
i__4729_4742 = G__4754;
continue;
}
} else
{var elem_4755 = cljs.core.first.call(null,seq__4726_4749__$1);org_html_slideshow.main.remove_nbsp.call(null,elem_4755);
{
var G__4756 = cljs.core.next.call(null,seq__4726_4749__$1);
var G__4757 = null;
var G__4758 = 0;
var G__4759 = 0;
seq__4726_4739 = G__4756;
chunk__4727_4740 = G__4757;
count__4728_4741 = G__4758;
i__4729_4742 = G__4759;
continue;
}
}
} else
{}
}
break;
}
{
var G__4760 = seq__4718_4734;
var G__4761 = chunk__4723_4735;
var G__4762 = count__4724_4736;
var G__4763 = (i__4725_4737 + 1);
seq__4718_4734 = G__4760;
chunk__4723_4735 = G__4761;
count__4724_4736 = G__4762;
i__4725_4737 = G__4763;
continue;
}
} else
{var temp__4092__auto___4764 = cljs.core.seq.call(null,seq__4718_4734);if(temp__4092__auto___4764)
{var seq__4718_4765__$1 = temp__4092__auto___4764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4718_4765__$1))
{var c__3565__auto___4766 = cljs.core.chunk_first.call(null,seq__4718_4765__$1);{
var G__4767 = cljs.core.chunk_rest.call(null,seq__4718_4765__$1);
var G__4768 = c__3565__auto___4766;
var G__4769 = cljs.core.count.call(null,c__3565__auto___4766);
var G__4770 = 0;
seq__4718_4734 = G__4767;
chunk__4723_4735 = G__4768;
count__4724_4736 = G__4769;
i__4725_4737 = G__4770;
continue;
}
} else
{var n_4771 = cljs.core.first.call(null,seq__4718_4765__$1);var seq__4719_4772 = cljs.core.seq.call(null,org_html_slideshow.main.dom_tags.call(null,[cljs.core.str("h"),cljs.core.str(n_4771)].join('')));var chunk__4720_4773 = null;var count__4721_4774 = 0;var i__4722_4775 = 0;while(true){
if((i__4722_4775 < count__4721_4774))
{var elem_4776 = cljs.core._nth.call(null,chunk__4720_4773,i__4722_4775);org_html_slideshow.main.remove_nbsp.call(null,elem_4776);
{
var G__4777 = seq__4719_4772;
var G__4778 = chunk__4720_4773;
var G__4779 = count__4721_4774;
var G__4780 = (i__4722_4775 + 1);
seq__4719_4772 = G__4777;
chunk__4720_4773 = G__4778;
count__4721_4774 = G__4779;
i__4722_4775 = G__4780;
continue;
}
} else
{var temp__4092__auto___4781__$1 = cljs.core.seq.call(null,seq__4719_4772);if(temp__4092__auto___4781__$1)
{var seq__4719_4782__$1 = temp__4092__auto___4781__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4719_4782__$1))
{var c__3565__auto___4783 = cljs.core.chunk_first.call(null,seq__4719_4782__$1);{
var G__4784 = cljs.core.chunk_rest.call(null,seq__4719_4782__$1);
var G__4785 = c__3565__auto___4783;
var G__4786 = cljs.core.count.call(null,c__3565__auto___4783);
var G__4787 = 0;
seq__4719_4772 = G__4784;
chunk__4720_4773 = G__4785;
count__4721_4774 = G__4786;
i__4722_4775 = G__4787;
continue;
}
} else
{var elem_4788 = cljs.core.first.call(null,seq__4719_4782__$1);org_html_slideshow.main.remove_nbsp.call(null,elem_4788);
{
var G__4789 = cljs.core.next.call(null,seq__4719_4782__$1);
var G__4790 = null;
var G__4791 = 0;
var G__4792 = 0;
seq__4719_4772 = G__4789;
chunk__4720_4773 = G__4790;
count__4721_4774 = G__4791;
i__4722_4775 = G__4792;
continue;
}
}
} else
{}
}
break;
}
{
var G__4793 = cljs.core.next.call(null,seq__4718_4765__$1);
var G__4794 = null;
var G__4795 = 0;
var G__4796 = 0;
seq__4718_4734 = G__4793;
chunk__4723_4735 = G__4794;
count__4724_4736 = G__4795;
i__4725_4737 = G__4796;
continue;
}
}
} else
{}
}
break;
}
var seq__4730 = cljs.core.seq.call(null,org_html_slideshow.main.dom_tags.call(null,"a",null,goog.dom.getElement("table-of-contents")));var chunk__4731 = null;var count__4732 = 0;var i__4733 = 0;while(true){
if((i__4733 < count__4732))
{var elem = cljs.core._nth.call(null,chunk__4731,i__4733);org_html_slideshow.main.remove_nbsp.call(null,elem);
{
var G__4797 = seq__4730;
var G__4798 = chunk__4731;
var G__4799 = count__4732;
var G__4800 = (i__4733 + 1);
seq__4730 = G__4797;
chunk__4731 = G__4798;
count__4732 = G__4799;
i__4733 = G__4800;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4730);if(temp__4092__auto__)
{var seq__4730__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4730__$1))
{var c__3565__auto__ = cljs.core.chunk_first.call(null,seq__4730__$1);{
var G__4801 = cljs.core.chunk_rest.call(null,seq__4730__$1);
var G__4802 = c__3565__auto__;
var G__4803 = cljs.core.count.call(null,c__3565__auto__);
var G__4804 = 0;
seq__4730 = G__4801;
chunk__4731 = G__4802;
count__4732 = G__4803;
i__4733 = G__4804;
continue;
}
} else
{var elem = cljs.core.first.call(null,seq__4730__$1);org_html_slideshow.main.remove_nbsp.call(null,elem);
{
var G__4805 = cljs.core.next.call(null,seq__4730__$1);
var G__4806 = null;
var G__4807 = 0;
var G__4808 = 0;
seq__4730 = G__4805;
chunk__4731 = G__4806;
count__4732 = G__4807;
i__4733 = G__4808;
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
org_html_slideshow.main.main = (function main(){org_html_slideshow.main.info.call(null,"main");
(new goog.debug.Console()).setCapturing(true);
org_html_slideshow.main.info.call(null,"Application started");
org_html_slideshow.main.info.call(null,"Preparing document");
org_html_slideshow.main.init_stylesheets.call(null);
org_html_slideshow.main.remove_stylesheets.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,org_html_slideshow.main.stylesheet_urls),"projection"));
org_html_slideshow.main.remove_stylesheets.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,org_html_slideshow.main.stylesheet_urls),"presenter"));
org_html_slideshow.main.add_image_classes.call(null);
org_html_slideshow.main.copy_heading_tags_to_div_classes.call(null);
org_html_slideshow.main.add_outline_text_class.call(null);
org_html_slideshow.main.remove_heading_spaces.call(null);
org_html_slideshow.main.install_folds.call(null);
org_html_slideshow.main.body_elem.call(null).appendChild(goog.dom.htmlToDocumentFragment(org_html_slideshow.main.current_slide_div_html));
org_html_slideshow.main.hide_BANG_.call(null,org_html_slideshow.domina.by_id.call(null,"current-slide"));
cljs.core.reset_BANG_.call(null,org_html_slideshow.main.slides,org_html_slideshow.main.get_slides.call(null));
org_html_slideshow.main.info.call(null,cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"slides","slides",1754788507,null)),cljs.core.count.call(null,cljs.core.deref.call(null,org_html_slideshow.main.slides)));
org_html_slideshow.main.info.call(null,"Installing key handler");
org_html_slideshow.main.install_event_handlers.call(null);
org_html_slideshow.main.install_control_panel.call(null);
return org_html_slideshow.main.install_keyhandler.call(null,goog.dom.getDocument());
});
org_html_slideshow.main.main.call(null);
