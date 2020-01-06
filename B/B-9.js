var total_number = 0;
var at_a_time = 0;
while(total_number <= 0){
    total_number = parseInt(prompt("Enter the total number of events (greater than 0): "));
    console.log(total_number);
}
while(at_a_time <= 0 || at_a_time > total_number){
    at_a_time = parseInt(prompt("Enter the number of events to be shown at a time (greater than 0 and less than total number of events): "));
    console.log(at_a_time);
}
var box_width = 80/at_a_time;
if(box_width > 20)
box_width = 20;

var box_height = box_width * 1.4;
var font_size = box_width * 0.6;
var total_containers = parseInt(total_number / at_a_time);

console.log(total_containers);
console.log(boxes_in_last_container);

for(var i=0;i<total_containers;i++){
    var num = i+1
    var class_name = 'c'+ num;
    var new_container = document.createElement('div');
    new_container.className = 'container ' + class_name;
    for(var j=0;j<at_a_time;j++){
        var new_box = document.createElement('div');
        new_box.className = 'box';
        new_box.style.width = box_width + 'vw';
        new_box.style.height = box_height + 'vw';
        new_box.style.fontSize = font_size + 'rem';
        var number__of_box = i*at_a_time + j + 1;
        new_box.innerHTML = number__of_box;
        new_container.appendChild(new_box);
    }
    document.getElementsByClassName("carousal")[0].appendChild(new_container);
}
var boxes_in_last_container = total_number % at_a_time;
if(boxes_in_last_container != 0){
    var num = total_containers + 1;
    var class_name = 'c' + num;
    var new_container = document.createElement('div');
    new_container.className = 'container ' + class_name;
    for(var i=0;i<boxes_in_last_container;i++){
        var new_box = document.createElement('div');
        new_box.className = 'box';
        new_box.style.width = box_width + 'vw';
        new_box.style.height = box_height + 'vw';
        new_box.style.fontSize = font_size + 'rem';
        var number__of_box = total_containers * at_a_time + i + 1;
        new_box.innerHTML = number__of_box;
        new_container.appendChild(new_box);
    }
    document.getElementsByClassName("carousal")[0].appendChild(new_container);
}

var slider = document.getElementsByClassName('slider')[0];
    for ( i = 0; i < total_containers; i++) {
        let new_dot = document.createElement('div');
        new_dot.className = "dot";
        var num = i+1;
        new_dot.id = num;
        new_dot.setAttribute('onclick', 'on_click_change(this.id)');
        slider.appendChild(new_dot);
    }
    if (boxes_in_last_container != 0) {
        let new_dot = document.createElement('div');
        new_dot.className = "dot";
        var num = i+1;
        new_dot.id = num;
        new_dot.setAttribute('onclick', 'on_click_change(this.id)');
        slider.appendChild(new_dot);
    }
    document.querySelectorAll('.dot')[0].style.background = 'white';

var active_container = 1;
var total = total_containers;
if(boxes_in_last_container != 0)
total++;
container_animation_interval = setInterval(animation, 5000);
function animation(){
    if(active_container < total){
        active_container++;
        console.log(active_container);
        var carousal = document.getElementsByClassName('carousal')[0];
        carousal.style.transform = "translate(" + (-100*(active_container-1)) + "%)"; 
        for(let i=0;i<total;i++){
            if(i != (active_container-1)){
                document.querySelectorAll('.dot')[i].style.background = 'none';
            }
            else{
                document.querySelectorAll('.dot')[i].style.background = 'white';           
            }
        }
        clearInterval(container_animation_interval);
        container_animation_interval = setInterval(animation, 5000);
    }
    else{
        active_container = 0;
        animation();
    }
}
function on_click_change(index){
    var index_num = parseInt(index);
    if (active_container != index_num) {
        active_container = index_num - 1;
        animation();
        clearInterval(container_animation_interval);
        container_animaton_interval = setInterval(animation, 5000);
    }
}
