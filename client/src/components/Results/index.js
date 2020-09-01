import React from "react";
import { Card, Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";

// Components
import BookCard from "../BookCard.js";

const Results = ({ title, results, showAlert, handleSaveClick }) => {
    const savedBooks = ["Saved 1", "Saved 2"];
    let location = useLocation();

    return (
        <Card className="my-4">
            <Card.Header
                className={`py-1 alert alert-${
                    location.pathname === "/Save" ? "info" : "primary"
                    }`}
            >
                {title}
            </Card.Header>
            <Card.Body className="p-2">
                {location.pathname !== "/Save"
                    ? results.map((book, index) => {
                        if (book.volumeInfo !== undefined) {
                            return (
                                <div key={index}>
                                    <BookCard
                                        index={index}

                                        _id={book.id}
                                        title={book.volumeInfo.title}
                                        subtitle={book.volumeInfo.subtitle}
                                        authors={book.volumeInfo.authors}
                                        description={book.volumeInfo.description}
                                        image={
                                            book.volumeInfo.imageLinks !== undefined
                                                ? book.volumeInfo.imageLinks.thumbnail
                                                : "https://via.placeholder.com/150/0000FF/808080?Text=GooogleBook"
                                        }
                                        link={book.volumeInfo.infoLink}
                                        handleSaveClick={handleSaveClick}
                                    />
                                    {parseInt(showAlert) === index ?
                                            <Alert className='py-1 px-5 text-right' variant="success">
                                            Book saved
                                            </Alert> : <div></div>
                                    }
                                </div>
                            );
                        }
                        console.log("showAlert: ", showAlert);
                    })
                    : savedBooks.map((book, index) => {
                        return (
                            <BookCard
                                key={index}
                                bookTitle={book}
                                handleSaveClick={handleSaveClick}
                            />
                        );
                    })}
            </Card.Body>
            {console.log("results in Results page: ", results)}
        </Card>
    );
};

export default Results;
