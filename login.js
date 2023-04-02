document.querySelector("form").addEventListener("submit",login);
function login(event){
    event.preventDefault();
    let data={
        Email:document.getElementById("email").value,
        Password:document.getElementById("Password").value,
    }
    let local=JSON.parse(localStorage.getItem("signup"))||[];
    console.log(local);

    let flag=false;
    for(let i=0;i<local.length;i++){
        if(data.Email===local[i].Email && data.Password===local[i].Password){
            flag=true
        }
    }
    if(flag===true){
        alert("login successful")
        window.location.href="./index.html"
    }else{
        alert("please check email/password")
    }

}