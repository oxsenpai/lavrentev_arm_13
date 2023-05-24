import React from "react";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import ShowScheduleButton from "../Buttons/ShowScheduleButton/ShowScheduleButton";
import ScheduleModal from "../Modal/ScheduleModal";
import { useState } from "react";
import EditButton from "../Buttons/EditButton/EditButton"
import "../Patient/TableButtonPanel.css"

const TableButtonPanel = (props) => {
    const [modalActive, setModalActive] = useState(false)
    return(
        <div classname = 'table_button_panel'>
            <DeleteButton onClick = {() => props.removeDoctor(props.post)}></DeleteButton>
            <EditButton onClick = {() => props.openEditModal(props.post)}/>
            <ShowScheduleButton onClick = {() => setModalActive(true)}></ShowScheduleButton>
            <ScheduleModal post = {props.post} active={modalActive} setActive = {setModalActive}/>
        </div>
    )
}

export default TableButtonPanel