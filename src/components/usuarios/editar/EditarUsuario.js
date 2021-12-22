import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import GET_USUARIO_BY_ID from '../../../Apollo/gql/getUsuarioById';
import GET_USUARIOS from '../../../Apollo/gql/getUsuarios';
import UPDATE_USUARIO from '../../../Apollo/gql/updUsuario';

var userID;
const EditarUsuario = ({ userid }) => {
    userID = userid;
    console.log('userid', userid);
    const { register, handleSubmit } = useForm();
    const { loading, data, error } = useQuery(GET_USUARIO_BY_ID, { variables: { id: userid } });
    const [actualizarUsuario, { dataB, loadingB, errorB }] = useMutation(UPDATE_USUARIO, {
        refetchQueries: [{
            query: GET_USUARIOS
        }]
    });

    const handleUpdate = (args) => {
        const { nombre, email, dni, password, rol } = args;
        console.log('update=>', userid, nombre, dni, email, password, rol);
        actualizarUsuario({ variables: { userid, nombre, email, dni, password, rol } });
    }

    return (

        <>
            {console.log('==>', dataB)}
            {console.log('==>', loadingB)}
            {console.log('==>', errorB)}
            {/* {data && <h1>datos</h1>} */}
            {console.log('==>', data)}
            {error && <h1>error</h1>}
            {loading && <h1>datos</h1>}
            {data && <form onSubmit={handleSubmit(handleUpdate)}>
                <div className="form-group">
                    <input type="text" className='form-control mb-3' defaultValue={data.UsuarioById.nombre} placeholder="Nombre" {...register("nombre", { required: true })} />
                    <input type="text" className='form-control mb-3' defaultValue={data.UsuarioById.dni} placeholder="DNI" {...register("dni", { required: true })} />
                    <input type="text" className='form-control mb-3' defaultValue={data.UsuarioById.email} placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <input type="password" className='form-control mb-3' defaultValue={data.UsuarioById.password} placeholder="Password" {...register("password", { required: true })} />
                    <select className='form-control mb-3' {...register("rol", { required: true })}>
                        <option value="Lider">Lider</option>
                        <option value="Lider">Estudiante</option>
                    </select>
                </div>
                <input className='btn btn-success' type="submit" />

            </form>}
        </>

    )
}

export default EditarUsuario
