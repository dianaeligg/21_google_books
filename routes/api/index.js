const router = require("express").Router();
const bookRoutes = require("./books");
const GoogleAPIRoute = require("./GoogleAPI");

// Book routes
router.use("/books", bookRoutes);

// Google API
router.use('/Google_API', GoogleAPIRoute);

module.exports = router;
