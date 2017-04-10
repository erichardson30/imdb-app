import React, { Component } from 'react';
import { connect } from 'react-redux'
import { searchRequest, updateQuery, clearSearch } from '../actions'
import SearchForm from '../components/SearchForm';
import Movie from '../components/Movie';
import './Search.css';

// Search container that wraps the search form and movie. Manages state of components
class Search extends Component {
  render() {
    const {query, onSearchCLick, onTextChange, results, clearSearch} = this.props;
     return(
        <div className="movie-search-container">
          <SearchForm
            query={query}
            onSearchCLick={onSearchCLick}
            onTextChange={onTextChange}
            results={results}
          />
          {(results && results.data.type === 'movie') ? <Movie movie={results} clearSearch={clearSearch}/> : null}
        </div>
     )
  }
}

const mapStateToProps = (state) => {
  return {
    query:  state.search.query,
    results: state.search.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchCLick: (query) => {
      dispatch(searchRequest(query))
    },
    onTextChange: (text) => {
      dispatch(updateQuery(text))
    },
    clearSearch: () => {
      dispatch(clearSearch())
    }
  }
}

Search = connect (
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default Search;