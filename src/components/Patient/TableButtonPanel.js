import React from "react";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import ShowCardButton from "../Buttons/ShowCardButton/ShowCardButton";
import CardModal from "../Modal/CardModal";
import { useState } from "react";
import EditButton from "../Buttons/EditButton/EditButton"
import "./TableButtonPanel.css"

const TableButtonPanel = (props) => {
    const [modalActive, setModalActive] = useState(false)
    return(
        <div classname = 'table_button_panel'>
            <DeleteButton onClick = {() => props.removePatient(props.post)}></DeleteButton>
            <EditButton onClick = {() => props.openEditModal(props.post)}/>
            <ShowCardButton onClick = {() => setModalActive(true)}></ShowCardButton>
            <CardModal post = {props.post} active={modalActive} setActive = {setModalActive}/>
        </div>
    )
}

export default TableButtonPanel