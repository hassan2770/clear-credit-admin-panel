import React from 'react'
import styles from"./card.module.css"
const Card = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.card}>
            <img src='../bag.png' height={50}/>
            <span className={styles.number1}>714k</span>
            <span className={styles.text1}>Weekly Sales</span>
        </div>
        <div className={styles.card2}>
            <img src='../users.png' height={50}/>
            <span className={styles.number2}>1.35m</span>
            <span className={styles.text2}>New Users</span>
        </div>
        <div className={styles.card3}>
            <img src='../orders.png' height={50}/>
            <span className={styles.number3}>1.72m</span>
            <span className={styles.text3}>Item Orders</span>
        </div>
        <div className={styles.card4}>
            <img src='../bugs.png' height={50}/>
            <span className={styles.number4}>234</span>
            <span className={styles.text4}>Bug Reports</span>
        </div>
    </div>
  )
}

export default Card