  const { compare } = require("bcryptjs")
  const knex = require("../database/knex")
  const AppError = require("../utils/AppError")
  const authConfig = require("../config/auth")
  const {sign} = require("jsonwebtoken")

 class SessionsController{
  async create(request, reponse){
    const { email, password} = request.body

    const user = await knex("users").where({email}).first()
    
    if(!user){
      throw new AppError("E-mail e/ou senha incorreto", 401)
    }
    
    const passwordMatched = await compare(password, user.password)
    if(!passwordMatched){
      throw new AppError("E-mail e/ou senha incorreto", 401)
    }
 
    const {secret, expiresIn } = authConfig.jwt
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })

    return reponse.json({user, token})
  }
  

}

module.exports = SessionsController