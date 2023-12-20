import React from 'react'
import styles from "./navbar.module.css"
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { IoPersonSharp,IoSettingsSharp  } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <CiSearch/>
      </div>
      <div className={styles.icons}>
        <img src='../pakistan.jpg' width={30}/>
      <FaBell/>
      <IoPersonSharp/>
      <IoSettingsSharp/>
      <img src='../profile.jpg' width={30} style={{borderRadius:'20px'}}/>
      </div>
    </div>
  )
}

export default Navbar