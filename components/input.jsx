import styles from "../styles/Input.module.css";

export default function Input({ text, tipo, id, value, onChange, error, success }) {
    return (
        <div>
            <input 
                id={id} 
                className={`${styles.input} ${error ? styles.error : ''} ${success ? styles.success : ''}`} 
                type={tipo} 
                placeholder={text} 
                value={value} 
                onChange={onChange} 
            />
            {error && <p className={styles.errorMessage}>{error}</p>}
            {success && <p className={styles.successMessage}>{success}</p>}
        </div>
    );
}