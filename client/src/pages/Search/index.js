import React, { useState } from 'react';

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

    /* const saveBook = book => {
        GoogleAPI.search(query)
            .then(res => {
                setResultsState(res.data.items);
            })
            .catch(err => console.log(err));
    }; */

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

    const handleSaveClick = e => {
        console.log('id: ', e.target.getAttribute('id'));
        console.log('index: ', e.target.getAttribute('index'));
        let index = parseInt(e.target.getAttribute('index'));

        let book = {
            id: resultsState[index].id,
            title: resultsState[index].volumeInfo.title,
            subtitle: resultsState[index].volumeInfo.subtitle,
            authors: resultsState[index].volumeInfo.authors,
            description: resultsState[index].volumeInfo.description,
            image: resultsState[index].volumeInfo.imageLinks.thumbnail,
            link: resultsState[index].volumeInfo.infoLink
        }
        console.log('book: ', book);
    }


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
                handleSaveClick={handleSaveClick}
            />
        </div>
    );
}

export default Search;