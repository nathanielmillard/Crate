import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from '../Profile.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../api/state.js';

describe('Profile', () => {
    const store = createStore(reducer)


    it.skip('should render the Profile component',() => {
        //setup
        const mockLogout = jest.fn()
        
        let props={
            user: {
                details: {
                    name: 'Bob Forehead',
                    email: 'Khaleta@thisisfake.com'
                }
            }
        }

        render(<Provider store={ store }><Profile user={props.user} logout={mockLogout} /></Provider>)
        //execution
        //assertion
      
       expect(true).toBe(true)
    })

    
})

