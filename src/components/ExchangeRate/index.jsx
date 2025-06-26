
import './styles.css';
import { exchangeCurrencies } from './rates';  

const ExchangeRate = () => {
  return (
    <div className="exchange-container">
      <div className="exchange-header-image">
        <div className="exchange-overlay">
          <h4>Divisas</h4>
        </div>
      </div>

      <div className="exchange-content">
        <div className="exchange-title">
          <h3>Monedas disponibles</h3>
        </div>

        <div className="exchange-list">
          {exchangeCurrencies.map((currency, index) => (
            <div className="exchange-item" key={index}>
              <div className="exchange-image">
                <img src={currency.original} alt={`currency-${index}`} />
              </div>
             
              <div className="exchange-content-list">
                <h4>{currency.title}</h4>
                <span>{currency.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExchangeRate;
