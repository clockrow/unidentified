(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{455:function(t,e,r){var content=r(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(126).default)("c2b8b7fa",content,!0,{sourceMap:!1})},463:function(t,e,r){"use strict";r.r(e);var o=r(0),n=Object(o.d)({props:{baseStyle:{type:Object,required:!0}},setup:function(t){var e=Object(o.a)((function(){return String(t.baseStyle.total/43)+"px"})),r=Object(o.a)((function(){return String(-t.baseStyle.total/43)+"px"})),n=Object(o.a)((function(){return String(t.baseStyle.total/4)+"px"})),l=Object(o.a)((function(){return String(t.baseStyle.total/9)+"px"})),c=Object(o.a)((function(){return String(t.baseStyle.total/25)+"px"})),f=Object(o.a)((function(){return String(t.baseStyle.total/6)+"px"})),d=Object(o.a)((function(){return{width:"".concat(7*t.baseStyle.total-2*t.baseStyle.margin,"px"),left:"".concat(t.baseStyle.margin,"px"),top:0,borderTop:"".concat(e.value," solid #14171A")}})),w=Object(o.a)((function(){return{lineHeight:n.value,height:f.value,marginTop:c.value}}));return{arrowStyle:d,arrowWidth:e,borderRight:n,borderBottom:l,arrowBottom:r,arrowWrapStyle:w}}}),l=(r(494),r(84)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"arrowWrap",style:t.arrowWrapStyle},[r("style",{tag:"component"},[t._v("\n    .leftArrow::after {\n    position: absolute;\n    left: 0;\n    top: "+t._s(t.arrowBottom)+";\n    border-left: "+t._s(t.borderRight)+" solid #fafafa;\n    border-top: "+t._s(t.borderBottom)+' solid #14171A;\n    content: "";\n    }\n    _::-webkit-full-page-media,\n    _:future,\n    :root .leftArrow::after {\n    top: 0;\n    }\n  ')]),t._v(" "),r("span",{staticClass:"leftArrow",style:t.arrowStyle})],1)}),[],!1,null,"3e2cbb3d",null);e.default=component.exports},494:function(t,e,r){"use strict";r(455)},495:function(t,e,r){var o=r(125)((function(i){return i[1]}));o.push([t.i,".arrowWrap[data-v-3e2cbb3d]{position:relative}.leftArrow[data-v-3e2cbb3d]{box-sizing:border-box;display:inline-block;margin:auto;position:absolute}",""]),o.locals={},t.exports=o}}]);