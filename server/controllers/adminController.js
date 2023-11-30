const { Admin } = require('../models')
const midtransClient = require('midtrans-client')
const { signToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");

class AdminController{
    static async registerAdmin(req, res, next){
        const {username, email, password} = req.body
        try{
            const newAdmin = await Admin.create({
                username, email, password
            })
            res.status(201).json({
                newAdmin
            })
        } catch (err){
            console.log(err);
            next(err)
        }
    }

    static async handleLoginAdmin(req, res, next){
        try {
            const {email, password} = req.body

            const admin = await Admin.findOne({
                where : { email }
            })
            if(!admin){
                throw { name : "Invalid Login" }
            }

            const isValidPassword = comparePassword(password, admin.password)
            if(!isValidPassword){
                throw { name : "Invalid Login" }
            }

            //generate JWT
            const accessToken = signToken({
                id : admin.id,
                username : admin.username
            })
       
            res.status(200).json({
                access_token : accessToken,
                username : admin.username,
                id : admin.id
            })
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

}

module.exports = AdminController