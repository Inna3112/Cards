import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {profileReducer} from './profile-reducer';
import {loginReducer} from './login-reducer';
import {registrationReducer} from './registration-reducer';
import {passwordRecoverReducer} from './passwordRecover-reducer';
import {enterNewPasswordReducer} from './enterNewPassword-reducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    login: loginReducer,
    registration: registrationReducer,
    passwordRecover: passwordRecoverReducer,
    enterNewPassword: enterNewPasswordReducer,
})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionType = any

// @ts-ignore
window.store = store;
