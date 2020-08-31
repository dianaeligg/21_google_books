import React, { useState } from 'react';
import { Card, Form, FormControl, Button } from 'react-bootstrap';
import './BookSearch.css';
import GoogleAPI from "../../utils/GoogleAPI";

const BookSearch = () => {

    const [searchState, setSearchState] = useState({
        search: ''
    });
    const [resultsState, setResultsState] = useState();


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
                setResultsState(res.data.items)
                // console.log('resultsState: ', resultsState);
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
        <Card className='my-4'>
            <Card.Header className='py-1 alert alert-primary'>Book Search</Card.Header>
            <Card.Body>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        name="search"
                        value={searchState.search}
                        onChange={handleInputChange}
                    />
                    {console.log('searchState: ', searchState.search)}
                    <Button
                        variant="outline-primary"
                        onClick={handleFormSubmit}
                    >Search</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default BookSearch;

/* 
        title: '',
        subtitle: '',
        authors: [],
        description: '',
        image: '',
        link: ''
*/