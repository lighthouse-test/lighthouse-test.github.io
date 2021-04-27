import{S as t,i as a,s,e,t as r,k as h,c as l,a as o,g as c,d as n,n as i,b as g,f,F as u,M as m,G as p,N as d}from"../chunks/vendor-c8377338.js";import{c as v,m as E}from"../chunks/stores-18e7a26e.js";function x(t,a,s){const e=t.slice();return e[0]=a[s],e}function T(t,a,s){const e=t.slice();return e[3]=a[s],e}function w(t){let a,s,r,h;return{c(){a=e("td"),s=e("a"),r=e("img"),this.h()},l(t){a=l(t,"TD",{align:!0});var e=o(a);s=l(e,"A",{href:!0,rel:!0,target:!0});var h=o(s);r=l(h,"IMG",{src:!0}),h.forEach(n),e.forEach(n),this.h()},h(){r.src!==(h="https://raw.githubusercontent.com/lighthouse-test/"+S.toLowerCase()+"/gh-pages/"+t[3].toLowerCase()+"/_lighthouse/_."+t[0]+".svg")&&g(r,"src",h),g(s,"href","https://lighthouse-test.github.io/"+S.toLowerCase()+"/"+t[3].toLowerCase()+"/_lighthouse/_.report.html"),g(s,"rel","noopener"),g(s,"target","_blank"),g(a,"align","right")},m(t,e){f(t,a,e),u(a,s),u(s,r)},p:m,d(t){t&&n(a)}}}function b(t){let a,s,m,d,v,x,b=t[0]+"",H=E,L=[];for(let e=0;e<H.length;e+=1)L[e]=w(T(t,H,e));return{c(){a=e("tr"),s=e("th"),m=e("a"),d=r(b),v=h();for(let t=0;t<L.length;t+=1)L[t].c();x=h(),this.h()},l(t){a=l(t,"TR",{});var e=o(a);s=l(e,"TH",{align:!0});var r=o(s);m=l(r,"A",{class:!0,href:!0});var h=o(m);d=c(h,b),h.forEach(n),r.forEach(n),v=i(e);for(let a=0;a<L.length;a+=1)L[a].l(e);x=i(e),e.forEach(n),this.h()},h(){g(m,"class","font-semibold"),g(m,"href","https://github.com/lighthouse-test/"+S),g(s,"align","left")},m(t,e){f(t,a,e),u(a,s),u(s,m),u(m,d),u(a,v);for(let s=0;s<L.length;s+=1)L[s].m(a,null);u(a,x)},p(t,s){if(0&s){let e;for(H=E,e=0;e<H.length;e+=1){const r=T(t,H,e);L[e]?L[e].p(r,s):(L[e]=w(r),L[e].c(),L[e].m(a,x))}for(;e<L.length;e+=1)L[e].d(1);L.length=H.length}},d(t){t&&n(a),p(L,t)}}}function H(t){let a,s,E,T,w,H,L,y,A,D,R,C,_,k,I,V,j,B,G,M,N,P,q,F,O,Y=v,z=[];for(let e=0;e<Y.length;e+=1)z[e]=b(x(t,Y,e));return{c(){a=h(),s=e("header"),E=e("div"),T=e("h1"),w=r(S),H=r(" Lighthouse Test Results"),L=h(),y=e("div"),A=e("div"),D=e("table"),R=e("thead"),C=e("tr"),_=e("th"),k=r("Cateogry"),I=h(),V=e("th"),j=r("SPA"),B=h(),G=e("th"),M=r("SSR"),N=h(),P=e("th"),q=r("Static"),F=h(),O=e("tbody");for(let t=0;t<z.length;t+=1)z[t].c();this.h()},l(t){d('[data-svelte="svelte-pxxqls"]',document.head).forEach(n),a=i(t),s=l(t,"HEADER",{class:!0});var e=o(s);E=l(e,"DIV",{class:!0});var r=o(E);T=l(r,"H1",{class:!0});var h=o(T);w=c(h,S),H=c(h," Lighthouse Test Results"),h.forEach(n),r.forEach(n),e.forEach(n),L=i(t),y=l(t,"DIV",{class:!0});var g=o(y);A=l(g,"DIV",{class:!0});var f=o(A);D=l(f,"TABLE",{width:!0});var u=o(D);R=l(u,"THEAD",{});var m=o(R);C=l(m,"TR",{});var p=o(C);_=l(p,"TH",{align:!0});var v=o(_);k=c(v,"Cateogry"),v.forEach(n),I=i(p),V=l(p,"TH",{align:!0});var x=o(V);j=c(x,"SPA"),x.forEach(n),B=i(p),G=l(p,"TH",{align:!0});var b=o(G);M=c(b,"SSR"),b.forEach(n),N=i(p),P=l(p,"TH",{align:!0});var Y=o(P);q=c(Y,"Static"),Y.forEach(n),p.forEach(n),m.forEach(n),F=i(u),O=l(u,"TBODY",{});var J=o(O);for(let a=0;a<z.length;a+=1)z[a].l(J);J.forEach(n),u.forEach(n),f.forEach(n),g.forEach(n),this.h()},h(){document.title="LightHouse Test",g(T,"class","text-3xl font-bold text-gray-900"),g(E,"class","max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"),g(s,"class","bg-white shadow"),g(_,"align","left"),g(V,"align","right"),g(G,"align","right"),g(P,"align","right"),g(D,"width","100%"),g(A,"class","px-4 py-6 sm:px-0"),g(y,"class","max-w-7xl mx-auto py-6 sm:px-6 lg:px-8")},m(t,e){f(t,a,e),f(t,s,e),u(s,E),u(E,T),u(T,w),u(T,H),f(t,L,e),f(t,y,e),u(y,A),u(A,D),u(D,R),u(R,C),u(C,_),u(_,k),u(C,I),u(C,V),u(V,j),u(C,B),u(C,G),u(G,M),u(C,N),u(C,P),u(P,q),u(D,F),u(D,O);for(let a=0;a<z.length;a+=1)z[a].m(O,null)},p(t,[a]){if(0&a){let s;for(Y=v,s=0;s<Y.length;s+=1){const e=x(t,Y,s);z[s]?z[s].p(e,a):(z[s]=b(e),z[s].c(),z[s].m(O,null))}for(;s<z.length;s+=1)z[s].d(1);z.length=Y.length}},i:m,o:m,d(t){t&&n(a),t&&n(s),t&&n(L),t&&n(y),p(z,t)}}}const S="Nuxt";export default class extends t{constructor(t){super(),a(this,t,null,H,s,{})}}