import{S as t,i as e,s,e as l,t as a,c as r,a as h,g as c,d as o,b as n,f as i,E as g,M as f,k as u,n as m,h as d,F as p,H as x}from"./vendor-9f859d1f.js";import{U as v,M as w,F as E}from"./stores-8ff41cf9.js";function b(t,e,s){const l=t.slice();return l[2]=e[s],l}function y(t,e,s){const l=t.slice();return l[5]=e[s],l}function T(t,e,s){const l=t.slice();return l[5]=e[s],l}function k(t){let e,s,u=t[5].name+"";return{c(){e=l("th"),s=a(u),this.h()},l(t){e=r(t,"TH",{scope:!0,class:!0});var l=h(e);s=c(l,u),l.forEach(o),this.h()},h(){n(e,"scope","col"),n(e,"class","px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider")},m(t,l){i(t,e,l),g(e,s)},p:f,d(t){t&&o(e)}}}function D(t){let e,s,f,u,m,p,x=t[2].techTag.name+"";return{c(){e=l("small"),s=a("["),f=l("a"),u=a(x),p=a("]"),this.h()},l(t){e=r(t,"SMALL",{class:!0});var l=h(e);s=c(l,"["),f=r(l,"A",{href:!0});var a=h(f);u=c(a,x),a.forEach(o),p=c(l,"]"),l.forEach(o),this.h()},h(){n(f,"href",m="frameworks/"+t[2].techTag.slug),n(e,"class","hidden lg:inline-flex")},m(t,l){i(t,e,l),g(e,s),g(e,f),g(f,u),g(e,p)},p(t,e){2&e&&x!==(x=t[2].techTag.name+"")&&d(u,x),2&e&&m!==(m="frameworks/"+t[2].techTag.slug)&&n(f,"href",m)},d(t){t&&o(e)}}}function A(t){let e,s,f,u,m,p,x=t[2].designTag.name+"";return{c(){e=l("small"),s=a("["),f=l("a"),u=a(x),p=a("]"),this.h()},l(t){e=r(t,"SMALL",{class:!0});var l=h(e);s=c(l,"["),f=r(l,"A",{href:!0});var a=h(f);u=c(a,x),a.forEach(o),p=c(l,"]"),l.forEach(o),this.h()},h(){n(f,"href",m="designs/"+t[2].designTag.slug),n(e,"class","hidden lg:inline-flex")},m(t,l){i(t,e,l),g(e,s),g(e,f),g(f,u),g(e,p)},p(t,e){2&e&&x!==(x=t[2].designTag.name+"")&&d(u,x),2&e&&m!==(m="designs/"+t[2].designTag.slug)&&n(f,"href",m)},d(t){t&&o(e)}}}function _(t){let e,s,u;return{c(){e=l("div"),s=l("small"),u=a("N/A"),this.h()},l(t){e=r(t,"DIV",{class:!0});var l=h(e);s=r(l,"SMALL",{});var a=h(s);u=c(a,"N/A"),a.forEach(o),l.forEach(o),this.h()},h(){n(e,"class","text-sm font-bold text-gray-500")},m(t,l){i(t,e,l),g(e,s),g(s,u)},p:f,d(t){t&&o(e)}}}function I(t){let e,s,a,c,f;return{c(){e=l("a"),s=l("img"),this.h()},l(t){e=r(t,"A",{href:!0,rel:!0,target:!0});var l=h(e);s=r(l,"IMG",{class:!0,width:!0,height:!0,alt:!0,src:!0}),l.forEach(o),this.h()},h(){n(s,"class","badge float-right w-28 max-w-max"),n(s,"width","112"),n(s,"height","20"),n(s,"alt",a=t[2].name+" lighthouse performance result"),s.src!==(c="https://lighthouse-test.github.io/"+t[2].slug+"/"+t[5].slug+"/_lighthouse/_.performance.svg")&&n(s,"src",c),n(e,"href",f="https://lighthouse-test.github.io/"+t[2].slug+"/"+t[5].slug+"/_lighthouse/_.report.html"),n(e,"rel","noopener"),n(e,"target","_blank")},m(t,l){i(t,e,l),g(e,s)},p(t,l){2&l&&a!==(a=t[2].name+" lighthouse performance result")&&n(s,"alt",a),2&l&&s.src!==(c="https://lighthouse-test.github.io/"+t[2].slug+"/"+t[5].slug+"/_lighthouse/_.performance.svg")&&n(s,"src",c),2&l&&f!==(f="https://lighthouse-test.github.io/"+t[2].slug+"/"+t[5].slug+"/_lighthouse/_.report.html")&&n(e,"href",f)},d(t){t&&o(e)}}}function L(t){let e;function s(t,e){return t[2].modes[t[5].slug]?I:_}let a=s(t),c=a(t);return{c(){e=l("td"),c.c(),this.h()},l(t){e=r(t,"TD",{class:!0});var s=h(e);c.l(s),s.forEach(o),this.h()},h(){n(e,"class","px-6 py-4 whitespace-nowrap text-right")},m(t,s){i(t,e,s),c.m(e,null)},p(t,l){a===(a=s(t))&&c?c.p(t,l):(c.d(1),c=a(t),c&&(c.c(),c.m(e,null)))},d(t){t&&o(e),c.d()}}}function V(t){let e,s,f,x,v,E,b,T,k,_,I,V=t[2].name+"",M=!t[0]&&D(t),H=t[2].designTag&&A(t),$=w,j=[];for(let l=0;l<$.length;l+=1)j[l]=L(y(t,$,l));return{c(){e=l("tr"),s=l("th"),f=l("div"),x=l("a"),v=a(V),b=u(),T=l("div"),M&&M.c(),k=u(),H&&H.c(),_=u();for(let t=0;t<j.length;t+=1)j[t].c();I=u(),this.h()},l(t){e=r(t,"TR",{});var l=h(e);s=r(l,"TH",{scope:!0,class:!0});var a=h(s);f=r(a,"DIV",{class:!0});var n=h(f);x=r(n,"A",{class:!0,href:!0,rel:!0,target:!0});var i=h(x);v=c(i,V),i.forEach(o),n.forEach(o),b=m(a),T=r(a,"DIV",{class:!0});var g=h(T);M&&M.l(g),k=m(g),H&&H.l(g),g.forEach(o),a.forEach(o),_=m(l);for(let e=0;e<j.length;e+=1)j[e].l(l);I=m(l),l.forEach(o),this.h()},h(){n(x,"class","font-semibold"),n(x,"href",E="https://github.com/lighthouse-test/"+t[2].slug),n(x,"rel","noopener"),n(x,"target","_blank"),n(f,"class","text-sm text-gray-900"),n(T,"class","text-sm text-gray-500"),n(s,"scope","col"),n(s,"class","px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider")},m(t,l){i(t,e,l),g(e,s),g(s,f),g(f,x),g(x,v),g(s,b),g(s,T),M&&M.m(T,null),g(T,k),H&&H.m(T,null),g(e,_);for(let s=0;s<j.length;s+=1)j[s].m(e,null);g(e,I)},p(t,s){if(2&s&&V!==(V=t[2].name+"")&&d(v,V),2&s&&E!==(E="https://github.com/lighthouse-test/"+t[2].slug)&&n(x,"href",E),t[0]?M&&(M.d(1),M=null):M?M.p(t,s):(M=D(t),M.c(),M.m(T,k)),t[2].designTag?H?H.p(t,s):(H=A(t),H.c(),H.m(T,null)):H&&(H.d(1),H=null),2&s){let l;for($=w,l=0;l<$.length;l+=1){const a=y(t,$,l);j[l]?j[l].p(a,s):(j[l]=L(a),j[l].c(),j[l].m(e,I))}for(;l<j.length;l+=1)j[l].d(1);j.length=$.length}},d(t){t&&o(e),M&&M.d(),H&&H.d(),p(j,t)}}}function M(t){let e,s,E,y,D,A,_,I,L,M,H,$,j,F,B,R,S,N,C,G,O,U,Y,q,z,J=(t[0]?t[0].name:"")+"",K=(t[0]?t[0].web:v)+"",P=w,Q=[];for(let l=0;l<P.length;l+=1)Q[l]=k(T(t,P,l));let W=t[1],X=[];for(let l=0;l<W.length;l+=1)X[l]=V(b(t,W,l));return{c(){e=l("div"),s=l("div"),E=l("div"),y=l("h2"),D=a(J),A=a(" Lighthouse Results"),_=u(),I=l("div"),L=l("div"),M=x("svg"),H=x("path"),$=u(),j=l("a"),F=a(K),R=u(),S=l("div"),N=l("table"),C=l("thead"),G=l("tr"),O=l("th"),U=a("Framework & Design"),Y=u();for(let t=0;t<Q.length;t+=1)Q[t].c();q=u(),z=l("tbody");for(let t=0;t<X.length;t+=1)X[t].c();this.h()},l(t){e=r(t,"DIV",{class:!0});var l=h(e);s=r(l,"DIV",{class:!0});var a=h(s);E=r(a,"DIV",{class:!0});var n=h(E);y=r(n,"H2",{class:!0});var i=h(y);D=c(i,J),A=c(i," Lighthouse Results"),i.forEach(o),_=m(n),I=r(n,"DIV",{class:!0});var g=h(I);L=r(g,"DIV",{class:!0});var f=h(L);M=r(f,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var u=h(M);H=r(u,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),h(H).forEach(o),u.forEach(o),$=m(f),j=r(f,"A",{href:!0,target:!0,rel:!0});var d=h(j);F=c(d,K),d.forEach(o),f.forEach(o),g.forEach(o),n.forEach(o),a.forEach(o),l.forEach(o),R=m(t),S=r(t,"DIV",{class:!0});var p=h(S);N=r(p,"TABLE",{class:!0});var x=h(N);C=r(x,"THEAD",{class:!0});var v=h(C);G=r(v,"TR",{});var w=h(G);O=r(w,"TH",{scope:!0,class:!0});var b=h(O);U=c(b,"Framework & Design"),b.forEach(o),Y=m(w);for(let e=0;e<Q.length;e+=1)Q[e].l(w);w.forEach(o),v.forEach(o),q=m(x),z=r(x,"TBODY",{class:!0});var T=h(z);for(let e=0;e<X.length;e+=1)X[e].l(T);T.forEach(o),x.forEach(o),p.forEach(o),this.h()},h(){n(y,"class","text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"),n(H,"stroke-linecap","round"),n(H,"stroke-linejoin","round"),n(H,"stroke-width","2"),n(H,"d","M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"),n(M,"xmlns","http://www.w3.org/2000/svg"),n(M,"class","flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"),n(M,"fill","none"),n(M,"viewBox","0 0 24 24"),n(M,"stroke","currentColor"),n(j,"href",B=t[0]?t[0].web:v),n(j,"target","_blank"),n(j,"rel","noopener"),n(L,"class","mt-2 flex items-center text-sm text-gray-500"),n(I,"class","mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6"),n(E,"class","flex-1 min-w-0"),n(s,"class","lg:flex lg:items-center lg:justify-between"),n(e,"class","max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8"),n(O,"scope","col"),n(O,"class","px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"),n(C,"class","bg-gray-50"),n(z,"class","bg-white divide-y divide-gray-200"),n(N,"class","min-w-full divide-y divide-gray-200"),n(S,"class","max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 overflow-x-scroll")},m(t,l){i(t,e,l),g(e,s),g(s,E),g(E,y),g(y,D),g(y,A),g(E,_),g(E,I),g(I,L),g(L,M),g(M,H),g(L,$),g(L,j),g(j,F),i(t,R,l),i(t,S,l),g(S,N),g(N,C),g(C,G),g(G,O),g(O,U),g(G,Y);for(let e=0;e<Q.length;e+=1)Q[e].m(G,null);g(N,q),g(N,z);for(let e=0;e<X.length;e+=1)X[e].m(z,null)},p(t,[e]){if(1&e&&J!==(J=(t[0]?t[0].name:"")+"")&&d(D,J),1&e&&K!==(K=(t[0]?t[0].web:v)+"")&&d(F,K),1&e&&B!==(B=t[0]?t[0].web:v)&&n(j,"href",B),0&e){let s;for(P=w,s=0;s<P.length;s+=1){const l=T(t,P,s);Q[s]?Q[s].p(l,e):(Q[s]=k(l),Q[s].c(),Q[s].m(G,null))}for(;s<Q.length;s+=1)Q[s].d(1);Q.length=P.length}if(3&e){let s;for(W=t[1],s=0;s<W.length;s+=1){const l=b(t,W,s);X[s]?X[s].p(l,e):(X[s]=V(l),X[s].c(),X[s].m(z,null))}for(;s<X.length;s+=1)X[s].d(1);X.length=W.length}},i:f,o:f,d(t){t&&o(e),t&&o(R),t&&o(S),p(Q,t),p(X,t)}}}function H(t,e,s){let l,{tag:a=!1}=e;return t.$$set=t=>{"tag"in t&&s(0,a=t.tag)},t.$$.update=()=>{1&t.$$.dirty&&s(1,l=a?E.filter((t=>t.techTag===a||t.designTag===a)):E)},[a,l]}class $ extends t{constructor(t){super(),e(this,t,H,M,s,{tag:0})}}export{$ as F};
