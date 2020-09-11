(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,
"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I))L=I.replace(H?w:x,"");else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H)L=L.replace(h,r)}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else O=M(F!==i?F:p[g][k]);return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=
l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("\x26"),function(L,Q){var K=Q.split("\x3d"),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else N=0;if(K.length===2){J=r(K[1]);if(F)J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J;if(N)for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}else if($.isArray(H[P]))H[P].push(J);
else if(H[P]!==i)H[P]=[H[P],J];else H[P]=J}else if(P)H[P]=F?i:""});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else F=E(F)?F.replace(H?w:x,""):F;return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||
"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i)F=2;var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K===
"boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);
jQuery.fn.pagination=function(maxentries,opts){opts=jQuery.extend({items_per_page:10,num_display_entries:5,current_page:0,num_edge_entries:0,link_to:"#",prev_text:"Prev",next_text:"Next",ellipse_text:"...",prev_show_always:false,next_show_always:false,callback:function(){return false}},opts||{});return this.each(function(){function numPages(){return Math.ceil(maxentries/opts.items_per_page)}function getInterval(){var ne_half=Math.ceil(opts.num_display_entries/2);var np=numPages();var upper_limit=
np-opts.num_display_entries;var start=current_page>ne_half?Math.max(Math.min(current_page-ne_half,upper_limit),0):0;var end=current_page>ne_half?Math.min(current_page+ne_half,np):Math.min(opts.num_display_entries,np);return[start,end]}function pageSelected(page_id,evt){current_page=page_id;drawLinks();var continuePropagation=opts.callback(page_id,panel);if(!continuePropagation)if(evt.stopPropagation)evt.stopPropagation();else evt.cancelBubble=true;return continuePropagation}function isNumber(n){return!isNaN(parseFloat(n))&&
isFinite(n)}function drawLinks(){panel.empty();var interval=getInterval();var np=numPages();var getClickHandler=function(page_id){return function(evt){return pageSelected(page_id,evt)}};var appendItem=function(page_id,appendopts){page_id=page_id<0?0:page_id<np?page_id:np-1;appendopts=jQuery.extend({text:page_id+1,classes:""},appendopts||{});if(page_id==current_page)var lnk=jQuery("\x3cli"+(isNumber(appendopts.text)?" class\x3d'current'":"")+"\x3e\x3ca href\x3d'#'\x3e"+(isNumber(appendopts.text)?"":
"\x3cstrong\x3e")+appendopts.text+(isNumber(appendopts.text)?"":"\x3c/strong\x3e")+"\x3c/a\x3e\x3c/li\x3e");else var lnk=jQuery("\x3cli\x3e\x3ca href\x3d'#'"+(isNumber(appendopts.text)?"":appendopts.text=="Prev"?' class\x3d"prev"':' class\x3d"next"')+"\x3e"+(isNumber(appendopts.text)?"":"\x3cstrong\x3e")+appendopts.text+(isNumber(appendopts.text)?"":"\x3c/strong\x3e")+"\x3c/a\x3e\x3c/li\x3e").bind("click",getClickHandler(page_id)).attr("href",opts.link_to.replace(/__id__/,page_id));if(appendopts.classes)lnk.addClass(appendopts.classes);
panel.append(lnk)};if(opts.prev_text&&(current_page>0||opts.prev_show_always))appendItem(current_page-1,{text:opts.prev_text,classes:""});if(interval[0]>0&&opts.num_edge_entries>0){var end=Math.min(opts.num_edge_entries,interval[0]);for(var i=0;i<end;i++)appendItem(i);if(opts.num_edge_entries<interval[0]&&opts.ellipse_text)jQuery("\x3cli\x3e\x3ca href\x3d'#'\x3e"+(isNumber(opts.ellipse_text)?"":"\x3cstrong\x3e")+opts.ellipse_text+(isNumber(opts.ellipse_text)?"":"\x3c/strong\x3e")+"\x3c/a\x3e\x3c/li\x3e").appendTo(panel)}for(var i=
interval[0];i<interval[1];i++)appendItem(i);if(interval[1]<np&&opts.num_edge_entries>0){if(np-opts.num_edge_entries>interval[1]&&opts.ellipse_text)jQuery("\x3cli\x3e\x3ca href\x3d'#'\x3e"+(isNumber(opts.ellipse_text)?"":"\x3cstrong\x3e")+opts.ellipse_text+(isNumber(opts.ellipse_text)?"":"\x3c/strong\x3e")+"\x3c/a\x3e\x3c/li\x3e").appendTo(panel);var begin=Math.max(np-opts.num_edge_entries,interval[1]);for(var i=begin;i<np;i++)appendItem(i)}if(opts.next_text&&(current_page<np-1||opts.next_show_always))appendItem(current_page+
1,{text:opts.next_text,classes:""});jQuery('\x3cli\x3e\x3ca href\x3d"#" class\x3d"back-to-top"\x3eBack to Top\x3c/a\x3e\x3c/li\x3e\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e').appendTo(panel)}var current_page=opts.current_page;maxentries=!maxentries||maxentries<0?1:maxentries;opts.items_per_page=!opts.items_per_page||opts.items_per_page<0?1:opts.items_per_page;var panel=jQuery(this);this.selectPage=function(page_id){pageSelected(page_id)};this.prevPage=function(){if(current_page>0){pageSelected(current_page-
1);return true}else return false};this.nextPage=function(){if(current_page<numPages()-1){pageSelected(current_page+1);return true}else return false};drawLinks();opts.callback(current_page,this)})};