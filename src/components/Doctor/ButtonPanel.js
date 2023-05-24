import React from "react";
import AddButton from "../Buttons/AddButton/AddButton";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import EditButton from "../Buttons/EditButton/EditButton";
import ShowCardButton from "../Buttons/ShowCardButton/ShowCardButton";
import ShowScheduleButton from "../Buttons/ShowScheduleButton/ShowScheduleButton"
import ShowInfoButton from "../Buttons/ShowInfoButton/ShowInfoButton"
import styles from "../Patient/ButtonPanel.module.css"
import { useState } from "react";
import DocModal from "../Modal/DocModal";


const ButtonPanel = ({createDoctor, type, last_id}) => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className= {styles.button_panel}>
                <AddButton onClick = {() => setModalActive(true)}/>
                <DocModal last_id = {last_id} createDoctor = {createDoctor} active = {modalActive} setActive={setModalActive}/>
                
        </div>
    )
}

export default ButtonPanel;