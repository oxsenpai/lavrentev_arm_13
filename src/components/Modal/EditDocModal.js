import React from "react";
import './Modal.css';
import PostForm from "../Doctor/PostForm"


const EditDocModal = ({active, setActive, createDoctor, editDoctor, post, key}) => {
    return (
        <div className = {active ? 'modal_active' : "modal"} onClick={() => setActive(false)}>
            <div className = "modal__content" onClick={e => e.stopPropagation()}>
                <PostForm key = {key} edit_post = {post} editDoctor = {editDoctor} type = 'edit' createDoctor = {createDoctor} active = {active} setActive = {setActive}/>
            </div>

        </div>
    );
};

export default EditDocModal;