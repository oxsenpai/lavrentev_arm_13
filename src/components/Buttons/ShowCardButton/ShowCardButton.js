import React from "react";
import styles from './ShowCardButton.module.css';

const ShowCardButton = ({...props}) => {
    return (
        <button {...props} className={styles.ShowCardButton}>
        </button>
    )
}

export default ShowCardButton;