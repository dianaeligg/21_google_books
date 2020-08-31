import React from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

// Components
import BookCard from '../BookCard.js';

const Results = ({ title, results }) => {

    const savedBooks = ['Saved 1', 'Saved 2']
    let location = useLocation();

    return (
        <Card className='my-4'>
            <Card.Header className={`py-1 alert alert-${location.pathname === '/Save' ? 'info' : 'primary'}`}>{title}</Card.Header>
            <Card.Body className='p-2'>
                {(location.pathname !== '/Save') ? (
                    results.map((book, index) => {
                        if (book.volumeInfo !== undefined) {
                            return (
                                <BookCard
                                    key={index}
                                    title={book.volumeInfo.title}
                                    subtitle={book.volumeInfo.subtitle}
                                    authors={book.volumeInfo.authors}
                                    description={book.volumeInfo.description}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    link={book.volumeInfo.infoLink}
                                />
                            );
                        }
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
