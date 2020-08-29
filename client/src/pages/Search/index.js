import React from 'react';

// Components
import BookSearch from '../../components/BookSearch';
import Results from '../../components/Results';


const Search = () => {
    return (
        <div className='px-5'>
            <BookSearch />
            <Results title={'Results'}/>
        </div>
    );
}

export default Search;