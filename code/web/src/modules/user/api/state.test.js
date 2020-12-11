import state from './state.js'

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
})