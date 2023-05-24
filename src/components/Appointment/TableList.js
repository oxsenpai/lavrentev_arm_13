import React from "react";
import styles from '../Patient/TableList.module.css'
import MainAppTable from '../MainTable/MainAppTable'
import ButtonPanel from './ButtonPanel'
import { useState } from "react";

const TableList = ({appointments, removeAppointment, createAppointment, openEditModal}, props) => {
    return (
        <div className={styles.main_div}>
            <MainAppTable appointments = {appointments} removeAppointment = {removeAppointment} openEditModal = {openEditModal}/>
            <ButtonPanel last_id = {appointments.length} createAppointment = {createAppointment} type = "Appointment" patients = {props.patients} doctors = {props.doctors}></ButtonPanel>
        </div>
    );
};

export default TableList;