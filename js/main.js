// starting drop down menu in the nav par
document.getElementById("dropi").addEventListener("click",function(){
    document.getElementById("dropul").classList.toggle("transul");
})
// starting js section for buttons hover
let burgbtn = document.getElementById("burgbtn");
let drinkbtn = document.getElementById("drinkbtn");
let snacksbtn = document.getElementById("snacksbtn");
snacksbtn.addEventListener("click" , function(){
    snacksbtn.style.backgroundColor = "rgb(113, 154, 29)";
    burgbtn.style.backgroundColor = "rgb(251, 175, 50)";
    drinkbtn.style.backgroundColor = "rgb(251, 175, 50)"
})
drinkbtn.addEventListener("click" , function(){
    drinkbtn.style.backgroundColor = "rgb(113, 154, 29)";
    burgbtn.style.backgroundColor = "rgb(251, 175, 50)";
    snacksbtn.style.backgroundColor = "rgb(251, 175, 50)";
})
burgbtn.addEventListener("click" , function(){
    burgbtn.style.backgroundColor = "rgb(113, 154, 29)";
    drinkbtn.style.backgroundColor = "rgb(251, 175, 50)";
    snacksbtn.style.backgroundColor = "rgb(251, 175, 50)";
   
})
// starting js section for filtering
let burger = document.getElementById("burger");
let drink = document.getElementById("drink");
let snacks = document.getElementById("snacks");
let content = document.getElementById("cont");
let k = 0;
burgbtn.addEventListener("click" , function(){
    
        let p = document.createElement("p");
        content.prepend(p);
    burger.style.display = "block";
    drink.style.display = "none";
    snacks.style.display = "none";
    
})


drinkbtn.addEventListener("click" , function(){
    let p = document.createElement("p");
    content.prepend(p);
    drink.style.display = "block";
    burger.style.display = "none";
    snacks.style.display = "none"
})

snacksbtn.addEventListener("click" , function(){
    let p = document.createElement("p");
    content.prepend(p);
    snacks.style.display = "block";
    burger.style.display = "none";
    drink.style.display = "none"
})
//888888888888888888888888888888
let form = document.getElementById("form");
let phone = document.getElementById("phone");
let pherror = document.createElement("span");
let phonediv =document.getElementById("phonediv"); 
pherror.setAttribute("id" , "pherrorspan");
pherror.textContent = "mobile number must be only 11 digits not enclude any characters";
form.addEventListener("submit" , function(action){

    let phonevalid = true;
    for (let i =0 ; i< phone.value.length;i++){
        if (isNaN(phone.value[i])==true)
        phonevalid =false;
    }
    if (phonevalid == false || phone.value.length !=11){
            action.preventDefault();
            phonediv.appendChild(pherror);
            phone.onfocus = function (){
            document.getElementById("pherrorspan").remove();
            phone.value == " ";
        }
    }
})



