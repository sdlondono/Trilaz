import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';

import usuarioReducer from './reducers/usuarioReducer';

const Logger = createLogger()

export default (initialState = {}) => (
    createStore(
        combineReducers({
            usuario: usuarioReducer,
        }),
        initialState,
        applyMiddleware(
            Logger,
            promiseMiddleware,
            thunk
        )
    )
);
