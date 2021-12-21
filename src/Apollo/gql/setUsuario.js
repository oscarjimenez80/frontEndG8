import { gql } from '@apollo/client'

const SET_USUARIO = gql`
        mutation setUsuario($nombre: String!, $email: String!, $dni: String!, $password: String!, $rol: String!){            
            agregarUsuario(input:  {
                nombre: $nombre,
                email: $email,
                dni: $dni,
                password: $password,
                rol: $rol
            }) {
                id
                nombre
                email 
                rol                
                

            }               
        }
    `;

export default SET_USUARIO;