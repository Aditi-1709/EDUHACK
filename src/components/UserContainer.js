import { memo } from "react";
import styles from "./UserContainer.module.css";

const UserContainer = memo(() => {
  return (
    <div className={styles.user}>
      <img className={styles.userChild} alt="" src="/ellipse-1.svg" />
      <div className={styles.shambhaviMishraParent}>
        <div className={styles.shambhaviMishra}>Shambhavi Mishra</div>
        <img className={styles.maskGroup1} alt="" src="/mask-group-1@2x.png" />
      </div>
    </div>
  );
});

export default UserContainer;
