'use client'
import {signIn} from "next-auth/react"
import styles from './login.module.css'

export default function Login() {

    return (
        <div className={styles.container}>
            <form className={styles.form} action="login">
                <h1>Iniciar Sección</h1>
                <label className={styles.label} htmlFor="user">Correo Electrónico</label>
                <input className={styles.input} type="text" name="user" id="user" />
                <label className={styles.label} htmlFor="password">Contraseña</label>
                <input className={styles.input} type="password" name="password" id="password" />
                <button onClick={() => signIn('google')} className={styles.button}>Iniciar Sección</button>
                <div className={styles.aContainer}>
                    <a className={styles.a} href="forgot-password">¿Olvidaste la Contraseña?</a>
                    <a className={styles.a} href="/uptaeb-virtual/registrarse">¿No tienes una cuenta? Registrate</a>
                </div>
            </form>
        </div>
    )
}