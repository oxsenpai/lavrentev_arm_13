import React from "react";
import { useState } from "react";
import styles from '../Patient/PostForm.module.css'
const PostForm = ({createAppointment, active, setActive, editAppointment, type, edit_post, last_id}, props) => {
    const [post, setPost] = useState({time: '', patient:'', doctor: '', type : ''})
    


    const addNewPost = (e) => {
        e.preventDefault()
        setActive(false)
        const newPost = {
            ...post, id: Date.now()
        }
        createAppointment(newPost)
        setPost({time: '', patient:'',doctor: '', type : ''})
      }

    const editPost = (e) => {
        console.log(1234, edit_post.name)
        e.preventDefault()
        setActive(false)
        const newPost = {
            ...post, id: edit_post.id
        }
        editAppointment(newPost)
        setPost({time: '', patient:'',doctor: '', type : ''})
    }


    return (
        
        <form className={styles.post_form}>
            <div className={styles.post_header}>{type == 'add'? 'Регистрировать приём': 'Редактировать'}</div>
            <hr></hr>
            <input 
            value = {post.time}
            onChange = {e => setPost({...post, time: e.target.value})}
            type = "text" 
            placeholder='Время'/>
            <input 
            value = {post.patient}
            onChange = {e => setPost({...post, patient: e.target.value})}
            type = "text" 
            placeholder="Пациент"/>
            <input 
            value = {post.doctor}
            onChange = {e => setPost({...post, doctor: e.target.value})}
            type = "text" 
            placeholder="Доктор"/>
            <input
            value = {post.type}
            onChange = {e => setPost({...post, type: e.target.value})}
            type = "text" 
            placeholder="Тип приёма"/>
            <button onClick = {type == 'edit'? editPost: addNewPost}>{type == 'edit'? 'Сохранить': 'Добавить'} </button>
            
        </form>
        
    );
};


export default PostForm