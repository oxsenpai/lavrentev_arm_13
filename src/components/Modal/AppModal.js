import React from "react";
import './Modal.css';
import PostForm from "../Appointment/PostForm"


const AppModal = ({active, setActive, createAppointment, last_id}, props) => {
    return (
        <div className = {active ? 'modal_active' : "modal"} onClick={() => setActive(false)}>
            <div className = "modal__content" onClick={e => e.stopPropagation()}>
                <PostForm last_id = {last_id} type = 'add' createAppointment = {createAppointment} active = {active} setActive = {setActive} patients = {props.patients} doctors = {props.doctors}/>
            </div>

        </div>
    );
};

export default AppModal;