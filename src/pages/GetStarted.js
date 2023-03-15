import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField, Icon } from "@mui/material";
import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./GetStarted.module.css";

const GetStarted = () => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-1.svg"
              />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.batteryParent}>
              <div className={styles.battery}>
                <div className={styles.capacity} />
                <Form.Group className={styles.capFormgroup}>
                  <Form.Control type="text" placeholder="Input placeholder" />
                </Form.Group>
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
              <img className={styles.frameItem} alt="" src="/frame-1417.svg" />
            </div>
            <div className={styles.wrapper}>
              <MuiDatePicker
                label="Let’s Start"
                value={frameDateTimePickerValue}
                onChange={(newValue) => {
                  setFrameDateTimePickerValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="primary"
                    variant="standard"
                    size="medium"
                    helperText=""
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default GetStarted;
