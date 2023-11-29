document.addEventListener('DOMContentLoaded', function () {
    const registroForm = document.getElementById('registroForm');

    registroForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const username = document.querySelector('input[name="username"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const telefono = document.getElementById('telefono').value;

        const usuario = {
            username: username,
            email: email,
            telefono: telefono,
        };

        fetch('http://localhost:8080/Cine/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
        })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                if (data.includes("Registro exitoso")) {
                    alert('¡Registro exitoso!');
                } else {
                    alert('Error en el registro. Por favor, inténtelo de nuevo.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
});