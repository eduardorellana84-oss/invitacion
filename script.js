// ======================================
// CUENTA REGRESIVA
// ======================================

// CAMBIA ESTA FECHA POR LA FECHA DEL EVENTO
const fechaEvento = new Date(
    "September 12, 2026 15:00:00"
).getTime();


function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;


    // Cuando el evento ya comenzó
    if (diferencia <= 0) {

        document.querySelector(".contador").innerHTML =
            "<h3>🎉 ¡El evento ha comenzado!</h3>";

        return;
    }


    // Cálculos de tiempo
    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60)) /
        1000
    );


    // Mostrar valores con dos dígitos
    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}


// Actualizar inmediatamente
actualizarContador();

// Actualizar cada segundo
setInterval(actualizarContador, 1000);



// ======================================
// FORMULARIO DE CONFIRMACIÓN
// ======================================

const formulario = document.getElementById(
    "formulario-rsvp"
);

const respuesta = document.getElementById(
    "respuesta"
);


formulario.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const nombre =
            document.getElementById("nombre").value;

        const personas =
            document.getElementById("personas").value;

        const asistencia =
            document.querySelector(
                'input[name="asistencia"]:checked'
            ).value;


        respuesta.innerHTML =
            `✨ Gracias, <strong>${nombre}</strong>.<br>
            Tu respuesta ha sido registrada:<br>
            <strong>${asistencia}</strong><br>
            Número de personas: ${personas}`;


        formulario.reset();


        // Llevar la pantalla hacia el mensaje
        respuesta.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
);