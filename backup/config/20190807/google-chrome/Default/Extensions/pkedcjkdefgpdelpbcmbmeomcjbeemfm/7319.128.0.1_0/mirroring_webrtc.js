'use strict';var ona={TAB:0,Rj:1,fn:2},Y$=function(a){Ab("MediaRouter.WebRtc.Start.Success",a,ona)};var Z$=function(a,b){ij.call(this,b);this.C=a;this.g=new Bb;this.b=ky(b.id);this.u=new Bb;this.D=!1;this.m=null;this.s=!1;this.o=this.h=null;pna(this);qna(this);this.b.sendMessage(new oj("GET_TURN_CREDENTIALS"))};n(Z$,ij);
Z$.prototype.start=function(a){var b=this;return this.g.b.then(function(c){if(c.b)return Promise.reject(new ni("Mirroring already started"));if(b.m)return Promise.reject(new ni("Session permanently stopped"));b.h=new qb("MediaRouter.WebRtc.Session.Launch");c.fa.addStream(a);c.start();return b.u.b})};
Z$.prototype.stop=function(){var a=this;this.u.reject(new ni("Session stop requested."));this.o&&(this.o.b(),this.o=null);if(this.m)return this.m;this.s=this.D=!1;this.h=null;return this.m=this.g.b.then(function(a){a.stop()}).then(function(){return a.b.Za()}).catch(function(b){a.b.Za();throw b;})};
var pna=function(a){a.b.onMessage=function(b){if(!b.type)throw Error("Message has no type.");switch(b.type){case "TURN_CREDENTIALS":a.g.resolve(new tj(a.f.id,b.data.credentials));break;case "ANSWER":a.g.b.then(function(a){Bj(a,b.data)});break;case "KNOCK_ANSWER":a.s=!0;a.g.b.then(function(a){Bj(a,b.data)});break;case "STOP":a.u.reject(new ni("Stop signal received"));a.stop();break;default:throw new ni("Unknown message type: "+b.type);}}},qna=function(a){a.g.b.then(function(b){xj(b,function(b){a.b.sendMessage(new oj("OFFER",
new qj(b,a.C,rj)))});yj(b,function(b){b=pj(b);a.b.sendMessage(b)});uj(b,function(){a.D=!0;a.b.sendMessage(new oj("SESSION_START_SUCCESS"));!a.s&&a.h&&a.h.b();a.h=null;a.o=new wb("MediaRouter.WebRtc.Session.Length");a.u.resolve(a)});wj(b,function(){a.b.sendMessage(new oj("SESSION_END"))});vj(b,function(b){a.D||a.u.reject(b);a.b.sendMessage(new oj("SESSION_FAILURE"))})})};var $$=function(){Yi.call(this,"webrtc")};n($$,Yi);g=$$.prototype;g.oh=function(a,b){return new Z$(a,b)};g.Sg=function(){Y$(0)};g.Pg=function(){Y$(1)};g.Rh=function(){Y$(2)};g.Qg=function(){zb("MediaRouter.WebRtc.Session.End")};g.Qh=function(a){Ab("MediaRouter.WebRtc.Start.Failure",a,mi)};g.Rg=function(){zb("MediaRouter.WebRtc.Stream.End")};var rna=new $$;Oi("mr.mirror.webrtc.WebRtcService",rna);
