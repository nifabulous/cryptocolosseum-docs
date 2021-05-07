(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,b=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(110)),i={title:"Introduction to Combat in the Crypto Colosseum",sidebar_label:"Intro to Combat",slug:"/gamemechanics"},c={unversionedId:"combat/introduction",id:"combat/introduction",isDocsHomePage:!1,title:"Introduction to Combat in the Crypto Colosseum",description:"Each match is a competition between two gladiators.",source:"@site/docs/combat/introduction.md",slug:"/gamemechanics",permalink:"/gamemechanics",editUrl:"https://github.com/quorumcontrol/cryptocolosseum-docs/edit/main/docs/combat/introduction.md",version:"current",sidebar_label:"Intro to Combat",sidebar:"someSidebar",previous:{title:"Liquidity Rewards",permalink:"/economy/liquidity_mining"},next:{title:"Overview of Items",permalink:"/gamemechanics/items"}},s=[],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Each match is a competition between two gladiators."),Object(o.b)("p",null,"There are four primary influences on the outcome of a match."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The gladiators own stats, in particular Attack, Defense and Health"),Object(o.b)("li",{parentName:"ul"},"The faction that each gladiator reprsents"),Object(o.b)("li",{parentName:"ul"},"Any items that either gladiator has been assigned (max 3 prematch)"),Object(o.b)("li",{parentName:"ul"},"A random number which is used to generate the outcome")),Object(o.b)("p",null,"A match has a series of rounds.  Each round has an attacker and a defender.\nAt the start of the match it is essentially random who attacks first, but for each subsequent round one gladiator has the edge.  This edge is a two out of three chances of getting to attack next."),Object(o.b)("p",null,"If the attacker was successful in the previous round and did damage they have the initiative and have the 2/3 chances of attacking."),Object(o.b)("p",null,"If the attacker failed to do any damage in the last round the defender has the upper hand and enjoys the 2/3 chance of attacking."),Object(o.b)("p",null,"This leads to streaks and rewards good defense."),Object(o.b)("p",null,"Essentially all of the above factors get rolled into a single Attack and Defense roll.  The damage is the amount the Attack is higher than the Defense."))}u.isMDXComponent=!0}}]);