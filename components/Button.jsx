import styles from "../styles/Button.module.css";

export default function Button({ text, onClick, variant = "primary" }) {
    return (
        <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
            {text}
        </button>
    );
}