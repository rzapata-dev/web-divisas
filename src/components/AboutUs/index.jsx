
import './styles.css';
import { Link } from 'react-router-dom';



const AboutUs = () => {
    return (
        <>
          <div className="AboutUs__Container">

          <div className='AboutUs__Content'>
            <div className='AboutUs__Text'>
                <div className="AboutUs__heading">¿QUIÉNES SOMOS?</div>
                <div className="AboutUs__tagline">Cambiamos más que divisas, conectamos oportunidades</div>

                <span>Desde 1997</span>
                <p><strong>J & R Dólares y Euros</strong> va más allá del intercambio de monedas: construimos      puentes  hacia el crecimiento y las oportunidades. 
                        Desde nuestra fundación en 1997, nos hemos comprometido a servir a nuestra comunidad local con dedicación, priorizando la confianza, el servicio personalizado y las interacciones cara a cara para satisfacer tus necesidades de cambio de divisas.
                        Nuestra misión es simple: ofrecer soluciones seguras, eficientes y sin complicaciones mientras fortalecemos conexiones significativas. En J & R Dólares y Euros, “Cambiamos más que divisas, conectamos oportunidades” es más que un lema: es nuestra promesa para ti.</p>
                    <Link className="nav__link"  to="/whoami">MÁS DETALLES</Link>
            </div>
            </div>

           <img className='About__img' src='../../../src/assets/images/home/home_about_01.jpg' alt="Descripción" />
            
            
        </div>
        </>
    );

};

export default AboutUs;