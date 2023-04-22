import React, { useState } from 'react';
import './App.css';
import CurrencyWidget from "./currwid.jsx"
import WeatherWidget from "./weather.jsx"

 function App() {
   const [selectedOption, setSelectedOption] = useState(null);

     const handleOptionChange = (event) => {
       setSelectedOption(event.target.value);
     };

     return (
       <div  className="App container-fluid">
         <select value={selectedOption} onChange={handleOptionChange}>
           <option value="">Select an option</option>
           <option value="componentOne">Weather Widget</option>
           <option value="componentTwo">Currency Widget</option>
           <option value="both">Both</option>
         </select>
         {selectedOption === 'componentOne' && <WeatherWidget />}
         {selectedOption === 'componentTwo' && <CurrencyWidget />}
         {selectedOption === 'both' && (
           <div>
             <WeatherWidget />
             <CurrencyWidget />
           </div>
         )}
       </div>
     );

}

export default App;
