import axios from 'axios';
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, UPDATE_QUERY, CLEAR_SEARCH } from '../constants';
const apiUrl = 'http://localhost:9000/search?title=';

export const updateQuery = (query) => {
  return {
    type: UPDATE_QUERY,
    query
  }
}

export const searchSuccess = (results) => {
  return {
    type: SEARCH_SUCCESS,
    results
  }
}

export const searchFailure = (error) => {
  return {
    type: SEARCH_FAILURE,
    error
  }
}

export const searchRequest = (title) => {
  return (dispatch) => {
    dispatch({type: SEARCH_REQUEST});
    dispatch(searchSuccess(obj))
    // return axios.get(apiUrl + title)
    //   .then(response => {
    //     dispatch(searchSuccess(response));
    //   })
    //   .catch(err => {
    //     dispatch(searchFailure(err));
    //   })
  }
}

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  }
}
const obj = {"title":"Hello","_year_data":"2008","year":2008,"rated":"N/A","released":"2008-10-10T04:00:00.000Z","runtime":"129 min","genres":"Drama, Romance","director":"Atul Agnihotri","writer":"Atul Agnihotri (screenplay), Chetan Bhagat (additional dialogue), Chetan Bhagat (book), Jalees Sherwani (lyrics), Alok Upadhyay (additional dialogue)","actors":"Bharti Achrekar, Amrita Arora, Sharman Joshi, Katrina Kaif","plot":"Hello... is a tale about the events that happen one night at a call center. Told through the views of the protagonist, Shyam, it is a story of almost lost love, thwarted ambitions, absence of family affection, pressures of a patriarchal set up, and the work environment of a globalized office. Shyam is losing his girl friend because his career is going nowhere as he trudges his way around in a call center. His girl friend, Priyanka, is also an agent like him at the call center who is about to be snatched by an NRI technogeek. There is also the aspiring model, Esha, who is hoping for the break that seems to be always already eluding her and the man about town, Vroom, who is into well, things. The housewife, Radhika, who is constantly at the receiving end of her mother-in-law and a beleaguered grandfather, Military Uncle, who has been barred from interacting with his grandchild make up the rest of the call agents who see their worlds crumbling around them as the decisions of right sizing are conveyed by Bakshi, the boss. It is a night when dreams will finally crumble. Or will it? For there is that call from God. Narrated as a tale within a tale as a beautiful woman meets the auteur narrator and promises him a story on the condition that he has to narrate it further, Hello, based on Chetan Bhagat's one night @ the call center, is the one remarkable story from Tales from a Thousand and One globalizing, urban, Indian Nights.","languages":"Hindi","country":"India","awards":"N/A","poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZGM5NjliODgtODVlOS00OWZmLWIzYzMtMTI2OWIzMTM1ZGRhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg","ratings":[{"Source":"Internet Movie Database","Value":"3.4/10"}],"metascore":"N/A","rating":"3.4","votes":"1,525","imdbid":"tt1087856","type":"movie","dvd":"08 Dec 2008","boxoffice":"N/A","production":"N/A","website":"N/A","response":"True","series":false,"imdburl":"https://www.imdb.com/title/tt1087856"}