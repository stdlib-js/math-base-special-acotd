// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=57.29577951308232;var r=Number.POSITIVE_INFINITY,u=1.5707963267948966,t=.7853981633974483,e=Number.NEGATIVE_INFINITY;var I=6123233995736766e-32,f=2.414213562373095;function o(n){return function(n){var o,c,i,N;return function(n){return n!=n}(n)||0===n?n:n===r?u:n===e?-u:(n<0&&(c=!0,n=-n),o=0,n>f?(i=u,o=1,n=-1/n):n<=.66?i=0:(i=t,o=2,n=(n-1)/(n+1)),N=(N=n*n)*function(n){return 0===n?-64.85021904942025:n*(n*(n*(-.8750608600031904*n-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(N)/function(n){return 0===n?194.5506571482614:194.5506571482614+n*(485.3903996359137+n*(432.88106049129027+n*(165.02700983169885+n*(24.858464901423062+1*n))))}(N),N=n*N+n,2===o?N+=.5*I:1===o&&(N+=I),i+=N,c?-i:i)}(1/n)}function c(r){return function(r){return r*n}(o(r))}export{c as default};
//# sourceMappingURL=mod.js.map