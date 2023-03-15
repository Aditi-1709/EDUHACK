import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RecentNotes.module.css";

const RecentNotes = () => {
  const navigate = useNavigate();

  const onProfileNotificationsClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onVectorIcon3Click = useCallback(() => {
    navigate("/pending-tasks");
  }, [navigate]);

  const onObjectOther12ImageClick = useCallback(() => {
    navigate("/pending-tasks");
  }, [navigate]);

  const onComponent2ContainerClick = useCallback(() => {
    navigate("/add-task");
  }, [navigate]);

  const onVectorIcon4Click = useCallback(() => {
    navigate("/add-task");
  }, [navigate]);

  const onObjectOther05ImageClick = useCallback(() => {
    navigate("/add-task");
  }, [navigate]);

  return (
    <div className={styles.recentNotes}>
      <div className={styles.headerParent}>
        <div className={styles.header}>
          <div className={styles.battery}>
            <div className={styles.capacity} />
            <img className={styles.capIcon} alt="" src="/cap1.svg" />
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
        <div className={styles.octoberParent}>
          <div className={styles.october}>
            <div className={styles.monday}>Monday</div>
            <div className={styles.october1}>30,May</div>
          </div>
          <img
            className={styles.buttonsCircleNavigation}
            alt=""
            src="/buttons--circle--navigation.svg"
          />
          <img
            className={styles.profileNotifications}
            alt=""
            src="/profile--notifications.svg"
            onClick={onProfileNotificationsClick}
          />
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.hiShambhaviParent}>
                <div className={styles.hiShambhavi}>Hi, Shambhavi !</div>
                <div className={styles.tasksArePendingContainer}>
                  <span>{`5 Tasks are `}</span>
                  <b>Pending</b>
                </div>
              </div>
              <div className={styles.component5}>
                <div className={styles.now}>Now</div>
                <div className={styles.mobileAppDesign}>Mobile App Design</div>
                <div className={styles.raduAnca}>{`Radu & Anca`}</div>
                <div className={styles.now1}>Now</div>
                <img
                  className={styles.component5Child}
                  alt=""
                  src="/ellipse-8@2x.png"
                />
                <img
                  className={styles.component5Item}
                  alt=""
                  src="/ellipse-9@2x.png"
                />
                <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
              </div>
            </div>
            <div className={styles.frameChild} />
            <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
            <img
              className={styles.iconlylighthome}
              alt=""
              src="/iconlylighthome.svg"
            />
            <img className={styles.calendarIcon} alt="" src="/calendar.svg" />
            <img className={styles.profileIcon} alt="" src="/profile.svg" />
            <div className={styles.frameItem} />
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon3}
                alt=""
                src="/vector5.svg"
                onClick={onVectorIcon3Click}
              />
              <div className={styles.tasks}>32 Tasks</div>
              <img
                className={styles.objectother12Icon}
                alt=""
                src="/objectother-12@2x.png"
                onClick={onObjectOther12ImageClick}
              />
              <b className={styles.pending}>Pending</b>
            </div>
            <b className={styles.myTasks}>My Tasks</b>
            <div
              className={styles.component2}
              onClick={onComponent2ContainerClick}
            >
              <div className={styles.component2Child} />
              <img
                className={styles.vectorIcon4}
                alt=""
                src="/vector6.svg"
                onClick={onVectorIcon4Click}
              />
              <b className={styles.addTask}>Add Task</b>
              <div className={styles.task}>Task</div>
              <img
                className={styles.objectother05Icon}
                alt=""
                src="/objectother-05@2x.png"
                onClick={onObjectOther05ImageClick}
              />
            </div>
            <div className={styles.component3}>
              <div className={styles.component3Child} />
              <img className={styles.vectorIcon5} alt="" src="/vector7.svg" />
              <b className={styles.mobileAppDesignContainer}>
                <p className={styles.mobileApp}>Mobile App</p>
                <p className={styles.mobileApp}>Design</p>
              </b>
              <div className={styles.tasks1}>10 Tasks</div>
            </div>
            <div className={styles.objectother17}>
              <img
                className={styles.objectother17Icon}
                alt=""
                src="/objectother-17@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <img className={styles.vectorIcon6} alt="" src="/vector1.svg" />
    </div>
  );
};

export default RecentNotes;
