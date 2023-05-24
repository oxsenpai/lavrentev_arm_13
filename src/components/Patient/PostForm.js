import React from "react";
import { useState } from "react";
import styles from './PostForm.module.css'
const PostForm = ({createPatient, active, setActive, editPatient, type, edit_post, last_id}) => {
    const [post, setPost] = useState({id: '', name: type == 'add'? '': edit_post, gender: '', birthDate : '', policy: '', passport: ''})
    

    const addNewPost = (e) => {
        e.preventDefault()
        setActive(false)
        const newPost = {
            ...post, id: Date.now()
        }
        createPatient(newPost)
        setPost({id: '', name: '', gender: '', birthDate : '', policy: '', passport: ''})
      }

    const editPost = (e) => {
        console.log(1234, edit_post.name)
        e.preventDefault()
        setActive(false)
        const newPost = {
            ...post, id: edit_post.id
        }
        editPatient(newPost)
        setPost({id: '', name: '', gender: '', birthDate : '', policy: '', passport: ''})
    }


    return (
        
        <form className={styles.post_form}>
            <div className={styles.post_header}>{type == 'add'? 'Новый пациент': 'Редактировать'}</div>
            <hr></hr>
            <input 
            value = {post.name}
            onChange = {e => setPost({...post, name: e.target.value})}
            type = "text" 
            placeholder='ФИО'/>
            <input 
            value = {post.gender}
            onChange = {e => setPost({...post, gender: e.target.value})}
            type = "text" 
            placeholder="Пол"/>
            <input 
            value = {post.birthDate}
            onChange = {e => setPost({...post, birthDate: e.target.value})}
            type = "text" 
            placeholder="Дата рождения"/>
            <input
            value = {post.policy}
            onChange = {e => setPost({...post, policy: e.target.value})}
            type = "text" 
            placeholder="Номер полиса"/>
            <input
            value = {post.passport}
            onChange = {e => setPost({...post, passport: e.target.value})}
            type = "text" 
            placeholder="Номер паспорта"/>
            <button onClick = {type == 'edit'? editPost: addNewPost}>{type == 'edit'? 'Сохранить': 'Добавить'} </button>
        </form>
        
    );
};


export default PostForm