const router = require("express").Router();
const project_data = require("../projects.json");

router.get('/', (req, res) => {
    res.render("index",{projects:project_data});
  });

  module.exports = router;