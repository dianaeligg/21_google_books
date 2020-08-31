import React,{ useState }  from 'react';

// Components
import BookSearch from '../../components/BookSearch';
import Results from '../../components/Results';

// Utils
import GoogleAPI from "../../utils/GoogleAPI";


const Search = () => {

    const [searchState, setSearchState] = useState({
        search: ''
    });
    const [resultsState, setResultsState] = useState([{}]);


    const searchBooks = query => {
        GoogleAPI.search(query)
            .then(res => {
                setResultsState(res.data.items);
            })
            .catch(err => console.log(err));
    };

    const handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setSearchState({
            [name]: value
        });
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        searchBooks(searchState.search);
    };


    return (
        <div className='px-5'>
            <BookSearch
                search={searchState.search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
            <Results
                title={'Results'}
                results={resultsState}
            />
        </div>
    );
}

export default Search;