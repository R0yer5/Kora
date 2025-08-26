document.addEventListener('DOMContentLoaded', () => {

    // Respuestas predefinidas para cada pregunta
    const respuestas = {
        respuesta1: "El público objetivo principal son jóvenes y adultos, de 18 a 35 años, con un estilo de vida activo y consciente de la salud, que buscan una alternativa natural y sin químicos a las bebidas energizantes tradicionales.",
        respuesta2: "Se utilizan ingredientes naturales como maca, jengibre y extracto de té verde, conocidos por sus propiedades energizantes, antiinflamatorias y antioxidantes. A diferencia de otros productos, Kora no utiliza taurina ni colorantes artificiales.",
        respuesta3: "Kora se diferencia por su formulación 100% natural, sin aditivos artificiales. Está diseñada para energizar sin los efectos negativos como la taquicardia o la ansiedad, y además, contiene ingredientes que mejoran la digestión y calman el estómago.",
        respuesta4: "El proceso de producción de Kora es artesanal y se realiza en lotes pequeños para asegurar la máxima frescura. Los ingredientes son cuidadosamente seleccionados y la bebida se envasa en botellas de vidrio reutilizables para mantener la calidad y el compromiso con el medio ambiente.",
        respuesta5: "Las estrategias de marketing se centrarán en redes sociales como Instagram y TikTok, colaborando con influencers de salud y fitness. La distribución inicial será a través de tiendas de productos orgánicos, gimnasios y un canal de venta en línea propio para llegar directamente al público.",
        respuesta6: "Para asegurar la legalidad, el proyecto ha realizado una investigación exhaustiva de las regulaciones de la industria alimentaria en la región. Se obtendrán los permisos sanitarios y de calidad necesarios antes de iniciar la producción a gran escala, garantizando el cumplimiento de todas las normativas.",
        respuesta7: "El plan financiero incluye una inversión inicial para la producción de un lote piloto, que será financiada con capital propio. Se buscará una segunda ronda de inversión una vez que se valide el modelo de negocio y se demuestre la viabilidad del producto en el mercado.",
        respuesta8: "El compromiso con la sostenibilidad se refleja en el uso de botellas de vidrio retornables y el abastecimiento de ingredientes de agricultores locales. Además, un porcentaje de las ganancias se destinará a proyectos de reforestación en la zona andina, promoviendo la responsabilidad social.",
        respuesta9: "Se planea innovar constantemente, explorando nuevos sabores con ingredientes andinos como aguaymanto y camu camu. A largo plazo, se proyecta diversificar la línea de productos con barras energéticas y otros snacks saludables bajo la marca Kora.",
        respuesta10: "La calidad se mantendrá mediante un estricto control de calidad en cada etapa de la producción, desde la selección de ingredientes hasta el envasado. Se realizarán pruebas de laboratorio regulares para asegurar la consistencia y la pureza del producto en cada lote.",
        respuesta11: "La competencia se gestionará a través de la diferenciación. Las ventajas competitivas son la propuesta de valor centrada en la salud y el bienestar, el enfoque en ingredientes locales andinos y el compromiso con la sostenibilidad y la responsabilidad social, elementos que la distinguen del resto del mercado."
    };

    // Referencias a los elementos del DOM
    const botonesRespuesta = document.querySelectorAll('.mostrar-respuesta');
    const modal = document.getElementById('modal');
    const textoRespuesta = document.getElementById('texto-respuesta');
    const botonCerrar = document.querySelector('.cerrar');

    // Evento para abrir el modal
    botonesRespuesta.forEach(boton => {
        boton.addEventListener('click', (event) => {
            const idRespuesta = event.target.dataset.respuesta;
            textoRespuesta.textContent = respuestas[idRespuesta];
            modal.style.display = 'block';
        });
    });

    // Evento para cerrar el modal
    botonCerrar.addEventListener('click', () => {
        modal.style.display = 'none';
    });


