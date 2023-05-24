import React from "react";
import './Modal.css';
import PostForm from "../Doctor/PostForm"


const DocModal = ({active, setActive, createDoctor, last_id}) => {
    return (
        <div className = {active ? 'modal_active' : "modal"} onClick={() => setActive(false)}>
            <div className = "modal__content" onClick={e => e.stopPropagation()}>
                <PostForm last_id = {last_id} type = 'add' createDoctor = {createDoctor} active = {active} setActive = {setActive}/>
            </div>

        </div>
    );
};

export default DocModal;