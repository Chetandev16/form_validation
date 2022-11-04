window.addEventListener("load",bindEvents);

function bindEvents(){
    let textBox = document.querySelector(".box");
    textBox.addEventListener("blur",validateUser)
    textBox.addEventListener("keyup",validateUser)

    let passopen = document.querySelector(".passeyeopen");
    passopen.addEventListener("click",open);

    let cnfrm = document.querySelector(".confirm")
    cnfrm.addEventListener("keyup",validatePassword);

    let email = document.querySelector(".email");
    email.addEventListener("keyup",validateEmail);

    let submit = document.querySelector(".finalcheck");
    submit.addEventListener('click',finalCheck);
}


function finalCheck(){
    let name = document.querySelector(".box").value;
    let p1 = document.querySelector(".pass").value;
    let p2 = document.querySelector(".confirm").value;
    let sub = document.querySelector(".submitcheck")

    if(name != "" && p1 != "" && p2 != "" && p1 === p2){
        this.classList.add("hidden");
        sub.classList.remove("hidden");
    }else{
        this.classList.remove("hidden");
        sub.classList.add("hidden");
    }
}


function validateEmail(){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    let emailval = this.value;
    if(emailval.match(reg)){
        this.style.border = "1px solid green";
        return true;
    }else{
        this.style.border = "1px solid red";
    }
}

function validatePassword(){
    let password1 = document.querySelector(".pass");
    let password2 = document.querySelector(".confirm");
    let error = document.querySelector(".err");
    console.log(password1.value);
    console.log(password2.value);
    
    if( password1.value === password2.value){
        error.innerHTML = ""
        password1.style.border = "1px solid green"
        this.style.border = "1px solid green"
    }else{
        password1.style.border = "1px solid red"
        this.style.border = "1px solid red"
        error.innerHTML = "Password Not Matched!"
    }
}

function open(){
    let passClass = document.querySelector(".pass");

    if(passClass.type === "password"){
        passClass.type = "text";
    }else{
        passClass.type = "password";
    }
}

function validateUser(){
    console.log("he");
    let value = this.value;
    let spanDanger = document.querySelector(".dangername")
    if(value == ""){
        this.style.border = "1px solid red";
        spanDanger.classList.remove("hidden")
    }else{
        this.style.border = "1px solid green";
        spanDanger.classList.add("hidden");
    }
}