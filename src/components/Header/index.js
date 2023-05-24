import React from 'react'
import styles from './Header.module.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import MyNavbar from '../Navbar'

export default function Header() {
  return (
    //<Navbar>
      //<Container className='text-bg-primary py-2 ' fluid>
        //<div className='header'>
          //<div className="text-white">АРМ СТОМАТОЛОГИЯ</div>
          //<MyNavbar />
       // </div>
      //</Container>
    //</Navbar>
    <div className= {styles.header}>
      <div className={styles.header_logo}>АРМ СТОМАТОЛОГИЯ</div>
      <MyNavbar/>
    </div>
  )
}
