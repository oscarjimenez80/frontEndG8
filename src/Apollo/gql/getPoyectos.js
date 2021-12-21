import { gql } from '@apollo/client'

const GET_PROYECTOS = gql`
    query
    {
        proyectos
        {
            nombre
            objetivosG
            objetivosE
            presupuesto
        }
}
`;

export default GET_PROYECTOS;