// ! onelinecode vv1.5.5
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.freeze({__proto__:null,isEmpty:({length:e})=>0===e,removeDuplicates:e=>[...new Set(e)],occurrenceMap:e=>e.reduce(((e,t)=>(e[t]=(e[t]||0)+1,e)),{}),shallowClone:e=>e.slice(0),lowestNumber:e=>Math.min(...e),highestNumber:e=>Math.max(...e),closestNumber:(e,t)=>e.reduce(((e,l)=>Math.abs(l-t)<Math.abs(e-t)?l:e)),indexOfLowestNumber:e=>e.indexOf(Math.min.apply(null,e)),indexOfHighestNumber:e=>e.indexOf(Math.max.apply(null,e)),splitInHalf:e=>[e,e.splice(~~((e.length+1)/2))]});exports.arr=e;
