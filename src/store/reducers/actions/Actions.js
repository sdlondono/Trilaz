import {
    SET_USER,
    DEL_USER,
} from './actionTypes';



const setUsuario = newUsuario => ({
    type: SET_USER,
    payload: newUsuario
});


const delUsuario = () => ({
    type: DEL_USER,
    payload: {}
});


export {
    setUsuario,
    delUsuario
}
