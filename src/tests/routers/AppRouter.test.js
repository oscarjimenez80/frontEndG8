import { ApolloProvider } from "@apollo/client";
import { mount } from "enzyme";
import { AuthContext } from "../../provider/AuthProvider";
import AppRouter from "../../routers/AppRouter";

import client from '../../Apollo/client';



describe('Pruebas de <AppRouter />', () => {
    

    test('debe mostrar el login si no esta autenticado', () => {
        const contextValue = {
            isLogged() {
                return false;
            }
        }

        const wrapper = mount(
            <ApolloProvider client={client}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </ApolloProvider>
        );

        // console.log(wrapper.html());

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h3').text()).toBe('Ingreso');

    })

    test('debe mostrar la pantalla de usuarios si esta autenticado', () => {
        const contextValue = {
            isLogged() {
                return true;
            }
        }

        const wrapper = mount(
            <ApolloProvider client={client}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </ApolloProvider>
        );

        // console.log(wrapper.html());

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);
    })


})