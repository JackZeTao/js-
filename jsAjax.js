// XMLHttpRequest

var xhr = new XMLHttpRequest()
//创建一个新的http请求，打开请求。(方式get/post，url地址，是否异步)
xhr.open("GET",url,false)
//onreadystatechange 指定当readyState属性改变时的事件处理句柄。
//也就是每次readyState属性改变时都会触发这个函数
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status === 200){
      //将响应信息作为字符串返回
      alert(xhr.responseText)
  }
}
xhr.send(null)
// 状态码 
// readyState
// 0-（未初始化）还没调用send()方法
// 1-（载入）已调用send()方法，正在发送请求
// 2-（载入完成）send()方法执行完毕，已经接收到全部的响应内容
// 3-（交互）正在解析响应内容
// 4-（完成）响应内容解析完成，可以在客户端调用了


// status
// 2xx-表示成功处理请求。如200
// 3xx-需要重定向，浏览器直接跳转
// 4xx-客户端请求错误，如404
// 5xx-服务器端错误，如500

// 什么是跨域
// 浏览器有同源策略，不允许Ajax访问其他域接口
// 跨域条件：协议、域名、端口，有一个不同就算跨域


// 有三个标签允许加载跨域资源
// <img src=xxx>
// <link href=xxx>
// <script src=xxx></script>


// 三个标签的应用场景
// <img> 用于打点统计 其他域的统计网站
// <link> <script> 可以使用来自其他域的CDN
// <script> 可以用于JSONP

// 跨域注意事项
// 所有的跨域请求都必须经过信息提供方允许
// 如果未经允许即可获得，那是浏览器同源策略出现漏洞

// JSONP


// JSONP实现原理
// 假如加载http://www.zhibu.com/index.html
// 不一定服务端就真的存在一个index.html
// 服务端可以根据请求，动态生成一个文件并返回
// 同理 <script src="http://www.zhibu.com/api.js"> 也是如此
// 假如你的网站要跨域访问知乎的一个接口
// 知乎给你一个地址 http://www.zhibu.com/api.js
// 返回内容格式如callback({x:100, y:200}) （是动态生成的）

//<script> 
//window.callback = function(data){
  //跨域得到的信息
//  console.log(data)
//}
//</script>..
//<script src="http://www.zhihu.com/api.js"></script>
//<!-- eg: 以上将返回callback({x:100,y:200}) -->



// 练习题1、手动编写一个ajax，不依赖第三方库
  // 指定了请求目标，也明确了如何处理之后，就可以发送请求了
  var request = new XMLHttpRequest();
  // 指定请求目标，三个参数, GET or POST, 请求路径 , 是否异步（默认true，可以不写）
  request.open('GET',url,true);
  request.onreadystatechange() = function(){
      if(request.readyState === 4){
          // 请求完成
          if(request.status === 200){
              // 请求成功，获得一个成功的响应,此后可以开始请求成功后的处理
              //responseText 保存文本字符串格式
              request.responseText
              //responseXML 保存 Content-Type 头部中指定为 "text/html" 的数据
              request.responseXML
          }else{
              // 请求失败，根据响应码判断失败原因
              console.log('error,status:'+request.status)
          }
      }else{
          // 请求还在继续
      }
  }

// 练习题2、跨域的几种实现方式
//   JSONP
//   服务器端设置http header