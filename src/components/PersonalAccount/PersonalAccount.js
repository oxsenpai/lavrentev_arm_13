import React from 'react'
import { UserContext, UserDispatchContext } from '../../store/UserContext'
import { useContext } from 'react'
import styles from './PersonalAccount.module.css'

export default function PersonalAccount() {
  const user = useContext(UserContext)
  return (
    <div className= {styles.main_info_panel}>
      <div className= {styles.header}>
        Личный кабинет администратора
      </div>
      <hr></hr>
      <div className= {styles.info}>
        <div className= {styles.info_elem}>Имя пользователя: {user.username}</div>
        <div className= {styles.info_elem}>ФИО: Лаврентьев Данил Алексеевич</div>
        <div className= {styles.info_elem}>Дата рождения: 15.03.2003</div>
        <div className= {styles.info_elem}>Должность: Администратор 2-го разряда</div>
        <hr></hr>

      </div>
    </div>
  )
}
