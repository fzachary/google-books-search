import axios from "axios";

export default {
    // Shows all saved books
    getBooks: function() {
        return axios.get();
    },
    // Gets the book with the given id
    getAllSaved: function() {
        return axios.get("/api/saved");
    },
    getOneSaved: function(id) {
        return axios.get("/api/saved/" + id);
    }
}