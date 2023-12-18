const { Router } = require("express")

const TagsController = require("../controllers/TagsController")
const ensureAuthentucated = require("../middleware/ensureAuthentucated")

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.use(ensureAuthentucated)

tagsRoutes.get("/", tagsController.index)


module.exports = tagsRoutes;