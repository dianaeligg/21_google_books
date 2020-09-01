import React, { useState, useEffect } from 'react';

// Components
import Results from '../../components/Results';

// Utils
import API from "../../utils/API";


const Search = () => {

    const [resultsState, setResultsState] = useState([{}]);
    const [showAlert, setShowAlert] = useState('');

    useEffect(() => {
        getSavedBooks();
    }, []);

    const getSavedBooks = () => {
        API.getBooks()
            .then(res => {
                console.log('Saved books: ', res.data);
                setResultsState(res.data);
            })
            .catch(err => console.log(err));
    };

    const deleteBook = (id, index) => {
        API.deleteBook(id)
            .then(res => {
                console.log('Book deleted');
                console.log('res: ', res);
                showDeletedBookAlert(index);
            })
            .catch(err => console.log(err));
    };

    const showDeletedBookAlert = (index) => {
        setShowAlert(index);
        setTimeout(() => {
            setShowAlert('');
            getSavedBooks();
        }, 2000);
        
    }

    const handleDeleteClick = e => {
        let index = e.target.getAttribute('index');
        let id = e.target.getAttribute('id');
        console.log('book_id to delete: ', id);
        deleteBook(id, index);
    }

    return (
        <div className='px-5'>
            <Results
                title={'Saved books'}
                results={resultsState}
                showAlert={showAlert}
                handleDeleteClick={handleDeleteClick}
            />
        </div>
    );
}

export default Search;