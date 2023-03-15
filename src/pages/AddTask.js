import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddTask.module.css";

const AddTask = () => {
  const navigate = useNavigate();

  const onRectangle5Click = useCallback(() => {
    navigate("/recent-notes");
  }, [navigate]);

  const onIconlyBoldArrowLeftClick = useCallback(() => {
    navigate("/recent-notes");
  }, [navigate]);

  return (
    <div className={styles.addTask}>
      <img
        className={styles.vuesaxboldnotificationIcon}
        alt=""
        src="/vuesaxboldnotification1.svg"
      />
      <div className={styles.addTaskChild} />
      <div className={styles.addTaskItem} />
      <div className={styles.addTaskInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.addTaskChild1} />
      <div className={styles.projectName}>Project Name</div>
      <div className={styles.startDate}>Start Date</div>
      <div className={styles.endDate}>End Date</div>
      <div className={styles.description}>Description</div>
      <img
        className={styles.iconlyboldarrowDown5}
        alt=""
        src="/iconlyboldarrow--down-5.svg"
      />
      <img
        className={styles.iconlyboldarrowDown4}
        alt=""
        src="/iconlyboldarrow--down-4.svg"
      />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-17.svg" />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-11.svg"
        onClick={onRectangle5Click}
      />
      <div className={styles.addTask1}>Add Task</div>
      <div className={styles.groceryShoppingApp}>Grocery Shopping App</div>
      <div className={styles.may2022}>01 May, 2022</div>
      <div className={styles.june2022}>30 June, 2022</div>
      <div className={styles.thisApplicationIsContainer}>
        <p
          className={styles.thisApplicationIs}
        >{`This application is designed for super shops. By using `}</p>
        <p className={styles.thisApplicationIs}>
          this application they can enlist all their products in one place.
        </p>
      </div>
      <img
        className={styles.vuesaxbulkcalendarIcon}
        alt=""
        src="/vuesaxbulkcalendar.svg"
      />
      <img
        className={styles.vuesaxbulkcalendarIcon1}
        alt=""
        src="/vuesaxbulkcalendar1.svg"
      />
      <div className={styles.addTaskChild2} />
      <img className={styles.groupIcon} alt="" src="/group-7.svg" />
      <div className={styles.taskGroupParent}>
        <div className={styles.taskGroup}>Task Group</div>
        <div className={styles.work}>Work</div>
      </div>
      <img
        className={styles.iconlyboldarrowDown3}
        alt=""
        src="/iconlyboldarrow--down-3.svg"
      />
      <img className={styles.addTaskChild3} alt="" src="/ellipse-29@2x.png" />
      <div className={styles.addTaskChild4} />
      <div className={styles.changeLogo}>Change Logo</div>
      <i className={styles.groceryShop}>
        <p className={styles.thisApplicationIs}>Grocery</p>
        <p className={styles.shop}>shop</p>
      </i>
      <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      <img
        className={styles.iconlyboldarrowLeft}
        alt=""
        src="/iconlyboldarrow--left1.svg"
        onClick={onIconlyBoldArrowLeftClick}
      />
    </div>
  );
};

export default AddTask;
