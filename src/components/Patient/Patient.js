import React, { useState } from 'react'
import MyButton from '../MyButton'
import TableItem from './TableItem'
import TableList from './TableList'
import PostForm from './PostForm'
import EditModal from '../Modal/EditModal'

export default function Patient(props) {
  
  const [patients, setPatient] = useState(
    props.patients
  )
  
  const [modalActive, setModalActive] = useState(false)

  const openEditModal = (post) => {
    setModalActive(true)
    window.target_post = post
  }

  const editPatient = (post) => {
    window.now_post = post
    console.log(123, window.now_post)
    let patients_new = patients
    console.log(patients_new)
    patients_new[post.id - 1] = post 
    
  }

  const removePatient = (post) => {
    setPatient(patients.filter(p => p.id !== post.id))
  }

  const createPatient = (newPatient) => {
    
    setPatient([...patients, newPatient])
    console.log(patients)
  }
  return (
    <div> {patients.map((post, index) =>
      <EditModal key = {window.post_key} post = {window.target_post} editPatient={editPatient} active={modalActive} setActive={setModalActive}/>)}
      <TableList openEditModal = {openEditModal} createPatient = {createPatient} patients = {patients} removePatient = {removePatient}
      
    
      />
    </div>
    
  )
}
