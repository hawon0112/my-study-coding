function LinkssetColor(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
    console.log(alist[i]);
    alist[i].style.color = color;
    i=i + 1;
    }
}
var Body = {
    setColor:function (color){
        document.querySelector('body').style.color=color;
    },
    
    setBackgroundColor:function (color){
        document.querySelector('body').style.backgroundColor=color;
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body');
                var target2 = document.querySelector('#title');
                if(self.value === 'night'){
                Body.SetBackgroundColor('black');
                Body.SetColor('white');
                target2.style.color='white';
                self.value = 'day';
                setColor('powderblue')
            } else {
                Body.SetBackgroundColor('white');
                Body.SetColor('black');
                target2.style.color='black';
                self.value = 'night';

                
                setColor('blue')
            }
}