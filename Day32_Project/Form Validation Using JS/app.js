const form = document.getElementById("contactForm");

const submitBtn = document.getElementById("submitBtn");

const nameInput = document.getElementById("contact-name");
const phoneInput = document.getElementById("contact-phone");
const emailInput = document.getElementById("contact-email");
const messageInput = document.getElementById("contact-message");


const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");
const successIcon = '<i class="fa-solid fa-circle-check"></i>';


function shake(element)  {



    element.style.animation="none";
    element.offsetHeight;
    element.style.animation="shake .3s";

}



function validateName(){
    let name=nameInput.value.trim();
    if(name===""){


        nameError.innerHTML="Full name is required";
        return false;


    }
    if(!/^[A-Za-z]+(?:\s+[A-Za-z]+)+$/.test(name)){
        nameError.innerHTML="Enter first & last name";
        return false;
    }
    nameError.innerHTML=successIcon;
    return true;
}






function validatePhone(){
    let phone=phoneInput.value.trim();
    if(!/^[6-9][0-9]{9}$/.test(phone)){
        phoneError.innerHTML="Enter valid phone number"  ;
        return false;
    }
    phoneError.innerHTML=  successIcon;
    return true;
}

function validateEmail() {
    let email=emailInput.value.trim();
    let pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!pattern.test(email)){
        emailError.innerHTML="Invalid email address";
        return false;
    }
    emailError.innerHTML=successIcon;
    return true;
}


//


function validateMessage(){
    let message=messageInput.value.trim();
    if(message.length<30){
        messageError.innerHTML = `${30-message.length} more characters required`;
        return false;
    }
    messageError.innerHTML=successIcon;
    return true;
}

function loadingButton(){

    submitBtn.disabled=true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
}
function resetButton(){
    submitBtn.disabled=false;
    submitBtn.innerHTML =  '<span>Send Message</span><i class="fa-solid fa-paper-plane"></i>';
}


function validateForm(){
    submitError.innerHTML="";
    if(
        !validateName() ||
        !validatePhone() ||
        !validateEmail() ||
        !validateMessage()
    )



    {
        submitError.innerHTML=  "  Please fill all fields correctly.";
        return false;
    }
    loadingButton();
    emailjs.send(
        "service_4sp24xv",
        "template_z14o1xl",
        {
            name:nameInput.value,
            phone:phoneInput.value,
            email:emailInput.value,
            message:messageInput.value

        }
    )



    .then(()=>{
        submitError.style.color ="#22c55e";
        submitError.innerHTML=    "Message sent successfully ✅";
        form.reset();
        nameError.innerHTML="";
        phoneError.innerHTML="";
        emailError.innerHTML="";
        messageError.innerHTML="";

        resetButton();
    })

    .catch(()=>{

        submitError.style.color="#ef4444";
        submitError.innerHTML=  " Message failed. Try again !!.... ";
        resetButton();
    });
    return false;
}
nameInput.addEventListener("keyup",validateName);
phoneInput.addEventListener("keyup",validatePhone);
emailInput.addEventListener("keyup",validateEmail);
messageInput.addEventListener("keyup",validateMessage);