function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "brunocbranco16@gmail.com",
        Password : "DEF604B46346A4C172D7998E02D92F39FF53",
        To : 'peja.contato@gmail.com',
        From : 'brunocbranco20@gmail.com',
        Subject : "Cadastro",
        Body : "Name: " + document.getElementById("contact-your-name-2").value
        + "<br> Age: " + document.getElementById("age").value
        + "<br> Adress: " + document.getElementById("adress").value
        + "<br> E-mail: " + document.getElementById("contact-email-2").value
        + "<br> Phone: " + document.getElementById("contact-phone-2").value
        + "<br> Test result: " + document.getElementById("result").value
        + "<br> Relatório: " + document.getElementById("contact-message-2").value
    }).then(
      message => alert("Cadastro enviado com sucesso!")
    );
}