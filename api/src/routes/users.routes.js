const { Router } = require("express")
const multer = require("multer")
const uploadConfig = require("../config/upload")

const UsersController = require("../controllers/UsersController")
const UserAvatarController  = require("../controllers/UserAvatarController")
const ensureAuthentucated = require("../middleware/ensureAuthentucated")

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuthentucated, usersController.update)

usersRoutes.patch("/avatar", ensureAuthentucated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;