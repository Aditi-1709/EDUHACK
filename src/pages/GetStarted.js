import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./GetStarted.module.css";

const GetStarted = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onIconlyBoldArrowLeftClick = useCallback(() => {
    navigate("/add-profile");
  }, [navigate]);

  return (
    <div className={styles.getStarted}>
      <div className={styles.frameParent}>
        <div className={styles.notifyParent}>
          <div className={styles.notify}>NOTIFY</div>
          <img className={styles.group821} alt="" src="/group-82-1@2x.png" />
          <div className={styles.frameGroup}>
            <div className={styles.worldsSafestAndLargestDigWrapper}>
              <div className={styles.worldsSafestAndContainer}>
                <p className={styles.worldsSafestAnd}>World’s Safest And</p>
                <p className={styles.worldsSafestAnd}>
                  Largest Digital Notebook
                </p>
              </div>
            </div>
            <div
              className={styles.alreadyHaveAn}
              onClick={onAlreadyHaveAnClick}
            >
              Already have an account?
            </div>
            <div className={styles.thisProductiveToolContainer}>
              <p className={styles.worldsSafestAnd}>
                This productive tool is designed to help
              </p>
              <p
                className={styles.worldsSafestAnd}
              >{`you better manage your task `}</p>
              <p className={styles.worldsSafestAnd}>
                project-wise conveniently!
              </p>
            </div>
            <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.batteryParent}>
            <div className={styles.battery}>
              <div className={styles.capacity} />
              <img className={styles.capIcon} alt="" src="/cap4.svg" />
            </div>
            <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
            <img
              className={styles.cellularConnectionIcon}
              alt=""
              src="/cellular-connection1.svg"
            />
            <div className={styles.timeStyle}>
              <div className={styles.time}>14:52</div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <Link className={styles.vectorWrapper} to="/frame-1444">
                <img className={styles.vectorIcon} alt="" src="/vector8.svg" />
              </Link>
            </div>
          </div>
          <Link className={styles.letsStartParent} to="/add-profile">
            <div className={styles.letsStart}>Let’s Start</div>
            <img
              className={styles.iconlyboldarrowLeft}
              alt=""
              src="/iconlyboldarrow--left5.svg"
              onClick={onIconlyBoldArrowLeftClick}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
