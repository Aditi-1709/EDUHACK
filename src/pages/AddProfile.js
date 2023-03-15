import { useCallback } from "react";
import ContainerForm from "../components/ContainerForm";
import { useNavigate } from "react-router-dom";
import styles from "./AddProfile.module.css";

const AddProfile = () => {
  const navigate = useNavigate();

  const onIconlyBoldArrowLeftClick = useCallback(() => {
    navigate("/edit-profile");
  }, [navigate]);

  return (
    <div className={styles.addProfile}>
      <img className={styles.addProfileChild} alt="" src="/ellipse-172.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      <div className={styles.header}>
        <div className={styles.battery}>
          <div className={styles.capacity} />
          <img className={styles.capIcon} alt="" src="/cap2.svg" />
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
      <ContainerForm
        iconIds="16x16x874110831"
        iconIdsArray="16x16x157266299"
        iconIdsString="16x16x-1778609871"
        iconIdsList="16x16x-1880388670"
        iconDimensions="24x24x1172536798"
        iconIdsString2="16x16x-1881153286"
        newIconId="ADD NEW DETAIL+"
      />
      <div className={styles.bigOutline}>
        <div className={styles.value}>
          <div className={styles.enterHere}>Paschim vihar ,New Delhi</div>
          <img className={styles.cancelIcon} alt="" src="/cancel12.svg" />
        </div>
        <div className={styles.bigOutlineChild} />
        <div className={styles.label}>
          <div className={styles.labelChild} />
          <div className={styles.labelWrapper}>
            <div className={styles.label1}>Address</div>
          </div>
        </div>
      </div>
      <div className={styles.bigOutlineParent}>
        <div className={styles.bigOutline1}>
          <div className={styles.value}>
            <div className={styles.enterHere}> 899899889</div>
            <img className={styles.cancelIcon} alt="" src="/cancel13.svg" />
          </div>
          <div className={styles.bigOutlineChild} />
          <div className={styles.label}>
            <div className={styles.labelChild} />
            <div className={styles.labelWrapper}>
              <div className={styles.label1}> Phone number</div>
            </div>
          </div>
        </div>
        <img className={styles.usUnitedStatesOfAmericaUs} alt="" />
        <img className={styles.image193Icon} alt="" src="/image-193@2x.png" />
      </div>
      <div className={styles.october}>
        <div className={styles.october1}>User Profile</div>
      </div>
      <img
        className={styles.iconlyboldarrowLeft}
        alt=""
        src="/iconlyboldarrow--left3.svg"
        onClick={onIconlyBoldArrowLeftClick}
      />
    </div>
  );
};

export default AddProfile;
