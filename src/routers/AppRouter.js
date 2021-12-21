import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from '../components/login/LoginPage';
import RegistraUsuario from '../components/usuarios/registro/RegistraUsuario';
import ContentRoutes from './ContentRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/usuarios/crear" element={<RegistraUsuario />} />
            <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<LoginPage />} />

                <Route path="/*" element={
                    <PrivateRoute>
                        <ContentRoutes />
                    </PrivateRoute>
                } />

                {/* <Route path="/*" element={<ContentRoutes />} /> */}

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
