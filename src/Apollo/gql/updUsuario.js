import { gql } from '@apollo/client'

const UPDATE_USUARIO = gql`
        mutation updUsuario($userid: ID!, $nombre: String!,  $email: String!,$dni: String!, $password: String!, $rol: String!){  
            actualizarUsuario(id: $userid, nombre: $nombre,email:$email, dni:$dni, password:$password, rol:$rol){
    			nombre
    			email
                dni
    			rol
            } 
        }
    `;

export default UPDATE_USUARIO;

