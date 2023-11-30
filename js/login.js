const email = document.getElementById("login-email")
const pwd = document.getElementById("login-pwd")
const login = document.getElementById("login")


login.addEventListener("click", async () => {
    const res = await fetch("http://localhost:3000/login", {
        headers: {
            "content-Type": "aplication/json"
        },
    })
    const userData = await res.json();
    console.log(userData);

    const registeredUser = userData.find(isRegistred)
    if (registeredUser) {
        if (pwd.value == registeredUser.password) {
            location.href = 'index.html';
            localStorage.setItem("logedUser", registeredUser.user);
        } else {
            alert("Usuario o contraseña equivocada!!")
        }
        console.log(registeredUser);
    } else {
        alert("Usuario no registrado!!")
    }

})


function isRegistred(users) {
    return users.email === email.value;
}