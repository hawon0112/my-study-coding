function nightDayHandler(self){
    var target = document.querySelector('body');
                var target2 = document.querySelector('#title');
                if(self.value === 'night'){
                target.style.backgroundColor='black';
                target.style.color='white';
                target2.style.color='white';
                self.value = 'day';
                var alist = document.querySelectorAll('a');
                var i = 0;

                while(i < alist.length){
                    console.log(alist[i]);
                    alist[i].style.color = 'powderblue';
                    i=i + 1;
                }
            } else {
                target.style.backgroundColor='white';
                target.style.color='black';
                target2.style.color='black';
                self.value = 'night';

                
                var alist = document.querySelectorAll('a');
                var i = 0;
                while(i < alist.length){
                    console.log(alist[i]);
                    alist[i].style.color = 'gray';
                    i=i + 1;
                }
                
            }
}