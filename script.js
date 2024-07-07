var email = document.getElementById("email");
var password = document.getElementById("password");
var button = document.getElementById("btn");
button.addEventListener("click",function(){
    alert("Login Successful");
    localStorage.name = email.value;
    localStorage.password = password.value;
    document.write("Email:")
    document.write(localStorage.name);
    document.write("\n","Password:");
    document.write(localStorage.password);
});

