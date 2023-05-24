  import React from "react";
import styles from './TableItem.module.css'
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
            <td className={styles.id}>{props.number}</td>
            <td className={styles.name}>{props.post.name}</td>
            <td className={styles.gender}>{props.post.gender}</td>
            <td className={styles.birthDate}>{props.post.birthDate}</td>
            <td className={styles.actions}><TableButtonPanel openEditModal = {props.openEditModal} removePatient = {props.removePatient} post = {props.post}/></td>
          </tr>
    );
};

export default TableItem;