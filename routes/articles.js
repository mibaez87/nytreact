const router = require("express").Router();
const articleController = require("../controllers/articleController");

// Should match with "/api/articles"
router
    .route("/")
    .get(articleController.findAll)
    .post(articleController.create)
    .delete(articleController.remove);

// Should match with "/api/articles/:id"
router
    .route("/:id")
    .get(articleController.findById)

module.exports = router;