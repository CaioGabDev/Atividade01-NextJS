"use client";

import styles from "./cadastro.css"   
import Input from "../../components/Input"
import { useRouter } from "next/navigation"


export default function cadastro() {
    const router = useRouter();
    return (
        <div className="container">
        <div className="login">
            <h1>CADASTRO</h1>
            <h3>Crie ja sua conta no nosso site!!</h3>
            <Input tipo="text" text="Username" />
            <Input id="password" tipo="password" text="Password" />
            <Input id="confirmPass" tipo="password" text="Confirm Password" />
            <button className="button" onClick={() => router.push("/")}>Cadastre-se</button>
            <nav>
                <p>Já tem uma conta? <button className="cadastro" onClick={() => router.push("/")}> Faça login</button></p>
        </nav>
        </div>
    </div>
    ) 
}