document.addEventListener('DOMContentLoaded', handleForm);

function handleForm() {
    const form = document.getElementById('register-form');
    form.addEventListener('submit', handleSubmit);
}

async function handleSubmit(e) {
    e.preventDefault();
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user,
            password,
            email
        })
    })
    alert("Esuario registrado con exito!!!")
    location.href = 'login.html';
}

