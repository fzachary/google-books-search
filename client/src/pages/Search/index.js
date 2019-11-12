import React, { Component } from "react";
import axios from "axios";
import { Row, Column } from "../../components/Grid";
import List from "../../components/List";
import Book from "../../components/Book";
import Empty from "../../components/Empty";

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
            <Row>
                <Column size="md-12">
                    <div>
                        <span>
                            <h3 className="search-label">
                                Book Search
                            </h3>
                        </span>
                        <input className="form-control form-control-lg"
                                autoComplete="off"
                                type="text"
                                name="query"
                                placeholder="Enter Title"
                                onChange={this.handleInputChange}
                        />
                        <button type="submit" 
                                className="btn btn-secondary btn-lg"
                                onClick={this.searchBooks}
                        >SEARCH BOOKS
                        </button>

                        {(this.state.books && this.state.books.length > 0) ? 
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
                                        </Book>
                                    </div>
                                )
                            })}
                        </List>
                        : 
                        <Empty />
                        }   
                    </div>
                </Column>
        </Row>
        );
    }
}

export default Search;