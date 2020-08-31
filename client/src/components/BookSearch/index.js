import React from 'react';
import { Card, Form, FormControl, Button } from 'react-bootstrap';
import './BookSearch.css';


const BookSearch = (props) => {
    
    return (
        <Card className='my-4'>
            <Card.Header className='py-1 alert alert-primary'>Book Search</Card.Header>
            <Card.Body>
                <Form inline onSubmit={props.handleFormSubmit}>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        name="search"
                        value={props.search}
                        onChange={props.handleInputChange}
                    />
                    {console.log('searchState: ', props.search)}
                    <Button
                        variant="outline-primary"
                        onClick={props.handleFormSubmit}
                    >Search</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default BookSearch;