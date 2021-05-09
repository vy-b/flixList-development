import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node'
import {render, fireEvent, screen} from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import LoginController from '../Components/Login/LoginController'
import {changeAndVerify} from '../Utils/TestUtils'

const server = setupServer(
    rest.get('http://localhost:3001/getUser', (req, res, ctx) => {
        return res(ctx.json({exists: false}));    
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Renders without crashing', () => {
    render(<Router><LoginController/></Router>);
})

test('Can change form fields', () => {
    render(<Router><LoginController/></Router>);
    changeAndVerify('examplename123', 'testUsername');
    changeAndVerify('Password', 'testPassword');
})

test('Invalid credentials', async () => {
    let username = undefined;
    const setUsername = (name) => {
        username = name;
    }
    render(<Router><LoginController setUsername={setUsername}/></Router>);
    changeAndVerify('examplename123', 'testUser');
    changeAndVerify('Password', 'pass');
    fireEvent.click(screen.getByText('Login'));
    await screen.findByText('invalid credentials');
    expect(username).toBe(undefined);
})

test('Username updated after successful login', async () => {
    server.use(
        rest.get('http://localhost:3001/getUser', (req, res, ctx) => {
            return res(ctx.json({exists: true}));    
        })
    )
    let username = undefined;
    const setUsername = (name) => {
        username = name;
    }
    render(<Router><LoginController setUsername={setUsername}/></Router>);
    changeAndVerify('examplename123', 'testUsername');
    changeAndVerify('Password', 'testPassword');
    fireEvent.click(screen.getByText('Login'));
    await screen.findByText('login successful');
    expect(username).toBe('testUsername');
})
