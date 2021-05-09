import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node'
import {render, fireEvent, screen} from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import SignUpController from '../Components/SignUp/SignUpController'
import {changeAndVerify} from '../Utils/TestUtils'

const server = setupServer(
    rest.get('http://localhost:3001/getUser', (req, res, ctx) => {
        return res(ctx.json({exists: true}));    
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Renders without crashing', () => {
    render(<Router><SignUpController/></Router>);
});

test('Username already taken', async () => {
    render(<Router><SignUpController/></Router>);
    changeAndVerify('examplename123', 'testUsername');
    changeAndVerify('Password', '123456');
    changeAndVerify('Confirm Password', '123456');
    fireEvent.click(screen.getByText('Sign Up'));
    await screen.findByText('username taken');
});

test('Password too short', async () => {
    server.use(
        rest.get('http://localhost:3001/getUser', (req, res, ctx) => {
            return res(ctx.json({exists: false}));    
        })
    )
    render(<Router><SignUpController/></Router>);
    changeAndVerify('examplename123', 'testUsername1');
    changeAndVerify('Password', '12345');
    changeAndVerify('Confirm Password', '12345');
    fireEvent.click(screen.getByText('Sign Up'));
    await screen.findByText('passwords must be 6 characters or more');
});

test('Passwords do not match', async () => {
    server.use(
        rest.get('http://localhost:3001/getUser', (req, res, ctx) => {
            return res(ctx.json({exists: false}));    
        })
    )
    render(<Router><SignUpController/></Router>);
    changeAndVerify('examplename123', 'testUsername1');
    changeAndVerify('Password', '123456');
    changeAndVerify('Confirm Password', '123457');
    fireEvent.click(screen.getByText('Sign Up'));
    await screen.findByText("passwords don't match");
});
