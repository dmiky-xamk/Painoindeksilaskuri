import { useState } from "react";
import BmiResult from "./components/BmiResult";
import BmiForm from "./components/BmiForm";
import "./App.css";

function App() {
  const [bmiCalculated, setBmiCalculated] = useState("");

  // Asettaa formin palauttaman painoindeksin bmiCalculated muuttujaan
  const calculatedBmiHandler = (bmi) => {
    setBmiCalculated(bmi);
  };

  return (
    <div className="main">
      {/* Formille oma komponentti */}
      {/* Form palauttaa lasketun painoindeksin */}
      <BmiForm onBmiCalculated={calculatedBmiHandler} />

      {/* Tuloksille oma komponentti */}
      {/* BmiResult laskee painoindeksin avulla kuvauksen ja tulostaa sen mukaan värit*/}
      <BmiResult bmi={bmiCalculated} />
    </div>
  );
}

export default App;
