"use client";

import styles from "../styles/Login.module.css"
import Input from "../components/Input"
import { useRouter } from "next/navigation"

export default function login(){
    const router = useRouter();
return (
    <div className={styles.container}>   
    <div className={styles.form}>
    <div className={styles.text}>
        <h1>Login</h1>
        <h6>Bem vindo ao Login!!</h6>
    </div>
    <div className={styles.inputs}>
    <Input tipo="text" text="Username" />
    <Input id="password" tipo="password" text="Password"  />
    <div className={styles.button}>
        <button className={styles.button} onClick={() => router.push("/profile")}>Login</button>
    </div>
    <nav className={styles.button}>
        <button className={styles.cadastro} onClick={() => router.push("/cadastro")}>Cadastro</button>
    </nav>
    </div>
        <div className={styles.b1}></div>
        <div className={styles.b2}></div>
        <div className={styles.b3}></div>
        <div className={styles.b4}></div>
    </div>
    </div>
  )
}