import React from 'react'
import styles from '../styles/TasckViewer.module.css'
import Card from './Card'

const TasckViewer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>Task Manager</div>
        <div className={styles.content}>
            {Array.from({length:10}).map((_,index) => {
                return <Card />
            })}
            </div>
    </div>
  )
}

export default TasckViewer