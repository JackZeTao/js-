// 原型  与原型链
//   原型规则 是学习原型链的基础

// 构造函数   ：

function Foo(name,age){
    this.name=name;
    this.age=age;
    this.class="class-1";
    //return this;//默认有这一行
 }
 var f=new Foo('zhangsan',20)
 var f1=new Foo('lisi',22)//创建多个对象
 //new对象时函数中的this初始化为空对象，参数赋值完后返回this给f和f1
//  *构造函数--扩展*
//  var a={}其实是var a=new Object()的语法糖
//  var a=[]其实是var a=new Array()的语法糖
//  function Foo(){...}其实是var Foo=new Function(...)
 //使用instanceof判断一个函数是否是一个变量的构造函数
 //对象，数组，函数的构造函数其实是Object,Array,Function
 //判断一个变量是否是'数组'  变量 instanceof Array


//  所有的引用类型(数组，对象，函数)，都具有对像特性，即可自由扩展属性（除了null）
// 所有的引用类型（数组，函数，对象），都有一个 proto 属性，属性值是一个普通对象
// 所有的函数，都有一个 prototype 属性，属性值也是一个普通的对象
// 函数的 prototype 称显式原型，引用类型的 _proto 成为隐式原型  
// 所有的引用类型（数组，函数，对象），其 proto 属性值都指向其构造函数的 prototype 属性值
// 当试图获取一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的prot_(即它的构造函数的prototype)
var obj={};obj.a=100;
var arr=[];arr.a=100;
function fn(){}
fn.a=100;

console.log(obj.__proto__);
console.log(arr.__proto__);
console.log(fn.__proto__);
console.log(fn.prototype)
console.log(obj.__proto__===Object.prototype)
function Foo(name,age){
    this.name=name;
}             
Foo.prototype.alertName=function(){
     alert(this.name)
}
var f=new Foo('zhangsan');
f.printName=function(){
    console.log(this.name);
}
f.printName();
f.alertName();

//循环对象自身的属性
var item;
for(item in f){
  //高级浏览器已经在for in中屏蔽了来自原型的属性
  //但是这里建议大家还是加上这个判断，保证程序的健壮性
  if(f.hasOwnProperty(item))
      console.log(item);
}
// *原型链*
//      f.toString()//要去f.__proto__.__proto__中去找
//   *instanseof*
//      **注意:** //用于判断引用类型属于哪个构造函数的方法
//       f instanceof Foo的判断逻辑是:
//          f的__proto__一层一层向上找，能否对应到Foo.prototype
//       f instanceof Object也是正确的


function Animal(){
    this.eat=function(){
       console.log('animal eat');
    }
 }
 function Dog(){
    this.bark=function(){
       console.log('dog bark')
    }
 }
 Dog.prototype=new Animal();
 var hashiqi=new Dog()
console.log(hashiqi);