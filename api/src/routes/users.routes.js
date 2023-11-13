const { Router } = require("express")
const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()
const ensureAuthentucated = require("../middleware/ensureAuthentucated")

const usersController = new UsersController()

usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuthentucated, usersController.update)

module.exports = usersRoutes;