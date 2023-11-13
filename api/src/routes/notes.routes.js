const { Router } = require("express")
const NotesController = require("../controllers/NotesController")

const notesRoutes = Router()
const ensureAuthentucated = require("../middleware/ensureAuthentucated")

const notesController = new NotesController()

notesRoutes.use(ensureAuthentucated)

notesRoutes.get("/", notesController.index)
notesRoutes.post("/", notesController.create)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)

module.exports = notesRoutes;