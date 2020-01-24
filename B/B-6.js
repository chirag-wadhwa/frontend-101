var image = document.getElementsByClassName("image")[0];
var _name = document.getElementsByClassName("_name")[0];
var description = document.getElementsByClassName("description")[0];

function print_data(data){
    console.log(data);
    console.log(data.name);
    image.style.backgroundImage = `url("${data.avatar_url}")`;
    console.log(`${data.name}`);
	_name.innerHTML = `${data.name}`;
    description.innerHTML = `${data.bio}`;	
    
}
function Fetch_API(){
    var input = document.querySelector(".text_field").value;
    fetch(`https://api.github.com/users/${input}`)
      .then((response) => response.json())
      .then(function(data){
        print_data(data);  
      })
      .catch(err => console.error(err));
}
function XMLHttp(){
    var input = document.querySelector(".text_field").value;
    var request = new XMLHttpRequest();
    request.open('GET', `https://api.github.com/users/${input}`, true);
    request.send();
    request.responseType= 'json';
    request.onload = function () {
        var data = this.response;

            print_data(data);
    }
    request.onerror = function(){
        console.log('error');
    }
}
function jQuery_AJAX(){
    var input  = document.querySelector(".text_field").value;
    $.ajax({
        url: `https://api.github.com/users/${input}`,
        type: 'GET',
        success: function(data) {
          print_data(data);
        }
    });
}