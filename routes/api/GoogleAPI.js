const router = require("express").Router();
const googleController = require("../../controllers/GoogleController");

// Matches with "/Google_API/books"
router.route("/:query")
  .get(googleController.search)


module.exports = router;
