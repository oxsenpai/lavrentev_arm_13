import React from "react";
import { useState } from "react";
import styles from '../Patient/PostForm.module.css'
const PostForm = ({createDoctor, active, setActive, editDoctor, type, edit_post, last_id}) => {
    const [post, setPost] = useState({id: '', name: '', gender: '', birthDate : '',
    monday_cabinet: '', monday_start: '', monday_end: '',
    tuesday_cabinet: '', tuesday_start: '', tuesday_end: '',
    wednesday_cabinet: '', wednesday_start: '', wednesday_end: '',
    thursday_cabinet: '', thursday_start: '', thursday_end: '',
    friday_cabinet: '', friday_start: '', friday_end: '',
    saturday_cabinet: '', saturday_start: '', saturday_end: '',
    sunday_cabinet: '', sunday_start: '', sunday_end: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        setActive(false)
        const newPost = {
            ...post, id: Date.now()
        }
        createDoctor(newPost)
        setPost({id: '', name: '', gender: '', birthDate : '', policy: '',
        monday_cabinet: '', monday_start: '', monday_end: '',
        tuesday_cabinet: '', tuesday_start: '', tuesday_end: '',
        wednesday_cabinet: '', wednesday_start: '', wednesday_end: '',
        thursday_cabinet: '', thursday_start: '', thursday_end: '',
        friday_cabinet: '', friday_start: '', friday_end: '',
        saturday_cabinet: '', saturday_start: '', saturday_end: '',
        sunday_cabinet: '', sunday_start: '', sunday_end: ''})
      }

    const editPost = (e) => {
        console.log(1234, edit_post.name)
        e.preventDefault()
        setActive(false)
        const newPost = {
            ...post, id: edit_post.id
        }
        editDoctor(newPost)
        setPost({id: '', name: '', gender: '', birthDate : '',
        monday_cabinet: '', monday_start: '', monday_end: '',
        tuesday_cabinet: '', tuesday_start: '', tuesday_end: '',
        wednesday_cabinet: '', wednesday_start: '', wednesday_end: '',
        thursday_cabinet: '', thursday_start: '', thursday_end: '',
        friday_cabinet: '', friday_start: '', friday_end: '',
        saturday_cabinet: '', saturday_start: '', saturday_end: '',
        sunday_cabinet: '', sunday_start: '', sunday_end: ''})
    }


    return (
        
        <form className={styles.post_form}>
            <div className={styles.post_header}>{type == 'add'? 'Новый доктор': 'Редактировать'}</div>
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
            <div className = {styles.schedule}>
                <table>
                    <tr>
                        <td>День недели</td>
                        <td>Кабинет</td>
                        <td>Начало смены</td>
                        <td>Конец смены</td>
                    </tr>
                    <tr>
                        <td>Понедельник</td>
                        <td><input value={post.monday_cabinet} onChange={e => setPost({...post, monday_cabinet: e.target.value})}></input></td>
                        <td><input value={post.monday_start} onChange={e => setPost({...post, monday_start: e.target.value})}></input></td>
                        <td><input value={post.monday_end} onChange={e => setPost({...post, monday_end: e.target.value})}></input></td>
                    </tr>
                    <tr>
                        <td>Вторник</td>
                        <td><input value={post.tuesday_cabinet} onChange={e => setPost({...post, tuesday_cabinet: e.target.value})}></input></td>
                        <td><input value={post.tuesday_start} onChange={e => setPost({...post, tuesday_start: e.target.value})}></input></td>
                        <td><input value={post.tuesday_end} onChange={e => setPost({...post, tuesday_end: e.target.value})}></input></td>
                    </tr>
                    <tr>
                        <td>Среда</td>
                        <td><input value={post.wednesday_cabinet} onChange={e => setPost({...post, wednesday_cabinet: e.target.value})}></input></td>
                        <td><input value={post.wednesday_start} onChange={e => setPost({...post, wednesday_start: e.target.value})}></input></td>
                        <td><input value={post.wednesday_end} onChange={e => setPost({...post, wednesday_end: e.target.value})}></input></td>
                    </tr>
                    <tr>
                        <td>Четверг</td>
                        <td><input value={post.thursday_cabinet} onChange={e => setPost({...post, thursday_cabinet: e.target.value})}></input></td>
                        <td><input value={post.thursday_start} onChange={e => setPost({...post, thursday_start: e.target.value})}></input></td>
                        <td><input value={post.thursday_end} onChange={e => setPost({...post, thursday_end: e.target.value})}></input></td>
                    </tr>
                    <tr>
                        <td>Пятница</td>
                        <td><input value={post.friday_cabinet} onChange={e => setPost({...post, friday_cabinet: e.target.value})}></input></td>
                        <td><input value={post.friday_start} onChange={e => setPost({...post, friday_start: e.target.value})}></input></td>
                        <td><input value={post.friday_end} onChange={e => setPost({...post, friday_end: e.target.value})}></input></td>
                    </tr>
                    <tr>
                        <td>Суббота</td>
                        <td><input value={post.saturday_cabinet} onChange={e => setPost({...post, saturday_cabinet: e.target.value})}></input></td>
                        <td><input value={post.saturday_start} onChange={e => setPost({...post, saturday_start: e.target.value})}></input></td>
                        <td><input value={post.saturday_end} onChange={e => setPost({...post, saturday_end: e.target.value})}></input></td>
                    </tr>
                    <tr>
                        <td>Воскресенье</td>
                        <td><input disabled value={post.sunday_cabinet} onChange={e => setPost({...post, sunday_cabinet: e.target.value})}></input></td>
                        <td><input disabled value={post.sunday_start} onChange={e => setPost({...post, sunday_start: e.target.value})}></input></td>
                        <td><input disabled value={post.sunday_end} onChange={e => setPost({...post, sunday_end: e.target.value})}></input></td>
                    </tr>
                </table>
            </div>
            <button onClick = {type == 'edit'? editPost: addNewPost}>{type == 'edit'? 'Сохранить': 'Добавить'} </button>
        </form>
        
    );
};


export default PostForm