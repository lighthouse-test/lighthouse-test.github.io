import{S as s,i as t,s as e,e as a,k as o,j as n,O as r,c as u,d as m,n as c,m as i,b as h,D as l,f as d,o as f,v as p,r as g,w as $,M as k}from"../../chunks/vendor-ae86e48d.js";import{p as j}from"../../chunks/stores-040fbf79.js";import{D as b}from"../../chunks/stores-a36768c3.js";import{F as v}from"../../chunks/FrameworkTable-9d9bca65.js";function w(s){let t,e,k,j,b,w;return document.title=t="LightHouse Results | "+s[0].name,b=new v({props:{tag:s[0]}}),{c(){e=a("meta"),j=o(),n(b.$$.fragment),this.h()},l(s){const t=r('[data-svelte="svelte-13wsekd"]',document.head);e=u(t,"META",{name:!0,content:!0}),t.forEach(m),j=c(s),i(b.$$.fragment,s),this.h()},h(){h(e,"name","description"),h(e,"content",k="Lighthouse result comparison for "+s[0].slug)},m(s,t){l(document.head,e),d(s,j,t),f(b,s,t),w=!0},p(s,[a]){(!w||1&a)&&t!==(t="LightHouse Results | "+s[0].name)&&(document.title=t),(!w||1&a&&k!==(k="Lighthouse result comparison for "+s[0].slug))&&h(e,"content",k);const o={};1&a&&(o.tag=s[0]),b.$set(o)},i(s){w||(p(b.$$.fragment,s),w=!0)},o(s){g(b.$$.fragment,s),w=!1},d(s){m(e),s&&m(j),$(b,s)}}}function L(s,t,e){let a,o;return k(s,j,(s=>e(1,o=s))),s.$$.update=()=>{2&s.$$.dirty&&e(0,a=b.filter((s=>s.slug===o.params.slug))[0])},[a,o]}export default class extends s{constructor(s){super(),t(this,s,L,w,e,{})}}