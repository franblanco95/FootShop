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
        <div>
            {!user &&
                <div className="auth-container">
                    <div className="mb-3">
                        <label htmlFor="email">Correo Electronico</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" />
                    </div>
                    <button onClick={login}>Iniciar Sesión</button>
                    <button onClick={register}>Crear Cuenta</button>

                </div>
            }
            {
                user && <button onClick={logout}>Cerrar Sesion</button>
            }
        </div>
    )

}
