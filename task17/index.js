var aBtn = document.getElementsByTagName('input');
        var text = document.getElementById('text');
        var container = document.getElementById('container');
        var old = container.getElementsByTagName('div');
        
        for(var i=0;i<old.length;i++){
                old[i].className = "item";
                old[i].style.height = old[i].innerHTML + "px";
        }
       
        function checkNum(num){
            var reg=/^\d+$/;
            if(reg.test(num) === false){
                alert('请输入一个数字');
                return;
            }else if(num >10 && num <100){
                return num;
            }else{
                alert('请输入在10-100之间的数');
            }   
        }

        aBtn[1].onclick = function(){
            if (text.value.length <= 0) {
				alert('输入为空');
				return false;
			}else if(!checkNum(text.value)){
                return;
            }
			var newNode = document.createElement('div');
            var oldNode = container.getElementsByTagName('div')[0];//这个是动态的获取
            newNode.innerHTML = text.value;
            newNode.className = "item";
            newNode.style.height = text.value + "px";
            if(container.children.length>60){
                alert('队列太多');
            }
            if(!oldNode){
                container.appendChild(newNode);
            }else{
                container.insertBefore(newNode, oldNode);
            }
            
        };

        aBtn[2].onclick = function(){
            if (text.value.length <= 0) {
				alert('输入为空');
				return false;
			}else if(!checkNum(text.value)){
                return;
            }

            var newNode = document.createElement('div');
            var oldNode = container.getElementsByTagName('div')[0];//这个是动态的获取
            newNode.innerHTML = text.value;
            newNode.className = "item";
            newNode.style.height = text.value + "px";
            if(container.children.length>60){
                alert('队列太多');
            }
            container.appendChild(newNode);
           
        };

        aBtn[3].onclick = function(){
            var oldNode = container.getElementsByTagName('div')[0];
            if(!oldNode){
                alert('对列空了');
            }else{
                alert(oldNode.offsetHeight);
                container.removeChild(oldNode);
            }
        };

        aBtn[4].onclick = function(){
            var div = container.getElementsByTagName('div');
            var oldNode = div[div.length-1];
            if(!oldNode){
                alert('对列空了');
            }else{
                alert(oldNode.offsetHeight);
                container.removeChild(oldNode);
            }
        };
        container.onclick = function(event){
            event = event || window.event;
            var target = event.target;
            if(target.nodeName === 'DIV'){
                container.removeChild(target);
            }
        };

        function swap(ele1, ele2) {
            var temp = ele1.offsetHeight;
            var con = ele1.innerHTML;
            ele1.offsetHeight = ele2.offsetHeight;
            ele1.style.height = ele2.offsetHeight + "px";
            ele2.offsetHeight = temp;
            ele2.style.height = temp + "px";
            ele1.innerHTML = ele2.innerHTML;
            ele2.innerHTML = con; 
    };

        // 冒泡排序
        aBtn[5].onclick = function(){
            var div = container.getElementsByTagName('div'),
                len  = div.length, i, j = 0, delay = 50, timer;
            
            i = len - 1;
            timer = setInterval(function() {
                if(i < 1) {
                    clearInterval(timer);
                }
                if(j == i) {
                    --i;
                    j = 0;
                }
                if (div[j].offsetHeight >div[j+1].offsetHeight) {
                    swap(div[j], div[j+1]);
                }
                ++j;
            }, delay);
         };   

       aBtn[6].onclick = function(){
            var div = container.getElementsByTagName('div'),
                len  = div.length, i = 0, j = 1, min = 0, delay = 50, timer
            
            timer = setInterval(function() {
                if(i == len - 1) {
                    clearInterval(timer);
                }
                // 设第一个为min，然后逐次遍历，逐个比较
                if(j == len) {
                    swap(div[i], div[min]);
                    ++i;
                    min = i;
                    j = i + 1;
                }
                if (div[j] && div[j].offsetHeight < div[min].offsetHeight) {
                     min = j;
                }
                ++j;
            }, delay);
         };   
      
        aBtn[7].onclick = function() {
            var div = container.getElementsByTagName('div'),
                len  = div.length,
                temp, i = 1, j = 0, timer, delay = 100, outer = true, inner = false;

            timer = setInterval(function() {
                if(outer) {
                    if(i == len) {
                        clearInterval(timer);
                        return ;
                    }
                    if(div[i].offsetHeight < div[i-1].offsetHeight) {
                        temp = div[i].offsetHeight;
                        con = div[i].innerHTML;
                        j = i - 1;
                        outer = false;
                        inner = true;
                    } else {
                        i++;
                    }
                }
                if(inner) {
                    if(j < 0 || div[j].offsetHeight < temp) {
                        div[j+1].style.height = temp + "px";
                        div[j+1].offsetHeight = temp;
                        div[j+1].innerHTML = temp;
                        i++;
                        inner = false;
                        outer = true;
                    } else {
                        div[j+1].style.height = div[j].style.height;
                        div[j+1].offsetHeight = div[j].offsetHeight;
                        div[j+1].innerHTML = div[j].innerHTML;
                        j--;
                    }
                }
            }, delay);
        };