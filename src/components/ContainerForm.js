import { memo, useMemo } from "react";
import styles from "./ContainerForm.module.css";

const ContainerForm = memo(
  ({
    iconIds,
    iconIdsArray,
    iconIdsString,
    iconIdsList,
    iconDimensions,
    iconIdsString2,
    newIconId,
    propCursor,
    onBUTTONTextClick,
  }) => {
    const bUTTONStyle = useMemo(() => {
      return {
        cursor: propCursor,
      };
    }, [propCursor]);

    return (
      <div className={styles.bigOutlineParent}>
        <div className={styles.bigOutline}>
          <div className={styles.value}>
            <div className={styles.enterHere}>Enjelin Morgeana</div>
            <img className={styles.cancelIcon} alt="" src={iconIds} />
          </div>
          <div className={styles.bigOutlineChild} />
          <div className={styles.label}>
            <div className={styles.labelChild} />
            <div className={styles.labelWrapper}>
              <div className={styles.label1}>Full name</div>
            </div>
          </div>
        </div>
        <div className={styles.bigOutline1}>
          <div className={styles.value}>
            <div className={styles.enterHere}>puerto_rico</div>
            <img className={styles.cancelIcon} alt="" src={iconIdsArray} />
          </div>
          <div className={styles.bigOutlineChild} />
          <div className={styles.label}>
            <div className={styles.labelChild} />
            <div className={styles.labelWrapper}>
              <div className={styles.label1}>Nick name</div>
            </div>
          </div>
        </div>
        <div className={styles.bigOutline2}>
          <div className={styles.value}>
            <div className={styles.enterHere}>youremail@domain.com</div>
            <img className={styles.cancelIcon} alt="" src={iconIdsString} />
          </div>
          <div className={styles.bigOutlineChild} />
          <div className={styles.label}>
            <div className={styles.labelChild} />
            <div className={styles.labelWrapper}>
              <div className={styles.label1}>Label</div>
            </div>
          </div>
        </div>
        <div className={styles.bigOutlineselect}>
          <div className={styles.bigOutlineChild} />
          <div className={styles.value}>
            <div className={styles.enterHere}>INDIA</div>
            <img className={styles.cancelIcon} alt="" src={iconIdsList} />
          </div>
          <div className={styles.label6}>
            <div className={styles.labelChild} />
            <div className={styles.labelWrapper}>
              <div className={styles.label1}>Country</div>
            </div>
          </div>
          <img
            className={styles.arrowDropDownIcon}
            alt=""
            src={iconDimensions}
          />
        </div>
        <div className={styles.bigOutline3}>
          <div className={styles.value}>
            <div className={styles.enterHere}>Male</div>
            <img className={styles.cancelIcon} alt="" src={iconIdsString2} />
          </div>
          <div className={styles.bigOutlineChild} />
          <div className={styles.label}>
            <div className={styles.labelChild} />
            <div className={styles.labelWrapper}>
              <div className={styles.label1}>Genre</div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <div
            className={styles.button1}
            style={bUTTONStyle}
            onClick={onBUTTONTextClick}
          >
            {newIconId}
          </div>
        </div>
      </div>
    );
  }
);

export default ContainerForm;
