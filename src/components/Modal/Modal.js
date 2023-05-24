import React from "react";
import './Modal.css';
import PostForm from "../Patient/PostForm"


const Modal = ({active, setActive, createPatient, last_id, patients}) => {
    return (
        <div className = {active ? 'modal_active' : "modal"} onClick={() => setActive(false)}>
            <div className = "modal__content" onClick={e => e.stopPropagation()}>
                <PostForm last_id = {last_id} type = 'add' createPatient = {createPatient} active = {active} setActive = {setActive}/>
            </div>

        </div>
    );
};

export default Modal;