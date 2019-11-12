import React, { Component } from "react";
import Button from "../Button";
import axios from "axios";

class SaveBtn extends Component {

    saveBook = (book) => {
        
        var dbBook = {
            title: book.title,
            authors: book.authors,
            synopsis: book.synopsis,
            image: book.image,
            url: book.url
        };

        axios.post("/api/books", dbBook)
            .then(() => {
                console.log(`${book.title} added to your library`)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Button type="primary"
                        onClick={() => this.saveBook(this.props)}>
                            Add To Library
                </Button>
            </div>
        );
    }
}

export default SaveBtn;