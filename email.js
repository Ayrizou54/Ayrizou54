function emailSend(){
    var Username =document.getElementById('Name').ariaValueMax;
    var phone =document.getElementById('Phone').ariaValueMax;
    var email =document.getElementById('Email').ariaValueMax;
   var messageBody ="Name" + userName+
   "<br/> Phone" + phone +
   "<br/> Email" + email;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "elhamdaoui.moha@hotmail.com",
        Password : "6DF495BEA770C77FAEB4D3C0FD7F9E157B4747F586DF02961A3498B2C6F0E13293A6916CCA31490A85FE2926A80C29BC",
        To : 'dandybouafssa@gmail.com',
        From : "elhamdaoui.moha@hotmail.com",
        Subject : "This is the subject",
        Body : "messageBody"
    }).then(
      message => {
        if(message=='ok'){
            swal("successful!", "You clicked the button!", "success");
        }
        else{
            swal("error!", "You clicked the button!", "error"); 
        }
      }

    );
}