let LSData = JSON.parse(localStorage.getItem("signup")) || [];
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let obj = {
        Name: document.getElementById("name").value,
        Email: document.getElementById("email").value,
        Password: document.getElementById("password").value,
        ConfirmedPassword: document.getElementById("confirmedPassword").value,
    }
    if (obj.Name == "" || obj.Email == "" || obj.Password == "" || obj.ConfirmedPassword == "") {
        alert("some fields are empty")
    } else {
        LSData.push(obj);
        localStorage.setItem("signup", JSON.stringify(LSData));
        window.location.href = "login.html"
        alert("sign-up successful");
    }
})