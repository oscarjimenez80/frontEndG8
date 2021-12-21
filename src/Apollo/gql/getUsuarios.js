import { gql } from '@apollo/client'

const GET_USUARIOS = gql`
    query {
        Usuarios {
            id
            nombre
            dni
            email
            rol
        }
    }
`;

export default GET_USUARIOS;