import React, { Component } from "react";
import API from "../../utils/API";
import { Column, Row, Container } from "../../components/Grid";
import List from "../../components/List";
import Book from "../../components/Book";
import DeleteBtn from "../../components/DeleteBtn";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class Saved extends Component {
    state = {
        saved: []
    };

    componentDidMount() {
        this.loadSaved();
    }

    loadSaved = () => {
        API.getAllSaved()
            .then(res => {
                console.log(res.data);
                this.setState({ 
                    saved: res.data
                })
            })
             .catch(err => console.log(err));
    }

    removeSaved = book => {

        let id = book._id;

        console.log(id);

        API.removeSaved(id)
            .then(() => {
                console.log(`${id} deleted from DB`);
                toast(`${book.title} by ${book.authors} removed from saved books`);
                this.loadSaved();
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Row>
                <span className="header">Saved Books</span>
                    <Column size="md-12">
                        {this.state.saved.length ? (
                            <List>
                                {this.state.saved.map(book => (
                                    <Book
                                    key={book._id}
                                    authors={book.authors ? book.authors : ["No Author Information"]}
                                    title={book.title}
                                    synopsis={book.synopsis ? book.synopsis : "No Synopsis Available"}
                                    url={book.url}
                                    image={book.image ? book.image : "#"}>
                                        <DeleteBtn
                                            authors={book.authors ? book.authors : ["No Author Information"]}
                                            title={book.title}
                                            synopsis={book.synopsis ? book.synopsis : "No Synopsis Available"}
                                            url={book.url}
                                            image={book.image ? book.image : "#"} 
                                            id={book._id} 
                                            onClick={() => this.removeSaved(book)} />

                                </Book>
                            ))}
                        </List>
                    ) : (
                        <h3>No results to display...</h3>
                    )}
                    </Column>
                </Row>
        );
    }
}

export default Saved;
