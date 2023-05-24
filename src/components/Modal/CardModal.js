import React from "react";
import './Modal.css';
import styles from './Modal.css'
import PostForm from "../Patient/PostForm"


const CardModal = ({active, setActive, post}) => {
    return (
        <div className = {active ? 'modal_active' : "modal"} onClick={() => setActive(false)}>
            <div className = "modal__content" onClick={e => e.stopPropagation()}>
                <div className='card_content'></div>
                <div className="head">{post.name}</div>
                <hr></hr>
                <div>Пол: {post.gender}</div>
                <div>Дата рождения: {post.birthDate}</div>
                <div>Номер полиса: {post.policy}</div>
                <div>Номер паспорта: {post.passport}</div>
                <hr></hr>
                <button onClick ={ () => setActive(false)}>Закрыть</button>
            </div>

        </div>
    );
};

export default CardModal;