const contactform=document.getElementById("contact-form");
contactform.addEventListener("submit",(event)=>{
    event.preventDefault();

    const firstname=document.getElementById("first").Value;
    const lastname=document.getElementById("second").Value;
    const email=document.getElementById("email").value;
    const  number=document.getElementById("number").value;
    const  subject=document.getElementById("subject").value;
    const  message=document.getElementById("message").value;
    const  checkbox=document.getElementById("checkbox").value;

    if(firstname=="" || lastname=="" || email=="" || number=="" || subject=="" || message=="" || checkbox==""){
        alert("please fill in all required field.");
        return;
    }else{

        alert("your response is submited. Think you!");
        contactform.reset();
    }
})