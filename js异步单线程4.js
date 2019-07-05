// 异步:
// 何时需要异步
// 在可能发生等待的情况下
// 等待过程中不能像alert一样阻塞程序运行
// 因此，所以的“等待的情况”都需要异步
// 前端使用异步的场景
// 定时任务：setTimeout，setInterval
// 网络请求：ajax请求，动态加载
// 事件绑定

//    异步实例
console.log('start');
$.get('./data1.json',function(data1){
    console.log(data1);
})
console.log('end')//'start'  'end'   data1

console.log(start);
var img=document.createElement('img')
img.onload=function(){
    console.log('loaded')
}//图片加载完执行
img.src='/xx.png';
console.log('end');//start end loaded

console.log('start')
document.getElementById('btn1').addEventListener('click',function(){
   alert('clicked');
})//点击时才会执行
console.log('end');//start clicked end

//  同步
console.log(100)
alert(200);
console.log(300)  //100 200 300

// 异步和同步

console.log(100) 
setTimeout(function(){ 
    console.log(200) 
}) 
console.log(300) //100 300 200 

// 上述异步代码的执行过程如下
// 1、执行第一行打印100
// 2、setTimeout 异步执行，先暂存起来
// 3、打印 300
// 4、待所有程序执行完，处于空闲状态时，拿到暂存的函数在指定的时间后执行


// 练习题1、同步和异步的区别是什么？分别举一个同步和异步的例子 
//     同步会阻塞代码执行，而异步不会 
//     alert是同步，setTimeout是异步

// 练习题2、一个关于setTimeout的笔试题 
//     console.log(1) 
//     setTimeout(function(){ 
//          console.log(2) 
//     },0) 
//     console.log(3) 
//     setTimeout(function(){ 
//        console.log(4) 
//     },1000) 
//     console.log(5)   
//     //1 3 5 2 4

// 练习题3、前端使用异步的场景有哪些 
//     定时任务：setTimeout，setInterval 
//     网络请求：ajax请求，动态加载 
//     事件绑定