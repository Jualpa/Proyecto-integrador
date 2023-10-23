function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validación de campos obligatorios
    if (nombre.trim() === "") {
      alert("Por favor, ingrese su nombre");
      return false; 
    }

    if (apellido.trim() === "") {
     alert("Por favor, ingrese su apellido");
     return false; 
   }

   if (email.trim() === "") {
       alert("Por favor, ingrese su correo electrónico");
       return false; 
      }

   if (mensaje.trim() === "") {
       alert("Por favor, ingrese un mensaje");
       return false; 
      }

    /* Validación del formato de correo electrónico*/
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      alert("Por favor, ingrese una dirección de correo electrónico válida.");
      return false; 
    }
    
    alert("Formulario enviado Exitosamente")
    return true;
  }
 
 
 