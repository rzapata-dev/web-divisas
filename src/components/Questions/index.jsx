// se añadió importación de estilos CSS
import "./styles.css";
import React, { useState } from "react";

// se añadió componente funcional Questions
const Questions = () => {
  // se añadió useState para manejar el estado de preguntas activas
  const [activeIndices, setActiveIndices] = useState([]);

  // se añadió función para abrir o cerrar preguntas del acordeón
  const toggleAccordion = (index) => {
    if (activeIndices.includes(index)) {
      // si ya está activa, se elimina del array
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      // si no está activa, se añade al array
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="Questions__Container">
      {/* se añadió sección de imagen superior con texto superpuesto */}
      <div className="Questions__Image">
        <div className="Question__OverlayText">
          <h4>Preguntas</h4>
        </div>
      </div>

      {/* se añadió sección de contenido principal */}
      <div className="Questions__Content">
        {/* se añadió texto introductorio de preguntas frecuentes */}
        <div className="Questions__IntroWrapper">
          <div className="Questions__Intro">
            <div className="Questions__Titule">
              <p>
                Estas son algunas de las preguntas más frecuentes de nuestros
                clientes. Si tu pregunta no se encuentra entre estas, llámanos
                o escríbenos para resolver las dudas y/o preguntas que puedas
                tener.
              </p>
            </div>
          </div>
        </div>

        {/* se añadió contenedor de acordeones */}
        <div className="acordeon_contenedor">
          {[
            {
              question: "¿Dónde se encuentran y cuál es su horario de atención?",
              answer:
                "Nos ubicamos en Av. Grau N° 602-C, Barranco, justo al frente de Inversiones La Cruz. Nuestro horario de atención es de lunes a viernes de 8:00 am a 6:30 pm y los sábados de 8:00 am a 3:00 pm."
            },
            {
              question: "Que divisas cambian?",
              answer:
                "Realizamos cambios en más de 15 divisas, incluyendo el dólar estadounidense, el euro, el boliviano, el dólar australiano, el dólar canadiense, el franco suizo, el peso argentino, el peso chileno, el peso colombiano, el peso mexicano, el real brasileño, el rublo ruso, el won surcoreano, el yen japonés y el yuan chino, entre otros. Sujeto a consulta previa."
            },
            {
              question: "Que divisas NO cambian?",
              answer:
                "Por el momento, no cambiamos bolívares venezolanos. Nos reservamos el derecho de no cambiar ciertas divisas."
            },
            {
              question: "Compran o venden billetes de 500 Euros",
              answer:
                "Acorde a las normas prudenciales que regulan las empresas del sector, no se acepta billetes con la denominación de 500 euros."
            },
            {
              question: "Tengo otras consultas, Como me comunico con ustedes?",
              answer:
                "Puede llamarnos o escribirmos por WhatsApp al (51) 955 503 668."
            },
            {
              question: "¿EXISTE PROMOCIONES/MEJORAS EN EL SERVICIO DE INTERCAMBIO DE DIVISAS?",
              answer:
                "Sí, puedes comunicarte con nosotros para solicitar un tipo de cambio personalizado."
            }
          ].map((item) => (
         
            <div className="acordin_div" key={item.question}>
              <button
                className={`accordion ${
                  activeIndices.includes(item.question) ? "active" : ""
                }`}
                onClick={() => toggleAccordion(item.question)} // se añadió evento para abrir/cerrar acordeón
                aria-expanded={activeIndices.includes(item.question)} // se añadió accesibilidad
              >
                {item.question}
              </button>

              {/* se añadió condición para mostrar u ocultar respuesta */}
              <div
                className={`panel ${
                  activeIndices.includes(item.question) ? "show" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
