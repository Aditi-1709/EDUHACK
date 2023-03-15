import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
  const navigate = useNavigate();

  const onNOTIFYTextClick = useCallback(() => {
    navigate("/get-started");
  }, [navigate]);

  return (
    <div className={styles.logo}>
      <div className={styles.getStartedParent}>
        <div className={styles.getStarted} />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.timeStyleParent}>
              <div className={styles.timeStyle}>
                <div className={styles.batteryParent}>
                  <div className={styles.battery}>
                    <div className={styles.capacity} />
                    <img className={styles.capIcon} alt="" src="/cap.svg" />
                  </div>
                  <img
                    className={styles.cellularConnectionIcon}
                    alt=""
                    src="/cellular-connection.svg"
                  />
                  <div className={styles.time}>14:52</div>
                </div>
              </div>
              <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
            </div>
            <div className={styles.notify} onClick={onNOTIFYTextClick}>
              NOTIFY
            </div>
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
