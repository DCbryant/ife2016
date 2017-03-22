// 模拟一个队列
//怎么将数组同队列联系起来

// 1.点击左侧入，获取text的value，然后将value存进队列的数组，然后数组leftin
var queue = {
    arr:[],
    painted:function (param) { 
        $('container').innerHTML = this.arr.map(function (currentValue,index) { 
            return ('<div class="item">' + currentValue + '</div>');
           
         },this.arr).join('');
     },
    leftIn:function (param) { 
        this.arr.unshift(param);
        this.painted();
     },
     rightIn:function (param) { 
         this.arr.push(param);
         this.painted();
      },
     isEmpty: function() {
            return (this.arr.length == 0);
     },
     leftOut:function (param) { 
         if(this.isEmpty()){
             alert('the queue is empty');
         }else{
             this.arr.shift();
             this.painted();
             
         }
      } ,
     rightOut:function (param) { 
         if(this.isEmpty()){
             alert('the queue is empty');
         }else{
             this.arr.pop();

             this.painted();
             
         }
      },
    
  
};


var $ = function (id) { 
    return document.getElementById(id);
 };

$('leftIn').onclick = function (){
    if ((/^[0-9]+$/).test($('text').value)) {
        queue.leftIn($('text').value);
    }else{
        alert('请输入数字');
    }
};
$('rightIn').onclick = function () { 
    if ((/^[0-9]+$/).test($('text').value)) {
        queue.rightIn($('text').value);
    }else{
        alert('请输入数字');
    }
 };
 $('leftOut').onclick = function () { 
    queue.leftOut();     
};
 $('rightOut').onclick = function () {
      queue.rightOut();
 }
        

//还有问题。。。