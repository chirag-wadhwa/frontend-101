first_two_numbers();
function first_two_numbers(){
    box_color();
    box_color();
    text_color();
    var first_num = Math.floor(Math.random()*2 + 1)*2;
    var first_cell = Math.floor(Math.random()*16 + 1);
    var second_num = Math.floor(Math.random()*2 + 1)*2;
    var second_cell = Math.floor(Math.random()*16 + 1);
    while(second_cell == first_cell){
        second_cell = Math.floor(Math.random()*16 + 1);
    }
    var temp = document.getElementsByClassName(first_cell)[0];
    temp.style.color = 'black';
    temp.innerHTML = first_num;
    var temp = document.getElementsByClassName(second_cell)[0];
    temp.style.color = 'black';
    temp.innerHTML = second_num;
    box_color();
    box_color();
    text_color();
}
document.addEventListener("keydown",key);
function key(e){
    switch(e.keyCode){
        case 37: left_key();
                 break;
        case 38: top_key();
                 break;
        case 39: right_key();
                 break;
        case 40: bottom_key();
                 break;
    }
};
var win_status = false;
function generate_new_number(){
    var dots_in_array=[]
    for(var i=1;i<5;i++){
        for(var j=1;j<5;j++){
            var temp=(i-1)*4+j;
            var class_name=temp;
            var data=document.getElementsByClassName(class_name)[0].innerHTML;
            if(data=='.'){
                dots_in_array.push(temp);
            }
            else if(data=='2048' && win_status==false){
                setTimeout(()=>alert("You Won"),200);
                win_status = true;
            }
            else{
                continue;
            }
        }
    }
    var len = dots_in_array.length
    if(len != 0){

    new_cell = Math.floor(Math.random()*16 + 1);
    while(!(dots_in_array.includes(new_cell))){
        new_cell = Math.floor(Math.random()*16 + 1);
    }
        new_num = Math.floor(Math.random()*2 + 1)*2;
        document.getElementsByClassName(new_cell)[0].innerHTML = new_num;
    }
}
function left_key(){
    box_color();
    box_color();
    text_color();
    var moving_status = false;
        for(var i=1;i<5;i++){
            var array=[]
            for(var j=1;j<5;j++){
                var temp=(i-1)*4+j;
                var data=document.getElementsByClassName(temp)[0].innerHTML;
                if(data!='.'){
                    var position_number = parseInt(data);
                    var len = array.length;
                    if(len!=0){
                        if(array[len-1] == position_number){
                            var new_number=array[len-1]+position_number;
                            array.pop();


                            var final = new_number+'j';
                            array.push(final);


                            var score = document.getElementsByClassName('score')[0];
                            var score_number = parseInt(score.innerHTML);
                            score_number = score_number + new_number;
                            score.innerHTML = score_number;
                            moving_status = true;
                        }
                        else{
                            array.push(position_number);
                        }
                    }
                    else{
                        array.push(position_number);
                    }
                }
            }
            if(moving_status == false){
                var check = [];
                for(var j=1;j<5;j++){
                var num = (i-1)*4+j;
                check[j-1] = document.getElementsByClassName(num)[0].innerHTML;
                }
                if(check[0]=='.'){
                    for(var n=1;n<4;n++){
                        if(check[n]!='.')
                        moving_status = true;
                    }
                }
                else{
                    if(check.includes('.')){
                        var temp = check.indexOf('.');
                        for(var n=temp;n<4;n++){
                            if(check[n]!='.')
                            moving_status = true;
                        }
                    }
                }
            }
            var array_length=array.length;
            if(array_length!=0){
                for(var j=0;j<array_length;j++){
                    var temp=(i-1)*4+(j+1);
                    document.getElementsByClassName(temp)[0].innerHTML=parseInt(array[j]);
                }
                for(var j=array_length+1;j<5;j++){
                    var temp=(i-1)*4+j;
                    document.getElementsByClassName(temp)[0].innerHTML='.';
                }
            }   
            else{
                for(var j=1;j<5;j++){
                    var temp=(i-1)*4+j
                    document.getElementsByClassName(temp)[0].innerHTML='.';
                }
            }
        }
    if(moving_status == true){
        generate_new_number();
    }
    else{
        alert('No more moves possible in left direction, press another arrow key');
    }
    box_color();
    text_color();
    box_color();
}
function top_key(){
    box_color();
    text_color();
    box_color();
    var moving_status = false;
        for(var i=1;i<5;i++){
            var array=[]
            for(var j=1;j<5;j++){
                var temp=(j-1)*4+i;
                var data=document.getElementsByClassName(temp)[0].innerHTML;
                if(data!='.'){
                    var position_number=parseInt(data);
                    var len = array.length;
                    if(len!=0){
                        if(array[len-1] == position_number){
                            var new_number=array[len-1]+position_number;
                            array.pop();

                            var final = new_number+'j';
                            array.push(final);


                            var score = document.getElementsByClassName('score')[0];
                            var score_number = parseInt(score.innerHTML);
                            score_number = score_number + new_number;
                            score.innerHTML = score_number;
                            moving_status = true;
                        }
                        else{
                            array.push(position_number);
                        }
                    }
                    else{
                        array.push(position_number);
                    }
                }
            }
            if(moving_status == false){
                var check = [];
                for(var j=1;j<5;j++){
                var num = (j-1)*4+i;
                check[j-1] = document.getElementsByClassName(num)[0].innerHTML;
                }
                if(check[0]=='.'){
                    for(var n=1;n<4;n++){
                        if(check[n]!='.')
                        moving_status = true;
                    }
                }
                else{
                    if(check.includes('.')){
                        var temp = check.indexOf('.');
                        for(var n=temp;n<4;n++){
                            if(check[n]!='.')
                            moving_status = true;
                        }
                    }
                }
            }
            var array_length=array.length;
            if(array_length!=0){
                for(var j=0;j<array_length;j++){
                    var temp=(j)*4+(i);
                    document.getElementsByClassName(temp)[0].innerHTML=parseInt(array[j]);
                }
                for(var j=array_length+1;j<5;j++){
                    var temp=(j-1)*4+i;
                    document.getElementsByClassName(temp)[0].innerHTML='.';
                }
            }   
            else{
                for(var j=1;j<5;j++){
                    var temp=(j-1)*4+i;
                    document.getElementsByClassName(temp)[0].innerHTML='.';
                }
            }
            
        }
    if(moving_status == true){
        generate_new_number();
    }
    else{
        alert('No more moves possible in top direction, press another arrow key');
    }
    box_color();
    text_color();
    box_color();
}
function right_key(){
    box_color();
    text_color();
    box_color();
    var moving_status = false;
        for(var i=1;i<5;i++){
            var array=[]
            for(var j=4;j>0;j--){
                var temp=(i-1)*4+j;
                var data=document.getElementsByClassName(temp)[0].innerHTML;
                if(data!='.'){
                    var position_number=parseInt(data);
                    var len = array.length;
                    if(len!=0){
                        if(array[len-1] == position_number){
                            var new_number=array[len-1]+position_number;
                            array.pop();


                            var final = new_number+'j';
                            array.push(final);


                            var score = document.getElementsByClassName('score')[0];
                            var score_number = parseInt(score.innerHTML);
                            score_number = score_number + new_number;
                            score.innerHTML = score_number;
                            moving_status = true;
                        }
                        else{
                            array.push(position_number);
                        }
                    }
                    else{
                        array.push(position_number);
                    }
                }
            }
            if(moving_status == false){
                var check = [];
                for(var j=4;j>0;j--){
                var num = (i-1)*4+j;
                check[4-j] = document.getElementsByClassName(num)[0].innerHTML;
                }
                if(check[0]=='.'){
                    for(var n=1;n<4;n++){
                        if(check[n]!='.')
                        moving_status = true;
                    }
                }
                else{
                    if(check.includes('.')){
                        var temp = check.indexOf('.');
                        for(var n=temp;n<4;n++){
                            if(check[n]!='.')
                            moving_status = true;
                        }
                    }
                }
            }
            var array_length=array.length;
            if(array_length!=0){
                for(var j=4;j>4-array_length;j--){
                    var temp=(i-1)*4+j;
                    document.getElementsByClassName(temp)[0].innerHTML=parseInt(array[4-j]);
                }
                for(var j=4-array_length;j>0;j--){
                    var temp=(i-1)*4+j;
                    document.getElementsByClassName(temp)[0].innerHTML='.';
                }
            }   
            else{
                for(var j=1;j<5;j++){
                    var temp=(i-1)*4+j
                    document.getElementsByClassName(temp)[0].innerHTML='.';
                }
            }
            
        }
    if(moving_status == true){
        generate_new_number();
    }
    else{
        alert('No more moves possible in right direction, press another arrow key');
    }
    box_color();
    text_color();
    box_color();
}
function bottom_key(){
    box_color();
    text_color();
    box_color();
    var moving_status = false;
        for(var i=1;i<5;i++){
            var array=[]
            for(var j=4;j>0;j--){
                var temp=(j-1)*4+i;
                var data=document.getElementsByClassName(temp)[0].innerHTML;
                if(data!='.'){
                    var position_number=parseInt(data);
                    var len = array.length;
                    if(len!=0){
                        if(array[len-1] == position_number){
                            var new_number=array[len-1]+position_number;
                            array.pop();


                            var final = new_number+'j';
                            array.push(final);



                            var score = document.getElementsByClassName('score')[0];
                            var score_number = parseInt(score.innerHTML);
                            score_number = score_number + new_number;
                            score.innerHTML = score_number;
                            moving_status = true;
                        }
                        else{
                            array.push(position_number);
                        }
                    }
                    else{
                        array.push(position_number);
                    }
                }
            }
            if(moving_status == false){
                var check = [];
                for(var j=4;j>0;j--){
                var num = (j-1)*4+i;
                check[4-j] = document.getElementsByClassName(num)[0].innerHTML;
                }
                if(check[0]=='.'){
                    for(var n=1;n<4;n++){
                        if(check[n]!='.')
                        moving_status = true;
                    }
                }
                else{
                    if(check.includes('.')){
                        var temp = check.indexOf('.');
                        for(var n=temp;n<4;n++){
                            if(check[n]!='.')
                            moving_status = true;
                        }
                    }
                }
            }
            var array_length=array.length;
            if(array_length!=0){
                for(var j=4;j>4-array_length;j--){
                    var temp=(j-1)*4+(i);
                    document.getElementsByClassName(temp)[0].innerHTML=parseInt(array[4-j]);
                }
                for(var j=4-array_length;j>0;j--){
                    var temp=(j-1)*4+i;
                    document.getElementsByClassName(temp)[0].innerHTML='.';
                }
            }   
            else{
                for(var j=1;j<5;j++){
                    var temp=(j-1)*4+i;
                    document.getElementsByClassName(temp)[0].innerHTML='.';
                }
            }
            
        }
    if(moving_status == true){
        generate_new_number();
    }
    else{
        alert('No more moves possible in bottom direction, press another arrow key');
    }
    box_color();
    text_color();
    box_color();
}
function text_color(){
    for(var i=1;i<5;i++){
        for(var j=1;j<5;j++){
            var class_name = (i-1)*4+j;
            var temp = document.getElementsByClassName(class_name)[0];
            if(temp.innerHTML == '.'){
                temp.style.color = temp.style.background;
            }
            else{
                temp.style.color = 'black';
            }
        }
    }
}
function box_color(){
    for(var i=1;i<5;i++){
        for(var j=1;j<5;j++){
            var class_name = (i-1)*4+j;
            var temp = document.getElementsByClassName(class_name)[0];
            if(temp.innerHTML == '.'){
                temp.style.background = '#CDC1B4';
            }
            else if(temp.innerHTML == '2'){
                temp.style.background = '#eee3d6';
            }
            else if(temp.innerHTML == '4'){
                temp.style.background = '#ede0c8';
            }
            else if(temp.innerHTML == '8'){
                temp.style.background = '#f2b179';
            }
            else if(temp.innerHTML == '16'){
                temp.style.background = '#f59563';
            }
            else if(temp.innerHTML == '32'){
                temp.style.background = '#f67e5f';
            }
            else if(temp.innerHTML == '64'){
                temp.style.background = '#f65e3b';
            }
            else if(temp.innerHTML == '128'){
                temp.style.background = '#f1d96b';
            }
            else if(temp.innerHTML == '256'){
                temp.style.background = '#f2cf4d';
            }
            else if(temp.innerHTML == '512'){
                temp.style.background = '#e5c12b';
            }
            else if(temp.innerHTML == '1024'){
                temp.style.background = '#dfba12';
            }
            else if(temp.innerHTML == '2048'){
                temp.style.background = '#edc501';
            }
        }
    }
}