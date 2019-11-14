import React from "react";
import "./style.css";

function Form({ query, handleInputChange, handleFormSubmit }) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="Query">
                    <span>Search For Books Here</span>
                </label>
                <input
                    className="form-control"
                    type="text"
                    value={query}
                    placeholder="Harry Potter, J.K. Rowling, etc."
                    name="query"
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="pull-right">
                <button
                    onClick={handleFormSubmit}
                    type="submit"
                    className="btn btn-dark btn-lg float-right"
                >
                    SEARCH
                </button>
            </div>
        </form>
    );
}

export default Form;
