// starting drop down menu in the nav par
document.getElementById("dropi").addEventListener("click",function(){
    document.getElementById("dropul").classList.toggle("transul");
})
// starting register form validation password
let form = document.getElementById("form");
let password = document.getElementById("password");
let passworddiv = document.getElementById("passworddiv");
let error = document.createElement("span");
//************************************** */
let phone = document.getElementById("phone");
let pherror = document.createElement("span");
let phonediv =document.getElementById("phonediv"); 
pherror.setAttribute("id" , "pherrorspan");
pherror.textContent = "mobile number must be only 11 digits not enclude any characters";
//****************************************

error.setAttribute("id" , "errorspan");
error.textContent = "The password must start with uppercase character,include 8 characters,atleast one digit,one special character"
form.addEventListener("submit" ,function(action){
    let submit = 0;
    let validP = true;
    password = password.value.split("");
    let numbers =0 ,  special = 0 ,whitespace =0;
    for (let i = 0; i<password.length ; i++){
        if (password[i]==" ")
        whitespace++;
       else if (isNaN(password[i]) == true){
            if (password[i] == "-" || password[i] =="_" || password[i]=="#" || password[i]=="&" || password[i]=="*" || password[i] == "@")
            special++;
        }
        else if (isNaN(password[i]) ==false){
            numbers++;
        }

        
    }
    let cap =0
    if (password[0]!=password[0].toUpperCase()){
        cap++;
    }
    // ***************************************************************
    let phonevalid = true;
    for (let i =0 ; i< phone.value.length;i++){
        if (isNaN(phone.value[i])==true)
        phonevalid =false;
    }
    //******************************************************************* */
    if ((cap!=0 ) || (numbers == 0) ||( document.getElementById("password").value.length!=8) || (whitespace !=0) || (special >1 ||special <1 )  ){
        validP = false;
    }
    if (phonevalid == false || phone.value.length !=11){
        action.preventDefault();
        phonediv.appendChild(pherror);
        phone.onfocus = function (){
            document.getElementById("pherrorspan").remove();
            phone.value == " ";
        }

    }
    if (validP ==false){
        action.preventDefault();
         passworddiv.appendChild(error);
         document.getElementById("password").onfocus = function (){
             document.getElementById("errorspan").remove();
             document.getElementById("password").value="";
        
        }
     
    }
  
    
})