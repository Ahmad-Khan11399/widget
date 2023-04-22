import {useState} from "react";
import App from "./App.js";
function Intro() {
  const [showButton, setShowButton] = useState(true);

  function handleButtonClick() {
    setShowButton(false);
  }
  if(!showButton)
  {
    return <App />
  }
  return (
    <div className="intro">
        <h1 className="big-heading">Widget App</h1>
      {showButton && (
        <button className="button" variant="secondary" size="lg" onClick={handleButtonClick}>Get Started</button>
      )}

    </div>
  );
}
export default Intro;
