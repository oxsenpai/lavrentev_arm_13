import React from "react";
import styles from '../Patient/TableList.module.css'
import MainDocTable from '../MainTable/MainDocTable'
import ButtonPanel from './ButtonPanel'
import { useState } from "react";

const TableList = ({doctors, removeDoctor, createDoctor, openEditModal}) => {
    return (
        <div className={styles.main_div}>
            <MainDocTable doctors = {doctors} removeDoctor = {removeDoctor} openEditModal = {openEditModal}/>
            <ButtonPanel last_id = {doctors.length} createDoctor = {createDoctor} type = "Doctor"></ButtonPanel>
        </div>
    );
};

export default TableList;