import React, { Component } from "react";
import { Container, Row, Column } from "../Grid";
import SaveBtn from "../SaveBtn";

class Book extends Component {

    
    render() {
        console.log(this.props);

        return(
            <li key={this.props.key}>
                <Container>
                    <Row>
                        <Column size="xs-8 sm-9">
                            <div className="card">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <a href={this.props.url}>
                                            <img src={this.props.image} class="card-img" alt="Book" />
                                        </a>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <a href={this.props.url}>
                                                <h3 className="card-title">{this.props.title}</h3>
                                            </a>
                                            <span>
                                                <h5>{this.props.authors.join(", ")}</h5>
                                            </span>
                                            <p className="card-text">{this.props.synopsis}</p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    <a href={this.props.url} rel="noopener noreferrer">
                                                        View This Book
                                                    </a>
                                                </small>
                                            </p>
                                        </div>
                                        <SaveBtn
                                                    authors={this.props.authors ? this.props.authors : ["No Author Information"]}
                                                    title={this.props.title}
                                                    synopsis={this.props.synopsis ? this.props.synopsis : "No Synopsis Available"}
                                                    url={this.props.url}
                                                    image={this.props.image ? this.props.image : "#"}
                                                />
                                    </div>
                                </div>
                            </div>
                        </Column>
                    </Row>
                </Container>
            </li>
        );
    }
}

export default Book;