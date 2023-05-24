import React from "react";
import './Modal.css';
import styles from './Modal.css'
import PostForm from "../Patient/PostForm"


const ScheduleModal = ({active, setActive, post}) => {
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
                <div>
                    <table>
                        <tr>
                            <td>День недели</td>
                            <td>Кабинет</td>
                            <td>Начало смены</td>
                            <td>Конец смены</td>
                        </tr>
                        <tr>
                            <td>Понедельник</td>
                            <td>{post.monday_cabinet}</td>
                            <td>{post.monday_start}</td>
                            <td>{post.monday_end}</td>
                        </tr>
                        <tr>
                            <td>Вторник</td>
                            <td>{post.tuesday_cabinet}</td>
                            <td>{post.tuesday_start}</td>
                            <td>{post.tuesday_end}</td>
                        </tr>
                        <tr>
                            <td>Среда</td>
                            <td>{post.wednesday_cabinet}</td>
                            <td>{post.wednesday_start}</td>
                            <td>{post.wednesday_end}</td>
                        </tr>
                        <tr>
                            <td>Четверг</td>
                            <td>{post.thursday_cabinet}</td>
                            <td>{post.thursday_start}</td>
                            <td>{post.thursday_end}</td>
                        </tr>
                        <tr>
                            <td>Пятница</td>
                            <td>{post.friday_cabinet}</td>
                            <td>{post.friday_start}</td>
                            <td>{post.friday_end}</td>
                        </tr>
                        <tr>
                            <td>Суббота</td>
                            <td>{post.saturday_cabinet}</td>
                            <td>{post.saturday_start}</td>
                            <td>{post.saturday_end}</td>
                        </tr>
                        <tr>
                            <td>Воскресенье</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </table>
                </div>
                <hr></hr>
                <button onClick ={ () => setActive(false)}>Закрыть</button>
            </div>

        </div>
    );
};

export default ScheduleModal;