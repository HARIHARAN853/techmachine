var name = document.getElementById("name1");
var email = document.getElementById("email");
var password = document.getElementById("password");
var number = document.getElementById("number");
var button = document.getElementById("btn");
button.addEventListener("click",function(){
    alert("Register Successfully");
    localStorage.name = name.value;
    localStorage.email = email.value;
    localStorage.password = password.value;
    localStorage.phone = phone.value;
    document.write("Name:");
    document.write(localStorage.name);
    document.write("Email:");
    document.write(localStorage.email);
    document.write("\n","Password:");
    document.write(localStorage.password);
    document.write("\n","Phone:");
    document.write(localStorage.number);
});

