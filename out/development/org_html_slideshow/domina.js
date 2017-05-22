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
{return !(cljs.core._EQ_.call(null,window.console,undefined));
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
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
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
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
/**
* Returns content containing a single node by looking up the given ID
*/
org_html_slideshow.domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
org_html_slideshow.domina.by_class = (function by_class(class_name){if(typeof org_html_slideshow.domina.t4005 !== 'undefined')
{} else
{goog.provide('org_html_slideshow.domina.t4005');

/**
* @constructor
*/
org_html_slideshow.domina.t4005 = (function (class_name,by_class,meta4006){
this.class_name = class_name;
this.by_class = by_class;
this.meta4006 = meta4006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
org_html_slideshow.domina.t4005.cljs$lang$type = true;
org_html_slideshow.domina.t4005.cljs$lang$ctorStr = "org-html-slideshow.domina/t4005";
org_html_slideshow.domina.t4005.cljs$lang$ctorPrWriter = (function (this__3375__auto__,writer__3376__auto__,opt__3377__auto__){return cljs.core._write.call(null,writer__3376__auto__,"org-html-slideshow.domina/t4005");
});
org_html_slideshow.domina.t4005.prototype.org_html_slideshow$domina$DomContent$ = true;
org_html_slideshow.domina.t4005.prototype.org_html_slideshow$domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
return goog.dom.getElementsByClass(cljs.core.name.call(null,self__.class_name));
});
org_html_slideshow.domina.t4005.prototype.org_html_slideshow$domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
return goog.dom.getElementByClass(cljs.core.name.call(null,self__.class_name));
});
org_html_slideshow.domina.t4005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4007){var self__ = this;
return self__.meta4006;
});
org_html_slideshow.domina.t4005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4007,meta4006__$1){var self__ = this;
return (new org_html_slideshow.domina.t4005(self__.class_name,self__.by_class,meta4006__$1));
});
org_html_slideshow.domina.__GT_t4005 = (function __GT_t4005(class_name__$1,by_class__$1,meta4006){return (new org_html_slideshow.domina.t4005(class_name__$1,by_class__$1,meta4006));
});
}
return (new org_html_slideshow.domina.t4005(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
org_html_slideshow.domina.children = (function children(content){return cljs.core.mapcat.call(null,goog.dom.getChildren,org_html_slideshow.domina.nodes.call(null,content));
});
/**
* Returns a deep clone of content.
*/
org_html_slideshow.domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__4008_SHARP_){return p1__4008_SHARP_.cloneNode(true);
}),org_html_slideshow.domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
org_html_slideshow.domina.append_BANG_ = (function append_BANG_(parent_content,child_content){org_html_slideshow.domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
org_html_slideshow.domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){org_html_slideshow.domina.apply_with_cloning.call(null,(function (p1__4009_SHARP_,p2__4010_SHARP_){return goog.dom.insertChildAt(p1__4009_SHARP_,p2__4010_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
org_html_slideshow.domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){org_html_slideshow.domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
org_html_slideshow.domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){org_html_slideshow.domina.apply_with_cloning.call(null,(function (p1__4012_SHARP_,p2__4011_SHARP_){return goog.dom.insertSiblingBefore(p2__4011_SHARP_,p1__4012_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
org_html_slideshow.domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){org_html_slideshow.domina.apply_with_cloning.call(null,(function (p1__4014_SHARP_,p2__4013_SHARP_){return goog.dom.insertSiblingAfter(p2__4013_SHARP_,p1__4014_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
org_html_slideshow.domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){org_html_slideshow.domina.apply_with_cloning.call(null,(function (p1__4016_SHARP_,p2__4015_SHARP_){return goog.dom.replaceNode(p2__4015_SHARP_,p1__4016_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
org_html_slideshow.domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,org_html_slideshow.domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
org_html_slideshow.domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,org_html_slideshow.domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
org_html_slideshow.domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,org_html_slideshow.domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
org_html_slideshow.domina.style = (function style(content,name){var s = goog.style.getStyle(org_html_slideshow.domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.not.call(null,goog.string.isEmptySafe(s)))
{return s;
} else
{return null;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
org_html_slideshow.domina.attr = (function attr(content,name){return org_html_slideshow.domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword.
*/
org_html_slideshow.domina.set_style_BANG_ = (function set_style_BANG_(content,name,value){var seq__4021_4025 = cljs.core.seq.call(null,org_html_slideshow.domina.nodes.call(null,content));var chunk__4022_4026 = null;var count__4023_4027 = 0;var i__4024_4028 = 0;while(true){
if((i__4024_4028 < count__4023_4027))
{var n_4029 = cljs.core._nth.call(null,chunk__4022_4026,i__4024_4028);goog.style.setStyle(n_4029,cljs.core.name.call(null,name),value);
{
var G__4030 = seq__4021_4025;
var G__4031 = chunk__4022_4026;
var G__4032 = count__4023_4027;
var G__4033 = (i__4024_4028 + 1);
seq__4021_4025 = G__4030;
chunk__4022_4026 = G__4031;
count__4023_4027 = G__4032;
i__4024_4028 = G__4033;
continue;
}
} else
{var temp__4092__auto___4034 = cljs.core.seq.call(null,seq__4021_4025);if(temp__4092__auto___4034)
{var seq__4021_4035__$1 = temp__4092__auto___4034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4021_4035__$1))
{var c__3565__auto___4036 = cljs.core.chunk_first.call(null,seq__4021_4035__$1);{
var G__4037 = cljs.core.chunk_rest.call(null,seq__4021_4035__$1);
var G__4038 = c__3565__auto___4036;
var G__4039 = cljs.core.count.call(null,c__3565__auto___4036);
var G__4040 = 0;
seq__4021_4025 = G__4037;
chunk__4022_4026 = G__4038;
count__4023_4027 = G__4039;
i__4024_4028 = G__4040;
continue;
}
} else
{var n_4041 = cljs.core.first.call(null,seq__4021_4035__$1);goog.style.setStyle(n_4041,cljs.core.name.call(null,name),value);
{
var G__4042 = cljs.core.next.call(null,seq__4021_4035__$1);
var G__4043 = null;
var G__4044 = 0;
var G__4045 = 0;
seq__4021_4025 = G__4042;
chunk__4022_4026 = G__4043;
count__4023_4027 = G__4044;
i__4024_4028 = G__4045;
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
org_html_slideshow.domina.set_attr_BANG_ = (function set_attr_BANG_(content,name,value){var seq__4050_4054 = cljs.core.seq.call(null,org_html_slideshow.domina.nodes.call(null,content));var chunk__4051_4055 = null;var count__4052_4056 = 0;var i__4053_4057 = 0;while(true){
if((i__4053_4057 < count__4052_4056))
{var n_4058 = cljs.core._nth.call(null,chunk__4051_4055,i__4053_4057);n_4058.setAttribute(cljs.core.name.call(null,name),value);
{
var G__4059 = seq__4050_4054;
var G__4060 = chunk__4051_4055;
var G__4061 = count__4052_4056;
var G__4062 = (i__4053_4057 + 1);
seq__4050_4054 = G__4059;
chunk__4051_4055 = G__4060;
count__4052_4056 = G__4061;
i__4053_4057 = G__4062;
continue;
}
} else
{var temp__4092__auto___4063 = cljs.core.seq.call(null,seq__4050_4054);if(temp__4092__auto___4063)
{var seq__4050_4064__$1 = temp__4092__auto___4063;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4050_4064__$1))
{var c__3565__auto___4065 = cljs.core.chunk_first.call(null,seq__4050_4064__$1);{
var G__4066 = cljs.core.chunk_rest.call(null,seq__4050_4064__$1);
var G__4067 = c__3565__auto___4065;
var G__4068 = cljs.core.count.call(null,c__3565__auto___4065);
var G__4069 = 0;
seq__4050_4054 = G__4066;
chunk__4051_4055 = G__4067;
count__4052_4056 = G__4068;
i__4053_4057 = G__4069;
continue;
}
} else
{var n_4070 = cljs.core.first.call(null,seq__4050_4064__$1);n_4070.setAttribute(cljs.core.name.call(null,name),value);
{
var G__4071 = cljs.core.next.call(null,seq__4050_4064__$1);
var G__4072 = null;
var G__4073 = 0;
var G__4074 = 0;
seq__4050_4054 = G__4071;
chunk__4051_4055 = G__4072;
count__4052_4056 = G__4073;
i__4053_4057 = G__4074;
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
org_html_slideshow.domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__4076 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__4076,0,null);var v = cljs.core.nth.call(null,vec__4076,1,null);if(cljs.core.truth_((function (){var and__3941__auto__ = k;if(cljs.core.truth_(and__3941__auto__))
{return v;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
org_html_slideshow.domina.styles = (function styles(content){return org_html_slideshow.domina.parse_style_attributes.call(null,org_html_slideshow.domina.attr.call(null,content,"style"));
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
org_html_slideshow.domina.attrs = (function attrs(content){var node = org_html_slideshow.domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__4077_SHARP_){var attr = attrs__$1.item(p1__4077_SHARP_);return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true);
}),cljs.core.range.call(null,attrs__$1.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
org_html_slideshow.domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__4084_4090 = cljs.core.seq.call(null,styles);var chunk__4085_4091 = null;var count__4086_4092 = 0;var i__4087_4093 = 0;while(true){
if((i__4087_4093 < count__4086_4092))
{var vec__4088_4094 = cljs.core._nth.call(null,chunk__4085_4091,i__4087_4093);var name_4095 = cljs.core.nth.call(null,vec__4088_4094,0,null);var value_4096 = cljs.core.nth.call(null,vec__4088_4094,1,null);org_html_slideshow.domina.set_style_BANG_.call(null,content,name_4095,value_4096);
{
var G__4097 = seq__4084_4090;
var G__4098 = chunk__4085_4091;
var G__4099 = count__4086_4092;
var G__4100 = (i__4087_4093 + 1);
seq__4084_4090 = G__4097;
chunk__4085_4091 = G__4098;
count__4086_4092 = G__4099;
i__4087_4093 = G__4100;
continue;
}
} else
{var temp__4092__auto___4101 = cljs.core.seq.call(null,seq__4084_4090);if(temp__4092__auto___4101)
{var seq__4084_4102__$1 = temp__4092__auto___4101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4084_4102__$1))
{var c__3565__auto___4103 = cljs.core.chunk_first.call(null,seq__4084_4102__$1);{
var G__4104 = cljs.core.chunk_rest.call(null,seq__4084_4102__$1);
var G__4105 = c__3565__auto___4103;
var G__4106 = cljs.core.count.call(null,c__3565__auto___4103);
var G__4107 = 0;
seq__4084_4090 = G__4104;
chunk__4085_4091 = G__4105;
count__4086_4092 = G__4106;
i__4087_4093 = G__4107;
continue;
}
} else
{var vec__4089_4108 = cljs.core.first.call(null,seq__4084_4102__$1);var name_4109 = cljs.core.nth.call(null,vec__4089_4108,0,null);var value_4110 = cljs.core.nth.call(null,vec__4089_4108,1,null);org_html_slideshow.domina.set_style_BANG_.call(null,content,name_4109,value_4110);
{
var G__4111 = cljs.core.next.call(null,seq__4084_4102__$1);
var G__4112 = null;
var G__4113 = 0;
var G__4114 = 0;
seq__4084_4090 = G__4111;
chunk__4085_4091 = G__4112;
count__4086_4092 = G__4113;
i__4087_4093 = G__4114;
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
org_html_slideshow.domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__4121_4127 = cljs.core.seq.call(null,attrs);var chunk__4122_4128 = null;var count__4123_4129 = 0;var i__4124_4130 = 0;while(true){
if((i__4124_4130 < count__4123_4129))
{var vec__4125_4131 = cljs.core._nth.call(null,chunk__4122_4128,i__4124_4130);var name_4132 = cljs.core.nth.call(null,vec__4125_4131,0,null);var value_4133 = cljs.core.nth.call(null,vec__4125_4131,1,null);org_html_slideshow.domina.set_attr_BANG_.call(null,content,name_4132,value_4133);
{
var G__4134 = seq__4121_4127;
var G__4135 = chunk__4122_4128;
var G__4136 = count__4123_4129;
var G__4137 = (i__4124_4130 + 1);
seq__4121_4127 = G__4134;
chunk__4122_4128 = G__4135;
count__4123_4129 = G__4136;
i__4124_4130 = G__4137;
continue;
}
} else
{var temp__4092__auto___4138 = cljs.core.seq.call(null,seq__4121_4127);if(temp__4092__auto___4138)
{var seq__4121_4139__$1 = temp__4092__auto___4138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4121_4139__$1))
{var c__3565__auto___4140 = cljs.core.chunk_first.call(null,seq__4121_4139__$1);{
var G__4141 = cljs.core.chunk_rest.call(null,seq__4121_4139__$1);
var G__4142 = c__3565__auto___4140;
var G__4143 = cljs.core.count.call(null,c__3565__auto___4140);
var G__4144 = 0;
seq__4121_4127 = G__4141;
chunk__4122_4128 = G__4142;
count__4123_4129 = G__4143;
i__4124_4130 = G__4144;
continue;
}
} else
{var vec__4126_4145 = cljs.core.first.call(null,seq__4121_4139__$1);var name_4146 = cljs.core.nth.call(null,vec__4126_4145,0,null);var value_4147 = cljs.core.nth.call(null,vec__4126_4145,1,null);org_html_slideshow.domina.set_attr_BANG_.call(null,content,name_4146,value_4147);
{
var G__4148 = cljs.core.next.call(null,seq__4121_4139__$1);
var G__4149 = null;
var G__4150 = 0;
var G__4151 = 0;
seq__4121_4127 = G__4148;
chunk__4122_4128 = G__4149;
count__4123_4129 = G__4150;
i__4124_4130 = G__4151;
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
org_html_slideshow.domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(org_html_slideshow.domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
org_html_slideshow.domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__4156_4160 = cljs.core.seq.call(null,org_html_slideshow.domina.nodes.call(null,content));var chunk__4157_4161 = null;var count__4158_4162 = 0;var i__4159_4163 = 0;while(true){
if((i__4159_4163 < count__4158_4162))
{var node_4164 = cljs.core._nth.call(null,chunk__4157_4161,i__4159_4163);goog.dom.classes.add(node_4164,class$);
{
var G__4165 = seq__4156_4160;
var G__4166 = chunk__4157_4161;
var G__4167 = count__4158_4162;
var G__4168 = (i__4159_4163 + 1);
seq__4156_4160 = G__4165;
chunk__4157_4161 = G__4166;
count__4158_4162 = G__4167;
i__4159_4163 = G__4168;
continue;
}
} else
{var temp__4092__auto___4169 = cljs.core.seq.call(null,seq__4156_4160);if(temp__4092__auto___4169)
{var seq__4156_4170__$1 = temp__4092__auto___4169;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4156_4170__$1))
{var c__3565__auto___4171 = cljs.core.chunk_first.call(null,seq__4156_4170__$1);{
var G__4172 = cljs.core.chunk_rest.call(null,seq__4156_4170__$1);
var G__4173 = c__3565__auto___4171;
var G__4174 = cljs.core.count.call(null,c__3565__auto___4171);
var G__4175 = 0;
seq__4156_4160 = G__4172;
chunk__4157_4161 = G__4173;
count__4158_4162 = G__4174;
i__4159_4163 = G__4175;
continue;
}
} else
{var node_4176 = cljs.core.first.call(null,seq__4156_4170__$1);goog.dom.classes.add(node_4176,class$);
{
var G__4177 = cljs.core.next.call(null,seq__4156_4170__$1);
var G__4178 = null;
var G__4179 = 0;
var G__4180 = 0;
seq__4156_4160 = G__4177;
chunk__4157_4161 = G__4178;
count__4158_4162 = G__4179;
i__4159_4163 = G__4180;
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
org_html_slideshow.domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__4185_4189 = cljs.core.seq.call(null,org_html_slideshow.domina.nodes.call(null,content));var chunk__4186_4190 = null;var count__4187_4191 = 0;var i__4188_4192 = 0;while(true){
if((i__4188_4192 < count__4187_4191))
{var node_4193 = cljs.core._nth.call(null,chunk__4186_4190,i__4188_4192);goog.dom.classes.remove(node_4193,class$);
{
var G__4194 = seq__4185_4189;
var G__4195 = chunk__4186_4190;
var G__4196 = count__4187_4191;
var G__4197 = (i__4188_4192 + 1);
seq__4185_4189 = G__4194;
chunk__4186_4190 = G__4195;
count__4187_4191 = G__4196;
i__4188_4192 = G__4197;
continue;
}
} else
{var temp__4092__auto___4198 = cljs.core.seq.call(null,seq__4185_4189);if(temp__4092__auto___4198)
{var seq__4185_4199__$1 = temp__4092__auto___4198;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4185_4199__$1))
{var c__3565__auto___4200 = cljs.core.chunk_first.call(null,seq__4185_4199__$1);{
var G__4201 = cljs.core.chunk_rest.call(null,seq__4185_4199__$1);
var G__4202 = c__3565__auto___4200;
var G__4203 = cljs.core.count.call(null,c__3565__auto___4200);
var G__4204 = 0;
seq__4185_4189 = G__4201;
chunk__4186_4190 = G__4202;
count__4187_4191 = G__4203;
i__4188_4192 = G__4204;
continue;
}
} else
{var node_4205 = cljs.core.first.call(null,seq__4185_4199__$1);goog.dom.classes.remove(node_4205,class$);
{
var G__4206 = cljs.core.next.call(null,seq__4185_4199__$1);
var G__4207 = null;
var G__4208 = 0;
var G__4209 = 0;
seq__4185_4189 = G__4206;
chunk__4186_4190 = G__4207;
count__4187_4191 = G__4208;
i__4188_4192 = G__4209;
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
org_html_slideshow.domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(org_html_slideshow.domina.single_node.call(null,content)));
});
/**
* Returns the text of a node. Assumes content is a single node. Optional 'normalize' paramter indicates whether to collapse whitespace, normalize line breaks and trim (defaults to true). Does not return internal markup.
*/
org_html_slideshow.domina.text = (function() {
var text = null;
var text__1 = (function (content){return text.call(null,content,true);
});
var text__2 = (function (content,normalize){if(cljs.core.truth_(normalize))
{return goog.string.trim(goog.dom.getTextContent(org_html_slideshow.domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent(org_html_slideshow.domina.single_node.call(null,content));
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
org_html_slideshow.domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__4214_4218 = cljs.core.seq.call(null,org_html_slideshow.domina.nodes.call(null,content));var chunk__4215_4219 = null;var count__4216_4220 = 0;var i__4217_4221 = 0;while(true){
if((i__4217_4221 < count__4216_4220))
{var node_4222 = cljs.core._nth.call(null,chunk__4215_4219,i__4217_4221);goog.dom.setTextContent(node_4222,value);
{
var G__4223 = seq__4214_4218;
var G__4224 = chunk__4215_4219;
var G__4225 = count__4216_4220;
var G__4226 = (i__4217_4221 + 1);
seq__4214_4218 = G__4223;
chunk__4215_4219 = G__4224;
count__4216_4220 = G__4225;
i__4217_4221 = G__4226;
continue;
}
} else
{var temp__4092__auto___4227 = cljs.core.seq.call(null,seq__4214_4218);if(temp__4092__auto___4227)
{var seq__4214_4228__$1 = temp__4092__auto___4227;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4214_4228__$1))
{var c__3565__auto___4229 = cljs.core.chunk_first.call(null,seq__4214_4228__$1);{
var G__4230 = cljs.core.chunk_rest.call(null,seq__4214_4228__$1);
var G__4231 = c__3565__auto___4229;
var G__4232 = cljs.core.count.call(null,c__3565__auto___4229);
var G__4233 = 0;
seq__4214_4218 = G__4230;
chunk__4215_4219 = G__4231;
count__4216_4220 = G__4232;
i__4217_4221 = G__4233;
continue;
}
} else
{var node_4234 = cljs.core.first.call(null,seq__4214_4228__$1);goog.dom.setTextContent(node_4234,value);
{
var G__4235 = cljs.core.next.call(null,seq__4214_4228__$1);
var G__4236 = null;
var G__4237 = 0;
var G__4238 = 0;
seq__4214_4218 = G__4235;
chunk__4215_4219 = G__4236;
count__4216_4220 = G__4237;
i__4217_4221 = G__4238;
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
org_html_slideshow.domina.value = (function value(content){return goog.dom.forms.getValue(org_html_slideshow.domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
org_html_slideshow.domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__4243_4247 = cljs.core.seq.call(null,org_html_slideshow.domina.nodes.call(null,content));var chunk__4244_4248 = null;var count__4245_4249 = 0;var i__4246_4250 = 0;while(true){
if((i__4246_4250 < count__4245_4249))
{var node_4251 = cljs.core._nth.call(null,chunk__4244_4248,i__4246_4250);goog.dom.forms.setValue(node_4251,value);
{
var G__4252 = seq__4243_4247;
var G__4253 = chunk__4244_4248;
var G__4254 = count__4245_4249;
var G__4255 = (i__4246_4250 + 1);
seq__4243_4247 = G__4252;
chunk__4244_4248 = G__4253;
count__4245_4249 = G__4254;
i__4246_4250 = G__4255;
continue;
}
} else
{var temp__4092__auto___4256 = cljs.core.seq.call(null,seq__4243_4247);if(temp__4092__auto___4256)
{var seq__4243_4257__$1 = temp__4092__auto___4256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4243_4257__$1))
{var c__3565__auto___4258 = cljs.core.chunk_first.call(null,seq__4243_4257__$1);{
var G__4259 = cljs.core.chunk_rest.call(null,seq__4243_4257__$1);
var G__4260 = c__3565__auto___4258;
var G__4261 = cljs.core.count.call(null,c__3565__auto___4258);
var G__4262 = 0;
seq__4243_4247 = G__4259;
chunk__4244_4248 = G__4260;
count__4245_4249 = G__4261;
i__4246_4250 = G__4262;
continue;
}
} else
{var node_4263 = cljs.core.first.call(null,seq__4243_4257__$1);goog.dom.forms.setValue(node_4263,value);
{
var G__4264 = cljs.core.next.call(null,seq__4243_4257__$1);
var G__4265 = null;
var G__4266 = 0;
var G__4267 = 0;
seq__4243_4247 = G__4264;
chunk__4244_4248 = G__4265;
count__4245_4249 = G__4266;
i__4246_4250 = G__4267;
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
org_html_slideshow.domina.html = (function html(content){return org_html_slideshow.domina.single_node.call(null,content).innerHTML;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
org_html_slideshow.domina.set_html_BANG_ = (function set_html_BANG_(content,value){var seq__4272_4276 = cljs.core.seq.call(null,org_html_slideshow.domina.nodes.call(null,content));var chunk__4273_4277 = null;var count__4274_4278 = 0;var i__4275_4279 = 0;while(true){
if((i__4275_4279 < count__4274_4278))
{var node_4280 = cljs.core._nth.call(null,chunk__4273_4277,i__4275_4279);node_4280.innerHTML = value;
{
var G__4281 = seq__4272_4276;
var G__4282 = chunk__4273_4277;
var G__4283 = count__4274_4278;
var G__4284 = (i__4275_4279 + 1);
seq__4272_4276 = G__4281;
chunk__4273_4277 = G__4282;
count__4274_4278 = G__4283;
i__4275_4279 = G__4284;
continue;
}
} else
{var temp__4092__auto___4285 = cljs.core.seq.call(null,seq__4272_4276);if(temp__4092__auto___4285)
{var seq__4272_4286__$1 = temp__4092__auto___4285;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4272_4286__$1))
{var c__3565__auto___4287 = cljs.core.chunk_first.call(null,seq__4272_4286__$1);{
var G__4288 = cljs.core.chunk_rest.call(null,seq__4272_4286__$1);
var G__4289 = c__3565__auto___4287;
var G__4290 = cljs.core.count.call(null,c__3565__auto___4287);
var G__4291 = 0;
seq__4272_4276 = G__4288;
chunk__4273_4277 = G__4289;
count__4274_4278 = G__4290;
i__4275_4279 = G__4291;
continue;
}
} else
{var node_4292 = cljs.core.first.call(null,seq__4272_4286__$1);node_4292.innerHTML = value;
{
var G__4293 = cljs.core.next.call(null,seq__4272_4286__$1);
var G__4294 = null;
var G__4295 = 0;
var G__4296 = 0;
seq__4272_4276 = G__4293;
chunk__4273_4277 = G__4294;
count__4274_4278 = G__4295;
i__4275_4279 = G__4296;
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
org_html_slideshow.domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = org_html_slideshow.domina.nodes.call(null,parent_content);if(!(cljs.core.empty_QMARK_.call(null,parents)))
{var seq__4313_4329 = cljs.core.seq.call(null,org_html_slideshow.domina.nodes.call(null,child_content));var chunk__4314_4330 = null;var count__4315_4331 = 0;var i__4316_4332 = 0;while(true){
if((i__4316_4332 < count__4315_4331))
{var child_4333 = cljs.core._nth.call(null,chunk__4314_4330,i__4316_4332);f.call(null,cljs.core.first.call(null,parents),child_4333);
{
var G__4334 = seq__4313_4329;
var G__4335 = chunk__4314_4330;
var G__4336 = count__4315_4331;
var G__4337 = (i__4316_4332 + 1);
seq__4313_4329 = G__4334;
chunk__4314_4330 = G__4335;
count__4315_4331 = G__4336;
i__4316_4332 = G__4337;
continue;
}
} else
{var temp__4092__auto___4338 = cljs.core.seq.call(null,seq__4313_4329);if(temp__4092__auto___4338)
{var seq__4313_4339__$1 = temp__4092__auto___4338;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4313_4339__$1))
{var c__3565__auto___4340 = cljs.core.chunk_first.call(null,seq__4313_4339__$1);{
var G__4341 = cljs.core.chunk_rest.call(null,seq__4313_4339__$1);
var G__4342 = c__3565__auto___4340;
var G__4343 = cljs.core.count.call(null,c__3565__auto___4340);
var G__4344 = 0;
seq__4313_4329 = G__4341;
chunk__4314_4330 = G__4342;
count__4315_4331 = G__4343;
i__4316_4332 = G__4344;
continue;
}
} else
{var child_4345 = cljs.core.first.call(null,seq__4313_4339__$1);f.call(null,cljs.core.first.call(null,parents),child_4345);
{
var G__4346 = cljs.core.next.call(null,seq__4313_4339__$1);
var G__4347 = null;
var G__4348 = 0;
var G__4349 = 0;
seq__4313_4329 = G__4346;
chunk__4314_4330 = G__4347;
count__4315_4331 = G__4348;
i__4316_4332 = G__4349;
continue;
}
}
} else
{}
}
break;
}
var seq__4317 = cljs.core.seq.call(null,cljs.core.rest.call(null,parents));var chunk__4322 = null;var count__4323 = 0;var i__4324 = 0;while(true){
if((i__4324 < count__4323))
{var parent = cljs.core._nth.call(null,chunk__4322,i__4324);var seq__4325_4350 = cljs.core.seq.call(null,org_html_slideshow.domina.nodes.call(null,org_html_slideshow.domina.clone.call(null,child_content)));var chunk__4326_4351 = null;var count__4327_4352 = 0;var i__4328_4353 = 0;while(true){
if((i__4328_4353 < count__4327_4352))
{var child_4354 = cljs.core._nth.call(null,chunk__4326_4351,i__4328_4353);f.call(null,parent,child_4354);
{
var G__4355 = seq__4325_4350;
var G__4356 = chunk__4326_4351;
var G__4357 = count__4327_4352;
var G__4358 = (i__4328_4353 + 1);
seq__4325_4350 = G__4355;
chunk__4326_4351 = G__4356;
count__4327_4352 = G__4357;
i__4328_4353 = G__4358;
continue;
}
} else
{var temp__4092__auto___4359 = cljs.core.seq.call(null,seq__4325_4350);if(temp__4092__auto___4359)
{var seq__4325_4360__$1 = temp__4092__auto___4359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4325_4360__$1))
{var c__3565__auto___4361 = cljs.core.chunk_first.call(null,seq__4325_4360__$1);{
var G__4362 = cljs.core.chunk_rest.call(null,seq__4325_4360__$1);
var G__4363 = c__3565__auto___4361;
var G__4364 = cljs.core.count.call(null,c__3565__auto___4361);
var G__4365 = 0;
seq__4325_4350 = G__4362;
chunk__4326_4351 = G__4363;
count__4327_4352 = G__4364;
i__4328_4353 = G__4365;
continue;
}
} else
{var child_4366 = cljs.core.first.call(null,seq__4325_4360__$1);f.call(null,parent,child_4366);
{
var G__4367 = cljs.core.next.call(null,seq__4325_4360__$1);
var G__4368 = null;
var G__4369 = 0;
var G__4370 = 0;
seq__4325_4350 = G__4367;
chunk__4326_4351 = G__4368;
count__4327_4352 = G__4369;
i__4328_4353 = G__4370;
continue;
}
}
} else
{}
}
break;
}
{
var G__4371 = seq__4317;
var G__4372 = chunk__4322;
var G__4373 = count__4323;
var G__4374 = (i__4324 + 1);
seq__4317 = G__4371;
chunk__4322 = G__4372;
count__4323 = G__4373;
i__4324 = G__4374;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4317);if(temp__4092__auto__)
{var seq__4317__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4317__$1))
{var c__3565__auto__ = cljs.core.chunk_first.call(null,seq__4317__$1);{
var G__4375 = cljs.core.chunk_rest.call(null,seq__4317__$1);
var G__4376 = c__3565__auto__;
var G__4377 = cljs.core.count.call(null,c__3565__auto__);
var G__4378 = 0;
seq__4317 = G__4375;
chunk__4322 = G__4376;
count__4323 = G__4377;
i__4324 = G__4378;
continue;
}
} else
{var parent = cljs.core.first.call(null,seq__4317__$1);var seq__4318_4379 = cljs.core.seq.call(null,org_html_slideshow.domina.nodes.call(null,org_html_slideshow.domina.clone.call(null,child_content)));var chunk__4319_4380 = null;var count__4320_4381 = 0;var i__4321_4382 = 0;while(true){
if((i__4321_4382 < count__4320_4381))
{var child_4383 = cljs.core._nth.call(null,chunk__4319_4380,i__4321_4382);f.call(null,parent,child_4383);
{
var G__4384 = seq__4318_4379;
var G__4385 = chunk__4319_4380;
var G__4386 = count__4320_4381;
var G__4387 = (i__4321_4382 + 1);
seq__4318_4379 = G__4384;
chunk__4319_4380 = G__4385;
count__4320_4381 = G__4386;
i__4321_4382 = G__4387;
continue;
}
} else
{var temp__4092__auto___4388__$1 = cljs.core.seq.call(null,seq__4318_4379);if(temp__4092__auto___4388__$1)
{var seq__4318_4389__$1 = temp__4092__auto___4388__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4318_4389__$1))
{var c__3565__auto___4390 = cljs.core.chunk_first.call(null,seq__4318_4389__$1);{
var G__4391 = cljs.core.chunk_rest.call(null,seq__4318_4389__$1);
var G__4392 = c__3565__auto___4390;
var G__4393 = cljs.core.count.call(null,c__3565__auto___4390);
var G__4394 = 0;
seq__4318_4379 = G__4391;
chunk__4319_4380 = G__4392;
count__4320_4381 = G__4393;
i__4321_4382 = G__4394;
continue;
}
} else
{var child_4395 = cljs.core.first.call(null,seq__4318_4389__$1);f.call(null,parent,child_4395);
{
var G__4396 = cljs.core.next.call(null,seq__4318_4389__$1);
var G__4397 = null;
var G__4398 = 0;
var G__4399 = 0;
seq__4318_4379 = G__4396;
chunk__4319_4380 = G__4397;
count__4320_4381 = G__4398;
i__4321_4382 = G__4399;
continue;
}
}
} else
{}
}
break;
}
{
var G__4400 = cljs.core.next.call(null,seq__4317__$1);
var G__4401 = null;
var G__4402 = 0;
var G__4403 = 0;
seq__4317 = G__4400;
chunk__4322 = G__4401;
count__4323 = G__4402;
i__4324 = G__4403;
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
var lazy_nodelist__1 = (function (nl){return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nodelist.call(null,nl,(n + 1)));
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
org_html_slideshow.domina.extract_wrapper_dom = (function extract_wrapper_dom(wrapper,table_level){var inner_wrapper = ((cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass("tbody",null,wrapper)):wrapper);var children = inner_wrapper.childNodes;if(cljs.core._EQ_.call(null,children.length,1))
{return inner_wrapper.removeChild(inner_wrapper.firstChild);
} else
{return children;
}
});
org_html_slideshow.domina.string_to_dom = (function string_to_dom(content){var vec__4405 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);var _ = cljs.core.nth.call(null,vec__4405,0,null);var table_level = cljs.core.nth.call(null,vec__4405,1,null);var ___$1 = cljs.core.nthnext.call(null,vec__4405,2);var wrapper = org_html_slideshow.domina.create_wrapper.call(null,table_level);org_html_slideshow.domina.set_wrapper_html_BANG_.call(null,wrapper,content);
return org_html_slideshow.domina.extract_wrapper_dom.call(null,wrapper,table_level);
});
(org_html_slideshow.domina.DomContent["_"] = true);
(org_html_slideshow.domina.nodes["_"] = (function (content){return cljs.core.seq.call(null,content);
}));
(org_html_slideshow.domina.single_node["_"] = (function (content){return cljs.core.first.call(null,content);
}));
DocumentFragment.prototype.org_html_slideshow$domina$DomContent$ = true;
DocumentFragment.prototype.org_html_slideshow$domina$DomContent$nodes$arity$1 = (function (content){return cljs.core.list.call(null,content);
});
DocumentFragment.prototype.org_html_slideshow$domina$DomContent$single_node$arity$1 = (function (content){return content;
});
Element.prototype.org_html_slideshow$domina$DomContent$ = true;
Element.prototype.org_html_slideshow$domina$DomContent$nodes$arity$1 = (function (content){return cljs.core.list.call(null,content);
});
Element.prototype.org_html_slideshow$domina$DomContent$single_node$arity$1 = (function (content){return content;
});
(org_html_slideshow.domina.DomContent["string"] = true);
(org_html_slideshow.domina.nodes["string"] = (function (s){return org_html_slideshow.domina.nodes.call(null,org_html_slideshow.domina.string_to_dom.call(null,s));
}));
(org_html_slideshow.domina.single_node["string"] = (function (s){return org_html_slideshow.domina.single_node.call(null,org_html_slideshow.domina.string_to_dom.call(null,s));
}));
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){return org_html_slideshow.domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){return nodelist.length;
});
if(cljs.core.truth_(window.StaticNodeList))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){return org_html_slideshow.domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){return nodelist.length;
});
} else
{}
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){return org_html_slideshow.domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){return coll.length;
});
