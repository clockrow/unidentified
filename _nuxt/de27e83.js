(window.webpackJsonp=window.webpackJsonp||[]).push([[29,17],{393:function(t,e,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(126).default)("fda9f0e2",content,!0,{sourceMap:!1})},394:function(t,e,n){"use strict";n.d(e,"c",(function(){return O})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return R})),n.d(e,"e",(function(){return _}));var r,o,c=n(20),l=n(444),O={WHITE:"#fafafa",RED:"red",BLUE:"blue",GREEN:"green",YELLOW:"yellow"},f={"わ":O.RED,"た":O.BLUE,"か":O.GREEN,"し":O.YELLOW},d={WHITE:l.a.shades.white,RED:l.a.red.base,BLUE:l.a.blue.base,GREEN:l.a.green.base,YELLOW:l.a.yellow.base},R=(r={},Object(c.a)(r,O.WHITE,""),Object(c.a)(r,O.RED,"mdi-circle"),Object(c.a)(r,O.YELLOW,"mdi-triangle"),Object(c.a)(r,O.GREEN,"mdi-square"),Object(c.a)(r,O.BLUE,"mdi-star"),r),_=(o={},Object(c.a)(o,d.WHITE,""),Object(c.a)(o,d.RED,"mdi-circle"),Object(c.a)(o,d.YELLOW,"mdi-triangle"),Object(c.a)(o,d.GREEN,"mdi-square"),Object(c.a)(o,d.BLUE,"mdi-star"),o)},397:function(t,e,n){"use strict";n.r(e);var r=n(515),o=n(451),c=n(0),l=n(394),O=n(404),f=Object(c.d)({props:{baseStyle:{type:Object,required:!0},color:{type:String,required:!0,default:"white"}},setup:function(t,e){var n=e.emit,r=Object(c.a)((function(){return{margin:String(t.baseStyle.margin)+"px"}}));return{size:Object(c.a)((function(){return t.baseStyle.height})),margin:Object(c.a)((function(){return t.baseStyle.margin})),clickFunc:function(){n("clickFunc")},btnStyle:r,symbolShow:Object(c.a)((function(){return!(t.color===l.c.WHITE)&&O.a.showSymbol})),getSymbol:Object(c.a)((function(){return l.a[t.color]}))}}}),d=n(406),R=n(84);var component=Object(R.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(r.a,{class:["pa-0",t.$style["disable-dbl-tap-zoom"],t.$style["active-btn"]],style:t.btnStyle,attrs:{height:t.size,width:t.size,"min-width":"20","min-height":"20",color:t.color},on:{click:t.clickFunc}},[n(o.a,{directives:[{name:"show",rawName:"v-show",value:t.symbolShow,expression:"symbolShow"}],attrs:{color:"white"}},[t._v(t._s(t.getSymbol))]),t._v(" "),t._t("default")],2)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports},404:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0),o=Object(r.n)({useAdjustedColor:!1,showSymbol:!1})},406:function(t,e,n){"use strict";var r=n(393),o=n.n(r);n.d(e,"default",(function(){return o.a}))},407:function(t,e,n){var r=n(125)((function(i){return i[1]}));r.push([t.i,'.disable-dbl-tap-zoom_1T\\+f3{touch-action:manipulation}.activeBtn_Weefx{color:"white"}',""]),r.locals={"disable-dbl-tap-zoom":"disable-dbl-tap-zoom_1T+f3",activeBtn:"activeBtn_Weefx"},t.exports=r},411:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return y}));var r=n(421),o=n(394),c={left:3,right:15},l={left:5,right:20},O=["か","し","わ","た","し","わ","か"],f=function(t,e){return t.right===e.right&&t.left===e.left},d=function(t,e){return f(t,c)&&f(e,l)},R={arrow_two:o.b["わ"],dot_left:o.b["た"],dot_right:o.b["か"],arrow_left:o.b["わ"],arrow_right:o.b["し"]},_=function(t,e){return t[e]===R[e]},y=function(t,e,n,o){for(var c=[r.a.ARROW_TWO,r.a.DOT_LEFT,r.a.DOT_RIGHT,r.a.ARROW_LEFT,r.a.ARROW_RIGHT],l=!0,i=0;i<c.length;i++)l&&(l=_(t,c[i]));return l&&(l=90===e),l&&(l=90===n),l&&(l=180===o),l}},421:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return _})),n.d(e,"c",(function(){return y}));var r=n(20),o=(n(432),n(0)),c=n(394),l=n(411),O={ARROW_TWO:"arrow_two",ARROW_LEFT:"arrow_left",ARROW_RIGHT:"arrow_right",DOT_LEFT:"dot_left",DOT_RIGHT:"dot_right"},f=function(t){return{transform:"translate(-50%, -50%) rotate(".concat(t,"deg)")}},d=function(t){return(t+90)%360},R=[c.c.RED,c.c.YELLOW,c.c.GREEN,c.c.BLUE],_=function(t){var e=R.findIndex((function(element){return element===t}));return R[(e+1)%R.length]},y=function(){var t;return Object(o.n)((t={},Object(r.a)(t,O.ARROW_TWO,c.b[l.a[1]]),Object(r.a)(t,O.DOT_LEFT,c.b[l.a[2]]),Object(r.a)(t,O.DOT_RIGHT,c.b[l.a[3]]),Object(r.a)(t,O.ARROW_LEFT,c.b[l.a[4]]),Object(r.a)(t,O.ARROW_RIGHT,c.b[l.a[5]]),t))}},432:function(t,e,n){"use strict";var r=n(1),o=n(89).findIndex,c=n(127),l="findIndex",O=!0;l in[]&&Array(1)[l]((function(){O=!1})),r({target:"Array",proto:!0,forced:O},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},433:function(t,e,n){var content=n(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(126).default)("e7b811ba",content,!0,{sourceMap:!1})},530:function(t,e,n){"use strict";var r=n(433),o=n.n(r);n.d(e,"default",(function(){return o.a}))},531:function(t,e,n){var r=n(125)((function(i){return i[1]}));r.push([t.i,".btn7Main_RlGcA,.btn7Wrap_b0WnQ{position:relative}.btn7Main_RlGcA{display:flex;z-index:5}.hidden_mHVez{visibility:hidden}.sonantWrap_ZKpTX{position:relative}.sonant_paObS{pointer-events:none;position:absolute;z-index:20}.icon-container_yBb58{display:flex;position:absolute}.icon-wrap_uNj5W{cursor:pointer;position:relative;touch-action:manipulation}.icon_lbs2O{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none}",""]),r.locals={btn7Main:"btn7Main_RlGcA",btn7Wrap:"btn7Wrap_b0WnQ",hidden:"hidden_mHVez",sonantWrap:"sonantWrap_ZKpTX",sonant:"sonant_paObS","icon-container":"icon-container_yBb58","icon-wrap":"icon-wrap_uNj5W",icon:"icon_lbs2O"},t.exports=r},571:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(86),n(0)),c=n(397),l=n(394),O=n(421),f=n(411),d=Object(o.d)({components:{Btn:c.default},props:{baseStyle:{type:Object,required:!0},gameClear:{type:Function,required:!0}},setup:function(t){var e=Object(o.o)(0),n=Object(o.o)(0),c=Object(o.o)(0),d=Object(o.a)((function(){return Object(O.b)(e.value)})),R=Object(o.a)((function(){return Object(O.b)(n.value)})),_=Object(o.a)((function(){return Object(O.b)(c.value)})),y=Object(o.a)((function(){return{height:String(t.baseStyle.total)+"px",width:String(7*t.baseStyle.total)+"px"}})),T=Object(o.a)((function(){return{height:String(t.baseStyle.total)+"px",width:String(t.baseStyle.total)+"px"}})),v=Object(o.a)((function(){return{fontSize:String(.4*t.baseStyle.height)+"px"}})),W=Object(O.c)(),h=function(){var l=Object(r.a)(regeneratorRuntime.mark((function r(l){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l===O.a.ARROW_TWO?W[O.a.ARROW_TWO]=Object(O.d)(W[O.a.ARROW_TWO]):l===O.a.ARROW_LEFT?W[O.a.ARROW_LEFT]=Object(O.d)(W[O.a.ARROW_LEFT]):l===O.a.ARROW_RIGHT?W[O.a.ARROW_RIGHT]=Object(O.d)(W[O.a.ARROW_RIGHT]):l===O.a.DOT_LEFT?W[O.a.DOT_LEFT]=Object(O.d)(W[O.a.DOT_LEFT]):l===O.a.DOT_RIGHT&&(W[O.a.DOT_RIGHT]=Object(O.d)(W[O.a.DOT_RIGHT])),r.next=3,Object(o.h)();case 3:Object(f.b)(W,e.value,n.value,c.value)&&t.gameClear();case 4:case"end":return r.stop()}}),r)})));return function(t){return l.apply(this,arguments)}}(),E=function(){var l=Object(r.a)(regeneratorRuntime.mark((function r(l){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l===O.a.ARROW_TWO?e.value=Object(O.e)(e.value):l===O.a.ARROW_LEFT?n.value=Object(O.e)(n.value):l===O.a.ARROW_RIGHT&&(c.value=Object(O.e)(c.value)),r.next=3,Object(o.h)();case 3:Object(f.b)(W,e.value,n.value,c.value)&&t.gameClear();case 4:case"end":return r.stop()}}),r)})));return function(t){return l.apply(this,arguments)}}(),S=Object(o.a)((function(){return{fontSize:String(.4*t.baseStyle.height)+"px",top:String(.1*t.baseStyle.height)+"px",right:String(3.95*t.baseStyle.height)+"px"}}));return{COLOR:l.c,iconStyle:v,iconWrapStyle:T,sonantStyle:S,arrow2Deg:e,arrowLeftDeg:n,arrowRightDeg:c,arrow2RotateStyle:d,arrowLeftRotateStyle:R,arrowRightRotateStyle:_,nextBtn:h,ROTATE_ICON:O.a,activeBtnColor:W,nextIcon:E,iconContainerStyle:y}}}),R=d,_=n(530),y=n(84);var component=Object(y.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.btn7Wrap},[n("div",{class:t.$style.btn7Main},[n("Btn",{class:t.$style.hidden,attrs:{"base-style":t.baseStyle,color:t.COLOR.WHITE}}),t._v(" "),n("Btn",{attrs:{"base-style":t.baseStyle,color:t.activeBtnColor[t.ROTATE_ICON.ARROW_TWO]},on:{clickFunc:function(e){return t.nextBtn(t.ROTATE_ICON.ARROW_TWO)}}}),t._v(" "),n("Btn",{attrs:{"base-style":t.baseStyle,color:t.activeBtnColor[t.ROTATE_ICON.DOT_LEFT]},on:{clickFunc:function(e){return t.nextBtn(t.ROTATE_ICON.DOT_LEFT)}}}),t._v(" "),n("Btn",{class:[t.$style.sonantWrap,"pt-0"],attrs:{"base-style":t.baseStyle,color:t.activeBtnColor[t.ROTATE_ICON.DOT_RIGHT]},on:{clickFunc:function(e){return t.nextBtn(t.ROTATE_ICON.DOT_RIGHT)}}}),t._v(" "),n("div",{class:t.$style.sonant,style:t.sonantStyle},[t._v("〝")]),t._v(" "),n("Btn",{attrs:{"base-style":t.baseStyle,color:t.activeBtnColor[t.ROTATE_ICON.ARROW_LEFT]},on:{clickFunc:function(e){return t.nextBtn(t.ROTATE_ICON.ARROW_LEFT)}}}),t._v(" "),n("Btn",{attrs:{"base-style":t.baseStyle,color:t.activeBtnColor[t.ROTATE_ICON.ARROW_RIGHT]},on:{clickFunc:function(e){return t.nextBtn(t.ROTATE_ICON.ARROW_RIGHT)}}}),t._v(" "),n("Btn",{class:t.$style.hidden,attrs:{"base-style":t.baseStyle,color:t.COLOR.WHITE}})],1),t._v(" "),n("div",{class:t.$style["icon-container"],style:t.iconContainerStyle},[n("div",{class:t.$style["icon-wrap"],style:t.iconWrapStyle}),t._v(" "),n("div",{class:t.$style["icon-wrap"],style:t.iconWrapStyle,on:{click:function(e){return t.nextIcon(t.ROTATE_ICON.ARROW_TWO)}}},[n("div",{class:t.$style.icon,style:[t.iconStyle,t.arrow2RotateStyle]},[t._v("⇈")])]),t._v(" "),n("div",{class:t.$style["icon-wrap"],style:t.iconWrapStyle},[n("div",{class:t.$style.icon,style:t.iconStyle},[t._v("・")])]),t._v(" "),n("div",{class:t.$style["icon-wrap"],style:t.iconWrapStyle},[n("div",{class:t.$style.icon,style:t.iconStyle},[t._v("・")])]),t._v(" "),n("div",{class:t.$style["icon-wrap"],style:t.iconWrapStyle,on:{click:function(e){return t.nextIcon(t.ROTATE_ICON.ARROW_LEFT)}}},[n("div",{class:t.$style.icon,style:[t.iconStyle,t.arrowLeftRotateStyle]},[t._v("↑")])]),t._v(" "),n("div",{class:t.$style["icon-wrap"],style:t.iconWrapStyle,on:{click:function(e){return t.nextIcon(t.ROTATE_ICON.ARROW_RIGHT)}}},[n("div",{class:t.$style.icon,style:[t.iconStyle,t.arrowRightRotateStyle]},[t._v("↑")])]),t._v(" "),n("div",{class:t.$style["icon-wrap"],style:t.iconWrapStyle})])])}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports}}]);