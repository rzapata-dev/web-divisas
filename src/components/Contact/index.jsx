import Form from "./Form"; 
import MapComponent from "../Contact/MapComponent"; 
import "./styles.css";

import contactimg1 from '../../../src/assets/images/contact/contact_01.png';
import contactimg2 from '../../../src/assets/images/contact/contact_02.png';
import contactimg3 from '../../../src/assets/images/contact/contact_03.png';

const Contact = () => {
  return (
    <div>
       <div className="contact-container">
        <div className="contact-header">
          <div className="contact-header-text">
            <h4>Contáctenos</h4>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-title">
            Llena tus datos y nos estaremos comunicando contigo a la brevedad
          </div>

          <div className="contact-info">
            <div className="contact-form-wrapper">
              <Form />
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-detail-wrapper">
                  <div className="contact-icon"><img src={contactimg1} alt="Ubicación" /></div>
                  <div className="contact-text">
                    <h3>Ubícanos</h3>
                    <p>Av. Grau N° 602-C Barranco <br />Al frente de Inversiones La Cruz</p>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-detail-wrapper">
                  <div className="contact-icon"><img src={contactimg2} alt="Teléfono" /></div>
                  <div className="contact-text">
                    <h3>Informes</h3>
                    <p>
                      <a href="https://wa.me/51955503668" target="_blank" rel="noopener noreferrer">
                        (51) 955 503 668
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-detail-wrapper">
                  <div className="contact-icon"><img src={contactimg3} alt="Correo" /></div>
                  <div className="contact-text">
                    <h3>Escríbenos</h3>
                    <p><a href="mailto:cas.bar.jr@gmail.com">cas.bar.jr@gmail.com</a></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="contact-map">
          <MapComponent />
        </div>
      </div>
       
    </div>
    
    
  );
};

export default Contact;