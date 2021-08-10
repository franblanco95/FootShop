import './Auth.css';
import React, { useState, useEffect } from 'react';
import { getAuth } from '../../firebase/client';
import { Container, Row, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Auth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [error, setError] = useState(false);
    const [err, setErr] = useState('')
    const [usuario, setUsuario] = useState(false);


    // Estados y funciones de los modales
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleError = () => setError(false);

    const register = async () => {
        await getAuth().createUserWithEmailAndPassword(email, password);
        setUsuario(true)
    }

    const logout = async () => {
        await getAuth().signOut();
        setUsuario(false)
    }

    const login = async () => {
        try {
            await getAuth().signInWithEmailAndPassword(email, password);
            console.log("Bienvenido")
            setUsuario(true)
        } catch (e) {
            setErr(e.message)
            setError(true)
        }
    }

    useEffect(() => {
        const user = getAuth().currentUser;
        if (user) {
            setUsuario(true)
        }
    }, [])

    return (
        <>
            <Container fluid>
                <Row>

                    {!usuario ?
                        <div className="animated fadeIn auth-container">
                            <h1 className="auth-titulo">Bienvenido a FootShop!</h1>
                            <p className="auth-sub">Ingresa con tu email y contraseña</p>

                            <div className="input-container mb-3">
                                <input required className="auth-input" placeholder="E-mail" type="email" onChange={(e) => setEmail(e.target.value)} id="email" />
                            </div>

                            <div className="input-container mb-3">
                                <input required className="auth-input" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} id="password" />
                            </div>

                            <button className="login-button" onClick={login}>Iniciar Sesión</button>
                            <button className="login-button" onClick={handleShow}>Crear Cuenta</button>

                        </div>
                        :
                        <>
                            <p>Hola, {nombre}, {apellido} </p>
                            <Link to="/">Ver productos</Link>

                            <button onClick={logout}>Cerrar Sesion</button>
                        </>
                    }

                    <>

                        <Modal show={show} onHide={handleClose}>
                            <div className="animated fadeIn auth-container">
                                <h1 className="auth-titulo">Registrarte</h1>
                                <p className="auth-sub">Es rápido y facil</p>

                                <div className="prueba">

                                    <div className="mb-3">
                                        <input className="auth-input2" placeholder="Nombre" type="text" onChange={(e) => setNombre(e.target.value)} id="name" />
                                    </div>

                                    <div className="mb-3">
                                        <input className="auth-input2" placeholder="Apellido" type="text" onChange={(e) => setApellido(e.target.value)} id="secname" />
                                    </div>
                                </div>

                                <div className="input-container mb-3">
                                    <input className="auth-input" placeholder="E-mail" type="email" onChange={(e) => setEmail(e.target.value)} id="email" />
                                </div>

                                <div className="input-container mb-3">
                                    <input className="auth-input" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} id="password" />
                                </div>

                                <button className="login-button" onClick={register}>Registrarte</button>

                            </div>
                        </Modal>
                    </>

                    <>
                        <Modal show={error} onHide={handleError}>
                            <p>{err}</p>
                        </Modal>
                    </>

                </Row>
            </Container>



        </>
    )

}
