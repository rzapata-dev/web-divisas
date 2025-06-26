import './styles.css';

import serviceImg1 from '../../../src/assets/images/home/services_01.jpg';
import serviceImg2 from '../../../src/assets/images/home/services_02.jpg';
import serviceImg3 from '../../../src/assets/images/home/services_03.jpg';

const Services = () => {

    return (
        <>
          <div className='Services__division'>
          <div className='Services__Titulo'>
                <h2>Nuestros Servicios</h2>
                <h3>Más que un cambio, una conexión segura y confiable</h3>
            </div>
          </div>

          <div className='Services__container'>
            
            <div className='Services__Content'>
                <ul className='Services__List'>
                  <li className='Services__Item'>
                      <img src={serviceImg1} alt="Celular mostrando gráfico en tiempo real de divisas, representa tasas competitivas"/>
                      <h4>Tasas Competitivas</h4>
                  </li>
                  <li className='Services__Item'>
                      <img src={serviceImg2} alt="Billete de 200 euros con detalles visibles, simboliza seguridad en la verificación"/>
                      <h4>Seguridad impecable</h4>
                  </li>
                  <li className='Services__Item'>
                        <img src={serviceImg3} alt="Mujer con auriculares de call center, representa atención personalizada"/>
                        <h4>Asesoría personalizada</h4>
                  </li>
                </ul>
                <div className='Services__footer'>
                  <ul className='Services__footerList'>
                    <li className='Services__footerItem'> 
                      <div className='Services__footerText'>
                       
                          <p>Servicio confiable, claro y seguro. <br/> ¡La mejor experiencia en cambio de divisas!</p>
                      </div> 
                    </li>
                    <li className='Services__footerItem'> 
                      <div className='Services__footerText'>
                        
                          <p>Cada billete sellado es auténtico.<br/> ¡Confianza total en cada transacción!</p>
                      </div> 
                    </li>
                    <li className='Services__footerItem'> 
                      <div className='Services__footerText'>
                        
                          <p>Atención experta, cercana y confiable. <br/> ¡Siempre disponibles para ayudarte!</p>
                      </div> 
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </>
    );

};

export default Services;