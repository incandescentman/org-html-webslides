goog.provide('org_html_slideshow.domina');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
org_html_slideshow.domina.debug = true;
org_html_slideshow.domina.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__3941__auto__ = org_html_slideshow.domina.debug;if(cljs.core.truth_(and__3941__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3941__auto__;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
org_html_slideshow.domina.DomContent = {};
org_html_slideshow.domina.nodes = (function nodes(content){if((function (){var and__3941__auto__ = content;if(and__3941__auto__)
{return content.org_html_slideshow$domina$DomContent$nodes$arity$1;
} else
{return and__3941__auto__;
}
})())
{return content.org_html_slideshow$domina$DomContent$nodes$arity$1(content);
} else
{var x__3434__auto__ = (((content == null))?null:content);return (function (){var or__3943__auto__ = (org_html_slideshow.domina.nodes[goog.typeOf(x__3434__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (org_html_slideshow.domina.nodes["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
org_html_slideshow.domina.single_node = (function single_node(nodeseq){if((function (){var and__3941__auto__ = nodeseq;if(and__3941__auto__)
{return nodeseq.org_html_slideshow$domina$DomContent$single_node$arity$1;
} else
{return and__3941__auto__;
}
})())
{return nodeseq.org_html_slideshow$domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3434__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3943__auto__ = (org_html_slideshow.domina.single_node[goog.typeOf(x__3434__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (org_html_slideshow.domina.single_node["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
/**
* Returns content containing a single node by looking up the given ID
*/
org_html_slideshow.domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
org_html_slideshow.domina.by_class = (function by_class(class_name){if(typeof org_html_slideshow.domina.t5999 !== 'undefined')
{} else
{goog.provide('org_html_slideshow.domina.t5999');

/**
* @constructor
*/
org_html_slideshow.domina.t5999 = (function (class_name,by_class,meta6000){
this.class_name = class_name;
this.by_class = by_class;
this.meta6000 = meta6000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
org_html_slideshow.domina.t5999.cljs$lang$type = true;
org_html_slideshow.domina.t5999.cljs$lang$ctorStr = "org-html-slideshow.domina/t5999";
org_html_slideshow.domina.t5999.cljs$lang$ctorPrWriter = (function (this__3375__auto__,writer__3376__auto__,opt__3377__auto__){return cljs.core._write(writer__3376__auto__,"org-html-slideshow.domina/t5999");
});
org_html_slideshow.domina.t5999.prototype.org_html_slideshow$domina$DomContent$ = true;
org_html_slideshow.domina.t5999.prototype.org_html_slideshow$domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
return goog.dom.getElementsByClass(cljs.core.name(self__.class_name));
});
org_html_slideshow.domina.t5999.prototype.org_html_slideshow$domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
return goog.dom.getElementByClass(cljs.core.name(self__.class_name));
});
org_html_slideshow.domina.t5999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6001){var self__ = this;
return self__.meta6000;
});
org_html_slideshow.domina.t5999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6001,meta6000__$1){var self__ = this;
return (new org_html_slideshow.domina.t5999(self__.class_name,self__.by_class,meta6000__$1));
});
org_html_slideshow.domina.__GT_t5999 = (function __GT_t5999(class_name__$1,by_class__$1,meta6000){return (new org_html_slideshow.domina.t5999(class_name__$1,by_class__$1,meta6000));
});
}
return (new org_html_slideshow.domina.t5999(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
org_html_slideshow.domina.children = (function children(content){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,org_html_slideshow.domina.nodes(content));
});
/**
* Returns a deep clone of content.
*/
org_html_slideshow.domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6002_SHARP_){return p1__6002_SHARP_.cloneNode(true);
}),org_html_slideshow.domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
org_html_slideshow.domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(org_html_slideshow.domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? org_html_slideshow.domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : org_html_slideshow.domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
org_html_slideshow.domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(org_html_slideshow.domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? org_html_slideshow.domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__6003_SHARP_,p2__6004_SHARP_){return goog.dom.insertChildAt(p1__6003_SHARP_,p2__6004_SHARP_,idx);
}),parent_content,child_content) : org_html_slideshow.domina.apply_with_cloning.call(null,(function (p1__6003_SHARP_,p2__6004_SHARP_){return goog.dom.insertChildAt(p1__6003_SHARP_,p2__6004_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
org_html_slideshow.domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){org_html_slideshow.domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
org_html_slideshow.domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(org_html_slideshow.domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? org_html_slideshow.domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__6006_SHARP_,p2__6005_SHARP_){return goog.dom.insertSiblingBefore(p2__6005_SHARP_,p1__6006_SHARP_);
}),content,new_content) : org_html_slideshow.domina.apply_with_cloning.call(null,(function (p1__6006_SHARP_,p2__6005_SHARP_){return goog.dom.insertSiblingBefore(p2__6005_SHARP_,p1__6006_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
org_html_slideshow.domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(org_html_slideshow.domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? org_html_slideshow.domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__6008_SHARP_,p2__6007_SHARP_){return goog.dom.insertSiblingAfter(p2__6007_SHARP_,p1__6008_SHARP_);
}),content,new_content) : org_html_slideshow.domina.apply_with_cloning.call(null,(function (p1__6008_SHARP_,p2__6007_SHARP_){return goog.dom.insertSiblingAfter(p2__6007_SHARP_,p1__6008_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
org_html_slideshow.domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(org_html_slideshow.domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? org_html_slideshow.domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__6010_SHARP_,p2__6009_SHARP_){return goog.dom.replaceNode(p2__6009_SHARP_,p1__6010_SHARP_);
}),old_content,new_content) : org_html_slideshow.domina.apply_with_cloning.call(null,(function (p1__6010_SHARP_,p2__6009_SHARP_){return goog.dom.replaceNode(p2__6009_SHARP_,p1__6010_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
org_html_slideshow.domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,org_html_slideshow.domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
org_html_slideshow.domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,org_html_slideshow.domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
org_html_slideshow.domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,org_html_slideshow.domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
org_html_slideshow.domina.style = (function style(content,name){var s = goog.style.getStyle(org_html_slideshow.domina.single_node(content),cljs.core.name(name));if(cljs.core.not(goog.string.isEmptySafe(s)))
{return s;
} else
{return null;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
org_html_slideshow.domina.attr = (function attr(content,name){return org_html_slideshow.domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword.
*/
org_html_slideshow.domina.set_style_BANG_ = (function set_style_BANG_(content,name,value){var seq__6015_6019 = cljs.core.seq(org_html_slideshow.domina.nodes(content));var chunk__6016_6020 = null;var count__6017_6021 = 0;var i__6018_6022 = 0;while(true){
if((i__6018_6022 < count__6017_6021))
{var n_6023 = chunk__6016_6020.cljs$core$IIndexed$_nth$arity$2(chunk__6016_6020,i__6018_6022);goog.style.setStyle(n_6023,cljs.core.name(name),value);
{
var G__6024 = seq__6015_6019;
var G__6025 = chunk__6016_6020;
var G__6026 = count__6017_6021;
var G__6027 = (i__6018_6022 + 1);
seq__6015_6019 = G__6024;
chunk__6016_6020 = G__6025;
count__6017_6021 = G__6026;
i__6018_6022 = G__6027;
continue;
}
} else
{var temp__4092__auto___6028 = cljs.core.seq(seq__6015_6019);if(temp__4092__auto___6028)
{var seq__6015_6029__$1 = temp__4092__auto___6028;if(cljs.core.chunked_seq_QMARK_(seq__6015_6029__$1))
{var c__3565__auto___6030 = cljs.core.chunk_first(seq__6015_6029__$1);{
var G__6031 = cljs.core.chunk_rest(seq__6015_6029__$1);
var G__6032 = c__3565__auto___6030;
var G__6033 = cljs.core.count(c__3565__auto___6030);
var G__6034 = 0;
seq__6015_6019 = G__6031;
chunk__6016_6020 = G__6032;
count__6017_6021 = G__6033;
i__6018_6022 = G__6034;
continue;
}
} else
{var n_6035 = cljs.core.first(seq__6015_6029__$1);goog.style.setStyle(n_6035,cljs.core.name(name),value);
{
var G__6036 = cljs.core.next(seq__6015_6029__$1);
var G__6037 = null;
var G__6038 = 0;
var G__6039 = 0;
seq__6015_6019 = G__6036;
chunk__6016_6020 = G__6037;
count__6017_6021 = G__6038;
i__6018_6022 = G__6039;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword.
*/
org_html_slideshow.domina.set_attr_BANG_ = (function set_attr_BANG_(content,name,value){var seq__6044_6048 = cljs.core.seq(org_html_slideshow.domina.nodes(content));var chunk__6045_6049 = null;var count__6046_6050 = 0;var i__6047_6051 = 0;while(true){
if((i__6047_6051 < count__6046_6050))
{var n_6052 = chunk__6045_6049.cljs$core$IIndexed$_nth$arity$2(chunk__6045_6049,i__6047_6051);n_6052.setAttribute(cljs.core.name(name),value);
{
var G__6053 = seq__6044_6048;
var G__6054 = chunk__6045_6049;
var G__6055 = count__6046_6050;
var G__6056 = (i__6047_6051 + 1);
seq__6044_6048 = G__6053;
chunk__6045_6049 = G__6054;
count__6046_6050 = G__6055;
i__6047_6051 = G__6056;
continue;
}
} else
{var temp__4092__auto___6057 = cljs.core.seq(seq__6044_6048);if(temp__4092__auto___6057)
{var seq__6044_6058__$1 = temp__4092__auto___6057;if(cljs.core.chunked_seq_QMARK_(seq__6044_6058__$1))
{var c__3565__auto___6059 = cljs.core.chunk_first(seq__6044_6058__$1);{
var G__6060 = cljs.core.chunk_rest(seq__6044_6058__$1);
var G__6061 = c__3565__auto___6059;
var G__6062 = cljs.core.count(c__3565__auto___6059);
var G__6063 = 0;
seq__6044_6048 = G__6060;
chunk__6045_6049 = G__6061;
count__6046_6050 = G__6062;
i__6047_6051 = G__6063;
continue;
}
} else
{var n_6064 = cljs.core.first(seq__6044_6058__$1);n_6064.setAttribute(cljs.core.name(name),value);
{
var G__6065 = cljs.core.next(seq__6044_6058__$1);
var G__6066 = null;
var G__6067 = 0;
var G__6068 = 0;
seq__6044_6048 = G__6065;
chunk__6045_6049 = G__6066;
count__6046_6050 = G__6067;
i__6047_6051 = G__6068;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
org_html_slideshow.domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__6070 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6070,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6070,1,null);if(cljs.core.truth_((function (){var and__3941__auto__ = k;if(cljs.core.truth_(and__3941__auto__))
{return v;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
org_html_slideshow.domina.styles = (function styles(content){return org_html_slideshow.domina.parse_style_attributes(org_html_slideshow.domina.attr(content,"style"));
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
org_html_slideshow.domina.attrs = (function attrs(content){var node = org_html_slideshow.domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6071_SHARP_){var attr = attrs__$1.item(p1__6071_SHARP_);return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
org_html_slideshow.domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__6078_6084 = cljs.core.seq(styles);var chunk__6079_6085 = null;var count__6080_6086 = 0;var i__6081_6087 = 0;while(true){
if((i__6081_6087 < count__6080_6086))
{var vec__6082_6088 = chunk__6079_6085.cljs$core$IIndexed$_nth$arity$2(chunk__6079_6085,i__6081_6087);var name_6089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6082_6088,0,null);var value_6090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6082_6088,1,null);org_html_slideshow.domina.set_style_BANG_(content,name_6089,value_6090);
{
var G__6091 = seq__6078_6084;
var G__6092 = chunk__6079_6085;
var G__6093 = count__6080_6086;
var G__6094 = (i__6081_6087 + 1);
seq__6078_6084 = G__6091;
chunk__6079_6085 = G__6092;
count__6080_6086 = G__6093;
i__6081_6087 = G__6094;
continue;
}
} else
{var temp__4092__auto___6095 = cljs.core.seq(seq__6078_6084);if(temp__4092__auto___6095)
{var seq__6078_6096__$1 = temp__4092__auto___6095;if(cljs.core.chunked_seq_QMARK_(seq__6078_6096__$1))
{var c__3565__auto___6097 = cljs.core.chunk_first(seq__6078_6096__$1);{
var G__6098 = cljs.core.chunk_rest(seq__6078_6096__$1);
var G__6099 = c__3565__auto___6097;
var G__6100 = cljs.core.count(c__3565__auto___6097);
var G__6101 = 0;
seq__6078_6084 = G__6098;
chunk__6079_6085 = G__6099;
count__6080_6086 = G__6100;
i__6081_6087 = G__6101;
continue;
}
} else
{var vec__6083_6102 = cljs.core.first(seq__6078_6096__$1);var name_6103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6083_6102,0,null);var value_6104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6083_6102,1,null);org_html_slideshow.domina.set_style_BANG_(content,name_6103,value_6104);
{
var G__6105 = cljs.core.next(seq__6078_6096__$1);
var G__6106 = null;
var G__6107 = 0;
var G__6108 = 0;
seq__6078_6084 = G__6105;
chunk__6079_6085 = G__6106;
count__6080_6086 = G__6107;
i__6081_6087 = G__6108;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
org_html_slideshow.domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__6115_6121 = cljs.core.seq(attrs);var chunk__6116_6122 = null;var count__6117_6123 = 0;var i__6118_6124 = 0;while(true){
if((i__6118_6124 < count__6117_6123))
{var vec__6119_6125 = chunk__6116_6122.cljs$core$IIndexed$_nth$arity$2(chunk__6116_6122,i__6118_6124);var name_6126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6119_6125,0,null);var value_6127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6119_6125,1,null);org_html_slideshow.domina.set_attr_BANG_(content,name_6126,value_6127);
{
var G__6128 = seq__6115_6121;
var G__6129 = chunk__6116_6122;
var G__6130 = count__6117_6123;
var G__6131 = (i__6118_6124 + 1);
seq__6115_6121 = G__6128;
chunk__6116_6122 = G__6129;
count__6117_6123 = G__6130;
i__6118_6124 = G__6131;
continue;
}
} else
{var temp__4092__auto___6132 = cljs.core.seq(seq__6115_6121);if(temp__4092__auto___6132)
{var seq__6115_6133__$1 = temp__4092__auto___6132;if(cljs.core.chunked_seq_QMARK_(seq__6115_6133__$1))
{var c__3565__auto___6134 = cljs.core.chunk_first(seq__6115_6133__$1);{
var G__6135 = cljs.core.chunk_rest(seq__6115_6133__$1);
var G__6136 = c__3565__auto___6134;
var G__6137 = cljs.core.count(c__3565__auto___6134);
var G__6138 = 0;
seq__6115_6121 = G__6135;
chunk__6116_6122 = G__6136;
count__6117_6123 = G__6137;
i__6118_6124 = G__6138;
continue;
}
} else
{var vec__6120_6139 = cljs.core.first(seq__6115_6133__$1);var name_6140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6120_6139,0,null);var value_6141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6120_6139,1,null);org_html_slideshow.domina.set_attr_BANG_(content,name_6140,value_6141);
{
var G__6142 = cljs.core.next(seq__6115_6133__$1);
var G__6143 = null;
var G__6144 = 0;
var G__6145 = 0;
seq__6115_6121 = G__6142;
chunk__6116_6122 = G__6143;
count__6117_6123 = G__6144;
i__6118_6124 = G__6145;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
org_html_slideshow.domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(org_html_slideshow.domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
org_html_slideshow.domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__6150_6154 = cljs.core.seq(org_html_slideshow.domina.nodes(content));var chunk__6151_6155 = null;var count__6152_6156 = 0;var i__6153_6157 = 0;while(true){
if((i__6153_6157 < count__6152_6156))
{var node_6158 = chunk__6151_6155.cljs$core$IIndexed$_nth$arity$2(chunk__6151_6155,i__6153_6157);goog.dom.classes.add(node_6158,class$);
{
var G__6159 = seq__6150_6154;
var G__6160 = chunk__6151_6155;
var G__6161 = count__6152_6156;
var G__6162 = (i__6153_6157 + 1);
seq__6150_6154 = G__6159;
chunk__6151_6155 = G__6160;
count__6152_6156 = G__6161;
i__6153_6157 = G__6162;
continue;
}
} else
{var temp__4092__auto___6163 = cljs.core.seq(seq__6150_6154);if(temp__4092__auto___6163)
{var seq__6150_6164__$1 = temp__4092__auto___6163;if(cljs.core.chunked_seq_QMARK_(seq__6150_6164__$1))
{var c__3565__auto___6165 = cljs.core.chunk_first(seq__6150_6164__$1);{
var G__6166 = cljs.core.chunk_rest(seq__6150_6164__$1);
var G__6167 = c__3565__auto___6165;
var G__6168 = cljs.core.count(c__3565__auto___6165);
var G__6169 = 0;
seq__6150_6154 = G__6166;
chunk__6151_6155 = G__6167;
count__6152_6156 = G__6168;
i__6153_6157 = G__6169;
continue;
}
} else
{var node_6170 = cljs.core.first(seq__6150_6164__$1);goog.dom.classes.add(node_6170,class$);
{
var G__6171 = cljs.core.next(seq__6150_6164__$1);
var G__6172 = null;
var G__6173 = 0;
var G__6174 = 0;
seq__6150_6154 = G__6171;
chunk__6151_6155 = G__6172;
count__6152_6156 = G__6173;
i__6153_6157 = G__6174;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
org_html_slideshow.domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__6179_6183 = cljs.core.seq(org_html_slideshow.domina.nodes(content));var chunk__6180_6184 = null;var count__6181_6185 = 0;var i__6182_6186 = 0;while(true){
if((i__6182_6186 < count__6181_6185))
{var node_6187 = chunk__6180_6184.cljs$core$IIndexed$_nth$arity$2(chunk__6180_6184,i__6182_6186);goog.dom.classes.remove(node_6187,class$);
{
var G__6188 = seq__6179_6183;
var G__6189 = chunk__6180_6184;
var G__6190 = count__6181_6185;
var G__6191 = (i__6182_6186 + 1);
seq__6179_6183 = G__6188;
chunk__6180_6184 = G__6189;
count__6181_6185 = G__6190;
i__6182_6186 = G__6191;
continue;
}
} else
{var temp__4092__auto___6192 = cljs.core.seq(seq__6179_6183);if(temp__4092__auto___6192)
{var seq__6179_6193__$1 = temp__4092__auto___6192;if(cljs.core.chunked_seq_QMARK_(seq__6179_6193__$1))
{var c__3565__auto___6194 = cljs.core.chunk_first(seq__6179_6193__$1);{
var G__6195 = cljs.core.chunk_rest(seq__6179_6193__$1);
var G__6196 = c__3565__auto___6194;
var G__6197 = cljs.core.count(c__3565__auto___6194);
var G__6198 = 0;
seq__6179_6183 = G__6195;
chunk__6180_6184 = G__6196;
count__6181_6185 = G__6197;
i__6182_6186 = G__6198;
continue;
}
} else
{var node_6199 = cljs.core.first(seq__6179_6193__$1);goog.dom.classes.remove(node_6199,class$);
{
var G__6200 = cljs.core.next(seq__6179_6193__$1);
var G__6201 = null;
var G__6202 = 0;
var G__6203 = 0;
seq__6179_6183 = G__6200;
chunk__6180_6184 = G__6201;
count__6181_6185 = G__6202;
i__6182_6186 = G__6203;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
org_html_slideshow.domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(org_html_slideshow.domina.single_node(content)));
});
/**
* Returns the text of a node. Assumes content is a single node. Optional 'normalize' paramter indicates whether to collapse whitespace, normalize line breaks and trim (defaults to true). Does not return internal markup.
*/
org_html_slideshow.domina.text = (function() {
var text = null;
var text__1 = (function (content){return text.cljs$core$IFn$_invoke$arity$2(content,true);
});
var text__2 = (function (content,normalize){if(cljs.core.truth_(normalize))
{return goog.string.trim(goog.dom.getTextContent(org_html_slideshow.domina.single_node(content)));
} else
{return goog.dom.getRawTextContent(org_html_slideshow.domina.single_node(content));
}
});
text = function(content,normalize){
switch(arguments.length){
case 1:
return text__1.call(this,content);
case 2:
return text__2.call(this,content,normalize);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text.cljs$core$IFn$_invoke$arity$1 = text__1;
text.cljs$core$IFn$_invoke$arity$2 = text__2;
return text;
})()
;
/**
* Sets the text value of all the nodes in the given content.
*/
org_html_slideshow.domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__6208_6212 = cljs.core.seq(org_html_slideshow.domina.nodes(content));var chunk__6209_6213 = null;var count__6210_6214 = 0;var i__6211_6215 = 0;while(true){
if((i__6211_6215 < count__6210_6214))
{var node_6216 = chunk__6209_6213.cljs$core$IIndexed$_nth$arity$2(chunk__6209_6213,i__6211_6215);goog.dom.setTextContent(node_6216,value);
{
var G__6217 = seq__6208_6212;
var G__6218 = chunk__6209_6213;
var G__6219 = count__6210_6214;
var G__6220 = (i__6211_6215 + 1);
seq__6208_6212 = G__6217;
chunk__6209_6213 = G__6218;
count__6210_6214 = G__6219;
i__6211_6215 = G__6220;
continue;
}
} else
{var temp__4092__auto___6221 = cljs.core.seq(seq__6208_6212);if(temp__4092__auto___6221)
{var seq__6208_6222__$1 = temp__4092__auto___6221;if(cljs.core.chunked_seq_QMARK_(seq__6208_6222__$1))
{var c__3565__auto___6223 = cljs.core.chunk_first(seq__6208_6222__$1);{
var G__6224 = cljs.core.chunk_rest(seq__6208_6222__$1);
var G__6225 = c__3565__auto___6223;
var G__6226 = cljs.core.count(c__3565__auto___6223);
var G__6227 = 0;
seq__6208_6212 = G__6224;
chunk__6209_6213 = G__6225;
count__6210_6214 = G__6226;
i__6211_6215 = G__6227;
continue;
}
} else
{var node_6228 = cljs.core.first(seq__6208_6222__$1);goog.dom.setTextContent(node_6228,value);
{
var G__6229 = cljs.core.next(seq__6208_6222__$1);
var G__6230 = null;
var G__6231 = 0;
var G__6232 = 0;
seq__6208_6212 = G__6229;
chunk__6209_6213 = G__6230;
count__6210_6214 = G__6231;
i__6211_6215 = G__6232;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
org_html_slideshow.domina.value = (function value(content){return goog.dom.forms.getValue(org_html_slideshow.domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
org_html_slideshow.domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__6237_6241 = cljs.core.seq(org_html_slideshow.domina.nodes(content));var chunk__6238_6242 = null;var count__6239_6243 = 0;var i__6240_6244 = 0;while(true){
if((i__6240_6244 < count__6239_6243))
{var node_6245 = chunk__6238_6242.cljs$core$IIndexed$_nth$arity$2(chunk__6238_6242,i__6240_6244);goog.dom.forms.setValue(node_6245,value);
{
var G__6246 = seq__6237_6241;
var G__6247 = chunk__6238_6242;
var G__6248 = count__6239_6243;
var G__6249 = (i__6240_6244 + 1);
seq__6237_6241 = G__6246;
chunk__6238_6242 = G__6247;
count__6239_6243 = G__6248;
i__6240_6244 = G__6249;
continue;
}
} else
{var temp__4092__auto___6250 = cljs.core.seq(seq__6237_6241);if(temp__4092__auto___6250)
{var seq__6237_6251__$1 = temp__4092__auto___6250;if(cljs.core.chunked_seq_QMARK_(seq__6237_6251__$1))
{var c__3565__auto___6252 = cljs.core.chunk_first(seq__6237_6251__$1);{
var G__6253 = cljs.core.chunk_rest(seq__6237_6251__$1);
var G__6254 = c__3565__auto___6252;
var G__6255 = cljs.core.count(c__3565__auto___6252);
var G__6256 = 0;
seq__6237_6241 = G__6253;
chunk__6238_6242 = G__6254;
count__6239_6243 = G__6255;
i__6240_6244 = G__6256;
continue;
}
} else
{var node_6257 = cljs.core.first(seq__6237_6251__$1);goog.dom.forms.setValue(node_6257,value);
{
var G__6258 = cljs.core.next(seq__6237_6251__$1);
var G__6259 = null;
var G__6260 = 0;
var G__6261 = 0;
seq__6237_6241 = G__6258;
chunk__6238_6242 = G__6259;
count__6239_6243 = G__6260;
i__6240_6244 = G__6261;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
org_html_slideshow.domina.html = (function html(content){return org_html_slideshow.domina.single_node(content).innerHTML;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
org_html_slideshow.domina.set_html_BANG_ = (function set_html_BANG_(content,value){var seq__6266_6270 = cljs.core.seq(org_html_slideshow.domina.nodes(content));var chunk__6267_6271 = null;var count__6268_6272 = 0;var i__6269_6273 = 0;while(true){
if((i__6269_6273 < count__6268_6272))
{var node_6274 = chunk__6267_6271.cljs$core$IIndexed$_nth$arity$2(chunk__6267_6271,i__6269_6273);node_6274.innerHTML = value;
{
var G__6275 = seq__6266_6270;
var G__6276 = chunk__6267_6271;
var G__6277 = count__6268_6272;
var G__6278 = (i__6269_6273 + 1);
seq__6266_6270 = G__6275;
chunk__6267_6271 = G__6276;
count__6268_6272 = G__6277;
i__6269_6273 = G__6278;
continue;
}
} else
{var temp__4092__auto___6279 = cljs.core.seq(seq__6266_6270);if(temp__4092__auto___6279)
{var seq__6266_6280__$1 = temp__4092__auto___6279;if(cljs.core.chunked_seq_QMARK_(seq__6266_6280__$1))
{var c__3565__auto___6281 = cljs.core.chunk_first(seq__6266_6280__$1);{
var G__6282 = cljs.core.chunk_rest(seq__6266_6280__$1);
var G__6283 = c__3565__auto___6281;
var G__6284 = cljs.core.count(c__3565__auto___6281);
var G__6285 = 0;
seq__6266_6270 = G__6282;
chunk__6267_6271 = G__6283;
count__6268_6272 = G__6284;
i__6269_6273 = G__6285;
continue;
}
} else
{var node_6286 = cljs.core.first(seq__6266_6280__$1);node_6286.innerHTML = value;
{
var G__6287 = cljs.core.next(seq__6266_6280__$1);
var G__6288 = null;
var G__6289 = 0;
var G__6290 = 0;
seq__6266_6270 = G__6287;
chunk__6267_6271 = G__6288;
count__6268_6272 = G__6289;
i__6269_6273 = G__6290;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Takes a two-arg function, a reference DomContent and new DomContent. Applies the function for each reference / content combination. Uses clones of the new content for each additional parent after the first.
*/
org_html_slideshow.domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = org_html_slideshow.domina.nodes(parent_content);if(!(cljs.core.empty_QMARK_(parents)))
{var seq__6307_6323 = cljs.core.seq(org_html_slideshow.domina.nodes(child_content));var chunk__6308_6324 = null;var count__6309_6325 = 0;var i__6310_6326 = 0;while(true){
if((i__6310_6326 < count__6309_6325))
{var child_6327 = chunk__6308_6324.cljs$core$IIndexed$_nth$arity$2(chunk__6308_6324,i__6310_6326);(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),child_6327) : f.call(null,cljs.core.first(parents),child_6327));
{
var G__6328 = seq__6307_6323;
var G__6329 = chunk__6308_6324;
var G__6330 = count__6309_6325;
var G__6331 = (i__6310_6326 + 1);
seq__6307_6323 = G__6328;
chunk__6308_6324 = G__6329;
count__6309_6325 = G__6330;
i__6310_6326 = G__6331;
continue;
}
} else
{var temp__4092__auto___6332 = cljs.core.seq(seq__6307_6323);if(temp__4092__auto___6332)
{var seq__6307_6333__$1 = temp__4092__auto___6332;if(cljs.core.chunked_seq_QMARK_(seq__6307_6333__$1))
{var c__3565__auto___6334 = cljs.core.chunk_first(seq__6307_6333__$1);{
var G__6335 = cljs.core.chunk_rest(seq__6307_6333__$1);
var G__6336 = c__3565__auto___6334;
var G__6337 = cljs.core.count(c__3565__auto___6334);
var G__6338 = 0;
seq__6307_6323 = G__6335;
chunk__6308_6324 = G__6336;
count__6309_6325 = G__6337;
i__6310_6326 = G__6338;
continue;
}
} else
{var child_6339 = cljs.core.first(seq__6307_6333__$1);(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),child_6339) : f.call(null,cljs.core.first(parents),child_6339));
{
var G__6340 = cljs.core.next(seq__6307_6333__$1);
var G__6341 = null;
var G__6342 = 0;
var G__6343 = 0;
seq__6307_6323 = G__6340;
chunk__6308_6324 = G__6341;
count__6309_6325 = G__6342;
i__6310_6326 = G__6343;
continue;
}
}
} else
{}
}
break;
}
var seq__6311 = cljs.core.seq(cljs.core.rest(parents));var chunk__6316 = null;var count__6317 = 0;var i__6318 = 0;while(true){
if((i__6318 < count__6317))
{var parent = chunk__6316.cljs$core$IIndexed$_nth$arity$2(chunk__6316,i__6318);var seq__6319_6344 = cljs.core.seq(org_html_slideshow.domina.nodes(org_html_slideshow.domina.clone(child_content)));var chunk__6320_6345 = null;var count__6321_6346 = 0;var i__6322_6347 = 0;while(true){
if((i__6322_6347 < count__6321_6346))
{var child_6348 = chunk__6320_6345.cljs$core$IIndexed$_nth$arity$2(chunk__6320_6345,i__6322_6347);(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(parent,child_6348) : f.call(null,parent,child_6348));
{
var G__6349 = seq__6319_6344;
var G__6350 = chunk__6320_6345;
var G__6351 = count__6321_6346;
var G__6352 = (i__6322_6347 + 1);
seq__6319_6344 = G__6349;
chunk__6320_6345 = G__6350;
count__6321_6346 = G__6351;
i__6322_6347 = G__6352;
continue;
}
} else
{var temp__4092__auto___6353 = cljs.core.seq(seq__6319_6344);if(temp__4092__auto___6353)
{var seq__6319_6354__$1 = temp__4092__auto___6353;if(cljs.core.chunked_seq_QMARK_(seq__6319_6354__$1))
{var c__3565__auto___6355 = cljs.core.chunk_first(seq__6319_6354__$1);{
var G__6356 = cljs.core.chunk_rest(seq__6319_6354__$1);
var G__6357 = c__3565__auto___6355;
var G__6358 = cljs.core.count(c__3565__auto___6355);
var G__6359 = 0;
seq__6319_6344 = G__6356;
chunk__6320_6345 = G__6357;
count__6321_6346 = G__6358;
i__6322_6347 = G__6359;
continue;
}
} else
{var child_6360 = cljs.core.first(seq__6319_6354__$1);(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(parent,child_6360) : f.call(null,parent,child_6360));
{
var G__6361 = cljs.core.next(seq__6319_6354__$1);
var G__6362 = null;
var G__6363 = 0;
var G__6364 = 0;
seq__6319_6344 = G__6361;
chunk__6320_6345 = G__6362;
count__6321_6346 = G__6363;
i__6322_6347 = G__6364;
continue;
}
}
} else
{}
}
break;
}
{
var G__6365 = seq__6311;
var G__6366 = chunk__6316;
var G__6367 = count__6317;
var G__6368 = (i__6318 + 1);
seq__6311 = G__6365;
chunk__6316 = G__6366;
count__6317 = G__6367;
i__6318 = G__6368;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__6311);if(temp__4092__auto__)
{var seq__6311__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__6311__$1))
{var c__3565__auto__ = cljs.core.chunk_first(seq__6311__$1);{
var G__6369 = cljs.core.chunk_rest(seq__6311__$1);
var G__6370 = c__3565__auto__;
var G__6371 = cljs.core.count(c__3565__auto__);
var G__6372 = 0;
seq__6311 = G__6369;
chunk__6316 = G__6370;
count__6317 = G__6371;
i__6318 = G__6372;
continue;
}
} else
{var parent = cljs.core.first(seq__6311__$1);var seq__6312_6373 = cljs.core.seq(org_html_slideshow.domina.nodes(org_html_slideshow.domina.clone(child_content)));var chunk__6313_6374 = null;var count__6314_6375 = 0;var i__6315_6376 = 0;while(true){
if((i__6315_6376 < count__6314_6375))
{var child_6377 = chunk__6313_6374.cljs$core$IIndexed$_nth$arity$2(chunk__6313_6374,i__6315_6376);(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(parent,child_6377) : f.call(null,parent,child_6377));
{
var G__6378 = seq__6312_6373;
var G__6379 = chunk__6313_6374;
var G__6380 = count__6314_6375;
var G__6381 = (i__6315_6376 + 1);
seq__6312_6373 = G__6378;
chunk__6313_6374 = G__6379;
count__6314_6375 = G__6380;
i__6315_6376 = G__6381;
continue;
}
} else
{var temp__4092__auto___6382__$1 = cljs.core.seq(seq__6312_6373);if(temp__4092__auto___6382__$1)
{var seq__6312_6383__$1 = temp__4092__auto___6382__$1;if(cljs.core.chunked_seq_QMARK_(seq__6312_6383__$1))
{var c__3565__auto___6384 = cljs.core.chunk_first(seq__6312_6383__$1);{
var G__6385 = cljs.core.chunk_rest(seq__6312_6383__$1);
var G__6386 = c__3565__auto___6384;
var G__6387 = cljs.core.count(c__3565__auto___6384);
var G__6388 = 0;
seq__6312_6373 = G__6385;
chunk__6313_6374 = G__6386;
count__6314_6375 = G__6387;
i__6315_6376 = G__6388;
continue;
}
} else
{var child_6389 = cljs.core.first(seq__6312_6383__$1);(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(parent,child_6389) : f.call(null,parent,child_6389));
{
var G__6390 = cljs.core.next(seq__6312_6383__$1);
var G__6391 = null;
var G__6392 = 0;
var G__6393 = 0;
seq__6312_6373 = G__6390;
chunk__6313_6374 = G__6391;
count__6314_6375 = G__6392;
i__6315_6376 = G__6393;
continue;
}
}
} else
{}
}
break;
}
{
var G__6394 = cljs.core.next(seq__6311__$1);
var G__6395 = null;
var G__6396 = 0;
var G__6397 = 0;
seq__6311 = G__6394;
chunk__6316 = G__6395;
count__6317 = G__6396;
i__6318 = G__6397;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
org_html_slideshow.domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__1 = (function (nl){return lazy_nodelist.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nodelist__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){return cljs.core.cons(nl.item(n),lazy_nodelist.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nodelist = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nodelist__1.call(this,nl);
case 2:
return lazy_nodelist__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nodelist.cljs$core$IFn$_invoke$arity$1 = lazy_nodelist__1;
lazy_nodelist.cljs$core$IFn$_invoke$arity$2 = lazy_nodelist__2;
return lazy_nodelist;
})()
;
org_html_slideshow.domina.create_wrapper = (function create_wrapper(table_level){return document.createElement((cljs.core.truth_(table_level)?(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray(["td",null,"th",null], true).call(null,table_level))?"tr":"table"):"div"));
});
org_html_slideshow.domina.set_wrapper_html_BANG_ = (function set_wrapper_html_BANG_(wrapper,content){if(cljs.core.truth_(goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT))
{wrapper.innerHTML = [cljs.core.str("<br>"),cljs.core.str(content)].join('');
return wrapper.removeChild(wrapper.firstChild);
} else
{return wrapper.innerHTML = content;
}
});
org_html_slideshow.domina.extract_wrapper_dom = (function extract_wrapper_dom(wrapper,table_level){var inner_wrapper = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(table_level,"tr"))?cljs.core.first(goog.dom.getElementsByTagNameAndClass("tbody",null,wrapper)):wrapper);var children = inner_wrapper.childNodes;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(children.length,1))
{return inner_wrapper.removeChild(inner_wrapper.firstChild);
} else
{return children;
}
});
org_html_slideshow.domina.string_to_dom = (function string_to_dom(content){var vec__6399 = cljs.core.re_find(/^<(t(head|body|foot|[rhd]))/,content);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6399,0,null);var table_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6399,1,null);var ___$1 = cljs.core.nthnext(vec__6399,2);var wrapper = org_html_slideshow.domina.create_wrapper(table_level);org_html_slideshow.domina.set_wrapper_html_BANG_(wrapper,content);
return org_html_slideshow.domina.extract_wrapper_dom(wrapper,table_level);
});
(org_html_slideshow.domina.DomContent["_"] = true);
(org_html_slideshow.domina.nodes["_"] = (function (content){return cljs.core.seq(content);
}));
(org_html_slideshow.domina.single_node["_"] = (function (content){return cljs.core.first(content);
}));
DocumentFragment.prototype.org_html_slideshow$domina$DomContent$ = true;
DocumentFragment.prototype.org_html_slideshow$domina$DomContent$nodes$arity$1 = (function (content){return cljs.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content], 0));
});
DocumentFragment.prototype.org_html_slideshow$domina$DomContent$single_node$arity$1 = (function (content){return content;
});
Element.prototype.org_html_slideshow$domina$DomContent$ = true;
Element.prototype.org_html_slideshow$domina$DomContent$nodes$arity$1 = (function (content){return cljs.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content], 0));
});
Element.prototype.org_html_slideshow$domina$DomContent$single_node$arity$1 = (function (content){return content;
});
(org_html_slideshow.domina.DomContent["string"] = true);
(org_html_slideshow.domina.nodes["string"] = (function (s){return org_html_slideshow.domina.nodes(org_html_slideshow.domina.string_to_dom(s));
}));
(org_html_slideshow.domina.single_node["string"] = (function (s){return org_html_slideshow.domina.single_node(org_html_slideshow.domina.string_to_dom(s));
}));
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){return org_html_slideshow.domina.lazy_nodelist.cljs$core$IFn$_invoke$arity$1(nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){return nodelist.length;
});
if(cljs.core.truth_(window.StaticNodeList))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){return org_html_slideshow.domina.lazy_nodelist.cljs$core$IFn$_invoke$arity$1(nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){return nodelist.length;
});
} else
{}
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){return org_html_slideshow.domina.lazy_nodelist.cljs$core$IFn$_invoke$arity$1(coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){return coll.length;
});
