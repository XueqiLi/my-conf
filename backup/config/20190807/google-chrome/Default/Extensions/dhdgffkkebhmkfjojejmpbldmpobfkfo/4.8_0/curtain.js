(function(){var a=null;Registry.require(["crcrc","i18n"],function(){var g=Registry.get("crcrc"),k=Registry.get("i18n"),n=g.cr,h=g.crc,d=0,q=function(e,c,b,a,f){a||(a="");var d=h("table","curtable"+(f?" "+f:""),c,b,"table"+a);f=h("tr",f?" "+f:"",c,b,"tr2"+a);var p=h("td","curtableoutertd",c,b,"td1"+a),g=h("td","curtableinner",c,b,"td2"+a);c=h("td","curtableoutertd",c,b,"td3"+a);f.appendChild(p);f.appendChild(g);f.appendChild(c);d.appendChild(f);e&&g.appendChild(e);return d},l=function(a,c){c||(c={});
var b=n("div","ct","0","p"),d=h("div","curbg","ct","0","c"),f=h("div",c.fixed?"curmiddle_fixed":"curmiddle_relative","ct","0","d");b.inserted||(b.setAttribute("class","curouter hide"),b.setAttribute("style","z-index: 10000"));var g=q(a,"ct","0");f.appendChild(g);b.appendChild(f);b.appendChild(d);b.show=function(){b.setAttribute("class","curouter block")};b.hide=function(){b.setAttribute("class","curouter hide")};b.remove=function(){b.parentNode&&b.parentNode.removeChild(b)};b.setText=function(a){b.text=
a};b.print=function(a){b.text&&(b.text.textContent=a)};d=document.getElementsByTagName("body");d.length?d[0].appendChild(b):console.log("Err: Body not found!");return b},m=function(){var a=document.createElement("div");a.setAttribute("class","curcontainer");var c=document.createElement("div");c.setAttribute("class","curwaithead");var b=document.createElement("div");b.setAttribute("class","curwaitmsg");a.appendChild(c);a.appendChild(b);return{outer:a,inner:b}};Registry.register("curtain","5904",
{wait:function(e){var c;void 0===e&&(e=k.getMessage("Please_wait___"));if(null===d){a&&(a.remove(),a=null);d=0;c=e;var b=m(),g=b.inner;e=document.createElement("div");e.textContent=c;e.setAttribute("class","curtext");$(g).append($('<div class="lds-css ng-scope"><div class="lds-dual-ring"><div></div><div></div></div>')).append(e);c=b.outer;a=l(c,{fixed:!0});a.setText(e);a.show();return!0}if(0===d&&(void 0===e&&(e=k.getMessage("Please_wait___")),a))return e&&a.print(e),a.show(),!0},hide:function(){0===
d&&(a&&a.hide(),d=null)},dialog:function(e){if(1===d)return!1;if(null===d){a&&(a.remove(),a=null);d=1;var c=m();c.inner.appendChild(e);a=l(c.outer);a.show();return!0}},hideDialog:function(){1===d&&(a&&a.hide(),d=null)}})})})();
