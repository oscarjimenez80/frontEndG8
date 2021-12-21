import { gql } from '@apollo/client'

const LOGIN_USUARIO = gql`
        query signin($email: String!, $password: String!){            
            login(email: $email, password: $password) {
                token
                usuario
                rol
            }     
        }
    `;

export default LOGIN_USUARIO;