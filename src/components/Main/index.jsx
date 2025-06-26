
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import AboutUs from '../AboutUs'
import Services from '../Services';

import './styles.css';
import sliderHome1 from '../../../src/assets/images/home/slider_home_01.webp';
import sliderHome2 from '../../../src/assets/images/home/slider_home_02.webp';
import sliderHome3 from '../../../src/assets/images/home/slider_home_03.webp';

const images = [
    { original: sliderHome1, thumbnail: sliderHome1, originalAlt: 'Billetes de euro representando moneda europea', thumbnailAlt: 'Miniatura de billetes de euro', },
    { original: sliderHome2, thumbnail: sliderHome2, originalAlt: 'Billetes de euro y dólares simbolizando intercambio de divisas', thumbnailAlt: 'Miniatura de euros y dólares', },
    { original: sliderHome3, thumbnail: sliderHome3, originalAlt: 'Globo terráqueo indicando transacciones internacionales', thumbnailAlt: 'Miniatura de un globo terráqueo', },  
];


const Main = () => {
    return (
      <div>
        <div className="main__container">
        <div className="custom-gallery">
          <ImageGallery 
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={false}
          />
          <div className="text-overlay">
            <p>Cambiamos más que divisas, conectamos oportunidades</p>
          </div>
        </div>
      </div>

      <AboutUs /> 
      <Services /> 

      </div>


    );
  };
  

export default Main;
