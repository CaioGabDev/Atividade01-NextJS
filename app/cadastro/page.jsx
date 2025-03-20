"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../cadastro/cadastro.css";
import Input from "../../components/Input";
import "../cadastro/error.css";
import Button from "../../components/Button";

export default function Signup() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);

    const validatePassword = (password) => {
        const hasNumber = /\d/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);

        if (password.length === 0) {
            setPasswordError("");
            setSuccessMessage("");
        } else if (password.length < 6) {
            setPasswordError("A senha deve ter pelo menos 6 caracteres.");
            setSuccessMessage("");
        } else if (password.length > 12) {
            setPasswordError("A senha deve ter no máximo 12 caracteres.");
            setSuccessMessage("");
        } else if (!hasNumber) {
            setPasswordError("A senha deve conter pelo menos um número.");
            setSuccessMessage("");
        } else if (!hasUpperCase) {
            setPasswordError("A senha deve conter pelo menos uma letra maiúscula.");
            setSuccessMessage("");
        } else {
            setPasswordError("");
            setSuccessMessage("Senha válida!");
        }
    };


    const validateConfirmPassword = (confirmPassword) => {
        if (password !== confirmPassword) {
            setConfirmPasswordError("As senhas não coincidem.");
        } else {
            setConfirmPasswordError("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordError || confirmPasswordError || !username || !password || !confirmPassword) {
            return;
        }

        try {
            setLoading(true);
            console.log("Usuário cadastrado:", { username, password });
            router.push("/profile");
        } catch (error) {
            setLoading(false);
            alert("Erro ao criar conta. Tente novamente.");
        }
    };

    return (
        <div className="container">
            <div className="cardImg">
                <div className="imageSection"></div>
                <div className="loginSection">
                    <h2 className="loginTitle">CADASTRO</h2>
                    <p className="welcomeText">Crie sua conta e aproveite ao máximo!</p>

                    <form onSubmit={handleSubmit}>
                        <div className="inputGroup">
                            <label className="label">Nome de Usuário</label>
                            <Input
                                tipo="text"
                                text="Digite seu nome de usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                autoComplete="off"
                            />
                        </div>
                        
                        <div className="inputGroup">
                            <label className="label">Senha</label>
                            <Input
                                id="password"
                                tipo="password"
                                text="Digite sua senha"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    validatePassword(e.target.value);
                                    if (e.target.value === "") setPasswordError("");
                                    if (e.target.value === "") setSuccessMessage("");
                                }}
                                autoComplete="off"
                            />
                            {passwordError && <p className="error">{passwordError}</p>}
                            {successMessage && <p className="success">{successMessage}</p>}
                        </div>

                        <div className="inputGroupa">
                            <label className="label">Confirmar Senha</label>
                            <Input
                                id="confirmPass"
                                tipo="password"
                                text="Confirme sua senha"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    validateConfirmPassword(e.target.value);
                                    if (e.target.value === "") setConfirmPasswordError("");
                                }}
                                autoComplete="off"
                            />
                            {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
                        </div>

                        <Button
                            text="Cadastre-se!"
                            onClick={handleSubmit}
                            variant="primary"
                        />

                        <div className="cadastroSection">
                            <p className="cadastroText">Já tem uma conta?</p>
                            <Button
                                text="Login"
                                onClick={() => router.push("/login")}
                                variant="secondary"
                            />
                        </div>
                    </form>
                </div>
                <div className="b1"></div>
                <div className="b2"></div>
                <div className="b3"></div>
                <div className="b4"></div>
            </div>
        </div>
    );  
}