import React from "react";
import styles from './DeleteButton.module.css';

const DeleteButton = ({...props}) => {
    return (
        <button {...props} className={styles.DeleteButton}>
        </button>
    )
}

export default DeleteButton;