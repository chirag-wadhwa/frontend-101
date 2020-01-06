
var all = document.getElementsByClassName("check");
var secondLast;
var last=0;
var num=0;
function set_last_and_secondLast(num){
    if(secondLast==0 && last==0)
    last = num;
    else
    {
        secondLast = last;
        last = num;
    }
}

window.addEventListener('keydown',function(event){
    if(event.keyCode == '16')
    {
        check_in_between();
    }
});

function check_in_between(){
    if(last>secondLast)
    {
        for(var i=secondLast;i<last;i++)
        {
            all[i-1].checked = true;
        }
    }
    else
    {
        for(var i=last;i<secondLast;i++)
        {
            all[i-1].checked = true;
        }
    }
}