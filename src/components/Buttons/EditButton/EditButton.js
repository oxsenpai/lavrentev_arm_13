import React from "react";
import styles from './EditButton.module.css';

const EditButton = ({...props}) => {
    return (
        <button {...props} className={styles.EditButton}>

        </button>
    )
}

export default EditButton;