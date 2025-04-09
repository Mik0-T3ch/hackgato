
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simula una validación (puedes cambiar esto por una llamada a servidor)
    const userEmail = "usuario@gato.com";
    const userPassword = "1234";

    if (email === userEmail && password === userPassword) {
      alert("Inicio de sesión exitoso ✅");
      // Redirigir al usuario, por ejemplo:
      window.location.href = "dashboard.html";
    } else {
      alert("Correo o contraseña incorrectos ❌");
    }
  });

