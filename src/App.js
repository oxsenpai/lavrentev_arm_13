import './App.css';
import Login from './components/Login';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Appointment from './components/Appointment/Appointment';
import Patient from './components/Patient/Patient';
import Doctor from './components/Doctor/Doctor';
import PersonalAccount from './components/PersonalAccount/PersonalAccount';
import Root from './components/Root';
import { useState } from 'react';

let patients = [{id: 1, name: 'Лаврентьев Данил Алексеевич', gender: 'Мужской', birthDate: '15.03.2003', policy: '134557', passport: '927439'},
{id: 2, name: 'Иванов Кирилл Михайлович', gender: 'Мужской', birthDate: '27.04.2002', policy: '134557', passport: '927439'},
{id: 3, name: 'Котлярова Мария Валерьевна', gender: 'Женский', birthDate: '10.02.2005', policy: '134557', passport: '927439'},
{id: 4, name: 'Сидоров Олег Петрович', gender: 'Мужской', birthDate: '13.01.2004', policy: '134557', passport: '927439'},
{id: 5, name: 'Петров Вадим Семёнович', gender: 'Мужской', birthDate: '29.12.2001', policy: '134557', passport: '927439'}]

const updateData = (value) => {
  patients = value
  console.log(patients)
}

const doctors = [
  {id: 1, name: 'Докторов Доктор Докторович', gender: 'Мужской', birthDate: '31.01.1990', monday_cabinet: '410', monday_start: '8:00', monday_end: '18:00',
                                                                                          tuesday_cabinet: '302', tuesday_start: '8:00', tuesday_end: '18:00',
                                                                                          wednesday_cabinet: '303', wednesday_start: '8:00', wednesday_end: '18:00',
                                                                                          thursday_cabinet: '514', thursday_start: '8:00', thursday_end: '18:00',
                                                                                          friday_cabinet: '216', friday_start: '8:00', friday_end: '18:00',
                                                                                          saturday_cabinet: '203', saturday_start: '10:00', saturday_end: '16:00',
                                                                                          sunday_cabinet: '-', sunday_start: '-', sunday_end: '-'},
 {id: 2, name: 'Лаврентьев Данил Алексеевич', gender: 'Мужской', birthDate: '15.03.2003', monday_cabinet: '207', monday_start: '8:00', monday_end: '18:00',
                                                                                          tuesday_cabinet: '205', tuesday_start: '8:00', tuesday_end: '18:00',
                                                                                          wednesday_cabinet: '204', wednesday_start: '8:00', wednesday_end: '18:00',
                                                                                          thursday_cabinet: '208', thursday_start: '8:00', thursday_end: '18:00',
                                                                                          friday_cabinet: '304', friday_start: '8:00', friday_end: '18:00',
                                                                                          saturday_cabinet: '404', saturday_start: '9:00', saturday_end: '16:00',
                                                                                          sunday_cabinet: '-', sunday_start: '-', sunday_end: '-'}
]

const appointments = [
  {id: 1, time: '8:00', patient: 'Лаврентьев Данил Алексеевич', doctor: 'Докторов Доктор Докторович', type: 'Консультация'},
  {id: 2, time: '9:00', patient: 'Лаврентьев Данил Алексеевич', doctor: 'Докторов Доктор Докторович', type: 'Консультация'},
]



const router = createBrowserRouter(

  [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/appointment',
        element: <Appointment patients = {patients} doctors = {doctors} appointment = {appointments}/>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/patient',
        element: <Patient patients = {patients} updateData = {updateData}/>
      },
      {
        path: '/doctor',
        element: <Doctor doctors = {doctors}/>
      },
      {
        path: '/personalaccount',
        element: <PersonalAccount/>        
      }

    ]
  }
])



function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
