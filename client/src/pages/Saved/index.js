import React, { Component } from "react";
import API from "../../utils/API";
import { Column, Row, Container } from "../../components/Grid";
import List from "../../components/List";
import Book from "../../components/Book";
import Hero from "../../components/Hero";

class Saved extends Component {
    state = {
        saved: [],
        initialized: true
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

    removeSaved = id => {
        console.log(id);

        API.removeSaved(id)
            .then( () => {
                console.log(`${id} deleted from DB`);
                this.loadSaved();
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Row>
                <Column size="md-12">
                    {this.state.saved.length ? (
                        <List>
                            {this.state.saved.map(book => (
                                <div key={book.id}>
                                    <Book
                                        authors={book.authors ? book.authors : ["No Author Information"]}
                                        title={book.title}
                                        synopsis={book.synopsis ? book.synopsis : "No Synopsis Available"}
                                        url={book.url}
                                        image={book.image ? book.image : "#"}>
                                    </Book>
                                </div>
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
