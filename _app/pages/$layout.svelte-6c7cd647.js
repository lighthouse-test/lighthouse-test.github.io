import{D as e,S as t,i as a,s,e as r,t as o,c as h,a as l,g as n,d as i,b as c,E as g,f,F as p,k as d,n as u,G as v,H as x,I as w,J as m,K as b,v as y,r as E,L as k}from"../chunks/vendor-c8377338.js";import{f as C}from"../chunks/stores-18e7a26e.js";const L={subscribe:t=>(()=>{const t=e("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session}})().page.subscribe(t)};function I(e,t,a){const s=e.slice();return s[5]=t[a],s}function D(e,t,a){const s=e.slice();return s[5]=t[a],s}function V(e){let t,a,s=e[5]+"";return{c(){t=r("a"),a=o(s),this.h()},l(e){t=h(e,"A",{href:!0,class:!0});var r=l(t);a=n(r,s),r.forEach(i),this.h()},h(){c(t,"href","/"+e[5].toLowerCase()),c(t,"class","px-3 py-2 rounded-md text-sm font-medium"),g(t,"bg-gray-900",e[1].path==="/"+e[5].toLowerCase()),g(t,"text-white",e[1].path==="/"+e[5].toLowerCase()),g(t,"text-gray-300",e[1].path!=="/"+e[5].toLowerCase()),g(t,"hover:bg-gray-700",e[1].path!=="/"+e[5].toLowerCase()),g(t,"hover:text-white",e[1].path!=="/"+e[5].toLowerCase())},m(e,s){f(e,t,s),p(t,a)},p(e,a){2&a&&g(t,"bg-gray-900",e[1].path==="/"+e[5].toLowerCase()),2&a&&g(t,"text-white",e[1].path==="/"+e[5].toLowerCase()),2&a&&g(t,"text-gray-300",e[1].path!=="/"+e[5].toLowerCase()),2&a&&g(t,"hover:bg-gray-700",e[1].path!=="/"+e[5].toLowerCase()),2&a&&g(t,"hover:text-white",e[1].path!=="/"+e[5].toLowerCase())},d(e){e&&i(t)}}}function A(e){let t,a,s,x,w,m=C,b=[];for(let r=0;r<m.length;r+=1)b[r]=$(I(e,m,r));return{c(){t=r("div"),a=r("div"),s=r("a"),x=o("Home"),w=d();for(let e=0;e<b.length;e+=1)b[e].c();this.h()},l(e){t=h(e,"DIV",{class:!0,id:!0});var r=l(t);a=h(r,"DIV",{class:!0});var o=l(a);s=h(o,"A",{href:!0,class:!0});var c=l(s);x=n(c,"Home"),c.forEach(i),w=u(o);for(let t=0;t<b.length;t+=1)b[t].l(o);o.forEach(i),r.forEach(i),this.h()},h(){c(s,"href","/"),c(s,"class","block px-3 py-2 rounded-md text-base font-medium"),g(s,"bg-gray-900","/"===e[1].path),g(s,"text-white","/"===e[1].path),g(s,"text-gray-300","/"!==e[1].path),g(s,"hover:bg-gray-700","/"!==e[1].path),g(s,"hover:text-white","/"!==e[1].path),c(a,"class","px-2 pt-2 pb-3 space-y-1 sm:px-3"),c(t,"class","md:hidden"),c(t,"id","mobile-menu")},m(e,r){f(e,t,r),p(t,a),p(a,s),p(s,x),p(a,w);for(let t=0;t<b.length;t+=1)b[t].m(a,null)},p(e,t){if(2&t&&g(s,"bg-gray-900","/"===e[1].path),2&t&&g(s,"text-white","/"===e[1].path),2&t&&g(s,"text-gray-300","/"!==e[1].path),2&t&&g(s,"hover:bg-gray-700","/"!==e[1].path),2&t&&g(s,"hover:text-white","/"!==e[1].path),2&t){let s;for(m=C,s=0;s<m.length;s+=1){const r=I(e,m,s);b[s]?b[s].p(r,t):(b[s]=$(r),b[s].c(),b[s].m(a,null))}for(;s<b.length;s+=1)b[s].d(1);b.length=m.length}},d(e){e&&i(t),v(b,e)}}}function $(e){let t,a,s=e[5]+"";return{c(){t=r("a"),a=o(s),this.h()},l(e){t=h(e,"A",{href:!0,class:!0});var r=l(t);a=n(r,s),r.forEach(i),this.h()},h(){c(t,"href","/"+e[5].toLowerCase()),c(t,"class","block px-3 py-2 rounded-md text-sm font-medium"),g(t,"bg-gray-900",e[1].path==="/"+e[5].toLowerCase()),g(t,"text-white",e[1].path==="/"+e[5].toLowerCase()),g(t,"text-gray-300",e[1].path!=="/"+e[5].toLowerCase()),g(t,"hover:bg-gray-700",e[1].path!=="/"+e[5].toLowerCase()),g(t,"hover:text-white",e[1].path!=="/"+e[5].toLowerCase())},m(e,s){f(e,t,s),p(t,a)},p(e,a){2&a&&g(t,"bg-gray-900",e[1].path==="/"+e[5].toLowerCase()),2&a&&g(t,"text-white",e[1].path==="/"+e[5].toLowerCase()),2&a&&g(t,"text-gray-300",e[1].path!=="/"+e[5].toLowerCase()),2&a&&g(t,"hover:bg-gray-700",e[1].path!=="/"+e[5].toLowerCase()),2&a&&g(t,"hover:text-white",e[1].path!=="/"+e[5].toLowerCase())},d(e){e&&i(t)}}}function j(e){let t,a,s,k,L,I,$,j,B,H,M,N,_,T,G,O,S,P,z,F,J,K,U,q,Q,R,W,X,Y,Z,ee,te,ae,se,re,oe,he,le,ne,ie,ce=C,ge=[];for(let r=0;r<ce.length;r+=1)ge[r]=V(D(e,ce,r));let fe=e[0]&&A(e);const pe=e[3].default,de=x(pe,e,e[2],null);return{c(){t=r("div"),a=r("nav"),s=r("div"),k=r("div"),L=r("div"),I=r("div"),$=r("a"),j=o("Lighthouse Test"),B=d(),H=r("div"),M=r("div"),N=r("a"),_=o("Home"),T=d();for(let e=0;e<ge.length;e+=1)ge[e].c();G=d(),O=r("div"),S=r("div"),P=r("a"),z=r("span"),F=o("GitHub"),J=d(),K=w("svg"),U=w("path"),q=d(),Q=r("div"),R=r("button"),W=r("span"),X=o("Open main menu"),Y=d(),Z=w("svg"),ee=w("path"),te=d(),ae=w("svg"),se=w("path"),re=d(),fe&&fe.c(),oe=d(),he=r("main"),de&&de.c(),this.h()},l(e){t=h(e,"DIV",{});var r=l(t);a=h(r,"NAV",{class:!0});var o=l(a);s=h(o,"DIV",{class:!0});var c=l(s);k=h(c,"DIV",{class:!0});var g=l(k);L=h(g,"DIV",{class:!0});var f=l(L);I=h(f,"DIV",{class:!0});var p=l(I);$=h(p,"A",{href:!0,class:!0});var d=l($);j=n(d,"Lighthouse Test"),d.forEach(i),p.forEach(i),B=u(f),H=h(f,"DIV",{class:!0});var v=l(H);M=h(v,"DIV",{class:!0});var x=l(M);N=h(x,"A",{href:!0,class:!0});var w=l(N);_=n(w,"Home"),w.forEach(i),T=u(x);for(let t=0;t<ge.length;t+=1)ge[t].l(x);x.forEach(i),v.forEach(i),f.forEach(i),G=u(g),O=h(g,"DIV",{class:!0});var m=l(O);S=h(m,"DIV",{class:!0});var b=l(S);P=h(b,"A",{href:!0,rel:!0,target:!0,class:!0});var y=l(P);z=h(y,"SPAN",{class:!0});var E=l(z);F=n(E,"GitHub"),E.forEach(i),J=u(y),K=h(y,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0,"aria-hidden":!0},1);var C=l(K);U=h(C,"path",{d:!0},1),l(U).forEach(i),C.forEach(i),y.forEach(i),b.forEach(i),m.forEach(i),q=u(g),Q=h(g,"DIV",{class:!0});var D=l(Q);R=h(D,"BUTTON",{type:!0,class:!0,"aria-controls":!0,"aria-expanded":!0});var V=l(R);W=h(V,"SPAN",{class:!0});var A=l(W);X=n(A,"Open main menu"),A.forEach(i),Y=u(V),Z=h(V,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0,"aria-hidden":!0},1);var le=l(Z);ee=h(le,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),l(ee).forEach(i),le.forEach(i),te=u(V),ae=h(V,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0,"aria-hidden":!0},1);var ne=l(ae);se=h(ne,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),l(se).forEach(i),ne.forEach(i),V.forEach(i),D.forEach(i),g.forEach(i),c.forEach(i),re=u(o),fe&&fe.l(o),o.forEach(i),oe=u(r),he=h(r,"MAIN",{});var ie=l(he);de&&de.l(ie),ie.forEach(i),r.forEach(i),this.h()},h(){c($,"href","/"),c($,"class","text-white font-bold text-xl"),c(I,"class","flex-shrink-0"),c(N,"href","/"),c(N,"class","px-3 py-2 rounded-md text-sm font-medium"),g(N,"bg-gray-900","/"===e[1].path),g(N,"text-white","/"===e[1].path),g(N,"text-gray-300","/"!==e[1].path),g(N,"hover:bg-gray-700","/"!==e[1].path),g(N,"hover:text-white","/"!==e[1].path),c(M,"class","ml-10 flex items-baseline space-x-4"),c(H,"class","hidden md:block"),c(L,"class","flex items-center"),c(z,"class","sr-only"),c(U,"d","M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"),c(K,"class","h-6 w-6 cursor-pointer"),c(K,"xmlns","http://www.w3.org/2000/svg"),c(K,"fill","currentColor"),c(K,"viewBox","0 0 24 24"),c(K,"stroke","currentColor"),c(K,"aria-hidden","true"),c(P,"href","https://github.com/lighthouse-test/lighthouse-test.github.io"),c(P,"rel","noopener"),c(P,"target","_blank"),c(P,"class","bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"),c(S,"class","ml-4 flex items-center md:ml-6"),c(O,"class","hidden md:block"),c(W,"class","sr-only"),c(ee,"stroke-linecap","round"),c(ee,"stroke-linejoin","round"),c(ee,"stroke-width","2"),c(ee,"d","M4 6h16M4 12h16M4 18h16"),c(Z,"class","block h-6 w-6"),c(Z,"xmlns","http://www.w3.org/2000/svg"),c(Z,"fill","none"),c(Z,"viewBox","0 0 24 24"),c(Z,"stroke","currentColor"),c(Z,"aria-hidden","true"),c(se,"stroke-linecap","round"),c(se,"stroke-linejoin","round"),c(se,"stroke-width","2"),c(se,"d","M6 18L18 6M6 6l12 12"),c(ae,"class","hidden h-6 w-6"),c(ae,"xmlns","http://www.w3.org/2000/svg"),c(ae,"fill","none"),c(ae,"viewBox","0 0 24 24"),c(ae,"stroke","currentColor"),c(ae,"aria-hidden","true"),c(R,"type","button"),c(R,"class","bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"),c(R,"aria-controls","mobile-menu"),c(R,"aria-expanded","false"),c(Q,"class","-mr-2 flex md:hidden"),c(k,"class","flex items-center justify-between h-16"),c(s,"class","max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"),c(a,"class","bg-gray-800")},m(r,o){f(r,t,o),p(t,a),p(a,s),p(s,k),p(k,L),p(L,I),p(I,$),p($,j),p(L,B),p(L,H),p(H,M),p(M,N),p(N,_),p(M,T);for(let e=0;e<ge.length;e+=1)ge[e].m(M,null);p(k,G),p(k,O),p(O,S),p(S,P),p(P,z),p(z,F),p(P,J),p(P,K),p(K,U),p(k,q),p(k,Q),p(Q,R),p(R,W),p(W,X),p(R,Y),p(R,Z),p(Z,ee),p(R,te),p(R,ae),p(ae,se),p(a,re),fe&&fe.m(a,null),p(t,oe),p(t,he),de&&de.m(he,null),le=!0,ne||(ie=m(R,"click",e[4]),ne=!0)},p(e,[t]){if(2&t&&g(N,"bg-gray-900","/"===e[1].path),2&t&&g(N,"text-white","/"===e[1].path),2&t&&g(N,"text-gray-300","/"!==e[1].path),2&t&&g(N,"hover:bg-gray-700","/"!==e[1].path),2&t&&g(N,"hover:text-white","/"!==e[1].path),2&t){let a;for(ce=C,a=0;a<ce.length;a+=1){const s=D(e,ce,a);ge[a]?ge[a].p(s,t):(ge[a]=V(s),ge[a].c(),ge[a].m(M,null))}for(;a<ge.length;a+=1)ge[a].d(1);ge.length=ce.length}e[0]?fe?fe.p(e,t):(fe=A(e),fe.c(),fe.m(a,null)):fe&&(fe.d(1),fe=null),de&&de.p&&4&t&&b(de,pe,e,e[2],t,null,null)},i(e){le||(y(de,e),le=!0)},o(e){E(de,e),le=!1},d(e){e&&i(t),v(ge,e),fe&&fe.d(),de&&de.d(e),ne=!1,ie()}}}function B(e,t,a){let s;k(e,L,(e=>a(1,s=e)));let{$$slots:r={},$$scope:o}=t,h=!1;return e.$$set=e=>{"$$scope"in e&&a(2,o=e.$$scope)},[h,s,o,r,()=>{a(0,h=!h)}]}export default class extends t{constructor(e){super(),a(this,e,B,j,s,{})}}