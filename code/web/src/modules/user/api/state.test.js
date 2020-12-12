import state from './state.js'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT, UPDATE_USER, LOAD_HISTORY } from './actions'
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

    it('Should update user profile information', () => {
        const initialState = {
            error: null,
            isLoading: false,
            isAuthenticated: true,
            details: null 
        }

        const userDetails = {
            name: 'Taylor',
            description: 'I love couches',
            email: 'taylor@couch.com',
            address: '123 ABC Street City, State 12345'
        }

        const action = {
            type: UPDATE_USER,
            details: userDetails
        }

        const result = state(initialState, action)
        
        expect(result.details).toEqual({
            name: 'Taylor',
            description: 'I love couches',
            email: 'taylor@couch.com',
            address: '123 ABC Street City, State 12345'
        })
    })

    // it('Should update state with a user\'s order history', () => {
    //     const initialState = {
    //         error: null,
    //         isLoading: false,
    //         isAuthenticated: true,
    //         details: null
    //     }

    //     const orderHistory = [
    //         {
    //           id: 1,
    //           image: 'images/crate-broken.png',
    //           name: 'A Thing!',
    //           description: "It's a thing!",
    //           purchased: true
    //         },
    //         {
    //           id: 2,
    //           image: 'images/crate-broken.png',
    //           name: 'A Different Thing!',
    //           description: "It's a thing!",
    //           purchased: false
    //         },
    //         {
    //             id: 3,
    //             image: 'images/crate-broken.png',
    //             name: 'A Third Thing!',
    //             description: "It's a thing!",
    //             purchased: true
    //           }
    //     ]

    //     const action = {
    //         type: LOAD_HISTORY,
    //         history: orderHistory
    //     }

    //     const expected = orderHistory
    //     const result = state(initialState, action)

    //     expect(result).toEqual({

    //     })
    // })
})