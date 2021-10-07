import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {authReducer} from './auth-reducer';
import {registrationReducer} from './registration-reducer';
import {passwordRecoverReducer} from './passwordRecover-reducer';
import {enterNewPasswordReducer} from './enterNewPassword-reducer';
import {cardsReducer} from './cards-reducer';
import {packsReducer} from './packs-reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    passwordRecover: passwordRecoverReducer,
    enterNewPassword: enterNewPasswordReducer,
    packs: packsReducer,
    cards: cardsReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionType = any

// @ts-ignore
window.store = store;
