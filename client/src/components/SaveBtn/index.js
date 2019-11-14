import React, { Component } from "react";
import Button from "../Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
                console.log(`${book.title} added to your library`);
                toast(`You saved ${book.title} by ${book.authors.join(", ")}.`)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Button type="primary"
                        onClick={() => this.saveBook(this.props)}>
                            SAVE
                </Button>
                <ToastContainer />
            </div>
        );
    }
}

export default SaveBtn;