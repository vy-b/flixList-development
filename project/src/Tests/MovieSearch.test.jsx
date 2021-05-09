import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SearchController from '../Components/MovieSearch/SearchController'
import {changeAndVerify} from '../Utils/TestUtils'
import {BrowserRouter as Router} from 'react-router-dom'

const server = setupServer(
    rest.get('http://localhost:3001/getSearchResults', (req, res, ctx) => {
        return res(ctx.json([
            {imdbID: "tt4154756",
            title: "Avengers: Infinity War",
            poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZT...",
            year: "2018"}
        ]));    
    }),
    rest.get('http://localhost:3001/getTableMovieDetails', (req, res, ctx) => {
        return res(ctx.json(
            {imdbID: "tt4154756",
            title: "Avengers: Infinity War",
            plot: "The Avengers and their allies must be willing to sacrifice all in an a...",
            poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZT...",
            rated: "PG-13",
            year: "2018",
            runtime: "149 min",
            genre: "Action, Adventure, Sci-Fi",
            actors: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
            totalRating: 0,
            totalUsersRated:0}
        ));    
    }),
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Renders without crashing', () => {
    render(<SearchController/>);
});

test('Invalid search (not enough characters)', async () => {
    render(<SearchController/>);
    changeAndVerify('Movie Title', 'ab');
    fireEvent.click(screen.getByText('Search'));
    await screen.findByText('Please enter 3 characters or more')
})

test('Invalid search (movie not found)', async () => {
    server.use(
        rest.get('http://localhost:3001/getSearchResults', (req, res, ctx) => {
            return res(ctx.json(undefined));    
        })
    )
    render(<SearchController/>);
    changeAndVerify('Movie Title', 'abc');
    fireEvent.click(screen.getByText('Search'));
    await screen.findByText('Movie not found')
})

test('Valid search', async () => {
    render(<Router><SearchController/></Router>);
    changeAndVerify('Movie Title', 'Avengers');
    fireEvent.click(screen.getByText('Search'));
    await screen.findByText('Avengers: Infinity War');
    await screen.findByText('The Avengers and their allies must be willing to sacrifice all in an a...');
})

