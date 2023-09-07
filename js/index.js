function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "brunocbranco16@gmail.com",
        Password : "DEF604B46346A4C172D7998E02D92F39FF53",
        To : 'brunocbranco16@gmail.com',
        From : document.getElementById("contact-email-2").value,
        Subject : "Cadastro",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}