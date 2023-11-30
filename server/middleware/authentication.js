const { verifyToken } = require("../helpers/jwt");
const { Guest } = require("../models")

const authentication = async function(req, res, next){
    try {
        const { access_token } = req.headers

        if(!access_token) {
            throw { name : "unauthenticated"}
        }
        const decoded = verifyToken(access_token)

        const findUser = await Guest.findOne({
            where : {
                id : decoded.id
            }
        })
        if(!findUser){
            throw { name : "unauthenticated" }
        }
        req.user = {
            id : findUser.id,
            email : findUser.email
        }
    } catch (err) {
        next(err)

    } next()
}

module.exports = authentication