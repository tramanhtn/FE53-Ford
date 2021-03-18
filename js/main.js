// Ngăn việc menu đóng khi click bên trong
var x = document.querySelectorAll(".dropdown-menu");

for(var i =0; i<x.length; i++){
    x[i].addEventListener('click', function (event){
        event.stopPropagation(); 
    })
}

// Click scroll smooth
var y = document.querySelectorAll(".allVihe__item");
var idAllVihe = 1;

function toogleUnderline(id){    
    for(var i =0; i<y.length; i++){
        y[i].classList.remove("underLine__allVehie");
    }
    document.getElementById(id).classList.toggle("underLine__allVehie");   
}

function clickChangeColor(id){
    document.getElementById(id).classList.toggle("changeColor");
}

// Click change icon collapse menu button
document.getElementById("NavCollapseButton").addEventListener('click',function(){
    var x = document.querySelector(".menuBar-icon");

    document.querySelector(".fa-bars").classList.toggle("fa-times");

    if(x.innerHTML === "Menu"){
        x.innerHTML = "";
    }else{
        x.innerHTML = "Menu";
    }

})
