#!/user/bin/node
var add=require('./add');
var a=process.argv[2]||1;
var b=process.argv[3]||1;

console.log('a+b=',add(a,b));
