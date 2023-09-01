/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import { connectToSmartWallet } from "../lib/wallets"
import styles from "../styles/Home.module.css"
import { Blocks } from "react-loader-spinner"
import { Connected } from "./Connected"
import loadingLottie from "../assets/lottie/loading.json"
import LottieLoader from "react-lottie-loader"
import login from "../assets/lottie/login.json"


export const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signer, setSigner] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingStatus, setLoadingStatus] = useState("")
  const [error, setError] = useState("")

  const connectWallet = async () => {
    if (!username || !password) return
    try {
      setIsLoading(true)
      const wallet = await connectToSmartWallet(username, password, status =>
        setLoadingStatus(status)
      )
      const s = await wallet.getSigner()
      setSigner(s)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      console.error(e)
      setError(e.message)
    }
  }

  return username && signer ? (
    <>
      <Connected signer={signer} username={username} />
    </>
  ) : isLoading ? (
    <div className={styles.filler}>
      <LottieLoader
    animationData={loadingLottie}
      />
      <p className={styles.label} style={{ textAlign: "center" }}>
        {loadingStatus}
      </p>
    </div>
  ) : error ? (
    <div className={styles.filler}>
      <p className={styles.label} style={{ textAlign: "center" }}>
        ❌ {error}
      </p>
      <button className={styles.button} onClick={() => setError("")}>
        Try again
      </button>
    </div>
  ) : (
    <>
      <div className={styles.row_center} style={{ marginTop: "2rem", marginBottom:"-90px" }}>
      <LottieLoader
    animationData={login}
      />
<<<<<<< HEAD
        <h3 className={styles.title} >UniPass</h3>
=======
        <h1 className={styles.title}>UniPass</h1>
>>>>>>> 90da410a762f1b518af20b5f4edce31c6cd908e2
      </div>
      <div className={styles.filler}>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className={styles.button} onClick={() => connectWallet()}>
          Login
        </button>
      </div>

    </>
  )
}
