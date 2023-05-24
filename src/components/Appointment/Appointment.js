import React, { useState } from 'react'
import TableList from '../Appointment/TableList'
import EditAppModal from '../Modal/EditAppModal'
import DynamicSelect from './DynamicSelect'

export default function Appointment(props) {

  
 
  const [appointments, setAppointment] = useState(
    props.appointment
  )

  const [modalActive, setModalActive] = useState(false)

  const openEditModal = (post) => {
    setModalActive(true)
    window.target_post = post
  }
  
  const createAppointment = (newAppointment) => {
    setAppointment([...appointments, newAppointment])
  }

  const editAppointment = (post) => {
    let appointments_new = appointments
    appointments_new[post.id - 1] = post
  }

  const removeAppointment = (post) => {
    setAppointment(appointments.filter(p => p.id !== post.id))
  }

  return (
    <div> {appointments.map((post, index) =>
    <EditAppModal key={window.post_key} post = {window.target_post} editAppointment = {editAppointment} active={modalActive} setActive={setModalActive}/> )}
      <TableList openEditModal={openEditModal} createAppointment = {createAppointment} appointments = {appointments} removeAppointment={removeAppointment} patients = {props.patients} doctors = {props.doctors}/>
      
      
    </div>
  )
}
