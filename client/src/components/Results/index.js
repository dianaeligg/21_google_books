import React from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

// Components
import BookCard from '../BookCard.js';

const Results = ({ title, results }) => {

    const searchedBooks = ['Searched 1', 'Searched 2', 'Searched 3'];
    const savedBooks = ['Saved 1', 'Saved 2']
    let location = useLocation();

    return (
        <Card className='my-4'>
            <Card.Header className={`py-1 alert alert-${location.pathname === '/Save' ? 'info' : 'primary'}`}>{title}</Card.Header>
            <Card.Body className='p-2'>
                {location.pathname !== '/Save' ? (
                    searchedBooks.map((book, index) => {
                        return (
                            <BookCard bookTitle={book} key={index} />
                        );
                    })
                ) : (
                        savedBooks.map((book, index) => {
                            return (
                                <BookCard bookTitle={book} key={index} />
                            );
                        })
                    )}
            </Card.Body>
            {console.log('results in Results page: ', results)}
        </Card>
    );

}

export default Results;