import React from 'react';
import './Movie.css';

const Movie = ({movie, clearSearch}) => (
    <div className="movie-container">
        <button className="close-button" onClick={clearSearch}>X</button>
        <div className="movie-title">{movie.title}</div>
        <div className="movie-poster"><img src={movie.poster} /></div>
        <section className="movie-details">
            <strong>Director :</strong> {movie.director}
            <br />
            <strong>Year :</strong> {movie.year}
        </section>
        <section className="movie-plot">
            {movie.plot}
        </section>
        <div className="read-more">
            <a href={movie.imdburl}>Read More</a>
        </div>
    </div>
)

export default Movie;