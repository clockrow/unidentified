(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{401:function(t,e,n){var content=n(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(126).default)("5bf11970",content,!0,{sourceMap:!1})},411:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return v})),n.d(e,"b",(function(){return O}));var r=n(421),o=n(394),c={left:3,right:15},l={left:5,right:20},d=["か","し","わ","た","し","わ","か"],f=function(t,e){return t.right===e.right&&t.left===e.left},v=function(t,e){return f(t,c)&&f(e,l)},h={arrow_two:o.b["わ"],dot_left:o.b["た"],dot_right:o.b["か"],arrow_left:o.b["わ"],arrow_right:o.b["し"]},m=function(t,e){return t[e]===h[e]},O=function(t,e,n,o){for(var c=[r.a.ARROW_TWO,r.a.DOT_LEFT,r.a.DOT_RIGHT,r.a.ARROW_LEFT,r.a.ARROW_RIGHT],l=!0,i=0;i<c.length;i++)l&&(l=m(t,c[i]));return l&&(l=90===e),l&&(l=90===n),l&&(l=180===o),l}},418:function(t,e,n){var content=n(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(126).default)("7318d5d1",content,!0,{sourceMap:!1})},421:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return v})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return O}));var r=n(20),o=(n(432),n(0)),c=n(394),l=n(411),d={ARROW_TWO:"arrow_two",ARROW_LEFT:"arrow_left",ARROW_RIGHT:"arrow_right",DOT_LEFT:"dot_left",DOT_RIGHT:"dot_right"},f=function(t){return{transform:"translate(-50%, -50%) rotate(".concat(t,"deg)")}},v=function(t){return(t+90)%360},h=[c.c.RED,c.c.YELLOW,c.c.GREEN,c.c.BLUE],m=function(t){var e=h.findIndex((function(element){return element===t}));return h[(e+1)%h.length]},O=function(){var t;return Object(o.n)((t={},Object(r.a)(t,d.ARROW_TWO,c.b[l.a[1]]),Object(r.a)(t,d.DOT_LEFT,c.b[l.a[2]]),Object(r.a)(t,d.DOT_RIGHT,c.b[l.a[3]]),Object(r.a)(t,d.ARROW_LEFT,c.b[l.a[4]]),Object(r.a)(t,d.ARROW_RIGHT,c.b[l.a[5]]),t))}},430:function(t,e,n){var content=n(527);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(126).default)("2573ee3a",content,!0,{sourceMap:!1})},431:function(t,e,n){var content=n(529);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(126).default)("06936c4a",content,!0,{sourceMap:!1})},432:function(t,e,n){"use strict";var r=n(1),o=n(89).findIndex,c=n(127),l="findIndex",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},458:function(t,e,n){"use strict";var r=n(401),o=n.n(r);n.d(e,"default",(function(){return o.a}))},459:function(t,e,n){var r=n(125)((function(i){return i[1]}));r.push([t.i,".btnWrap_EUjJf{position:relative}.resetBtn_4v2SD{left:50%;position:absolute;top:50%;touch-action:manipulation;transform:translate(-50%,-50%)}",""]),r.locals={btnWrap:"btnWrap_EUjJf",resetBtn:"resetBtn_4v2SD"},t.exports=r},465:function(t,e,n){"use strict";n.r(e);var r=n(515),o=n(0),c=Object(o.d)({props:{baseStyle:{type:Object,required:!0},resetInputStr:{type:Function,required:!1,default:function(){}}},setup:function(t){return{btnWrapStyle:Object(o.a)((function(){return{width:String(3*t.baseStyle.total)+"px",height:String(t.baseStyle.total)+"px"}}))}}}),l=n(458),d=n(84);var component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.btnWrap,style:t.btnWrapStyle},[n(r.a,{class:t.$style.resetBtn,attrs:{color:"#fafafa"},on:{click:function(e){return t.resetInputStr()}}},[t._v("リセット")])],1)}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports},486:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f}));var r=n(152),o=(n(85),n(87),n(38),n(60),n(88),{mosquito:{name:["か"],head:1,leg:6},hawkOrEagle:{name:["たか","わし"],head:1,leg:2},deerOrLion:{name:["しか","しし"],head:1,leg:4},scarecrow:{name:["かかし"],head:1,leg:1},me:{name:["わたし"],head:1,leg:3}}),c=function(t,e){return{headNum:t.headNum+e.head,legNum:t.legNum+e.leg}},l=function(t){for(var e=t.length,n={headNum:0,legNum:0},r=0,l=0,d=!1,i=0;i<e;i++){if(o.mosquito.name.includes(t[i])&&(n=c(n,o.mosquito)),i<e-1){var f=t.slice(i,i+2);o.deerOrLion.name.includes(f)?n=c(n,o.deerOrLion):o.hawkOrEagle.name.includes(f)?n=c(n,o.hawkOrEagle):"した"===f&&l++}if(i<e-2){var v=t.slice(i,i+3);o.scarecrow.name.includes(v)?(n=c(n,o.scarecrow),d=!0):o.me.name.includes(v)&&(n=c(n,o.me),r++)}}var h=!d;return{headNum:n.headNum,legNum:n.legNum,meNum:r,downNum:l,meShow:h}},d=function(t){var e=t.join("");return l(e)},f=function(t){var e=Object(r.a)(t).reverse().join("");return l(e)}},500:function(t,e,n){"use strict";var r=n(418),o=n.n(r);n.d(e,"default",(function(){return o.a}))},501:function(t,e,n){var r=n(125)((function(i){return i[1]}));r.push([t.i,".btn4-wrap_nhLiV{display:flex;height:1rem}",""]),r.locals={"btn4-wrap":"btn4-wrap_nhLiV"},t.exports=r},502:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0),o=Object(r.n)({activeSpace:!0})},512:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(397),c=n(394),l=Object(r.d)({components:{Btn:o.default},props:{baseStyle:{type:Object,required:!0},setChar:{type:Function,required:!0}},setup:function(){return{CHAR2COLOR:c.b}}}),d=n(500),f=n(84);var component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style["btn4-wrap"]},[n("Btn",{attrs:{"base-style":t.baseStyle,color:t.CHAR2COLOR["わ"]},on:{clickFunc:function(e){return t.setChar("わ")}}}),t._v(" "),n("Btn",{attrs:{"base-style":t.baseStyle,color:t.CHAR2COLOR["し"]},on:{clickFunc:function(e){return t.setChar("し")}}}),t._v(" "),n("Btn",{attrs:{"base-style":t.baseStyle,color:t.CHAR2COLOR["か"]},on:{clickFunc:function(e){return t.setChar("か")}}}),t._v(" "),n("Btn",{attrs:{"base-style":t.baseStyle,color:t.CHAR2COLOR["た"]},on:{clickFunc:function(e){return t.setChar("た")}}})],1)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports},526:function(t,e,n){"use strict";var r=n(430),o=n.n(r);n.d(e,"default",(function(){return o.a}))},527:function(t,e,n){var r=n(125)((function(i){return i[1]}));r.push([t.i,".btn7Wrap_dWPjv{position:relative}.btn7Main_ap6Nv{display:flex;z-index:5}.btn7ClickNG_O2JTu{background-color:transparent;left:0;position:absolute;top:0;z-index:6}",""]),r.locals={btn7Wrap:"btn7Wrap_dWPjv",btn7Main:"btn7Main_ap6Nv",btn7ClickNG:"btn7ClickNG_O2JTu"},t.exports=r},528:function(t,e,n){"use strict";var r=n(431),o=n.n(r);n.d(e,"default",(function(){return o.a}))},529:function(t,e,n){var r=n(125)((function(i){return i[1]}));r.push([t.i,".btn4-reset-wrap_TtgH5{display:flex}",""]),r.locals={"btn4-reset-wrap":"btn4-reset-wrap_TtgH5"},t.exports=r},569:function(t,e,n){"use strict";n.r(e);n(273);var r=n(0),o=n(397),c=n(394),l=Object(r.d)({components:{Btn:o.default},props:{baseStyle:{type:Object,required:!0},inputStr:{type:Array,required:!0,validator:function(t){return t.length<=7}}},setup:function(t){var e=Object(r.a)((function(){return{height:"".concat(t.baseStyle.total,"px"),width:"".concat(7*t.baseStyle.total,"px")}}));return{btn7ClickNGStyle:e,btnColors:Object(r.a)((function(){for(var e=new Array(7).fill(c.c.WHITE),i=0;i<t.inputStr.length;i++)e[i]=c.b[t.inputStr[i]];return e}))}}}),d=n(526),f=n(84);var component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.btn7Wrap},[n("div",{class:t.$style.btn7Main},t._l(t.btnColors,(function(e,r){return n("Btn",{key:r,attrs:{color:e,"base-style":t.baseStyle}})})),1),t._v(" "),n("div",{class:t.$style.btn7ClickNG,style:t.btn7ClickNGStyle})])}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports},570:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(512),c=n(465),l=Object(r.d)({components:{TheFourBtn:o.default,ResetBtn:c.default},props:{baseStyle:{type:Object,required:!0},setChar:{type:Function,required:!0},resetInputStr:{type:Function,required:!0}}}),d=n(528),f=n(84);var component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style["btn4-reset-wrap"]},[n("TheFourBtn",{attrs:{"base-style":t.baseStyle,"set-char":t.setChar}}),t._v(" "),n("ResetBtn",{attrs:{"base-style":t.baseStyle,"reset-input-str":t.resetInputStr}})],1)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports},614:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(86),n(0)),c=n(466),l=n(464),d=n(462),f=n(463),v=n(569),h=n(467),m=n(570),O=n(468),y=n(457),_=n(425),w=n(424),S=n(414),j=n(486),R=n(411),N=n(502),C=Object(o.d)({components:{Canvas:c.default,NumAndMe:l.default,RightArrow:d.default,LeftArrow:f.default,MeCircleVue:O.default,TheSevenBtn:v.default,Divider:h.default,TheFourBtnAndReset:m.default},props:{goToNextScene:{type:Function,required:!0},updateCanvasSize:{type:Function,required:!0},baseStyle:{type:Object,required:!0}},setup:function(t){var e="canvas-main",n=Object(_.b)(),c=function(){var canvas=Object(_.e)(e);null!=canvas&&(n.value=Object(_.f)(canvas),t.updateCanvasSize(n.value))},l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)(c);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(o.k)((function(){window.addEventListener("resize",l)})),Object(o.j)((function(){window.removeEventListener("resize",l)}));var d=Object(o.o)(!1),f=Object(w.b)(),v=Object(w.b)(),h=Object(o.o)(!0),m=Object(o.o)(!0),O=Object(S.d)(),C=Object(S.c)(),T=Object(o.o)([]);return{SCENE:y.a,topCardNum:f,bottomCardNum:v,cardNumShow:d,topId:O,bottomId:C,biggerAnimate:S.b,ANIMATION_OBJ_ID:S.a,inputStr:T,setChar:function(e){T.value.length<7&&(T.value.push(e),7===T.value.length&&(!function(e){var n=Object(j.b)(e),r=Object(j.a)(e);f.value=Object(w.d)(n),v.value=Object(w.d)(r),Object(R.c)(f.value,v.value)?(N.a.activeSpace=!1,t.goToNextScene(y.a.MAIN)):(h.value=n.meShow,m.value=r.meShow,Object(S.b)(O.down,n.downNum),Object(S.b)(O.me,n.meNum),Object(S.b)(C.down,r.downNum),Object(S.b)(C.me,r.meNum))}(T.value),d.value=!0))},resetInputStr:function(){T.value=[],d.value=!1,f.value=Object(w.c)(),v.value=Object(w.c)(),h.value=!0,m.value=!0},topMeCircleShow:h,bottomMeCircleShow:m,awaitResize:l,canvasName:e}}}),T=C,A=n(84),component=Object(A.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Canvas",{attrs:{id:t.canvasName}},[n("NumAndMe",{attrs:{"base-style":t.baseStyle,num:t.topCardNum,"num-show":t.cardNumShow,"me-show":t.topMeCircleShow,"down-animation-id":t.topId.down,"me-animation-id":t.topId.me}}),t._v(" "),n("RightArrow",{attrs:{"base-style":t.baseStyle}}),t._v(" "),n("TheSevenBtn",{attrs:{"base-style":t.baseStyle,"input-str":t.inputStr}}),t._v(" "),n("LeftArrow",{attrs:{"base-style":t.baseStyle}}),t._v(" "),n("NumAndMe",{attrs:{"base-style":t.baseStyle,num:t.bottomCardNum,"num-show":t.cardNumShow,"me-show":t.bottomMeCircleShow,"down-animation-id":t.bottomId.down,"me-animation-id":t.bottomId.me}}),t._v(" "),n("Divider"),t._v(" "),n("TheFourBtnAndReset",{attrs:{"base-style":t.baseStyle,"set-char":t.setChar,"reset-input-str":t.resetInputStr}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);