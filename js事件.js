// 事件

// 通用的事件绑定
var btn=document.getElementById('btn1'); 
btn.addEventListener('click',function(event){   //JS事件绑定
  console.log('clicked') 
})

 //由于addEventListener太长了 我们自己写一个事件绑定函数
function bindEvent(elem,type,fn){  
  elem.addEventListener(type,fn) 
}

var a=document.getElementById('link1') 
bindEvent(a,'click',function(e){  //事件绑定函数的使用
  e.preventDefault()  //阻止默认行为 
  alert('clicked') 
})

// 事件冒泡

// 在父级 div 中定义的事件，会在子级的事件执行之后冒泡上来执行
// 阻止事件冒泡 e.stopPropagation()