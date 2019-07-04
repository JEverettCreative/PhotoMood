const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Project.create(req.body)
            .then(function(data) {
                console.log(data);
                res.json(data);
            })
            .catch(err => res.status(422).json(err));
    }
};