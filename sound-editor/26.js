webpackJsonp([26],{

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.tl=t())}(this,function(){"use strict";var e=[{locale:"tl",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=a[0],o=a[1]||"",i=!a[1],l=r.slice(-1),n=o.slice(-1);return t?1==e?"one":"other":i&&(1==r||2==r||3==r)||i&&4!=l&&6!=l&&9!=l||!i&&4!=n&&6!=n&&9!=n?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});


/***/ })

});
//# sourceMappingURL=26.js.map