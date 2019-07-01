import axios from "axios";
require("dotenv").config();

const key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export default {
    getRandomPhoto: function() {
        return axios.get("https://api.unsplash.com/photos/random/?client_id=" + key);
    }
};