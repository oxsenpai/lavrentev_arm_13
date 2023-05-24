import React from "react";
import AddButton from "../Buttons/AddButton/AddButton";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import EditButton from "../Buttons/EditButton/EditButton";
import ShowCardButton from "../Buttons/ShowCardButton/ShowCardButton";
import ShowScheduleButton from "../Buttons/ShowScheduleButton/ShowScheduleButton"
import ShowInfoButton from "../Buttons/ShowInfoButton/ShowInfoButton"
import styles from "../Patient/ButtonPanel.module.css"
import { useState } from "react";
import AppModal from "../Modal/AppModal";


const ButtonPanel = ({createAppointment, type, last_id}, props) => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className= {styles.button_panel}>
                <AddButton onClick = {() => setModalActive(true)}/>
                <AppModal last_id = {last_id} createAppointment = {createAppointment} active = {modalActive} setActive={setModalActive} patients = {props.patients} doctors = {props.doctors}/>
                
        </div>
    )
}

export default ButtonPanel;