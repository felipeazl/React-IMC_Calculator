import { useState } from "react";
import styles from "./App.module.css";
import Logo from "./assets/powered.png";
import LeftArrow from "./assets/leftarrow.png";
import { GridItem } from "./components/GridItem";
import { levels, calculateIMC, Level } from "./helpers/imc";

export function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  function handleCalculateButton() {
    if (heightField && weightField) {
      setToShow(calculateIMC(heightField, weightField));
    } else {
      alert("Preencha todos os campos.");
    }
  }

  function handleBackButton() {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={Logo} alt="IMC Calculator" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial da Saúde para calcular o peso ideal de casa
            pessoa.
          </p>
          <input
            type="number"
            placeholder="Digite a sua altura. Ex.: 1.5 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex.: 75.3 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button
            onClick={handleCalculateButton}
            disabled={toShow ? true : false}
          >
            Calcular
          </button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} data={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={LeftArrow} alt="" width={25} />
              </div>
              <GridItem data={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
