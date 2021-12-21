import { gql } from '@apollo/client'

const GET_USUARIO_BY_ID = gql`
    query UserById($id: ID!){
        UsuarioById(id: $id) {
            id
            nombre
            dni
            email
            password
            rol
        }
    }
`;

export default GET_USUARIO_BY_ID;