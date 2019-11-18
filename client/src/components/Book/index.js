import React, { Component } from "react";
import { Container, Row, Column } from "../Grid";
import "./style.css";

class Book extends Component {

    render() {
        return(
            <li>
                <Container>
                    <Row>
                        <Column size="md-12">
                            <div className="card">
                                <div className="card-header">
                                    <Row>
                                        <Column size="md-9">
                                            <h3 className="card-title">
                                                <a href={this.props.url}>
                                                    {this.props.title}
                                                </a>
                                            </h3>
                                        </Column>
                                        <Column size="md-3">
                                            {this.props.children}
                                            <button className="btn btn-light">
                                                <a href={this.props.url}>
                                                VIEW
                                                </a>
                                            </button>
                                        </Column>
                                    </Row>
                                </div>
                                <div className="card-body">
                                    <Row>
                                        <div className="col-md-2">
                                            <a href={this.props.url}>
                                                <img src={this.props.image} className="card-img" alt="Book" />
                                            </a>
                                        </div>
                                        <div className="col-md-10">
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
                                    </Row>
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