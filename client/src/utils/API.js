import axios from "axios";

export default {
    // Gets the saved books
    getAllSaved: function() {
        return axios.get("/api/books");
    },
    getOneSaved: function(id) {
        return axios.get("/api/books/" + id);
    },
    removeSaved: function(id) {
        return axios.delete("/api/books/" + id);
    },
    saveBook: function(data) {
        return axios.post("/api/books", data);
    }
}