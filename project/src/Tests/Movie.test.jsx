import React from 'react';
import {mount} from 'enzyme';
import Movie from '../Components/Movie'
import MovieTableEntry from '../Objects/MovieTableEntry'
import {BrowserRouter as Router} from 'react-router-dom'

describe('Movie.jsx tests', () => {
    test('Renders without crashing', () => {
        const wrapper = createWrapper('testTitle', 'testYear', 'testPoster','testPlot','testCast','testRuntime','testGenre','testRated');
    });
    
    test('Has proper title.', () => {
        const movieTitle = 'testTitle';
        const wrapper = createWrapper(movieTitle, 'testYear', 'testPoster','testPlot','testCast','testRuntime','testGenre','testRated');
        const title = wrapper.find('.title');
        expect(title.length).toBe(1);
        expect(title.at(0).text()).toBe(movieTitle);
    })

    test('Has proper year.', () => {
        const movieYear = '2021';
        const wrapper = createWrapper('testTitle', movieYear, 'testPoster','testPlot','testCast','testRuntime','testGenre','testRated');
        const year = wrapper.find('.year');
        expect(year.length).toBe(1);
        expect(year.at(0).text()).toBe(movieYear);
    })

    test('Has proper poster.', () => {
        const moviePoster = 'testPoster';
        const wrapper = createWrapper('testTitle', 'testYear', moviePoster,'testPlot','testCast','testRuntime','testGenre','testRated');
        const poster = wrapper.find('.poster');
        expect(poster.length).toBe(1);
        expect(poster.find('img').prop('src')).toBe(moviePoster);
    })

    test('Has proper plot.', () => {
        const moviePlot = 'testPlot';
        const wrapper = createWrapper('testTitle', 'testYear', 'testPoster',moviePlot,'testCast','testRuntime','testGenre','testRated');
        const plot = wrapper.find('.plot');
        expect(plot.length).toBe(1);
        expect(plot.at(0).text()).toBe(moviePlot);
    })

    test('Has proper cast.', () => {
        const movieCast = 'testCast';
        const wrapper = createWrapper('testTitle', 'testYear', 'testPoster','testPlot',movieCast,'testRuntime','testGenre','testRated');
        const cast = wrapper.find('.cast');
        expect(cast.length).toBe(1);
        expect(cast.at(0).text()).toBe(movieCast);
    })

    test('Has proper runtime.', () => {
        const movieRuntime = '1h45m';
        const wrapper = createWrapper('testTitle', 'testYear', 'testPoster','testPlot','testCast', movieRuntime,'testGenre','testRated');
        const runtime = wrapper.find('.runtime');
        expect(runtime.length).toBe(1);
        expect(runtime.at(0).text()).toBe(movieRuntime);
    })
    test('Has proper genre.', () => {
        const movieGenre = 'testGenre';
        const wrapper = createWrapper('testTitle', 'testYear', 'testPoster','testPlot','testCast', 'testRuntime',movieGenre,'testRated');
        const genre = wrapper.find('.genre');
        expect(genre.length).toBe(1);
        expect(genre.at(0).text()).toBe(movieGenre);
    })
    test('Has proper rating.', () => {
        const movieRating = 'PG-13';
        const wrapper = createWrapper('testTitle', 'testYear', 'testPoster','testPlot','testCast', 'testRuntime','testGenre',movieRating);
        const rated = wrapper.find('.rated');
        expect(rated.length).toBe(1);
        expect(rated.at(0).text()).toBe(movieRating);
    })
});

function createWrapper(title, year, poster,plot,cast,runtime,genre,rated){
    const movieTableEntry = new MovieTableEntry('testId', title, plot, poster, rated, year, runtime, genre, cast);
    const movie = <Router><Movie movieInfo={movieTableEntry} clickable={false}/></Router>
    const wrapper = mount(movie);
    return wrapper;
}