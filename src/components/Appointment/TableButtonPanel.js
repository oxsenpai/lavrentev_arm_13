import React from "react";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import ShowInfoButton from "../Buttons/ShowInfoButton/ShowInfoButton";
import ScheduleModal from "../Modal/ScheduleModal";
import InfoModal from "../Modal/InfoModal"
import { useState } from "react";
import EditButton from "../Buttons/EditButton/EditButton"
import "../Patient/TableButtonPanel.css"

const TableButtonPanel = (props) => {
    const [modalActive, setModalActive] = useState(false)
    return(
        <div classname = 'table_button_panel'>
            <DeleteButton onClick = {() => props.removeAppointment(props.post)}></DeleteButton>
            <EditButton onClick = {() => props.openEditModal(props.post)}/>
            <ShowInfoButton onClick = {() => setModalActive(true)}></ShowInfoButton>
            <InfoModal post = {props.post} active={modalActive} setActive = {setModalActive}/>
        </div>
    )
}

export default TableButtonPanel