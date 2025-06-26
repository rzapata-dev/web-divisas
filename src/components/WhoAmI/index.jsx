import "./styles.css";

import aboutImg1 from '../../../src/assets/images/whoami/about_01.jpg';
import aboutImg2 from '../../../src/assets/images/whoami/about_02.jpg';
import aboutImg3 from '../../../src/assets/images/whoami/about_03.jpg';
import aboutImg4 from '../../../src/assets/images/whoami/about_04.jpg';


const WhoAmI = () => {
  return (
    <>
      <div className="Who__Container">
        <div className="Who__Imagen">
          <div className="Who__OverlayText">
            <h4>¿Quienes somos?</h4>
          </div>
        </div>
        <div className="Who__content">
        <div className="Who__p"><p> <strong>¡Bienvenido a J & R Dólares y Euros!</strong> <br />
              Con más de 30 años de experiencia y raíces familiares, te ofrecemos un servicio cercano, seguro y transparente. Cambia soles, dólares o monedas extranjeras con la tranquilidad de saber que verificamos cada transacción con un sistema exclusivo de autenticación que respalda su validez. Además, te orientamos sobre el tipo de cambio y cómo reconocer billetes falsos. Aquí no solo haces un cambio: ganas confianza, asesoría y respaldo en cada visita.</p>
              </div>

          <div className="Who__titule"><h3>¿Por qué elegirnos?</h3></div>
          <div className="who__lista">
            <div className="who__item">
              <div className="who__item_image">
                <img src={aboutImg1} alt="Dos manos estrechándose, simbolizando confianza y servicio desde 1996"/>
              </div>
              <div className="who__item__content">
                <h4>Somos dignos de confianza</h4>
                <span>Excelente servicio desde 1996</span>
              </div>
            </div>

            <div className="who__item">
              <div className="who__item_image">
                <img src={aboutImg2} alt="Representación de experiencia y confianza en servicios de cambio de divisas" />
              </div>
              <div className="who__item__content">
                <h4>Experiencia que cuenta</h4>
                <span>Más de 30 años ofreciendo confianza y calidad</span>
              </div>
            </div>

            <div className="who__item">
              <div className="who__item_image">
                <img src={aboutImg3} alt="Atención personalizada en cambio de divisas, servicio adaptado a cada cliente" />
              </div>
              <div className="who__item__content">
                <h4>Servicio a tu medida</h4>
                <span>Cada cliente es único, cada servicio es excepcional</span>
              </div>
            </div>

            <div className="who__item">
              <div className="who__item_image">
                <img src={aboutImg4} alt="Cambio de divisas rápido y seguro, garantizando confianza en cada operación" />
              </div>
              <div className="who__item__content">
                <h4>Rápido y confiable</h4>
                <span>Cambio ágil, seguro y sin complicaciones</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default WhoAmI;
