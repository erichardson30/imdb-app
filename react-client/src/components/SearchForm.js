import React, { PropTypes } from 'react';
import './SearchForm.css';

// Search form component to allow a user to search a movie title
const SearchForm = ( { query, onSearchCLick, onTextChange, results }) => {
  const handleChange = (event) => {
    onTextChange(event.target.value);
  }
  const handleClick = () => {
    onSearchCLick(query)
  }
  return (
    <div className='search-form'>
      <h3 className="search-form-header">Type in a movie title below to search IMDB</h3>
      <div className='search-form-row'>
        <input type='text' placeholder='Search a title' onChange={handleChange}/>
        <button type='button' onClick={handleClick}>Search</button>
      </div>
      {(results && results.data.type==='tv') ? <div className="error">Sorry, we are not fans of TV shows here. Please search a movie instead.</div> : null}
      {(results && results.data.message) ? <div className="error">{results.data.message}</div> : null}
    </div>
  );
};

SearchForm.propTypes = {
  onSearchCLick: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  query: PropTypes.string
}

export default SearchForm;