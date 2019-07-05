// 作用域
if(true){
    var name='zhangsan'
}
console.log(name)//'zhangsan'
var a=100;
function fn(){
    var a=200;
    console.log('fn',a)
}
console.log('global',a)
fn()

// 1、实际开发中闭包的应用：封装变量，收敛权限
function F1(){
    var a=100;
    //返回一个函数(函数作为返回值)
    return function(){
        console.log(a);//自由变量，父作用域寻找
    }
}
//f1得到一个函数
var f1=F1();
var a=200;
f1();//100

// 闭包使用场景
// 函数作为返回值
// 函数作为参数传递(函数自由变量要到父级作用域中找)
 function F1(){
    var a=100;
    return  function(){
        console.log(a);
    }
 }
 var f1=F1();
 function F2(fn){
     var a=200
     fn();//(自由变量要到声明定义时的父作用域中找，和执行的作用域没有关系)
 }
 F2(f1);//100