import "./BmiResult.css";

// Enum väreille
const Colors = Object.freeze({
  RED: "red",
  YELLOW: "yellow",
  GREEN: "green",

  CYAN: "#00ffff",
  BLUE: "#0000ff",
  PURPLE: "#a6009b",

  GREY: "#777",
  BLACK: "#000",
});

// Palauttaa komponentin jonka taustaväri sekä fontin väri muutettu painoindeksin mukaan
function BmiResult(props) {
  // Näihin tulee palautettava taustaväri sekä fontin väri
  let bgColor = Colors.GREY;
  let fontColor = Colors.BLACK;

  // Ei haluta alussa mitään tekstiä
  let resultText = "";
  let description = "";

  if (props.bmi > 0) {
    resultText = "Painoindeksi on: ";
  }

  // Sairaalloinen alipaino
  if (props.bmi > 0 && props.bmi < 15) {
    bgColor = Colors.RED;
    fontColor = Colors.CYAN;
    description = "Sairaalloinen alipaino ";
  }

  // Merkittävä alipaino
  if (props.bmi >= 15 && props.bmi < 17) {
    bgColor = Colors.RED;
    fontColor = Colors.CYAN;
    description = "Merkittävä alipaino ";
  }

  // Normaalia alhaisempi paino
  else if (props.bmi >= 17 && props.bmi < 18.5) {
    bgColor = Colors.YELLOW;
    fontColor = Colors.BLUE;
    description = "Normaalia alhaisempi paino";
  }

  // Normaali paino
  else if (props.bmi >= 18.5 && props.bmi < 25) {
    bgColor = Colors.GREEN;
    fontColor = Colors.PURPLE;
    description = "Normaali paino";
  }

  // Lievä ylipaino
  else if (props.bmi >= 25 && props.bmi < 30) {
    bgColor = Colors.YELLOW;
    fontColor = Colors.BLUE;
    description = "Lievä ylipaino";
  }

  // Merkittävä ylipaino
  else if (props.bmi >= 30 && props.bmi < 35) {
    bgColor = Colors.YELLOW;
    fontColor = Colors.BLUE;
    description = "Merkittävä ylipaino";
  }

  // Vaikea ylipaino
  else if (props.bmi >= 35 && props.bmi < 40) {
    bgColor = Colors.YELLOW;
    fontColor = Colors.BLUE;
    description = "Vaikea ylipaino";
  }

  // Sairaalloinen ylipaino
  else if (props.bmi >= 40) {
    bgColor = Colors.RED;
    fontColor = Colors.CYAN;
    description = "Sairaalloinen ylipaino ";
  }

  return (
    <div
      className="bmi-result"
      style={{ backgroundColor: bgColor, color: fontColor }}
    >
      <p>{resultText + props.bmi}</p>
      <p>{description}</p>
    </div>
  );
}

export default BmiResult;
