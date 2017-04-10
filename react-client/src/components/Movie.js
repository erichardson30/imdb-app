import React from 'react';
import './Movie.css';

// Component to display a single movie from IMDB API
const Movie = ({movie, clearSearch}) => (
    <div className="movie-container">
        <button className="close-button" onClick={clearSearch}>X</button>
        <div className="movie-title">{movie.data.data.title}</div>
        <div className="movie-poster"><img alt="movie poster" src={movie.data.data.poster} /></div>
        <section className="movie-details">
            <strong>Director :</strong> {movie.data.data.director}
            <br />
            <strong>Year :</strong> {movie.data.data.year}
        </section>
        <section className="movie-plot">
            {movie.data.data.plot}
        </section>
        <div className="read-more">
            <a href={movie.data.data.imdburl}>Read More</a>
        </div>
    </div>
)

export default Movie;