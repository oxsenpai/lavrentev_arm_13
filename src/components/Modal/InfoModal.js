import React from "react";
import './Modal.css';


const CardModal = ({active, setActive, post}) => {
    return (
        <div className = {active ? 'modal_active' : "modal"} onClick={() => setActive(false)}>
            <div className = "modal__content" onClick={e => e.stopPropagation()}>
                <div className='card_content'></div>
                <div className="head">Информация о приёме</div>
                <hr></hr>
                <div>Время приёма: {post.time}</div>
                <div>Пациент: {post.patient}</div>
                <div>Доктор: {post.doctor}</div>
                <div>Тип приёма: {post.type}</div>
                <hr></hr>
                <button onClick ={ () => setActive(false)}>Закрыть</button>
            </div>

        </div>
    );
};

export default CardModal;