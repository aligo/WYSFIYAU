(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/WYSFIYAU/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");for(var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h2",[t._v("WYSFIYAU Editor")]),i("p",[t._v("Why You Steal Flowers Is You Are Ugly Editor (for Animal Crossing)")]),t._l(t.editors,(function(t,e){return i("Editor",{key:e,attrs:{init:t}})})),t._m(0)],2)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-container"},[i("a",{staticClass:"with-icon",attrs:{href:"https://github.com/aligo/WYSFIYAU",target:"_blank",rel:"noopener"}},[i("i",{staticClass:"nes-icon github"}),i("span",[t._v("aligo/WYSFIYAU")])])])}],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"nes-container with-title"},[i("h3",{staticClass:"title"},[t._v(t._s(t.title))]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("canvas",{ref:"canvas"})]),i("div",{ref:"qrcode",staticClass:"col"})]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"nes-field"},[i("label",[t._v("Title")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"nes-input",domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),i("div",{staticClass:"col"},[i("div",{staticClass:"nes-field"},[i("label",[t._v("Background")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.bg,expression:"bg"}],staticClass:"nes-input",domProps:{value:t.bg},on:{input:function(e){e.target.composing||(t.bg=e.target.value)}}})])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"nes-field"},[i("label",[t._v("Creator")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.creator,expression:"creator"}],staticClass:"nes-input",domProps:{value:t.creator},on:{input:function(e){e.target.composing||(t.creator=e.target.value)}}})])]),i("div",{staticClass:"col"},[i("div",{staticClass:"nes-field"},[i("label",[t._v("Town")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.town,expression:"town"}],staticClass:"nes-input",domProps:{value:t.town},on:{input:function(e){e.target.composing||(t.town=e.target.value)}}})])])]),i("div",{staticClass:"nes-table-responsive"},[i("table",{staticClass:"nes-table is-bordered"},[t._m(0),i("tbody",[t._l(t.items,(function(e,n){return i("tr",{key:n},[i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.t,expression:"item.t"}],staticClass:"nes-input",domProps:{value:e.t},on:{input:function(i){i.target.composing||t.$set(e,"t",i.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.fs,expression:"item.fs"}],staticClass:"nes-input",domProps:{value:e.fs},on:{input:function(i){i.target.composing||t.$set(e,"fs",i.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.c,expression:"item.c"}],staticClass:"nes-input",domProps:{value:e.c},on:{input:function(i){i.target.composing||t.$set(e,"c",i.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.x,expression:"item.x"}],staticClass:"nes-input",domProps:{value:e.x},on:{input:function(i){i.target.composing||t.$set(e,"x",i.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.y,expression:"item.y"}],staticClass:"nes-input",domProps:{value:e.y},on:{input:function(i){i.target.composing||t.$set(e,"y",i.target.value)}}})]),i("td",[i("button",{staticClass:"nes-btn is-error",on:{click:function(e){return t.remove(n)}}},[t._v("Del")])])])})),i("tr",[i("td",{attrs:{colspan:"5"}},[i("div",{staticClass:"nes-field is-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.autoText,expression:"autoText"}],staticClass:"nes-input",attrs:{placeholder:"...auto fit text..."},domProps:{value:t.autoText},on:{input:function(e){e.target.composing||(t.autoText=e.target.value)}}}),i("button",{staticClass:"nes-btn is-success lt-input",on:{click:t.autoFitText}},[t._v("Fit")])])]),i("td",[i("button",{staticClass:"nes-btn is-success",on:{click:t.add}},[t._v("Add")])])])],2)])])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("td",[t._v("Text")]),i("td",[t._v("Size")]),i("td",[t._v("Color")]),i("td",[t._v("x")]),i("td",[t._v("y")]),i("td")])])}],c=(i("a434"),i("a9e3"),i("d3b7"),i("25f0"),i("e0d3")),l=i.n(c),u=(i("99af"),i("ace4"),i("5cc6"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7"),i("d4ec")),d=i("bee2"),f=i("2caf"),v=i("262e"),p=i("9072"),h=function(t){Object(v["a"])(i,t);var e=Object(f["a"])(i);function i(){var t;Object(u["a"])(this,i);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return t=e.call.apply(e,[this].concat(s)),t.initDefaults(),t}return Object(d["a"])(i,[{key:"initDefaults",value:function(){this[28]=0,this[29]=0,this.setUint16(86,12569),this[103]=204,this[104]=10,this[105]=9,this[62]=0,this[63]=0,this[84]=0,this[85]=0,this.creatorId=60598,this.townId=50500}},{key:"setUint16",value:function(t,e){this[t]=255&e,this[t+1]=e>>8}},{key:"setStr",value:function(t,e,i){for(var n=0;n<i/2;n++)n>=e.length?this.setUint16(t+2*n,0,!0):this.setUint16(t+2*n,e.charCodeAt(n),!0)}},{key:"title",set:function(t){this.setStr(0,t,40)}},{key:"creatorId",set:function(t){this.setUint16(42,t)}},{key:"creator",set:function(t){this.setUint16(44,t,20)}},{key:"townId",set:function(t){this.setUint16(42,t)}},{key:"town",set:function(t){this.setUint16(44,t,20)}},{key:"palettes",set:function(t){for(var e=0;e<t.length;e++)this[88+e]=t[e]}},{key:"pixels",set:function(t){for(var e=108,i=0,n=e;i<t.length;n++)this[n]=(15&t[i])+((15&t[i+1])<<4),i+=2}}]),i}(Object(p["a"])(Uint8Array)),F=(i("c975"),i("d81d"),i("fb6a"),i("ac1f"),i("1276"),i("771e")),m=i.n(F),C=["#FFEEFF","#FF99AA","#EE5599","#FF66AA","#FF0066","#BB4477","#CC0055","#990033","#552233","","","","","","","#FFFFFF","#FFBBCC","#FF7777","#DD3210","#FF5544","#FF0000","#CC6666","#BB4444","#BB0000","#882222","","","","","","","#EEEEEE","#DDCDBB","#FFCD66","#DD6622","#FFAA22","#FF6600","#BB8855","#DD4400","#BB4400","#663210","","","","","","","#DDDDDD","#FFEEDD","#FFDDCC","#FFCDAA","#FFBB88","#FFAA88","#DD8866","#BB6644","#995533","#884422","","","","","","","#CCCDCC","#FFCDFF","#EE88FF","#CC66DD","#BB88CC","#CC00FF","#996699","#8800AA","#550077","#330044","","","","","","","#BBBBBB","#FFBBFF","#FF99FF","#DD22BB","#FF55EE","#FF00CC","#885577","#BB0099","#880066","#550044","","","","","","","#AAAAAA","#DDBB99","#CCAA77","#774433","#AA7744","#993200","#773222","#552200","#331000","#221000","","","","","","","#999999","#FFFFCC","#FFFF77","#DDDD22","#FFFF00","#FFDD00","#CCAA00","#999900","#887700","#555500","","","","","","","#888888","#DDBBFF","#BB99EE","#6632CC","#9955FF","#6600FF","#554488","#440099","#220066","#221033","","","","","","","#777777","#BBBBFF","#8899FF","#3332AA","#3355EE","#0000FF","#333288","#0000AA","#101066","#000022","","","","","","","#666666","#99EEBB","#66CD77","#226610","#44AA33","#008833","#557755","#225500","#103222","#002210","","","","","","","#555555","#DDFFBB","#CCFF88","#88AA55","#AADD88","#88FF00","#AABB99","#66BB00","#559900","#336600","","","","","","","#444444","#BBDDFF","#77CDFF","#335599","#6699FF","#1077FF","#4477AA","#224477","#002277","#001044","","","","","","","#333233","#AAFFFF","#55FFFF","#0088BB","#55BBCC","#00CDFF","#4499AA","#006688","#004455","#002233","","","","","","","#222222","#CCFFEE","#AAEEDD","#33CDAA","#55EEBB","#00FFCC","#77AAAA","#00AA99","#008877","#004433","","","","","","","#000000","#AAFFAA","#77FF77","#66DD44","#00FF00","#22DD22","#55BB55","#00BB00","#008800","#224422","","","","","","",""],g=[],A=0;A<256;A++){var b=C[A];if(b.length<7)g.push(null);else{var x=[parseInt(b.substr(1,2),16),parseInt(b.substr(3,2),16),parseInt(b.substr(5,2),16)];g.push(x)}}var B=function(t){for(var e=195075,i=0,n=0;n<256;n++){var s=g[n];if(null!==s){var a=s[0]-t[0],r=s[1]-t[1],o=s[2]-t[2],c=a*a+r*r+o*o;if(c<e){if(!c)return n;e=c,i=n}}}return i},D=function(){function t(e,i){Object(u["a"])(this,t),this.ctx=e,this.edge=i}return Object(d["a"])(t,[{key:"autoFitText",value:function(t,e){for(var i=[],n=Math.ceil(Math.sqrt(t.length)),s=Math.floor((this.edge-2)/n),a=Math.ceil((this.edge-n*s)/2),r=0;r<n;r++){var o=t.slice(r*n,(r+1)*n);o.length>0&&i.push({t:o,c:e,fs:s,x:a,y:a+2+r*s})}return i}},{key:"renderContext",value:function(t){this.ctx.fillStyle=t.bg,this.ctx.fillRect(0,0,this.edge,this.edge);var e=this.ctx.font.split(" ");this.ctx.textBaseline="top";for(var i=0;i<t.items.length;i++){var n=t.items[i];this.ctx.font=n.fs+"px "+e[e.length-1],this.ctx.fillStyle=n.c,this.ctx.fillText(n.t,n.x,n.y)}}},{key:"readContext",value:function(){for(var t=[],e=0;e<this.edge;e++)for(var i=0;i<this.edge;i++){var n=this.ctx.getImageData(i,e,1,1).data;t.push([n[0],n[1],n[2]])}var s=m()(t,16),a=s.palette();this.palettes=a.map((function(t){return B(t)})),this.pixels=t.map((function(t){return a.indexOf(s.map(t))}))}}]),t}();l.a.stringToBytes=function(t){return t};var y={props:{init:Object,edge:{type:Number,default:32},previewRatio:{type:Number,default:6}},data:function(){return{bg:this.init.bg,items:this.init.items,title:"no title",creator:"aligo",town:"大岛",autoText:""}},methods:{autoFitText:function(){if(this.autoText.length>0){var t=this.items[0].c;this.items=this.acCanvas.autoFitText(this.autoText,t)}},add:function(){this.items.push({})},remove:function(t){this.items.splice(t,1)},renderCanvas:function(){this.acCanvas.renderContext(this)},renderQR:function(){var t=new h(620);t.title=this.title,t.creator=this.creator,t.town=this.town,this.acCanvas.readContext(),t.palettes=this.acCanvas.palettes,t.pixels=this.acCanvas.pixels;var e=l()(0,"M");e.addData(t),e.make(),this.$refs.qrcode.innerHTML=e.createImgTag()},renderAll:function(){this.renderCanvas(),this.renderQR()}},mounted:function(){var t=this.$refs.canvas;t.width=this.edge,t.height=this.edge,t.style.width=(this.edge*this.previewRatio).toString()+"px",t.style.height=(this.edge*this.previewRatio).toString()+"px",this.ctx=t.getContext("2d"),this.acCanvas=new D(this.ctx,this.edge),this.renderAll()},updated:function(){this.renderAll()}},w=y,E=i("2877"),_=Object(E["a"])(w,r,o,!1,null,null,null),k=_.exports,O="#ff0000",T="#ffffff",j={name:"WYSFIYAU",components:{Editor:k},data:function(){return{editors:[{bg:O,items:[{t:"你丑",fs:12,x:4,y:5,c:T},{t:"你偷花",fs:11,x:0,y:18,c:T}]}]}}},S=j,P=(i("034f"),Object(E["a"])(S,s,a,!1,null,null,null)),I=P.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(I)}}).$mount("#app")},"85ec":function(t,e,i){}});
//# sourceMappingURL=app.a8e2d1ef.js.map