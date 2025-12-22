//smooth scroll to contact
function scrollTocntact(){
    document.getElementById("contact").scrollview({behavior:"smoooth"});
}

//contact from alert
function sendMessage(){
    let name=
    document.getElementById("name").value;
    let email=
    document.detElementById("email").value;
    let message=
    document.getElementById("message").value;

    if(name ==="" || email ==="" || message ==="") {
    }else{
        alert("Thank you" + name + "! Your message has been sent.");
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value=
    "";
    }
}

//dynamic year
document.getElementById("year").textcontent = new
Date().getFullYear();
