# 💱 Casa de Cambio J\&R - Sitio Web

Sitio web informativo, moderno y responsivo para una casa de cambio ubicada en **Barranco, Lima - Perú**. Este proyecto fue desarrollado con el enfoque de brindar una experiencia clara, rápida y accesible para los usuarios que buscan información sobre tipos de cambio, ubicación y contacto.










---

## 🚀 Demo en Producción

🔗 [Ver sitio en Vercel](https://web-divisas.vercel.app/)
🔗 [Repositorio en GitHub](https://github.com/rzapata-dev/web-divisas)

---

## 💪 Tecnologías utilizadas

* **React 19** con Vite
* **React Router DOM**
* **React Google reCAPTCHA**
* **React Toastify** para notificaciones
* **Google Maps** con `@react-google-maps/api`
* **EmailJS** para envío de formularios
* **CSS personalizado** (sin frameworks externos)
* **Despliegue en Vercel**

---

## 📱 Características

* 💡 Diseño limpio y responsivo
* 📌 Secciones informativas: ¿Quiénes somos?, Preguntas frecuentes, Contacto
* 🌐 Integración con Google Maps para ubicación en tiempo real
* 🛡️ Protección con Google reCAPTCHA v2
* ✅ Formulario de contacto funcional con validación
* 📱 Adaptado para móviles y tablets
* ⚡ Optimizado para rendimiento (Vite + Lighthouse)
* ⏱️ **Temporizador de seguridad**: se incorporó un contador de **15 segundos** entre envíos del formulario para evitar spam. El contador tiene estilos visuales: inicia en **rojo intenso** y cambia progresivamente hasta **amarillo** , brindando retroalimentación clara al usuario.
* 🔍 **Mejoras SEO**: Se realizaron ajustes siguiendo las recomendaciones de Lighthouse para mejorar la accesibilidad, el orden de encabezados, el contraste de colores, los atributos `alt` en imágenes, entre otros detalles clave para un posicionamiento eficiente.

---

## 📁 Estructura del Proyecto

```
src/
├── assets/          # Imágenes y recursos
├── components/      # Componentes reutilizables
│   ├── AboutUs/
│   ├── Contact/
│   ├── ExchangeRate/
│   ├── Footer/
│   ├── Header/
│   ├── Main/
│   ├── Questions/
│   ├── Services/
│   └── WhoAmI/
├── styles/          # Estilos generales
├── App.jsx          # Enrutamiento principal
└── main.jsx         # Entrada de la aplicación
```

---

## 🔐 Variables de entorno

Para utilizar reCAPTCHA y EmailJS debes crear un archivo `.env` con tus claves:

## Esto seria un ejemplo aproximado

```env
VITE_RECAPTCHA_KEY=tu_clave_recaptcha
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

> ⚠️ Este archivo es solo un ejemplo, el cual tu debes reemplazarlo con tus propias keys

---

## 📷 Capturas de pantalla

<!-- Agrega aquí capturas en formato imagen o gif para hacer tu README más visual -->

![responsive](https://github.com/user-attachments/assets/732886a4-b50b-40d9-af29-2eebac2c4f8e)

---

## 🤝 Contribuciones

Este proyecto es personal, pero estaré encantado de recibir feedback o sugerencias.

---

## 📬 Contacto

Richard Zapata
📍 Lima, Perú
📧 [Correo](mailto:zapatarichard08@gmail.com)
🌐 [Portafolio](https://web-portafoliov2.vercel.app/)
