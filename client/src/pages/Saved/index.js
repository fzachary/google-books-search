import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Column, Row, Container } from "../../components/Grid";
import List from "../../components/List";
import Book from "../../components/Book";
import Hero from "../../components/Hero";

class Saved extends Component {
    state = {
        saved: [],
        title: "",
        author: "",
        synopsis: ""
    };

    componentDidMount() {
        this.loadSaved();
    }

    loadSaved = () => {
        API.getAllSaved()
            .then(res =>
                this.setState({ 
                    saved: res.data,
                    title: "",
                    author: "",
                    synopsis: ""
                }))
                .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Column size="md-6">
                        <Hero />
                    </Column>
                    <Column size="md-6 sm-12">
                        {this.state.saved.length ? (
                            <List>
                                {this.state.saved.map(book => (
                                    <Book key={book._id}>
                                        <Link to={"/api/saved/" + book._id}>
                                            <strong>
                                                {book.title} by {book.author}
                                            </strong>
                                        </Link>
                                    </Book>
                                ))}
                            </List>
                        ) : (
                            <h3>No results to display...</h3>
                        )}
                    </Column>
                </Row>
            </Container>
        );
    }
}

export default Saved;
