
var emailInput=document.querySelector(".email-input");
emailInput.addEventListener("click",raiseLabel)
emailInput.addEventListener("input",raiseLabel)
emailInput.addEventListener("focusout",downLabel)

function raiseLabel(){
    var emailLabel = document.querySelector(".place-label");
    console.log(emailLabel);
    emailLabel.classList.add("active");
}

function downLabel(){
    var emailLabel = document.querySelector(".place-label");
    if(!emailInput.value)
    emailLabel.classList.remove("active");
}

var form = document.querySelector('.subscribe')
form.addEventListener('submit', function(event){
    var email = form["email"].value;
    const error = validateEmail(email)
    if(error){
        document.querySelector('.invalid-feedback').classList.add('active');
        document.querySelector('.invalid-feedback').innerHTML=error;
        event.preventDefault();
        event.stopPropagation();
    }
})

function validateEmail(email){
    var error='';
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email) error = 'Email is required'
    else if(email.indexOf("@")==-1 || 
            email.indexOf('.')==-1 || 
            email.length >40 || 
            (email.charAt(0)>='0' && email.charAt(0)<='9') ||
            !re.matches(email)) error='Enter a valid email Address'
    return error;
}



// var emailInput=document.querySelector(".email-input");
// emailInput.addEventListener("click", function(){ alert("Hello World!"); });
