import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import ExchangeRate from './components/ExchangeRate';
import Questions from './components/Questions';
import Footer from './components/Footer';
import WhoAmI from './components/WhoAmI';
import Contact from './components/Contact';
import { LoadScript } from '@react-google-maps/api';

function App() {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <Router>
        <Header /> 

        <Routes>
          <Route path="/" element={<Main />} /> 
          <Route path="/exchange-rate" element={<ExchangeRate />} /> 
          <Route path="/whoami" element={<WhoAmI />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/questions" element={<Questions />} /> 
        </Routes>

        <Footer />  
      </Router>
    </LoadScript>
  );
}

export default App;
