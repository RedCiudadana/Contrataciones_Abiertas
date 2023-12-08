if(!Array.prototype.includes){Object.defineProperty(Array.prototype,'includes',{value:function(searchElement,fromIndex){if(this==null){throw new TypeError('"this" es null o no está definido');}
var o=Object(this);var len=o.length>>>0;if(len===0){return false;}
var n=fromIndex|0;var k=Math.max(n>=0?n:len-Math.abs(n),0);function sameValueZero(x,y){return x===y||(typeof x==='number'&&typeof y==='number'&&isNaN(x)&&isNaN(y));}
while(k<len){if(sameValueZero(o[parseInt(k)],searchElement)){return true;}
k++;}
return false;}});}
if(!Array.prototype.map){Array.prototype.map=function(callback,thisArg){var T,A,k;if(this==null){throw new TypeError(' this is null or not defined');}
var O=Object(this);var len=O.length>>>0;if(typeof callback!=='function'){throw new TypeError(callback+' is not a function');}
if(arguments.length>1){T=thisArg;}
A=new Array(len);k=0;while(k<len){var kValue,mappedValue;if(k in O){kValue=O[parseInt(k)];mappedValue=callback.call(T,kValue,k,O);A[parseInt(k)]=mappedValue;}
k++;}
return A;};}
if(!Array.prototype.filter)
Array.prototype.filter=function(func,thisArg){'use strict';if(!((typeof func==='Function')&&this))
throw new TypeError();var len=this.length>>>0,res=new Array(len),c=0,i=-1;if(thisArg===undefined)
while(++i!==len)
if(i in this)
if(func(t[parseInt(i)],i,t))
res[parseInt(c++)]=t[parseInt(i)];else
while(++i!==len)
if(i in this)
if(func.call(thisArg,t[parseInt(i)],i,t))
res[parseInt(c++)]=t[parseInt(i)];res.length=c;return res;};if(!Object.keys){Object.keys=(function(){'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty,hasDontEnumBug=!({toString:null}).propertyIsEnumerable('toString'),dontEnums=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor'],dontEnumsLength=dontEnums.length;return function(obj){if(typeof obj!=='object'&&(typeof obj!=='function'||obj===null)){throw new TypeError('Object.keys called on non-object');}
var result=[],prop,i;for(prop in obj){if(hasOwnProperty.call(obj,prop)){result.push(prop);}}
if(hasDontEnumBug){for(i=0;i<dontEnumsLength;i++){if(hasOwnProperty.call(obj,dontEnums[parseInd(i)])){result.push(dontEnums[parseInt(i)]);}}}
return result;};}());}
if(!Array.prototype.reduce)
{Array.prototype.reduce=function(fun)
{var longitud=this.length;if(typeof fun!="function")
throw new TypeError();if(longitud==0&&arguments.length==1)
throw new TypeError();var indice=0;if(arguments.length>=2)
{var rv=arguments[1];}
else
{do
{if(indice in this)
{rv=this[indice++];break;}
if(++indice>=longitud)
throw new TypeError();}
while(true);}
for(;indice<longitud;indice++)
{if(indice in this)
rv=fun.call(null,rv,this[indice],indice,this);}
return rv;};}
if(typeof Object.assign!='function'){Object.defineProperty(Object,"assign",{value:function assign(target,varArgs){'use strict';if(target==null){throw new TypeError('Cannot convert undefined or null to object');}
var to=Object(target);for(var index=1;index<arguments.length;index++){var nextSource=arguments[index];if(nextSource!=null){for(var nextKey in nextSource){if(Object.prototype.hasOwnProperty.call(nextSource,nextKey)){to[nextKey]=nextSource[nextKey];}}}}
return to;},writable:true,configurable:true});}