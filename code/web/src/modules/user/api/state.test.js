import state from './state.js'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'

describe('state', () => {
    it('should return the initial state', () => {
        
        const initialState = {
            error: null,
            isLoading: false,
            isAuthenticated: false,
            details: null
        }
        const result = state(undefined, {});
        expect(result).toEqual(initialState);

    })

    it('should set the user state', () => {
        const action ={
            type: SET_USER,
            user: 'forehead Taylor'
        }

        const initialState = {
            error: null,
            isLoading: false,
            isAuthenticated: false,
            details: null
        }
        const nextState = state(initialState, action);

        expect(nextState).toEqual(
            {
                details: 'forehead Taylor',
                error: null,
                isAuthenticated: true,
                isLoading: false
            }
        );

    })
})