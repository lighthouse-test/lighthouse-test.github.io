import{S as t,i as e,s as l,e as r,t as a,c as h,a as s,g as n,d as o,b as c,f,F as i,M as g,l as u,k as m,n as p,G as d,N as v}from"../chunks/vendor-c8377338.js";import{m as E,g as x}from"../chunks/stores-b9c45627.js";function T(t,e,l){const r=t.slice();return r[0]=e[l],r}function b(t,e,l){const r=t.slice();return r[3]=e[l],r}function w(t,e,l){const r=t.slice();return r[6]=e[l],r}function k(t,e,l){const r=t.slice();return r[6]=e[l],r}function H(t){let e,l,u=t[6].name+"";return{c(){e=r("th"),l=a(u),this.h()},l(t){e=h(t,"TH",{align:!0});var r=s(e);l=n(r,u),r.forEach(o),this.h()},h(){c(e,"align","right")},m(t,r){f(t,e,r),i(e,l)},p:g,d(t){t&&o(e)}}}function A(t){let e,l,a,n;return{c(){e=r("td"),l=r("a"),a=r("img"),this.h()},l(t){e=h(t,"TD",{align:!0});var r=s(e);l=h(r,"A",{href:!0,rel:!0,target:!0});var n=s(l);a=h(n,"IMG",{class:!0,alt:!0,src:!0}),n.forEach(o),r.forEach(o),this.h()},h(){c(a,"class","w-28\tmin-w-max"),c(a,"alt",t[3].name+" lighthouse performance result"),a.src!==(n="https://lighthouse-test.github.io/"+t[3].path+"/"+t[6].path+"/_lighthouse/_.performance.svg")&&c(a,"src",n),c(l,"href","https://lighthouse-test.github.io/"+t[3].path+"/"+t[6].path+"/_lighthouse/_.report.html"),c(l,"rel","noopener"),c(l,"target","_blank"),c(e,"align","right")},m(t,r){f(t,e,r),i(e,l),i(l,a)},p:g,d(t){t&&o(e)}}}function D(t){let e,l,g,u,v,x,T,b,k,H,D,L,I,_,y,R=t[0].name+"",M=t[0].web+"",F=t[3].name+"",V=E,j=[];for(let r=0;r<V.length;r+=1)j[r]=A(w(t,V,r));return{c(){e=r("tr"),l=r("th"),g=a(R),u=m(),v=r("small"),x=a("("),T=r("a"),b=a(M),k=a(")"),H=m(),D=r("th"),L=r("a"),I=a(F),_=m();for(let t=0;t<j.length;t+=1)j[t].c();y=m(),this.h()},l(t){e=h(t,"TR",{});var r=s(e);l=h(r,"TH",{align:!0});var a=s(l);g=n(a,R),u=p(a),v=h(a,"SMALL",{});var c=s(v);x=n(c,"("),T=h(c,"A",{href:!0,rel:!0,target:!0});var f=s(T);b=n(f,M),f.forEach(o),k=n(c,")"),c.forEach(o),a.forEach(o),H=p(r),D=h(r,"TH",{align:!0});var i=s(D);L=h(i,"A",{class:!0,href:!0});var m=s(L);I=n(m,F),m.forEach(o),i.forEach(o),_=p(r);for(let e=0;e<j.length;e+=1)j[e].l(r);y=p(r),r.forEach(o),this.h()},h(){c(T,"href",t[0].web),c(T,"rel","noopener"),c(T,"target","_blank"),c(l,"align","left"),c(L,"class","font-semibold"),c(L,"href","https://github.com/lighthouse-test/"+t[3].path),c(D,"align","left")},m(t,r){f(t,e,r),i(e,l),i(l,g),i(l,u),i(l,v),i(v,x),i(v,T),i(T,b),i(v,k),i(e,H),i(e,D),i(D,L),i(L,I),i(e,_);for(let l=0;l<j.length;l+=1)j[l].m(e,null);i(e,y)},p(t,l){if(0&l){let r;for(V=E,r=0;r<V.length;r+=1){const a=w(t,V,r);j[r]?j[r].p(a,l):(j[r]=A(a),j[r].c(),j[r].m(e,y))}for(;r<j.length;r+=1)j[r].d(1);j.length=V.length}},d(t){t&&o(e),d(j,t)}}}function L(t){let e,l=t[0].frameworks,r=[];for(let a=0;a<l.length;a+=1)r[a]=D(b(t,l,a));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=u()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=u()},m(t,l){for(let e=0;e<r.length;e+=1)r[e].m(t,l);f(t,e,l)},p(t,a){if(0&a){let h;for(l=t[0].frameworks,h=0;h<l.length;h+=1){const s=b(t,l,h);r[h]?r[h].p(s,a):(r[h]=D(s),r[h].c(),r[h].m(e.parentNode,e))}for(;h<r.length;h+=1)r[h].d(1);r.length=l.length}},d(t){d(r,t),t&&o(e)}}}function I(t){let e,l,u,b,w,A,D,I,_,y,R,M,F,V,j,B,G,N,S,U=E,z=[];for(let r=0;r<U.length;r+=1)z[r]=H(k(t,U,r));let O=x,Y=[];for(let r=0;r<O.length;r+=1)Y[r]=L(T(t,O,r));return{c(){e=r("meta"),l=m(),u=r("header"),b=r("div"),w=r("h1"),A=a("Lighthouse Test Results"),D=m(),I=r("div"),_=r("div"),y=r("table"),R=r("thead"),M=r("tr"),F=r("th"),V=m(),j=r("th"),B=a("Framework & UI"),G=m();for(let t=0;t<z.length;t+=1)z[t].c();N=m(),S=r("tbody");for(let t=0;t<Y.length;t+=1)Y[t].c();this.h()},l(t){const r=v('[data-svelte="svelte-163z23r"]',document.head);e=h(r,"META",{name:!0,content:!0}),r.forEach(o),l=p(t),u=h(t,"HEADER",{class:!0});var a=s(u);b=h(a,"DIV",{class:!0});var c=s(b);w=h(c,"H1",{class:!0});var f=s(w);A=n(f,"Lighthouse Test Results"),f.forEach(o),c.forEach(o),a.forEach(o),D=p(t),I=h(t,"DIV",{class:!0});var i=s(I);_=h(i,"DIV",{class:!0});var g=s(_);y=h(g,"TABLE",{width:!0});var m=s(y);R=h(m,"THEAD",{});var d=s(R);M=h(d,"TR",{});var E=s(M);F=h(E,"TH",{}),s(F).forEach(o),V=p(E),j=h(E,"TH",{align:!0});var x=s(j);B=n(x,"Framework & UI"),x.forEach(o),G=p(E);for(let e=0;e<z.length;e+=1)z[e].l(E);E.forEach(o),d.forEach(o),N=p(m),S=h(m,"TBODY",{});var T=s(S);for(let e=0;e<Y.length;e+=1)Y[e].l(T);T.forEach(o),m.forEach(o),g.forEach(o),i.forEach(o),this.h()},h(){document.title="LightHouse Test",c(e,"name","description"),c(e,"content","Lighthouse test result comparison"),c(w,"class","text-3xl font-bold text-gray-900"),c(b,"class","max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"),c(u,"class","bg-white shadow"),c(j,"align","left"),c(y,"width","100%"),c(_,"class","px-4 py-6 sm:px-0"),c(I,"class","max-w-7xl mx-auto py-6 sm:px-6 lg:px-8")},m(t,r){i(document.head,e),f(t,l,r),f(t,u,r),i(u,b),i(b,w),i(w,A),f(t,D,r),f(t,I,r),i(I,_),i(_,y),i(y,R),i(R,M),i(M,F),i(M,V),i(M,j),i(j,B),i(M,G);for(let e=0;e<z.length;e+=1)z[e].m(M,null);i(y,N),i(y,S);for(let e=0;e<Y.length;e+=1)Y[e].m(S,null)},p(t,[e]){if(0&e){let l;for(U=E,l=0;l<U.length;l+=1){const r=k(t,U,l);z[l]?z[l].p(r,e):(z[l]=H(r),z[l].c(),z[l].m(M,null))}for(;l<z.length;l+=1)z[l].d(1);z.length=U.length}if(0&e){let l;for(O=x,l=0;l<O.length;l+=1){const r=T(t,O,l);Y[l]?Y[l].p(r,e):(Y[l]=L(r),Y[l].c(),Y[l].m(S,null))}for(;l<Y.length;l+=1)Y[l].d(1);Y.length=O.length}},i:g,o:g,d(t){o(e),t&&o(l),t&&o(u),t&&o(D),t&&o(I),d(z,t),d(Y,t)}}}export default class extends t{constructor(t){super(),e(this,t,null,I,l,{})}}
