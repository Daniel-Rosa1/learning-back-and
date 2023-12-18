const { Router } = require("express")
const NotesController = require("../controllers/NotesController")

const notesRoutes = Router()
const ensureAuthentucated = require("../middleware/ensureAuthentucated")

const notesController = new NotesController()



notesRoutes.get("/", ensureAuthentucated, notesController.index)
notesRoutes.post("/", ensureAuthentucated, notesController.create)
notesRoutes.get("/:id", ensureAuthentucated, notesController.show)
notesRoutes.delete("/:id", ensureAuthentucated, notesController.delete)

module.exports = notesRoutes;