var first = document.getElementsByClassName("first")[0];
var second = document.getElementsByClassName("second")[0];
var third = document.getElementsByClassName("third")[0];
var triangle = document.getElementsByClassName("triangle")[0];
var rectangle = document.getElementsByClassName("whitebox")[0];
var t1 = document.getElementsByClassName("t1")[0];
console.log(first.getBoundingClientRect());
first.addEventListener('mouseenter',first_fun);
second.addEventListener('mouseenter',second_fun);
third.addEventListener('mouseenter',third_fun);

function first_fun(){
    var info = first.getBoundingClientRect();
    var triangle_top = info.height + info.y + 20;
    var triangle_left = info.width/2 + info.x + 20;
    var t1_coords = t1.getBoundingClientRect();
    var image = document.getElementsByClassName("image")[0].getBoundingClientRect();
    var rectangle_coords = new Object();
    rectangle_coords = {
        height: image.height+40,
        width: image.width+t1_coords.width+60,
        left: image.x-30,
        top: image.y-30
    }
    triangle.style.setProperty('transform',`translate(${triangle_left}px, ${triangle_top}px)`);
    rectangle.style.height = rectangle_coords.height + 'px';
    rectangle.style.width = rectangle_coords.width + 'px';
    rectangle.style.setProperty('transform', `translate(${rectangle_coords.left}px, ${rectangle_coords.top}px)`);
}
function second_fun(){
    var info = second.getBoundingClientRect();
    var triangle_top = info.height + info.y;
    var triangle_left = info.width/2 + info.x - 20;
    triangle.style.top = triangle_top + 'px';
    triangle.style.left = triangle_left + 'px';
}
function third_fun(){
    var info = third.getBoundingClientRect();
    var triangle_top = info.height + info.y;
    var triangle_left = info.width/2 + info.x - 20;
    triangle.style.top = triangle_top + 'px';
    triangle.style.left = triangle_left + 'px';
}