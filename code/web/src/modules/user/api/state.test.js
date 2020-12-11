import state from './state.js'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'
import '@testing-library/jest-dom'

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
        const action = {
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

    it('should show status of login request', () => {
        const action = {
            type: LOGIN_REQUEST,
            isLoading: true
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
                details: null,
                error: null,
                isAuthenticated: false,
                isLoading: true
            }
        );

    })

    it('should show status of login response', () => {
        const action = {
            type: LOGIN_RESPONSE,
            error: 'Please try again'
        }

        const initialState = {
            error: null,
            isLoading: false,
            isAuthenticated: false,
            details: null
        }
        const nextState = state(initialState, action);
        
        expect(nextState).toEqual(
            expect.objectContaining(
            {   
                error: 'Please try again',
                isLoading: false
            }
        )
        )

    })

    it('should show status of logout', () => {
        const action = {
            type: LOGOUT
        }

        const initialState = {
            error: null,
            isLoading: false,
            isAuthenticated: true,
            details: null 
        }

        const nextState = state(initialState, action);
        
        expect(nextState).toEqual({
            error: null,
            isLoading: false,
            isAuthenticated: false,
            details: null
        })

    })
})