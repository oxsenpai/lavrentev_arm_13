import React from "react";
import styles from './AddButton.module.css';
import { useState } from "react";

const AddButton = ({...props}) => {
    return (
        <button {...props} className={styles.AddButton}>
            Добавить
        </button>
    )
}

export default AddButton;