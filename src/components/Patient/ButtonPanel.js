import React from "react";
import AddButton from "../Buttons/AddButton/AddButton";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import EditButton from "../Buttons/EditButton/EditButton";
import ShowCardButton from "../Buttons/ShowCardButton/ShowCardButton";
import ShowScheduleButton from "../Buttons/ShowScheduleButton/ShowScheduleButton"
import ShowInfoButton from "../Buttons/ShowInfoButton/ShowInfoButton"
import styles from "./ButtonPanel.module.css"
import { useState } from "react";
import Modal from "../Modal/Modal";


const ButtonPanel = ({createPatient, type, last_id, patients}) => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className= {styles.button_panel}>
                <AddButton onClick = {() => setModalActive(true)}/>
                <Modal patients = {patients} last_id = {last_id} createPatient = {createPatient} active = {modalActive} setActive={setModalActive}/>
                
        </div>
    )
}

export default ButtonPanel;