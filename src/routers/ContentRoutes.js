import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UsuarioPage from '../components/usuarios/UsuarioPage'
import SideBar from '../components/SideBar/SideBar';
import ListarProyectos from '../components/proyecto/ListarProyectos';


const ContentRoutes = () => {
    return (
        <>
            <SideBar/>
            <Routes>
                <Route path="/usuarios/:action" element={ <UsuarioPage /> }/>
                <Route path="/usuarios" element={ <UsuarioPage /> }/>
                <Route path="/proyectos" element={ <ListarProyectos /> }/>

                <Route path="/" element={ <UsuarioPage /> }/>
            </Routes>   
        </>
    )
}

export default ContentRoutes
