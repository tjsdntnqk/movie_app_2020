import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({year, title, summary, poster, genres, rating}) {
    return (
    <div className="movie">
       <Link
          to={{
              pathname: '/movie-detail',
              state: { year, title, summary, poster, genres, rating },
          }}
       >           
       <img src={poster} alt={title} title={title} />
       <div className="movie-data">        
       <h3 className="movie-title">{title}</h3>
       <h5 className="movie-year">{year}</h5>
       <h4 className="movie-rating">{rating}</h4>
       <ul className="movie-genres">
        {genres.map((genre, index) => {
            return <li key={index} className="movie-genres">{genre}</li>;
        })}
       </ul>
       <p className="movie-summary">{summary.slice(0, 180)}...[more]</p>
     </div>
    </Link>
    </div>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;