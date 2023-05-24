import React from "react";
import styles from "./MainTable.module.css";
import TableItem from "../Appointment/TableItem";
import { useState } from "react";

const MainAppTable = ({appointments, removeAppointment, openEditModal}) => {
    const [value, setValue] = useState()
    const toggleCheckbox1 = (value) => {
        setValue(value)
    }

    return(
        <div>
            <table className={styles.scroll_table}>
                <tr className = {styles.table_header}>
                    <td className={styles.id}>Время</td>
                    <td className={styles.name}>Пациент</td>  
                    <td className={styles.gender}>Доктор</td>  
                    <td className={styles.birthDate}>Тип приёма</td>
                    <td className={styles.actions}>Действия</td>       
                </tr>
            </table>
            <table className={styles.scroll_table_body}>{appointments.map((post, index) =>
                <TableItem onChange = {toggleCheckbox1} removeAppointment = {removeAppointment} openEditModal = {openEditModal} number = {index + 1} post = {post} key = {post.id}/>)}
            </table>
        </div>
    )
}

export default MainAppTable;