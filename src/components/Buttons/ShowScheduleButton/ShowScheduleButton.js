import React from "react";
import styles from './ShowScheduleButton.module.css';

const ShowScheduleButton = ({...props}) => {
    return (
        <button {...props} className={styles.ShowScheduleButton}>
        </button>
    )
}

export default ShowScheduleButton;