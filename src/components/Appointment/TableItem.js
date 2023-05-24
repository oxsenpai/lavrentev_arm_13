import React from "react";
import styles from '../Patient/TableItem.module.css'
import { useState } from "react";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton"
import TableButtonPanel from "./TableButtonPanel";

const TableItem = (props) => {
    const [check, setCheck] = useState(false)
    const toggleCheckbox = ({target: {checked, value}}) => {
      setCheck(checked)
      if (check == false) {
      window.cur_val = value
      console.log(window.cur_val)}
    }


    return(
          <tr className= {styles.post_content}>
            <td className={styles.id}>{props.post.time}</td>
            <td className={styles.name}>{props.post.patient}</td>
            <td className={styles.gender}>{props.post.doctor}</td>
            <td className={styles.birthDate}>{props.post.type}</td>
            <td className={styles.actions}><TableButtonPanel openEditModal = {props.openEditModal} removeAppointment = {props.removeAppointment} post = {props.post}/></td>
          </tr>
    );
};

export default TableItem;