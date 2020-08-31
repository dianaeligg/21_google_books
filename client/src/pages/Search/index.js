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
                console.log('res.data.items : ', res.data.items);
                console.log('title: ', res.data.items[0].volumeInfo.title);
                console.log('subtitle: ', res.data.items[0].volumeInfo.subtitle);
                console.log('authors: ', res.data.items[0].volumeInfo.authors);
                console.log('description: ', res.data.items[0].volumeInfo.description);
                console.log('image: ', res.data.items[0].volumeInfo.imageLinks.thumbnail);
                console.log('link: ', res.data.items[0].volumeInfo.infoLink);
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