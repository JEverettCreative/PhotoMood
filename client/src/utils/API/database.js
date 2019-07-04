import axios from "axios";
require("dotenv").config();


export default {
    saveProject: function(projectData) {
        return axios.post("/api/userhome", projectData);
    }
};