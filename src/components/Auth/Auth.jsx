import './Auth.css'
import React, { useState } from 'react'
import { getAuth } from '../../firebase/client';

export const Auth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Son funciones async porque devuelve una promesa 

    const user = getAuth().currentUser;

    const register = async () => {
        await getAuth().createUserWithEmailAndPassword(email, password);
    }

    const logout = async () => {
        await getAuth().signOut();
    }

    const login = async () => {
        await getAuth().signInWithEmailAndPassword(email, password);
    }

    return (
        <>
            {!user &&
                <div className="auth-container">
                    <h1 className="auth-titulo">Bienvenido a FootShop!</h1>
                    <p className="auth-sub">Ingresa con tu email y contraseña</p>
                    <div className="input-container mb-3">
                        <input className="auth-input" placeholder="E-mail" type="email" onChange={(e) => setEmail(e.target.value)} id="email" />
                    </div>
                    <div className="input-container mb-3">
                        <input className="auth-input" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} id="password" />
                    </div>

                    <button className="login-button" onClick={login}>Iniciar Sesión</button>
                    <button className="login-button" onClick={register}>Crear Cuenta</button>

                </div>
            }
            {
                user && <button onClick={logout}>Cerrar Sesion</button>
            }
        </>
    )

}
