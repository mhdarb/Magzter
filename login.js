// var loginInputs=document.getElementsByClassName("login-input");
// //console.log(loginInputs)

// // for(var i=0;i<loginInputs.length;i++){
//     loginInputs[0].addEventListener("click",raiseLabel(0))
//     loginInputs[0].addEventListener("input",raiseLabel(0))
//     // loginInputs[0].addEventListener("focus",raiseLabel(0))
//     loginInputs[0].addEventListener("focusout",downLabel(0))
// //}

//     // loginInputs[1].addEventListener("click",raiseLabel(1))
//     // loginInputs[1].addEventListener("input",raiseLabel(1))
//     // loginInputs[1].addEventListener("focus",raiseLabel(1))
//     // loginInputs[1].addEventListener("focusout",downLabel(1))

// function raiseLabel(i){
//     var loginLabel = document.getElementsByClassName("place-label");
//     console.log(loginLabel)
//     loginLabel[i].classList.add("active");
// }

// function downLabel(i){
//     var loginLabel = document.getElementsByClassName("place-label");
//     var val=loginInputs[i].value;
//     if(!val)
//     loginLabel[i].classList.remove("active");
// }

//var loginInput=document.querySelectorAll(".login-input");
// loginInput[0].addEventListener("click",raiseLabel(0))
// loginInput[0].addEventListener("input",raiseLabel(0))
// loginInput[0].addEventListener("focusout",downLabel(0))

// loginInput[1].addEventListener("click",raiseLabel(1))
// loginInput[1].addEventListener("input",raiseLabel(1))
// loginInput[1].addEventListener("focusout",downLabel(1))

// function raiseLabel(loginInput,i){
//     var loginLabel = document.querySelectorAll(".place-label");
//     loginLabel[i].classList.add("active");
//     loginInput.classList.add("active");
// }

// function downLabel(loginInput,i){
//     var loginLabel = document.querySelectorAll(".place-label");
//     if(!loginInput.value){
//     loginLabel[i].classList.remove("active");
//     loginInput.classList.remove("active");
//     }
// }



// loginInputs.forEach(loginInput => {
//     loginInput.addEventListener('click', function(){alert("high")})

// });

// loginInputs.forEach(loginInput => {
//     loginInput.addEventListener('focusout', function(){alert("low")})
// });

// for(let i=0;i<loginInputs.length;i++){
//     loginInputs[i].addEventListener('click', raiseLabel(i));
//     loginInputs[i].addEventListener('focusout', downLabel(i));
// }
// const loginInputs=document.querySelectorAll(".login-input");

function raiseLabel(loginInput){
    let loginLabel = loginInput.nextElementSibling;
    loginLabel.classList.add("active");
    loginInput.classList.add("active");
}

function downLabel(loginInput){
    let loginLabel = loginInput.nextElementSibling;
    if(!loginInput.value){
    loginLabel.classList.remove("active");
    loginInput.classList.remove("active");
    }
}

const loginForm = document.getElementById("form")
loginForm.addEventListener('submit', formValidate)

function formValidate(event){
    event.preventDefault();

    let email = loginForm["email"];
    let password = loginForm["password"];

    validate(email,password)

    event.stopPropagation();
}

function validate(email,password){
    let emailValue= email.value;
    let passwordValue= password.value;


    if(!emailValue){
        setErrorClass(email, 'Email is required')
    }
    else if(!validEmail(emailValue)){
        setErrorClass(email, 'Not a valid email address')
    }
    else{
        setSuccessClass(email)
    }

    if(!passwordValue){
        setErrorClass(password, 'Password is required')
    }
    else if(passwordValue.length<8){
        setErrorClass(password, 'Password must contain atleast 8 characters')
    }
    else if(!validPassword(passwordValue)){
        setErrorClass(password, 'Password must contain atleast 1 special and a capital letter')
    }
    else{
        setSuccessClass(password)
    }
}

function validEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validPassword(password){
    let specialChar=false;
    let upperChar=false;
    for(let i=0;i<password.length;i++){
        let ch=password.charAt(i);
        if(ch>='A' && ch<='Z') upperChar=true;
        else if(ch>='a' && ch<='z' || ch>='0' && ch<='9') continue;
        else if(ch==' ') return false;
        else specialChar=true;
    }
    return (upperChar && specialChar)? true : false;
}

function setErrorClass(input, msg){
    const formControl = input.parentElement;
    const div = formControl.querySelector('.feedback');
    formControl.className='form-control error'
    div.innerText = msg;
}

function setSuccessClass(input){
    const formControl = input.parentElement;
    const div = formControl.querySelector('.feedback');
    formControl.className='form-control success'
    // div.innerText = 'Looks Good';
}


let show=document.getElementById("show");
show.addEventListener('click',e=>{
    const input = document.getElementById('login-password-placeholder')
    console.log(input)
    if(input.type==="password"){
        input.type="text";
        show.innerHTML="HIDE";
    }
    else{
        input.type="password";
        show.innerHTML="SHOW"
    }
})


