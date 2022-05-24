import { useState } from "react";
import "./BmiForm.css";

function BmiForm(props) {
  const [enteredHeight, setEnteredHeight] = useState("");
  const [enteredWeight, setEnteredWeight] = useState("");

  // Setterit
  const heightChangeHandler = (event) => {
    setEnteredHeight(event.target.value);
  };

  const weightChangeHandler = (event) => {
    setEnteredWeight(event.target.value);
  };

  // Event handler
  const submitHandler = (event) => {
    // Jotta sivu ei päivity kun form lähetetään
    event.preventDefault();

    // Paino / Pituus^2
    const bmi = (enteredWeight / Math.pow(enteredHeight / 100, 2)).toFixed(2);

    // Alussa bmiFixed tyhjä merkkijono jotta tuloslaatikko pysyy tyhjänä
    // Lähetetään laskettu painoindeksi ylöspäin propilla annetun funktion kautta
    props.onBmiCalculated(Number(bmi));

    // Tyhjennetään syöttökentät
    setEnteredHeight("");
    setEnteredWeight("");
  };

  return (
    <form onSubmit={submitHandler} className="bmi-form">
      <label htmlFor="height">Pituus (cm):</label>
      <input
        onChange={heightChangeHandler}
        value={enteredHeight}
        className="bmi-input"
        type="number"
        name="height"
        id="height"
        min="1"
        required
      />

      <label htmlFor="weight">Paino (kg):</label>
      <input
        onChange={weightChangeHandler}
        value={enteredWeight}
        className="bmi-input"
        type="number"
        name="weight"
        id="weight"
        min="1"
        required
      />

      <button type="submit" className="bmi-button">
        Laske painoindeksi
      </button>
    </form>
  );
}

export default BmiForm;
