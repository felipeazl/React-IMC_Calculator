import styles from "./griditem.module.css";
import { Level } from "../../helpers/imc";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type Props = {
  data: Level;
};

export function GridItem({ data }: Props) {
  return (
    <div
      className={styles.gridItemMain}
      style={{ backgroundColor: data.color }}
    >
      <div className={styles.gridItemIcon}>
        {data.icon === "up" && <img src={upImage} alt="" width={30} />}
        {data.icon === "down" && <img src={downImage} alt="" width={30} />}
      </div>
      <div className={styles.gridItemTitle}>{data.title}</div>
      {data.calculateImc && (
        <div className={styles.gridItemCalculateImc}>
          Seu IMC é {data.calculateImc} kg/m²
        </div>
      )}
      <div className={styles.gridItemInfo}>
        <>
          IMC entre <strong>{data.imc[0]}</strong> e{" "}
          <strong>{data.imc[1]}</strong>
        </>
      </div>
    </div>
  );
}
