import React, { Component } from "react";
import axios from "axios";
import { Row, Column, Container } from "../../components/Grid";
import List from "../../components/List";
import Book from "../../components/Book";
import Empty from "../../components/Empty";
import "./style.css";
import SaveBtn from "../../components/SaveBtn";

class Search extends Component {

    state = {
    results: [],
    query: "",
    books: []
    };

    showResults = data => {
        this.setState({
            books: data.items
        })
        console.log(this.state);
    }

    searchBooks = () => {
        let queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`;
        axios.get(queryUrl)
            .then(res => {
                console.log(res.data.items);
                this.showResults(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        
        this.setState({
            [name]: value
        });
        console.log("Query: ", this.state.query);
    }

    render() {
        console.log(this.props);
        return (
            <Container>
                <Row id="search-row">
                    <Column size="md-12">
                        <div>
                            <input className="form-control form-control-lg"
                                    autoComplete="off"
                                    type="text"
                                    name="query"
                                    placeholder='"Harry Potter", "J.K. Rowling", etc.'
                                    onChange={this.handleInputChange}
                            />
                            <button type="submit" 
                                    className="btn btn-secondary btn-lg"
                                    onClick={this.searchBooks}
                            >Search
                            </button>
                        </div>
                    </Column>
                </Row>
                <Row>
                    <Column size="md-12" className="results-column">
                        <div>
                            {(this.state.books && this.state.books.length > 0) ? (
                            <List>
                                {this.state.books.map(book => {
                                    console.log(book.id);
                                    return (
                                        <div key={book.id}>
                                            <Book
                                                authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Information"]}
                                                title={book.volumeInfo.title}
                                                synopsis={book.volumeInfo.description ? book.volumeInfo.description : "No Synopsis Available"}
                                                url={book.volumeInfo.infoLink}
                                                image={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "#"}>
                                                <SaveBtn
                                                    authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Information"]}
                                                    title={book.volumeInfo.title}
                                                    synopsis={book.volumeInfo.description ? book.volumeInfo.description : "No Synopsis Available"}
                                                    url={book.volumeInfo.infoLink}
                                                    image={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "#"} />
                                            </Book>
                                        </div>
                                    )
                                })}
                            </List>
                            ) : (
                            <Empty />
                            )}   
                        </div>
                    </Column>
                </Row>
            </Container>
        );
    }
}

export default Search;