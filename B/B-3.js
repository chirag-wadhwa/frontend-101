var all_items;
if(localStorage.getItem('frontend_tech')){
    all_items = JSON.parse(localStorage.getItem('frontend_tech'));
}
else{
    all_items = [];
}

function addItem(){
    var now = all_items.length;
    all_items.push(document.getElementsByClassName("textField")[0].value);
    localStorage.clear();
    localStorage.setItem('frontend_tech',JSON.stringify(all_items));  
    add_in_table(now);
    console.log(localStorage.getItem('frontend_tech'));
}

function add_in_table(now){
    var outer = document.getElementsByClassName("list")[0];
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class","options");
    newDiv.innerHTML = all_items[now];
    outer.appendChild(newDiv);

    outer = document.getElementsByClassName("options")[now];
    newDiv = document.createElement("div");
    newDiv.setAttribute("class","cross");
    newDiv.setAttribute("onclick","remove(this)");
    outer.appendChild(newDiv);

    outer = document.getElementsByClassName("cross")[now];
    newDiv = document.createElement("div");
    newDiv.setAttribute("class","bar b1");
    outer.appendChild(newDiv);

    outer = document.getElementsByClassName("cross")[now];
    newDiv = document.createElement("div");
    newDiv.setAttribute("class","bar b2");
    outer.appendChild(newDiv);
    document.getElementsByClassName("textField")[0].value = "";
}

function remove(ele){
    for(var i=0; i<all_items.length; i++)
    {
        if(ele.parentElement.textContent == all_items[i])
            all_items.splice(i,1);
    }
    localStorage.clear();
    localStorage.setItem('frontend_tech',JSON.stringify(all_items));
    ele.parentNode.parentNode.removeChild(ele.parentNode);
    console.log(all_items);
}

for(var i=0;i<all_items.length;i++)
{
    var outer = document.getElementsByClassName("list")[0];
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class","options");
    newDiv.innerHTML = all_items[i];
    outer.appendChild(newDiv);

    outer = document.getElementsByClassName("options")[i];
    newDiv = document.createElement("div");
    newDiv.setAttribute("class","cross");
    newDiv.setAttribute("onclick","remove(this)");
    outer.appendChild(newDiv);

    outer = document.getElementsByClassName("cross")[i];
    newDiv = document.createElement("div");
    newDiv.setAttribute("class","bar b1");
    outer.appendChild(newDiv);

    outer = document.getElementsByClassName("cross")[i];
    newDiv = document.createElement("div");
    newDiv.setAttribute("class","bar b2");
    outer.appendChild(newDiv);
}

