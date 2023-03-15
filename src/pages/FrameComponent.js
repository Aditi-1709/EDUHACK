import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserContainer from "../components/UserContainer";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer5Click = useCallback(() => {
    navigate("/edit-profile");
  }, [navigate]);

  const onFrameContainer14Click = useCallback(() => {
    navigate("/get-started");
  }, [navigate]);

  const onIconlyBoldArrowLeftClick = useCallback(() => {
    navigate("/recent-notes");
  }, [navigate]);

  return (
    <div className={styles.userProfileParent}>
      <div className={styles.userProfile}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-9.svg" />
          <div className={styles.profileOptions}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.awardWrapper}>
                  <img className={styles.awardIcon} alt="" src="/award.svg" />
                </div>
                <b className={styles.buyPremium}>Buy Premium</b>
              </div>
              <img
                className={styles.arrowsArrowLeft1}
                alt=""
                src="/arrows--arrowleft1.svg"
              />
            </div>
            <div
              className={styles.frameContainer}
              onClick={onFrameContainer5Click}
            >
              <div className={styles.frameDiv}>
                <div className={styles.awardWrapper}>
                  <img className={styles.awardIcon} alt="" src="/pencil.svg" />
                </div>
                <b className={styles.buyPremium}>Edit Profile</b>
              </div>
              <img
                className={styles.arrowsArrowLeft11}
                alt=""
                src="/arrows--arrowleft11.svg"
              />
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.awardWrapper}>
                  <img className={styles.awardIcon} alt="" src="/bell.svg" />
                </div>
                <b className={styles.buyPremium}>Notifications</b>
              </div>
              <img
                className={styles.arrowsArrowLeft1}
                alt=""
                src="/arrows--arrowleft12.svg"
              />
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.awardWrapper}>
                  <img
                    className={styles.awardIcon}
                    alt=""
                    src="/foldercheck.svg"
                  />
                </div>
                <b className={styles.buyPremium}>Security</b>
              </div>
              <img
                className={styles.arrowsArrowLeft1}
                alt=""
                src="/arrows--arrowleft13.svg"
              />
            </div>
            <div
              className={styles.frameParent5}
              onClick={onFrameContainer14Click}
            >
              <div className={styles.frameGroup}>
                <div className={styles.awardWrapper}>
                  <img className={styles.awardIcon} alt="" src="/logout.svg" />
                </div>
                <b className={styles.buyPremium}>Log Out</b>
              </div>
              <img
                className={styles.arrowsArrowLeft1}
                alt=""
                src="/arrows--arrowleft14.svg"
              />
            </div>
          </div>
          <UserContainer />
        </div>
        <img
          className={styles.vuesaxboldnotificationIcon}
          alt=""
          src="/vuesaxboldnotification.svg"
        />
        <div className={styles.profile}>PROFILE</div>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        <img
          className={styles.iconlyboldarrowLeft}
          alt=""
          src="/iconlyboldarrow--left.svg"
          onClick={onIconlyBoldArrowLeftClick}
        />
      </div>
    </div>
  );
};

export default FrameComponent;
