const router = require("express").Router();
const projectController = require("../../controllers/projectController");

router.route("/userhome")
    .post(projectController.create);

module.exports = apiRoutes;