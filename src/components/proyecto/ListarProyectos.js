import React from 'react'
import { NavLink } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client';
import GET_PROYECTOS from '../../Apollo/gql/getPoyectos';

const ListarProyectos = () => {

    const { loading, data, error } = useQuery(GET_PROYECTOS);

    const handleDelete = (id) => {
        console.log('=pROYECTO',data);
    }

    
    return (
        <div class="Content">
            <section className="content mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card card-primary card-outline">
                                <div className="card-header">
                                    <h5 className="m-0">Proyectos Activos</h5>
                                </div>
                                <div className="card-body">
                                    {
                                        data &&
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Nombre</th>
                                                    <th scope="col">Objetivo General</th>
                                                    <th scope="col">Objetivo Especifico</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.proyectos.map((proyecto, index) => (
                                                        <tr key={proyecto.id}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{proyecto.nombre} </td>
                                                            <td>{proyecto.objetivosG}</td>
                                                            <td>{proyecto.objetivosE}</td>
                                                            <td>{proyecto.presupuesto}</td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ListarProyectos
