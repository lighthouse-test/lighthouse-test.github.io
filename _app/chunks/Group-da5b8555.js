import{S as t,i as e,s as h,e as r,t as a,k as l,c as s,a as o,g as n,n as c,d as g,b as f,f as i,F as u,h as p,G as m,M as d}from"./vendor-c8377338.js";import{m as v,c as b}from"./stores-b9c45627.js";function E(t,e,h){const r=t.slice();return r[1]=e[h],r}function x(t,e,h){const r=t.slice();return r[4]=e[h],r}function w(t,e,h){const r=t.slice();return r[7]=e[h],r}function _(t,e,h){const r=t.slice();return r[7]=e[h],r}function A(t){let e,h,p,m,d,v,b,E,x,w=t[7].name+"";return{c(){e=r("th"),h=a(w),p=l(),m=r("small"),d=a("("),v=r("a"),b=a("build"),x=a(")"),this.h()},l(t){e=s(t,"TH",{align:!0});var r=o(e);h=n(r,w),p=c(r),m=s(r,"SMALL",{});var a=o(m);d=n(a,"("),v=s(a,"A",{href:!0,rel:!0,target:!0});var l=o(v);b=n(l,"build"),l.forEach(g),x=n(a,")"),a.forEach(g),r.forEach(g),this.h()},h(){f(v,"href",E="https://github.com/lighthouse-test/"+t[1].path+"/tree/gh-pages/"+t[7].path),f(v,"rel","noopener"),f(v,"target","_blank"),f(e,"align","right")},m(t,r){i(t,e,r),u(e,h),u(e,p),u(e,m),u(m,d),u(m,v),u(v,b),u(m,x)},p(t,e){1&e&&E!==(E="https://github.com/lighthouse-test/"+t[1].path+"/tree/gh-pages/"+t[7].path)&&f(v,"href",E)},d(t){t&&g(e)}}}function T(t){let e,h,m,d,v,b,E,x,w,_=t[1].name+" "+t[7].name+" mode lighthouse "+t[4].name+" result";return{c(){e=r("td"),h=r("a"),m=r("span"),d=a(_),v=l(),b=r("img"),this.h()},l(t){e=s(t,"TD",{align:!0});var r=o(e);h=s(r,"A",{href:!0,rel:!0,target:!0});var a=o(h);m=s(a,"SPAN",{class:!0});var l=o(m);d=n(l,_),l.forEach(g),v=c(a),b=s(a,"IMG",{alt:!0,src:!0}),a.forEach(g),r.forEach(g),this.h()},h(){f(m,"class","hidden"),f(b,"alt",E=t[1].name+" lighthouse "+t[4].name),b.src!==(x="https://lighthouse-test.github.io/"+t[1].path+"/"+t[7].path+"/_lighthouse/_."+t[4].path+".svg")&&f(b,"src",x),f(h,"href",w="https://lighthouse-test.github.io/"+t[1].path+"/"+t[7].path+"/_lighthouse/_.report.html"),f(h,"rel","noopener"),f(h,"target","_blank"),f(e,"align","right")},m(t,r){i(t,e,r),u(e,h),u(h,m),u(m,d),u(h,v),u(h,b)},p(t,e){1&e&&_!==(_=t[1].name+" "+t[7].name+" mode lighthouse "+t[4].name+" result")&&p(d,_),1&e&&E!==(E=t[1].name+" lighthouse "+t[4].name)&&f(b,"alt",E),1&e&&b.src!==(x="https://lighthouse-test.github.io/"+t[1].path+"/"+t[7].path+"/_lighthouse/_."+t[4].path+".svg")&&f(b,"src",x),1&e&&w!==(w="https://lighthouse-test.github.io/"+t[1].path+"/"+t[7].path+"/_lighthouse/_.report.html")&&f(h,"href",w)},d(t){t&&g(e)}}}function L(t){let e,h,d,b,E,x,_,A,L=t[1].name+" Source Code",k=t[4].name+"",S=v,D=[];for(let r=0;r<S.length;r+=1)D[r]=T(w(t,S,r));return{c(){e=r("tr"),h=r("th"),d=r("a"),b=r("span"),E=a(L),x=a(k),A=l();for(let t=0;t<D.length;t+=1)D[t].c();this.h()},l(t){e=s(t,"TR",{});var r=o(e);h=s(r,"TH",{align:!0});var a=o(h);d=s(a,"A",{class:!0,href:!0,rel:!0,target:!0});var l=o(d);b=s(l,"SPAN",{class:!0});var f=o(b);E=n(f,L),f.forEach(g),x=n(l,k),l.forEach(g),a.forEach(g),A=c(r);for(let e=0;e<D.length;e+=1)D[e].l(r);r.forEach(g),this.h()},h(){f(b,"class","hidden"),f(d,"class","font-semibold"),f(d,"href",_="https://github.com/lighthouse-test/"+t[1].path),f(d,"rel","noopener"),f(d,"target","_blank"),f(h,"align","left")},m(t,r){i(t,e,r),u(e,h),u(h,d),u(d,b),u(b,E),u(d,x),u(e,A);for(let h=0;h<D.length;h+=1)D[h].m(e,null)},p(t,h){if(1&h&&L!==(L=t[1].name+" Source Code")&&p(E,L),1&h&&_!==(_="https://github.com/lighthouse-test/"+t[1].path)&&f(d,"href",_),1&h){let r;for(S=v,r=0;r<S.length;r+=1){const a=w(t,S,r);D[r]?D[r].p(a,h):(D[r]=T(a),D[r].c(),D[r].m(e,null))}for(;r<D.length;r+=1)D[r].d(1);D.length=S.length}},d(t){t&&g(e),m(D,t)}}}function k(t){let e,h,d,E,w,T,k,S,D,R,H,M,y,I,G,N,V=t[1].name+"",j=t[1].web+"",C=v,P=[];for(let r=0;r<C.length;r+=1)P[r]=A(_(t,C,r));let $=b,B=[];for(let r=0;r<$.length;r+=1)B[r]=L(x(t,$,r));return{c(){e=r("tr"),h=r("th"),d=a(V),E=l(),w=r("small"),T=a("("),k=r("a"),S=a(j),R=a(")"),H=l();for(let t=0;t<P.length;t+=1)P[t].c();M=l();for(let t=0;t<B.length;t+=1)B[t].c();y=l(),I=r("tr"),G=r("td"),N=a(" "),this.h()},l(t){e=s(t,"TR",{});var r=o(e);h=s(r,"TH",{align:!0});var a=o(h);d=n(a,V),E=c(a),w=s(a,"SMALL",{});var l=o(w);T=n(l,"("),k=s(l,"A",{href:!0,rel:!0,target:!0});var f=o(k);S=n(f,j),f.forEach(g),R=n(l,")"),l.forEach(g),a.forEach(g),H=c(r);for(let e=0;e<P.length;e+=1)P[e].l(r);r.forEach(g),M=c(t);for(let e=0;e<B.length;e+=1)B[e].l(t);y=c(t),I=s(t,"TR",{});var i=o(I);G=s(i,"TD",{colspan:!0});var u=o(G);N=n(u," "),u.forEach(g),i.forEach(g),this.h()},h(){f(k,"href",D=t[1].web),f(k,"rel","noopener"),f(k,"target","_blank"),f(h,"align","left"),f(G,"colspan","4")},m(t,r){i(t,e,r),u(e,h),u(h,d),u(h,E),u(h,w),u(w,T),u(w,k),u(k,S),u(w,R),u(e,H);for(let h=0;h<P.length;h+=1)P[h].m(e,null);i(t,M,r);for(let e=0;e<B.length;e+=1)B[e].m(t,r);i(t,y,r),i(t,I,r),u(I,G),u(G,N)},p(t,h){if(1&h&&V!==(V=t[1].name+"")&&p(d,V),1&h&&j!==(j=t[1].web+"")&&p(S,j),1&h&&D!==(D=t[1].web)&&f(k,"href",D),1&h){let r;for(C=v,r=0;r<C.length;r+=1){const a=_(t,C,r);P[r]?P[r].p(a,h):(P[r]=A(a),P[r].c(),P[r].m(e,null))}for(;r<P.length;r+=1)P[r].d(1);P.length=C.length}if(1&h){let e;for($=b,e=0;e<$.length;e+=1){const r=x(t,$,e);B[e]?B[e].p(r,h):(B[e]=L(r),B[e].c(),B[e].m(y.parentNode,y))}for(;e<B.length;e+=1)B[e].d(1);B.length=$.length}},d(t){t&&g(e),m(P,t),t&&g(M),m(B,t),t&&g(y),t&&g(I)}}}function S(t){let e,h,v,b,x,w,_,A,T,L,S,D,R,H,M,y,I=t[0].name+"",G=t[0].web+"",N=t[0].frameworks,V=[];for(let r=0;r<N.length;r+=1)V[r]=k(E(t,N,r));return{c(){e=r("header"),h=r("div"),v=r("h1"),b=a("Lighthouse Test Results "),x=a(I),w=l(),_=r("small"),A=r("a"),T=a("("),L=a(G),S=a(")"),R=l(),H=r("div"),M=r("div"),y=r("table");for(let t=0;t<V.length;t+=1)V[t].c();this.h()},l(t){e=s(t,"HEADER",{class:!0});var r=o(e);h=s(r,"DIV",{class:!0});var a=o(h);v=s(a,"H1",{class:!0});var l=o(v);b=n(l,"Lighthouse Test Results "),x=n(l,I),w=c(l),_=s(l,"SMALL",{});var f=o(_);A=s(f,"A",{href:!0,rel:!0,target:!0});var i=o(A);T=n(i,"("),L=n(i,G),S=n(i,")"),i.forEach(g),f.forEach(g),l.forEach(g),a.forEach(g),r.forEach(g),R=c(t),H=s(t,"DIV",{class:!0});var u=o(H);M=s(u,"DIV",{class:!0});var p=o(M);y=s(p,"TABLE",{width:!0});var m=o(y);for(let e=0;e<V.length;e+=1)V[e].l(m);m.forEach(g),p.forEach(g),u.forEach(g),this.h()},h(){f(A,"href",D=t[0].web),f(A,"rel","noopener"),f(A,"target","_blank"),f(v,"class","text-3xl font-bold text-gray-900"),f(h,"class","max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"),f(e,"class","bg-white shadow"),f(y,"width","100%"),f(M,"class","px-4 py-6 sm:px-0"),f(H,"class","max-w-7xl mx-auto py-6 sm:px-6 lg:px-8")},m(t,r){i(t,e,r),u(e,h),u(h,v),u(v,b),u(v,x),u(v,w),u(v,_),u(_,A),u(A,T),u(A,L),u(A,S),i(t,R,r),i(t,H,r),u(H,M),u(M,y);for(let e=0;e<V.length;e+=1)V[e].m(y,null)},p(t,[e]){if(1&e&&I!==(I=t[0].name+"")&&p(x,I),1&e&&G!==(G=t[0].web+"")&&p(L,G),1&e&&D!==(D=t[0].web)&&f(A,"href",D),1&e){let h;for(N=t[0].frameworks,h=0;h<N.length;h+=1){const r=E(t,N,h);V[h]?V[h].p(r,e):(V[h]=k(r),V[h].c(),V[h].m(y,null))}for(;h<V.length;h+=1)V[h].d(1);V.length=N.length}},i:d,o:d,d(t){t&&g(e),t&&g(R),t&&g(H),m(V,t)}}}function D(t,e,h){let{group:r}=e;return t.$$set=t=>{"group"in t&&h(0,r=t.group)},[r]}class R extends t{constructor(t){super(),e(this,t,D,S,h,{group:0})}}export{R as G};