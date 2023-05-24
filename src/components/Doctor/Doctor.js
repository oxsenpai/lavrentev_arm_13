import React from 'react'
import { useState } from 'react'
import MainTable from '../MainTable/MainTable'
import TableList from './TableList'
import EditDocModal from '../Modal/EditDocModal'

export default function Doctor(props) {


  const [doctors, setDoctor] = useState(
    props.doctors

  )

  const [modalActive, setModalActive] = useState(false)

  const openEditModal = (post) => {
    setModalActive(true)
    window.target_post = post
  }

  const createDoctor = (newDoctor) => {
    setDoctor([...doctors, newDoctor])
  }

  const editDoctor = (post) => {
    let doctors_new = doctors
    doctors_new[post.id - 1] = post
  }

  const removeDoctor = (post) => {
    setDoctor(doctors.filter(p => p.id !== post.id))
  }

  return (
    <div> {doctors.map((post, index) =>
      <EditDocModal key = {window.post_key} post = {window.target_post} editDoctor={editDoctor} active={modalActive} setActive={setModalActive}/>)}
      <TableList openEditModal={openEditModal} createDoctor = {createDoctor} doctors = {doctors} removeDoctor = {removeDoctor}/>
    </div>
  )
}
