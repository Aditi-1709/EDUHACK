import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerForm from "../components/ContainerForm";
import styles from "./EditProfile.module.css";

const EditProfile = () => {
  const navigate = useNavigate();

  const onBUTTONTextClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onIconlyBoldArrowLeftClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <div className={styles.editProfile}>
      <img className={styles.editProfileChild} alt="" src="/ellipse-171.svg" />
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
        iconIds="16x16x1677655748"
        iconIdsArray="16x16x1492236368"
        iconIdsString="16x16x571039694"
        iconIdsList="16x16x-1425508649"
        iconDimensions="24x24x-1711422136"
        iconIdsString2="16x16x294728777"
        newIconId="submit"
        propCursor="pointer"
        onBUTTONTextClick={onBUTTONTextClick}
      />
      <div className={styles.bigOutline}>
        <div className={styles.value}>
          <div className={styles.enterHere}>Paschim vihar ,New Delhi</div>
          <img className={styles.cancelIcon} alt="" src="/cancel5.svg" />
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
            <img className={styles.cancelIcon} alt="" src="/cancel6.svg" />
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
        <div className={styles.october1}>Edit Profile</div>
      </div>
      <img
        className={styles.iconlyboldarrowLeft}
        alt=""
        src="/iconlyboldarrow--left2.svg"
        onClick={onIconlyBoldArrowLeftClick}
      />
    </div>
  );
};

export default EditProfile;
