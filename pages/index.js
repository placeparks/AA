import styles from "../styles/Home.module.css"
import React from "react"
import { Login } from "../components/login"

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Login />
      </div>
    </main>
  )
}

export default Home
