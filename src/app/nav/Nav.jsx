// "use client"
// import React, { useState } from 'react';

import styles from './Nav.module.css'

function Nav() {
  return (
    <>
    <nav className={styles.nav1}>
      
      <ul className={styles.ul_nav} id="ul_nav">
      <img className={styles.logo} src='../../nav/icon4.png' alt="My " />

        <h1 className={styles.h1_nav}> Quick LOAN</h1>
        <li className={styles.li_nav}> <a className={styles.a_nav}
          href="#home">HOME</a></li>
        <li className={styles.li_nav}> <a className={styles.a_nav}
          href="#About">ABOUT</a> </li>
        <li className={styles.li_nav}> <a className={styles.a_nav}
          href="#Business_bank">Business bank</a></li>
        <li className={styles.li_nav}><a className={styles.a_nav}
          href="#Calculator">Calculator</a> </li>
        <li className={styles.li_nav}> <a className={styles.a_nav}
          href="#Contact">Contact</a></li>
        <button type="button" className={styles.but_Apply}>
          <a className={styles.a_Apply} href="conditions.html">Apply </a>
        </button>

      </ul>
      <div className={styles.icons}>
     
      </div>
     
      <div className={styles.icons}>
       <img id='open' src='../../nav/icon1.png' alt="My " /> </div>
      {/* <img id='colos' src='../../nav/icon2.png' alt="My " />  */}

    </nav>

    </>
  )



}
export default Nav