import React from "react";
import './Modal.css';
import PostForm from "../Appointment/PostForm"


const EditAppModal = ({active, setActive, createAppointment, editAppointment, post, key}) => {
    return (
        <div className = {active ? 'e_modal_active' : "modal"} onClick={() => setActive(false)}>
            <div className = "modal__content" onClick={e => e.stopPropagation()}>
                <PostForm key = {key} edit_post = {post} editAppointment = {editAppointment} type = 'edit' createAppointment = {createAppointment} active = {active} setActive = {setActive}/>
            </div>

        </div>
    );
};

export default EditAppModal;