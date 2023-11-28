import React from 'react'
import styles from '../styles/Card.module.css'
//import Datetime from 'react-datetime';

const Card = () => {
  return (
    <div className={styles.card}>
     
        <div className={styles.top}>
            <div className={styles.title}>T-1</div>
        <div className={styles.todo}>ToDo</div>
        </div>

        <div className={styles.description}>Create a Design System for Enum Workspace.</div>
        <div className={styles.bottom}>
        <div className={styles.duedata}>Due Date</div>
        <div className={styles.datatime}>24/ 01 /2021</div>
        </div>
       
      
    </div>
  )
}

export default Card