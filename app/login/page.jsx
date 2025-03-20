"use client";

import Input from "../../components/Input"
import { useRouter } from "next/navigation"
import styles from "./login.css"

export default function login() {
    const router = useRouter();

    return (
        <div className="container">
            <div className="form">
                <div className="text">
                    <h1>Login</h1>
                    <h6>Bem vindo ao Login!!</h6>
                </div>
                <div className="inputs">
                    <Input tipo="text" text="Username" />
                    <Input id="password" tipo="password" text="Password" />
                    <div className="button">
                        <button className="button" onClick={() => router.push("/profile")}>Login</button>
                    </div>
                    <nav className="button">
                        <button className="cadastro" onClick={() => router.push("/cadastro")}>Cadastro</button>
                    </nav>
                </div>
                <div className="b1"></div>
                <div className="b2"></div>
                <div className="b3"></div>
                <div className="b4"></div>
            </div>
        </div>
    )
}