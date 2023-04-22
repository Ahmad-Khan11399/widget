import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = process.dotenv.API_KEY;
const CurrencyWidget = (props) => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [currencyData, setCurrencyData] = useState("");

  const fetchCurrencyData = async (currency) => {
    try {
      const response = await axios.get(
        `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`
      );
      setCurrencyData(response.data.rates[currency]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCurrencyChange = (event) => {
    const currency = event.target.value;
    setSelectedCurrency(currency);
    fetchCurrencyData(currency);
  };

  return (
    <div className="currency">
      <strong>
        <label className="curr-menu">Select a currency</label>
      </strong>
      <select value={selectedCurrency || ''} onChange={handleCurrencyChange}>

        <option value="">Select a currency</option>
        <option value="EUR">Euro</option>
        <option value="JPY">Japanese Yen</option>
        <option value="GBP">British Pound</option>
        <option value="INR">Indian Rupees</option>
        <option value="AED">UAE Dirham</option>
        <option value="CAD">Canadian Dollar</option>
        <option value="RUB">Russian Ruble</option>
      </select>
      {currencyData !== null && (
        <h3>
          1 USD = {isNaN(parseInt(currencyData)) ? "" : parseFloat(currencyData).toFixed(3)} {selectedCurrency}
        </h3>
      )}
    </div>
  );
};

export default CurrencyWidget;
