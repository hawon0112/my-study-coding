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
    },
    setColor2 :function (color){
        document.querySelector('#title').style.color=color;
    } 
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    var target2 = document.querySelector('#title');
                if(self.value === 'night'){
                Body.setBackgroundColor('black');
                Body.setColor('white');
                Body.setColor2('white');
                self.value = 'day';
                setColor('powderblue')
            } else {
                Body.setBackgroundColor('white');
                Body.setColor('black');
                Body.setColor2('black');
                self.value = 'night';
                setColor('blue')
            }
}