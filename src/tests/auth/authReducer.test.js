
import { authReducer } from "../../auth/authReducer";
import '@testing-library/jest-dom'
import { types } from "../../types/types";
// const state = {
//     name:'armando'
//     logged: true
// }


describe('Pruebas en authReducer', () => {
   
    test('debe de retornar el estado por defecto', () => {
        
        const state = authReducer({ logged: false}, {} );

        expect( state ).toEqual({ logged: false});
    });

    test('debe de autenticar y colocar el name de usurario', () => {

        const action = {
            type:types.login,
            payload:{
                name:'Armando'
            }
        }

        const state = authReducer({ logged: false }, action );

        expect( state ).toEqual( { name:'Armando',logged:true } );
    });

    test('debe de borrar el name del ususario y el logegd en false', () => {
        
        const data = {
            logged: false
        }

        const action = { type: types.logout }

        const state = authReducer({ logged: true, name:'Armando' }, action );

        expect( state ).toEqual( data );
    });
    
});

