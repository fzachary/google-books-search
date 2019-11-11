import React, { Component } from "react";
import { Container, Row, Column } from "../Grid";
import Thumbnail from "../Thumbnail";

class Book extends Component {

    
    render() {
        console.log(this.props);

        return(
            <li>
                <Container>
                    <Row>
                        <Column size="xs-8 sm-9">
                            <h3>{this.props.title}<span><h5>{this.props.authors.join(", ")}</h5></span></h3>
                            <p>
                                {this.props.synopsis}
                            </p>
                            <a href={this.props.url} rel="noopener noreferrer">
                                See Book
                            </a>
                        </Column>
                        <Column size="xs-4 sm2">
                            <Thumbnail src={this.props.image} />
                        </Column>
                    </Row>
                </Container>
            </li>
        );
    }
}

export default Book;