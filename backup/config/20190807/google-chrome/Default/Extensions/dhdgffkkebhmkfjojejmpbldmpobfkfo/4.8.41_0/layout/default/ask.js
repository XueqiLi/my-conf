window.requestFileSystem||(window.requestFileSystem=window.webkitRequestFileSystem);window.BlobBuilder||(window.BlobBuilder=window.WebKitBlobBuilder);
Registry.require("promise layout xmlhttprequest convert crcrc curtain layout/default/tabview layout/default/htmlutil helper i18n parser statistics layout/default/layout_helper".split(" "),function(){var y=rea.FEATURES,B=Registry.get("promise"),p=Registry.get("crcrc").cr,b=Registry.get("crcrc").crc,d=Registry.get("i18n"),C=Registry.get("curtain"),v=Registry.get("helper"),L=Registry.get("layout/default/tabview"),u=Registry.get("layout/default/htmlutil"),W=Registry.get("statistics"),G=Registry.get("layout"),
M=Registry.get("layout/default/layout_helper"),D=M.images;G.render(function(){M.addStyle();var k=null,t={},N="???",E=null,O="0.0.0",z=function(){var a=document.getElementById("ask"),c=b("div","content_wrapper","ask","main");if(a){var e=a.parentNode;e.removeChild(a);e.appendChild(c);$(document.body).addClass("main")}var a=b("div","head_container","ask","head_container"),e=b("div","tv_container_fit","ask","tv_container"),h=p("a","head_link","ask","head_link");h.href="https://www.tampermonkey.net";h.target=
"_blank";var f=b("div","float","ask","head1"),g=b("img","banner","ask");g.src=rea.extension.getURL("images/icon128.png");var d=b("div","float head","ask","head2"),l=b("div","header_title","heading"),m=b("div","version","version","version");m.textContent=" by Jan Biniok";var F=p("div","search","box","");l.innerHTML="Tampermonkey<sup>\u00ae</sup>";f.appendChild(g);d.appendChild(l);d.appendChild(m);h.appendChild(f);h.appendChild(d);a.appendChild(h);a.appendChild(F);c.appendChild(a);c.appendChild(e);
c=L.create("_main",e);a=p("div","main","main","tab_content_h");a.textContent=N;e=p("div","main","main","tab_content");c.appendTab(v.createUniqueId("main","main"),a,e).select();C.hide();return e},X=function(a){var c=a.script,e=a.oldscript,h=b("div","viewer_bottom_tab","bottom","");a={tv:"tv tv_alt",tv_table:"tv_table tv_table_alt",tr_tabs:"tr_tabs tr_tabs_alt",tr_content:"tr_content tr_content_alt",td_content:"td_content td_content_alt",td_tabs:"td_tabs td_tabs_alt",tv_tabs_align:"tv_tabs_align tv_tabs_align_alt",
tv_tabs_fill:"tv_tabs_fill tv_tabs_fill_alt",tv_tabs_table:"tv_tabs_table tv_tabs_table_alt",tv_contents:"tv_contents tv_contents_alt",tv_tab_selected:"tv_tab tv_selected tv_tab_alt tv_selected_alt",tv_tab_close:"",tv_tab:"tv_tab tv_tab_alt",tv_content:"tv_content tv_content_alt"};if(t.editor_enabled){var f=L.create("_source"+c.uuid,h,a),g,n=function(c,a){var h=b("div","tv_content tv_content_alt",c.uuid,a+"container_o"),e=b("table","editor_container_o editor_400p_container_o p100100 noborder",c.uuid,
a+"container_o"),g=b("tr","editor_container p100100",c.uuid,a+"container");h.appendChild(e);e.appendChild(g);var e=b("td","editor_outer editor_400p_outer",c.uuid,a+"edit"),f=b("div","editor_100 editor_border",c.uuid,a+"edit");g.appendChild(e);e.appendChild(f);return{c:h,e:f}},l=function(){var c=B();G.addStyle("vendor/cm/mode/diff/diff.css");Registry.vendor(["vendor/jsdiff/diff","vendor/cm/mode/diff/diff"],function(){l=B.Pledge;c.resolve()});return c.promise()};(function(){return e?l().then(function(){var a=
p("div",c.uuid,"diff_h");a.textContent=d.getMessage("Changes");var b=n(c,"diff");h.diff=new MirrorFrame(b.e,{theme:"diff",fontSize:t.editor_fontSize,value:d.getMessage("Please_wait___"),noButtons:!0,mode:"diff",readOnly:!0});g=f.appendTab("diff",a,b.c,function(){window.setTimeout(function(){h.diff.refresh();h.diff.mirror.focus()},1)});window.setTimeout(function(){var a;try{a=window.JsDiff.createTwoFilesPatch(d.getMessage("Current_Version"),d.getMessage("New_Version"),e.textContent,c.textContent,void 0,
void 0,{timeout:4E3})}catch(b){console.warn(b)}a||(a=d.getMessage("The_diff_for_this_script_is_too_large_to_render"));h.diff.mirror.setValue(a)},500)}):B.Pledge()})().then(function(){var a=p("div",c.uuid,"source_h");a.textContent=d.getMessage("Source_Code");var b=n(c,"source");h.editor=new MirrorFrame(b.e,{theme:t.editor_theme,fontSize:t.editor_fontSize,value:c.textContent,noButtons:!0,matchBrackets:!0,readOnly:!0});a=f.appendTab("source",a,b.c,function(){window.setTimeout(function(){h.editor.refresh();
h.editor.mirror.focus()},1)});g=g||a}).then(function(){g.select()})}else{var m=b("div","editor_400p_outer","editor",c.name);a=b("div","editor_400p editor_border","editor",c.name);h.appendChild(m);m.appendChild(a);m=b("textarea","editorta","editor",c.name);m.setAttribute("wrap","off");a.appendChild(m);m.value=c.textContent}return h},Y=function(){var a={};window.addEventListener("keydown",function(c){var b=!1;if("keydown"==c.type&&(a[c.keyCode]&&(b=a[c.keyCode](c)),b))return c.stopPropagation(),c.preventDefault(),
!1},!0);return{registerListener:function(c,b){a[c]=b}}}(),w=function(a,c,b){v.select(b,function(a){return a.label}).forEach(function(b){var e=b.icon?u.createImageTextButton(b.id,b.id,b.label,b.icon,b.fn):u.createButton(b.label,b.id,b.label,b.fn),g=$(e);g.addClass(c);b.id&&g.attr("data-btn-id",b.id);a.appendChild(e);b.focus&&window.setTimeout(function(){g.focus()},300);b.keyDown&&Y.registerListener(b.keyDown.keyCode?b.keyDown.keyCode:b.keyDown,b.keyDown.cb?b.keyDown.cb:b.fn)})},aa=function(a){var c=
a.script,e=b("div","viewer_last","install"),h=b("div","viewer_content","install_content"),f=b("div","ask_action_buttons","install_buttons"),g=[];g.push({label:a.messages.action,fn:function(){q(k.aid,"install")},focus:!0});y.RUNTIME.CHROME&&21>y.RUNTIME.BROWSER_VERSION&&g.push({label:a.messages.flags.install?d.getMessage("Process_with_Chrome"):null,fn:function(){Z(c.fileURL);$(e).hide()}});g.push({label:d.getMessage("Cancel"),fn:x,keyDown:27});w(f,"install",g);h.appendChild(f);e.appendChild(h);return e},
ba=function(a){var c=b("div","viewer_last","import"),e=b("div","viewer_content","import_content"),h=b("div","ask_action_buttons import_buttons","import_buttons");w(h,"import",[{label:d.getMessage("Import"),fn:function(){var c=Object.keys(a.scripts).filter(function(a){return!!$("input[type=checkbox][data-import-id="+a+"]:checked").val()}),b=a.global_settings&&!!$("input[type=checkbox][data-import-id=global_settings]:checked").val();q(k.aid,"import",{data:{import_ids:c,global_settings:b}})},focus:!0},
{label:d.getMessage("Cancel"),fn:x,keyDown:27}]);e.appendChild(h);c.appendChild(e);e=b("div","section","btn");e.appendChild(c);return e},ca=function(a){a=b("div","viewer_last","ok");var c=b("div","viewer_content","ok_content"),e=b("div","ask_action_buttons","ok_buttons");w(e,"import",[{label:d.getMessage("Ok"),fn:x,focus:!0}]);c.appendChild(e);a.appendChild(c);return a},da=function(a,c){var e=b("div","viewer_last","ok"),h=b("div","viewer_content","ok_content"),f=b("div","ask_action_buttons","ok_buttons");
w(f,"permission",[{label:d.getMessage("Ok"),fn:function(){var a={permissions:c.permissions,origins:c.origins};rea.permissions.request(a,function(c){var b;rea.runtime.lastError&&(b=rea.runtime.lastError.message,console.warn("notify: error on getting permission",a,"reason:",b));q(k.aid,"permission",{data:{granted:c,permissions:a.permissions,origins:a.origins,error:b}})})},focus:!0},{label:d.getMessage("Cancel"),fn:x,keyDown:27}]);h.appendChild(f);e.appendChild(h);var h=b("div","viewer_upper","permission"),
f=b("div","viewer_info viewer_info_wide","general","permission"),g=b("div","viewer_content","general_content","permission"),n=p("h3","install","heading","permission"),l=p("span","install","heading_span","permission"),m=b("span","message","heading","permission");document.title=l.textContent=c.title;m.textContent=c.message;n.appendChild(l);g.appendChild(m);f.appendChild(n);f.appendChild(g);h.appendChild(f);f=b("div","section","perm_src","permission");f.appendChild(h);f.appendChild(e);a.appendChild(f)},
fa=function(a,c){var e=Date.now(),h,f;c.timeout&&(h=window.setTimeout(function(){x();g()},c.timeout));var g=function(){var a;f&&window.clearInterval(f);h&&window.clearTimeout(h);f=h=null;(a=$("input[data-btn-id]")[0])&&a.parentNode.removeChild(a)},n=b("div","viewer_last","ok"),l=b("div","viewer_content","ok_content"),m=b("div","ask_action_buttons","ok_buttons"),F=b("div","ask_action_buttons","ok_buttons"),r=b("div","ask_action_buttons","ok_buttons");w(m,"connect",[{label:d.getMessage("Allow_once"),
icon:"button_ok",fn:function(){return q(k.aid,"connect",{data:{ok:!0,allow:!0,once:!0}})},focus:!0},{label:d.getMessage("Temporarily_allow"),icon:"clock",fn:function(){return q(k.aid,"connect",{data:{ok:!0,allow:!0,temporary:!0}})}},{label:c.hostname!=c.domain?d.getMessage("Always_allow"):d.getMessage("Always_allow_domain"),icon:"yes_domain",fn:function(){return q(k.aid,"connect",{data:{ok:!0,allow:!0}})}},function(){return c.domain&&c.hostname!=c.domain?{label:d.getMessage("Always_allow_domain"),
icon:"yes_domain",fn:function(){return q(k.aid,"connect",{data:{ok:!0,allow:!0,whole_domain:!0}})}}:null}(),function(){return c.all_domains?{label:d.getMessage("Always_allow_all_domains"),icon:"critical",fn:function(){g();if(window.confirm(d.getMessage("This_gives_this_script_the_permission_to_retrieve_and_send_data_from_and_to_every_webpage__This_is_potentially_unsafe__Are_you_sure_you_want_to_continue_")))return q(k.aid,"connect",{data:{ok:!0,allow:!0,all_domains:!0}})}}:null}()].filter(function(a){return a}));
w(F,"connect",[{label:d.getMessage("Forbid_once"),icon:"cancel",fn:function(){return q(k.aid,"connect",{data:{ok:!0,deny:!0,once:!0}})},keyDown:27},{label:c.hostname!=c.domain?d.getMessage("Always_forbid"):d.getMessage("Always_forbid_domain"),icon:"no_domain",fn:function(){return q(k.aid,"connect",{data:{ok:!0,deny:!0}})}},function(){return c.domain&&c.hostname!=c.domain?{label:d.getMessage("Always_forbid_domain"),icon:"no",fn:function(){return q(k.aid,"connect",{data:{ok:!0,deny:!0,whole_domain:!0}})}}:
null}(),{label:d.getMessage("Dont_ask_again"),icon:"no",fn:function(){return q(k.aid,"connect",{data:{ok:!0,deny:!0,all_domains:!0}})}}].filter(function(a){return a}));w(r,"connect_misc",[function(){return c.tabid?{label:d.getMessage("Focus_tab"),icon:"windowlist",fn:function(){ea("focus_tab",{tabid:c.tabid})}}:null}(),function(){if(c.timeout)return f=window.setInterval(function(){var a;(a=$("input[data-btn-id]")[0])&&$(a).attr("value",d.getMessage("Skip_timeout__0seconds0_seconds_",Math.round((c.timeout+
e-Date.now())/1E3)))},1E3),{label:d.getMessage("Skip_timeout__0seconds0_seconds_",Math.round(c.timeout/1E3)),id:"skip_timeout_button",fn:g}}()].filter(function(a){return a}));var u=b("div","viewer_upper","connect"),H=b("div","viewer_info viewer_info_wide","general","connect"),t=b("div","viewer_content","general_content","connect"),P=p("h3","install","heading","connect"),I=p("span","install","heading_span","connect"),Q=b("span","message","heading","connect");if(c.script.icon){var A=p("img","version",
"heading","connect");A.src=c.script.icon;I.appendChild(A)}document.title=I.textContent=d.getMessage("A_userscript_wants_to_access_a_cross_origin_resource_");var A=b("div","ask_action_buttons message","help","connect"),R=p("div","help","connect"),J=d.getMessage("A_request_to_a_cross_origin_resource_is_nothing_unusual__You_just_have_to_check_whether_this_script_has_a_good_reason_to_access_this_domain__For_example_there_are_only_a_very_few_reasons_for_a_userscript_to_contact_your_bank__Please_note_that_userscript_authors_can_avoid_this_dialog_by_adding_@connect_tags_to_their_scripts__You_can_change_your_opinion_at_any_time_at_the_scripts_settings_tab_",
c.connect_url,c.settings_url),J=J.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/\[url=([^\]]+)\](.*)\[\/url\]/g,'<a target="_blank" href="$1">$2 &#x2B00;</a>').replace(/\n/g,"<br>");R.innerHTML=J+"<br><br>";A.appendChild(R);P.appendChild(I);l.appendChild([r,A,m,F]);n.appendChild(l);var S=b("table","script_desc","connect");[{prop:"name",label:d.getMessage("Name")},{prop:"src_url",label:d.getMessage("Tab_URL")},c.domain?{prop:"hostname",label:d.getMessage("Destination_domain")}:null,{prop:"url",
label:d.getMessage("Destination_URL")}].forEach(function(a){if(a){var e=c[a.prop]||c.script[a.prop]||a.value,g=b("tr","script_desc",a.prop,"connect"),h=b("td","script_desc",a.prop,"connectdt"),f=b("td","script_desc",a.prop,"connectdd");h.textContent=a.label?a.label:"";f.textContent=e||d.getMessage("_not_set_");g.appendChild(h);g.appendChild(f);S.appendChild(g)}});Q.appendChild(S);t.appendChild(Q);H.appendChild(P);H.appendChild(t);u.appendChild(H);l=b("div","section","connect_src","connect");l.appendChild(u);
l.appendChild(n);a.appendChild(l)},ha=function(a,c){document.title=d.getMessage("Import");a.appendChild(ba(c));if(c.global_settings){var e=b("div","viewer_upper","");ga({content:e,checkbox:"import",key:"global_settings"});a.appendChild(e)}c.scripts&&Object.keys(c.scripts).forEach(function(e){var f=c.scripts[e],g=b("div","viewer_upper",e);K({content:g,preparat:f,checkbox:"import",key:e},!0);a.appendChild(g)})},T=function(a,c){var b=p("input",a+"_",c,"",!0);b.setAttribute("data-import-id",c);b.checked=
!0;b.type="checkbox";b.addEventListener("click",function(a){(a.ctrlKey||a.metaKey)&&$("input[type=checkbox][data-import-id!="+c+"]").prop("checked",b.checked)});return b},ga=function(a){var c=a.key,e=a.content,h=b("div","viewer_upper",c),f=b("div","viewer_info viewer_info_wide","general",c),g=b("div","viewer_content","general_content",c),n=p("h3","install","heading",c);a.checkbox&&n.appendChild(T(a.checkbox,a.key));a=p("img","version","heading",c);a.src=rea.extension.getURL("images/icon128.png");
n.appendChild(a);a=p("span","name","heading",c);a.textContent=d.getMessage("Global_Settings");n.appendChild(a);f.appendChild(n);n=b("table","script_desc",c);a=b("tr","settings_desc","action",c);var l=b("td","settings_desc","action",c+"dt"),m=b("td","settings_desc","action",c+"dd");l.textContent=d.getMessage("Action");m.textContent=d.getMessage("Global_settings_import");a.appendChild(l);a.appendChild(m);n.appendChild(a);a=b("tr","settings_desc","warning",c);l=b("td","settings_desc","warning",c+"dt");
m=b("td","settings_desc","warning",c+"dd");c='<i class="far fa-'+D.get("critical")+'"></i>&nbsp;';y.RUNTIME.MOBILE||(l.innerHTML=c,c="");m.innerHTML=c+u.safeTagsReplace(d.getMessage("This_will_overwrite_your_global_settings_"));a.appendChild(l);a.appendChild(m);n.appendChild(a);g.appendChild(n);f.appendChild(g);h.appendChild(f);f=b("div","section","settings_src");f.appendChild(h);e.appendChild(f)},K=function(a,c){var e=a.preparat,h=a.content,f=e.script||{},g=f.uuid||f.id||f.name;e.short_info||(e.short_info=
[]);var n=b("div","viewer_upper",g),l=b("div","viewer_info "+(c?"viewer_info_wide":"viewer_info_multiple"),"general",g),m=b("div","viewer_content","general_content",g),k=p("h3","install","heading",g);a.checkbox&&k.appendChild(T(a.checkbox,a.key));if(f.icon||f.icon64){var r=p("img","version","heading",g);r.src=f.icon||f.icon64;k.appendChild(r)}r=p("span","name","heading",g);r.textContent=e.heading||f.name||"";k.appendChild(r);f.version&&(r=b("span","view_version","heading",g),r.textContent="v"==f.version[0]?
"":"v",r.textContent+=f.version,k.appendChild(r));l.appendChild(k);c&&e.short_info.unshift({prop:"heading",value:e.messages.heading,label:d.getMessage("Action")});var q=b("table","script_desc",g);e.short_info.forEach(function(a){var e=f[a.prop]||a.value;if(e||!c){var h=b("tr","script_desc",a.prop,g),l=b("td","script_desc",a.prop,g+"dt"),k=b("td","script_desc",a.prop,g+"dd");l.textContent=a.label?a.label:"";k.textContent=e||d.getMessage("_not_set_");h.appendChild(l);h.appendChild(k);q.appendChild(h)}});
m.appendChild(q);var k=b("div","viewer_info viewer_info_multiple","info",g),t;c?t=m:(t=b("div","viewer_content","info_content",g),r=p("h4","action","heading",g),document.title=r.textContent=e.messages.heading,t.appendChild(r));var v=0;["errors","warnings","info"].forEach(function(a){var c=p("table",a,g+v);(e.messages[a]||[]).forEach(function(b){v++;var e=p("tr",a,g+v),f=p("td",a,g+"dt"+v),h=p("td",a,g+"dd"+v);if("info"==a)if(b.label&&b.value)f.textContent=b.label,h.textContent=b.value;else{var d=
'<i class="far fa-'+D.get("info")+'"></i>&nbsp;';y.RUNTIME.MOBILE||(f.innerHTML=d,d="");h.innerHTML=d+u.safeTagsReplace(b).replace(/\n/g,"<br />")}else"warnings"==a?(d='<i class="far fa-'+D.get("critical")+'"></i>&nbsp;',y.RUNTIME.MOBILE||(f.innerHTML=d,d=""),h.innerHTML=d+u.safeTagsReplace(b).replace(/\n/g,"<br />")):"errors"==a&&(d='<i class="far fa-'+D.get("error")+'"></i>&nbsp;',y.RUNTIME.MOBILE||(f.innerHTML=d,d=""),h.innerHTML=d+u.safeTagsReplace(b).replace(/\n/g,"<br />"));e.appendChild(f);
e.appendChild(h);c.appendChild(e)});t.appendChild(c)});r=function(a,c,e,h){var l=p("table",a,g),k=0,m={};c.forEach(function(c){if(!(k>h||m[c])){m[c]=!0;var d=b("tr",a+"desc",c,g+k),f=b("td",a+"desc",c,g+k+"dt"),n=b("td",a+"desc",c,g+k+"dd");f.innerHTML=0==k?u.safeTagsReplace(e.label):"&nbsp;";n.innerHTML=k==h?'<span title="'+u.safeTagsReplace(e.warning)+'">...!</span>':u.safeTagsReplace(c);d.appendChild(f);d.appendChild(n);l.appendChild(d);k++}});if(f.options&&(c=f.options.override&&f.options.override["use_"+
a])&&c.length){c=b("tr",a+"desc","ovverride",g+k);var n=b("td",a+"desc","ovverride",g+k+"dt"),q=b("td",a+"desc","ovverride",g+k+"dd");n.innerHTML=0==k?u.safeTagsReplace(e.label):"&nbsp;";q.innerHTML=u.safeTagsReplace(" ("+d.getMessage("overwritten_by_user")+")");c.appendChild(n);c.appendChild(q);l.appendChild(c)}t.appendChild(l)};r("includes",(f.includes||[]).concat(f.matches||[]),{label:d.getMessage("Include_s__"),warning:d.getMessage("Attention_Can_not_display_all_includes_")},5);r("excludes",f.excludes||
[],{label:d.getMessage("Exclude_s__"),warning:d.getMessage("Attention_Can_not_display_all_excludes_")},3);l.appendChild(m);k.appendChild(t);n.appendChild(l);n.appendChild(k);l=b("div","section",g,"install_src");l.appendChild(n);a.install&&l.appendChild(a.install(e));a.editor&&l.appendChild(a.editor(e));h.appendChild(l)},Z=function(a){q(k.aid,"abort");window.setTimeout(function(){window.location=a+"#bypass=true"},10)},x=function(a){q(k.aid,"abort");window.setTimeout(function(){window.close()},3E3)},
U=function(a,c){q(k.aid,"unload");E&&(window.clearInterval(E),E=null);window.removeEventListener("unload",U)};window.addEventListener("unload",U);var V=function(){window.location.search||window.location.hash?(k=v.getUrlArgs(),k.aid?(q(k.aid,"preparat",{layout:!0}).done(function(a){a.ext&&a.ext.version&&(O=a.ext.version);a.i18n&&d.setLocale(a.i18n);if(a.options&&(a.options.statistics_enabled&&W.init("ask",O),a.options.layout_user_css)){var c=document.createElement("style");c.innerHTML=a.options.layout_user_css;
(document.head||document.body||document.documentElement||document).appendChild(c)}N=d.getMessage("Install");c=null;a.preparat&&("install"==a.type?c=function(){K({content:z(),preparat:a.preparat,install:aa,editor:X})}:"install_error"==a.type?c=function(){K({content:z(),preparat:a.preparat,install:ca},!0)}:"import"==a.type?c=function(){ha(z(),a.preparat)}:"permission"==a.type?c=function(){da(z(),a.preparat)}:"connect"==a.type&&(c=function(){fa(z(),a.preparat)}),E=window.setInterval(ia,3E3),c&&window.setTimeout(c,
1))}).fail(function(){x()}),C.wait(d.getMessage("Please_wait___"))):x()):window.onhashchange=function(){V()}},ia=function(){return q(k.aid,"ping",{bg:!0})},q=function(a,c,b){b=b||{};var h=B();try{var f={aid:a,method:c,layout:b.layout};b.data&&v.each(b.data,function(a,c){f[c]=b.data[c]});sendMessage({method:"askCom",data:f},function(a){b.bg||C.hide();t=a.options||t;b.layout&&G.applyTheme(a.layout);a.error?(a.please_close&&window.setTimeout(window.close,100),h.reject(a)):h.resolve(a)});b.bg||C.wait(d.getMessage("Please_wait___"))}catch(g){console.warn("sS: "+
g.message),h.reject()}return h.promise()},ea=function(a,c,b){try{sendMessage(v.assign({method:"buttonPress",name:a},c),function(a){b&&b(a)})}catch(d){console.log("button: "+d.message)}};rea.extension.onMessage.addListener(function(a,c,b){t=a.options||t;if("confirm"==a.method)v.confirm(a.msg,function(a){b({confirm:a})});else if("showMsg"==a.method)v.alert(a.msg),b({});else return!1;return!0});V()})});
