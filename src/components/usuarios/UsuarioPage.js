import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import CrearUsuario from './crear/CrearUsuario';
import EditarUsuario from './editar/EditarUsuario';
import ListarUsuarios from './listar/ListarUsuarios';

import '../components.css';


const UsuarioPage = () => {

    const { action } = useParams();

    return (
        <div class="Content">
        <section className="content mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-primary card-outline">
                            <div className="card-header flex">
                                <h5 className="m-0"></h5>
                                {
                                    action === 'crear' ?
                                        <NavLink className="btn btn-danger mr-3" to={`/usuarios`}>
                                            Cancelar
                                        </NavLink>
                                        :
                                        <NavLink className="btn btn-secondary mr-3" to={`/usuarios/crear`}>
                                            Crear Usuario
                                        </NavLink>
                                }
                            </div>
                            <div className="card-body">
                                { action === '' || action === undefined ? <ListarUsuarios /> : (action === 'crear') ? <CrearUsuario /> : <EditarUsuario userid={ action } />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        
    )
}

export default UsuarioPage
