import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LOGIN_USUARIO from '../../Apollo/gql/loginUsuario';
import { useForm } from 'react-hook-form';
import './login.css';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom'

const LoginPage = () => {
    const auth = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [loginUsuario, { data, loading, error }] = useLazyQuery(LOGIN_USUARIO);

    useEffect(() => {
        if (data) {
            console.log('dataR', data);
            auth.setToken(data.login.token);
            auth.setUser({ usuario: data.login.usuario, rol: data.login.rol });
            if (data.login.token != null) {
                navigate('/usuarios', {
                    replace: true
                })
            }
            else {
                navigate('/login', {
                    replace: false
                })
            }
        }
    }, [data, navigate, auth]);


    const handleLogin = (args) => {
        const { email, password } = args;
        loginUsuario({ variables: { email, password } });
    }

    return (
        <div>
            <br /><br />
            <div class="login-form">
                <h2>Gestor de Proyectos Grupo 8</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="E-mail Address"
                            name="email"
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        />
                    </div>
                    {errors.email?.type === "required" && <div className="alert alert-danger mt-2" role="alert">
                        el correo es obligatorio
                    </div>}
                    {errors.email?.type === "pattern" && <div className="alert alert-danger mt-2" role="alert">
                        el correo no tiene el formto correcto
                    </div>}
                    <div className="form-group mt-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            {...register("password", { required: true })}
                        />
                    </div>
                    {errors.password && <div className="alert alert-danger mt-2" role="alert">
                        el password es obligatorio
                    </div>}
                    <div className="form-group mt-3">
                        {!loading && <input
                            type="submit"
                            className="login-btn"
                            value="Login"
                        />}

                        {loading && <button className="login-btn" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>}
                    </div>
                </form>
                <div class="seperator"><b>or</b></div>
                {
                    <NavLink className="register-btn" type="button" to={`/usuarios/crear`}>
                        Registrar
                    </NavLink>

                }
                {error && <div className="alert alert-danger" role="alert">
                    Usuario o contraseña incorrectos
               </div>}
            </div>
        </div>
    )
}

export default LoginPage
