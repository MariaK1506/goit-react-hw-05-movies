"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{9471:function(e,n,t){t.d(n,{Z:function(){return u}});var r,s=t(168),c=t(6444).ZP.h2(r||(r=(0,s.Z)(["\n  text-align: center;\n  color: #3f51b5;\n  font-size: 20px;\n"]))),i=t(184),u=function(e){var n=e.message;return(0,i.jsx)(c,{children:n})}},186:function(e,n,t){t.r(n);var r=t(885),s=t(2791),c=t(6871),i=t(9437),u=t(7149),o=t(9471),a=t(184);n.default=function(){var e=(0,c.UO)().movieId,n=(0,s.useState)(),t=(0,r.Z)(n,2),l=t[0],h=t[1],d=(0,s.useState)(null),f=(0,r.Z)(d,2),v=f[0],j=f[1],p=(0,s.useState)("idle"),m=(0,r.Z)(p,2),x=m[0],Z=m[1];return(0,s.useEffect)((function(){Z("pending"),i.fetchMovieReviews(e).then((function(e){h(e.results),Z("resolved"),0===e.results.length&&(j("We do not have any reviews for this movie"),Z("rejected"))})).catch((function(e){j(e),Z("rejected")}))}),[e]),(0,a.jsxs)(a.Fragment,{children:["pending"===x&&(0,a.jsx)(u.Z,{}),"rejected"===x&&(0,a.jsx)(o.Z,{message:v}),"resolved"===x&&(0,a.jsx)("ul",{children:l.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,a.jsxs)("li",{children:[(0,a.jsxs)("p",{children:["Author: ",t]}),(0,a.jsx)("p",{children:r})]},n)}))})]})}}}]);
//# sourceMappingURL=186.be61ed12.chunk.js.map