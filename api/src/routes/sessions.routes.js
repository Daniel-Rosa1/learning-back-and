const Router = require("express")

const SessionsController = require("../controllers/SessionsController")
const sessionsController = new SessionsController()

const sectionRoutes = Router()

sectionRoutes.post("/", sessionsController.create)

module.exports = sectionRoutes