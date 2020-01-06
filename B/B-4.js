var first = document.getElementsByClassName("first")[0];
var second = document.getElementsByClassName("second")[0];
var third = document.getElementsByClassName("third")[0];
var triangle = document.getElementsByClassName("triangle")[0];
var rectangle = document.getElementsByClassName("whitebox")[0];
var t1 = document.getElementsByClassName("t1")[0];
var t2 = document.getElementsByClassName("t2")[0]; 
var t3 = document.getElementsByClassName("t3")[0];
var image = document.getElementsByClassName("image")[0];
console.log(first.getBoundingClientRect());
first.addEventListener('mouseenter',first_fun);
second.addEventListener('mouseenter',second_fun);
third.addEventListener('mouseenter',third_fun);
first.addEventListener('mouseleave',first_fun_end);
second.addEventListener('mouseleave',second_fun_end);
third.addEventListener('mouseleave',third_fun_end);
function first_fun(){
    rectangle.style.opacity= 1;
    triangle.style.opacity = 1;
    var info = first.getBoundingClientRect();
    var triangle_top = info.height + info.y + 20;
    var triangle_left = info.width/2 + info.x + 20;
    triangle.style.setProperty('transform',`translate(${triangle_left}px, ${triangle_top}px)`);
    var t1_coords = t1.getBoundingClientRect();
    var image_coords = image.getBoundingClientRect();
    var rectangle_coords = new Object();
    rectangle_coords = {
        height: image.height+40,
        width: image_coords.width+t1_coords.width+60,
        left: image_coords.x-30,
        top: image_coords.y-30
    }
    t1.style.opacity = 1;
    image.style.opacity = 1;
    rectangle.style.height = rectangle_coords.height + 'px';
    rectangle.style.width = rectangle_coords.width + 'px';
    rectangle.style.setProperty('transform', `translate(${rectangle_coords.left}px, ${rectangle_coords.top}px)`);
}
function first_fun_end(){
    t1.style.opacity = 0;
    image.style.opacity = 0;
    rectangle.style.opacity= 0;
    triangle.style.opacity = 0;
}
function second_fun(){
    rectangle.style.opacity= 1;
    triangle.style.opacity = 1;
    var info = second.getBoundingClientRect();
    var triangle_top = info.height + info.y +20;
    var triangle_left = info.width/2 + info.x + 20;
    triangle.style.setProperty('transform',`translate(${triangle_left}px, ${triangle_top}px)`);
    var t2_coords = t2.getBoundingClientRect();
    var rectangle_coords = new Object();
    rectangle_coords = {
        height: t2_coords.height+40,
        width: t2_coords.width+60,
        left: t2_coords.x-30,
        top: t2_coords.y-30
    }
    rectangle.style.height = rectangle_coords.height + 'px';
    rectangle.style.width = rectangle_coords.width + 'px';
    rectangle.style.setProperty('transform', `translate(${rectangle_coords.left}px, ${rectangle_coords.top}px)`);
    t2.style.opacity = 1;
}
function second_fun_end(){
    t2.style.opacity = 0;
    rectangle.style.opacity= 0;
    triangle.style.opacity = 0;
}
function third_fun(){
    rectangle.style.opacity= 1;
    triangle.style.opacity = 1;
    var info = third.getBoundingClientRect();
    var triangle_top = info.height + info.y + 20;
    var triangle_left = info.width/2 + info.x + 20;
    triangle.style.setProperty('transform',`translate(${triangle_left}px, ${triangle_top}px)`);
    var t3_coords = t3.getBoundingClientRect();
    var rectangle_coords = new Object();
    rectangle_coords = {
        height: t3_coords.height+40,
        width: t3_coords.width+25,
        left: t3_coords.x-20,
        top: t3_coords.y-30
    }
    rectangle.style.height = rectangle_coords.height + 'px';
    rectangle.style.width = rectangle_coords.width + 'px';
    rectangle.style.setProperty('transform', `translate(${rectangle_coords.left}px, ${rectangle_coords.top}px)`);
    t3.style.opacity = 1;
}
function third_fun_end(){
    t3.style.opacity = 0;
    rectangle.style.opacity= 0;
    triangle.style.opacity = 0;
}