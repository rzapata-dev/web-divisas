
import './styles.css';
import { Link } from 'react-router-dom';

import aboutUsImg1 from '../../../src/assets/images/home/home_about_01.jpg';

const AboutUs = () => {
    return (
        <>
          <div className="AboutUs__Container">

          <div className='AboutUs__Content'>
            <div className='AboutUs__Text'>
                <div className="AboutUs__heading">¿QUIÉNES SOMOS?</div>
                <div className="AboutUs__tagline">Cambiamos más que divisas, conectamos oportunidades</div>

                <span>Desde 1996</span>
                <p> Fundada en 1996 por dos hermanos, J & R Dólares y Euros nace con una misión clara: inspirar confianza y brindar seguridad en cada transacción. Más que una casa de cambio, somos una empresa con raíces familiares y un compromiso firme con la transparencia, el respeto y la atención personalizada. Cada operación se valida mediante protocolos únicos de autenticación, diseñados para garantizar la legitimidad de los billetes y la tranquilidad de quienes nos eligen. Además de ofrecer tipos de cambio competitivos, educamos a nuestros clientes para reconocer billetes falsos y tomar decisiones informadas frente al comportamiento del mercado. Estamos certificados por la SBS y cumplimos con los más altos estándares legales y operativos. </p>
                    <Link className="nav__link"  to="/whoami">MÁS DETALLES</Link>
            </div>
            </div>

           <img className='About__img' src={aboutUsImg1} alt="Descripción dos manos estrechandoze entre si" />
            
            
        </div>
        </>
    );

};

export default AboutUs;