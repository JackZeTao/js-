//    js 的三座大山      
    //     原型    原型链 
    //      作用域    闭包
    //     异步     单线程 


    //   变量类型   分为    值类型和  引用类型  

    // 1 引用类型包括   数组 对象 和 函 数     应用类型公共 空间 是指针 

    var a=100;
       var b=a;
       a=200;
       console.log(b) //100

       var a={age:20};
       var b=a;
       b.age=21;
       console.log(a.age) //21


    // 2   typeof  只能区分 值类型的 详细类型  ，而对 引用类型 无能为力   ，但是 可以区分出函数来
    typeof undefined; //undefined
    typeof 'abc'; //string
    typeof 123; //number
    typeof true; //boolean
    typeof {}; //object
    typeof []; //object
    typeof null; //object
    typeof console.log //function

    // 3.  强制类型转换  （值类型的 计算）

    //  <1.   字符串拼接
    //  <2.     ==运算符
    //  <3.    if 语句
    //  <4.     逻辑运算（布尔操作符  逻辑非，逻辑或，逻辑与）
    var a=100+10;//110
    var b=100+'10'//'10010'

    100 =='100'//true
    0==''//true
    null==undefined//true

    var a=true;
    if(a){
       //...
    }
    var b=100;
    if(b){
       //...
    }
    var c='';
    if(c){
       //...
    } 

    console.log(10&&0)//0
    console.log(''||'abc')//abc
    console.log(!window.abc)//true
    
    var a=100;
    console.log(!!a)//true