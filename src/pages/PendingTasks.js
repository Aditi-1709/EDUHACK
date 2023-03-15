import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PendingTasks.module.css";

const PendingTasks = () => {
  const navigate = useNavigate();

  const onIconlyBoldArrowLeftClick = useCallback(() => {
    navigate("/recent-notes");
  }, [navigate]);

  return (
    <div className={styles.pendingTasks}>
      <img className={styles.pendingTasksChild} alt="" src="/ellipse-173.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      <div className={styles.header}>
        <div className={styles.battery}>
          <div className={styles.capacity} />
          <img className={styles.capIcon} alt="" src="/cap3.svg" />
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
      <div className={styles.october}>
        <div className={styles.october1}>Pending Tasks</div>
      </div>
      <div className={styles.pendingTasksInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.pendingTasksItem} />
      <div className={styles.rectangleDiv} />
      <div className={styles.pendingTasksChild1} />
      <div className={styles.task1}>Task 1</div>
      <div className={styles.task2}>Task 2</div>
      <div className={styles.task3}>Task 3</div>
      <div className={styles.task4}>Task 4</div>
      <img
        className={styles.iconlyboldarrowLeft}
        alt=""
        src="/iconlyboldarrow--left4.svg"
        onClick={onIconlyBoldArrowLeftClick}
      />
    </div>
  );
};

export default PendingTasks;
