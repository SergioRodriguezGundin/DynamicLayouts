import {
    AuthState,
    SystemActionTypes,
    UPDATE_SESSION
} from './types'

const initialState: AuthState = {
    loggedIn: false,
    session: '',
    userName: ''
}

export function authReducer(
    state = initialState,
    action: SystemActionTypes
): AuthState {
    switch (action.type) {
        case UPDATE_SESSION: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}
