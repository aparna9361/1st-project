function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "kuttyk321@gmail.com",
        Password: "pjxeyotcgafqtdow",
        To: 'aparna9361@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Admission",
        Body: "Name:" + document.getElementById("name").value +
            "<br> Package:" + document.getElementById("pad").value +
            "<br> Phone:" + document.getElementById("phone").value +
            "<br> Location:" + document.getElementById("location").value
    }).then(
        message => alert(message)
    );
}