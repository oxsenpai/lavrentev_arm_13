import React from "react";
import './Modal.css';
import PostForm from "../Patient/PostForm"


const EditModal = ({active, setActive, createPatient, editPatient, post, key}) => {
    return (
        <div className = {active ? 'e_modal_active' : "modal"} onClick={() => setActive(false)}>
            <div className = "modal__content" onClick={e => e.stopPropagation()}>
                <PostForm key = {key} edit_post = {post} editPatient = {editPatient} type = 'edit' createPatient = {createPatient} active = {active} setActive = {setActive}/>
            </div>

        </div>
    );
};

export default EditModal;