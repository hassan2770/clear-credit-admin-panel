"use client"
import React from "react";
import styles from "./menuLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const MenuLink = ({ item }) => {
    const pathname= usePathname();
  return (
    <Link href={item.path} className={`${styles.wrapper} ${pathname === item.path && styles.active}`}>
      <span className={styles.icon}>{item.icon}</span>
      <span className={pathname===item.path ? styles.titleactive : styles.title}>{item.title}</span>
      <span className={styles.arrow}>{item.icon2}</span>
    </Link>
  );
};

export default MenuLink;
