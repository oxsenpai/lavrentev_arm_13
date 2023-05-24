import React from "react";
import styles from './TableList.module.css'
import ButtonPanel from './ButtonPanel'
import MainTable from "../MainTable/MainTable";
import { useState } from "react";

const TableList = ({patients, removePatient, createPatient, openEditModal}) => {
    return (
        <div className={styles.main_div}>
            <MainTable patients = {patients} removePatient = {removePatient} openEditModal = {openEditModal}/>
            <ButtonPanel patients = {patients} last_id = {patients.length} createPatient = {createPatient} type = "Patient"></ButtonPanel>
        </div>
    );
};

export default TableList;