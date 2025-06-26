import React, { useRef, useEffect, useState } from "react";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";

const Form = () => {

  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const form = useRef();
  const recaptchaRef = useRef(null);
  const recaptchaWidgetId = useRef(null);

  const [cooldown, setCooldown] = useState(0);
  const [isSending, setIsSending] = useState(false);

  // Leer cooldown desde localStorage al iniciar
  useEffect(() => {
    const savedCooldownEnd = localStorage.getItem("cooldownEnd");
    if (savedCooldownEnd) {
      const remaining = Math.floor((new Date(savedCooldownEnd) - new Date()) / 1000);
      if (remaining > 0) {
        setCooldown(remaining);
        setIsSending(true);
      } else {
        localStorage.removeItem("cooldownEnd");
      }
    }
  }, []);

  // Timer del cooldown (cuenta hacia atrás)
  useEffect(() => {
    let interval = null;
    if (cooldown > 0) {
      interval = setInterval(() => {
        setCooldown((prev) => {
          const next = prev - 1;
          if (next <= 0) {
            clearInterval(interval);
            setIsSending(false);
            localStorage.removeItem("cooldownEnd");
          }
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [cooldown]);

  // Renderizar reCAPTCHA
  useEffect(() => {
    const renderRecaptcha = () => {
      if (window.grecaptcha && recaptchaRef.current && recaptchaWidgetId.current === null) {
        recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
        });
      }
    };

    if (window.grecaptcha) {
      renderRecaptcha();
    } else {
      const interval = setInterval(() => {
        if (window.grecaptcha) {
          renderRecaptcha();
          clearInterval(interval);
        }
      }, 500);
    }
  }, []);

  // Envío del formulario
  const sendEmail = (e) => {
    e.preventDefault();

    const token = window.grecaptcha.getResponse(recaptchaWidgetId.current);
    if (!token) {
      toast.error("Por favor, verifica que no eres un robot.");
      return;
    }

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          toast.success( <div>
                              <strong>¡Gracias!</strong><br />
                                  <div>Tu mensaje fue enviado correctamente</div>
                          </div>);
          
          const cooldownDuration = 15;
          const cooldownEndTime = new Date(Date.now() + cooldownDuration * 1000);
          localStorage.setItem("cooldownEnd", cooldownEndTime.toISOString());

          setCooldown(cooldownDuration);
          setIsSending(true);

          window.grecaptcha.reset(recaptchaWidgetId.current);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form" autoComplete="off">
      {/* tus inputs... */}
      

      <div>
        <input 
        type="text" 
        id="name" 
        name="name" 
        placeholder="Nombres (*)" 
        required minLength={2}
         />
        <small>Min. 2 caracteres</small>
      </div>

      <div>
        <input 
        type="email" 
        id="email" 
        name="email" 
        placeholder="Correo electrónico" 
        required />
      </div>

      <div>
        <input 
        type="tel" 
        id="phone" 
        name="phone" 
        placeholder="Teléfono (*)" 
        pattern="[0-9]+"
        title="Solo se permiten números"
        required />
      </div>

      <div>
        <input 
        type="text" 
        id="empresa" 
        name="empresa" 
        placeholder="Empresa" />

      </div>

      <div>
        <textarea
          id="message"
          name="message"
          placeholder="Comentario (*)"
          required
          minLength={10}
          maxLength={500}
        ></textarea>
        <small>Min. 10 - Max. 500 caracteres</small>
      </div>

      <div>
        <small>(*) Campos obligatorios</small>
      </div>

      <div id="recaptcha-container" ref={recaptchaRef} className="recaptcha-wrapper"></div>

      <div className="button-container">
        <button type="submit" disabled={isSending} className="form-button">Enviar</button>
        {isSending && (
          <small
            style={{
              color: cooldown > 8 ? "red" : cooldown > 0 ? "orange" : "green",
              marginLeft: "10px",
            }}
          >
            Espera {cooldown}s...
          </small>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </form>
    
  );
};

export default Form;
