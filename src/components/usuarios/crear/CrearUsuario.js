import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import GET_USUARIOS from '../../../Apollo/gql/getUsuarios';
import SET_USUARIO from '../../../Apollo/gql/setUsuario';

const CrearUsuario = () => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [crearUsuario, { data, loading, error }] = useMutation(SET_USUARIO, {
        refetchQueries: [{
            query: GET_USUARIOS
        }]
    });

    useEffect(()=> {
        if (data) {
            console.log('data', data);
            
            navigate('/usuarios', {
                replace: true
            })
        }
    }, [data])

    const handleCreate = (args) => {       
        const { nombre, email, dni, password, rol } = args;
        crearUsuario({ variables: { nombre, email, dni, password, rol } });
    }

    return (
        <form onSubmit={handleSubmit(handleCreate)}>
            <div className="form-group">
                <input type="text" className='form-control mb-3' placeholder="Nombre" {...register("nombre", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="text" className='form-control mb-3' placeholder="DNI" {...register("dni", { required: true })} />                
                <input type="password" className='form-control mb-3' placeholder="Password" {...register("password", { required: true })} />
                <select className='form-control mb-3' {...register("rol", { required: true })}>
                    <option value="Lider">Lider</option>
                    <option value="Estudiante">Estudiante</option>
                </select>

            </div>
            <input className='btn btn-success' type="submit" />

        </form>
    )
}

export default CrearUsuario
