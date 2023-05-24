import React from "react";
import styles from "./MainTable.module.css";
import TableItem from "../Patient/TableItem";
import { useState } from "react";

const MainTable = ({patients, removePatient, openEditModal}) => {
    const [value, setValue] = useState()
    const toggleCheckbox1 = (value) => {
        setValue(value)
    }

    return(
        <div>
            <table className={styles.scroll_table}>
                <tr className = {styles.table_header}>
                    <td className={styles.id}>Код</td>
                    <td className={styles.name}>ФИО</td>  
                    <td className={styles.gender}>Пол</td>  
                    <td className={styles.birthDate}>Дата рождения</td>
                    <td className={styles.actions}>Действия</td>       
                </tr>
            </table>
            <table className={styles.scroll_table_body}>{patients.map((post, index) =>
                <TableItem onChange = {toggleCheckbox1} removePatient = {removePatient} openEditModal = {openEditModal} number = {index + 1} post = {post} key = {post.id}/>)}
            </table>
        </div>
    )
}

export default MainTable;