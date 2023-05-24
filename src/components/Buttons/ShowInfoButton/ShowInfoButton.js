import React from "react";
import styles from './ShowInfoButton.module.css';

const ShowInfoButton = ({...props}) => {
    return (
        <button {...props} className={styles.ShowInfoButton}>
        </button>
    )
}

export default ShowInfoButton;