const { Couple, Gallery, Info, Guest, Story } = require('../models')
const midtransClient = require('midtrans-client')
const { signToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


class CoupleController{

    static async handleGoogleLogin(req, res, next){
        const { google_token } = req.headers

        try {
            const ticket = await client.verifyIdToken({
                idToken : google_token,
                audience : process.env.GOOGLE_CLIENT_ID
            })

            const payload = ticket.getPayload()

            const [newUser,  created] = await Guest.findOrCreate({
                where : {
                    email : payload.email
                },
                defaults : {
                    username : payload.name,
                    email : payload.email,
                    // password : "apaajadah",
                    // role : "staff"
                },
                hooks : false
            })
            const accessToken = signToken({
                id : newUser.id,
                username : newUser.email
            });
            res.status(200).json({
                access_token : accessToken,
                username : newUser.username,
                role : newUser.role,
                id : newUser.id
            })
            
        } catch (err) {
            next(err)
        }
    }

    static async postCouple(req, res, next){
        try {
            const { namaPria, namaWanita, imageProfilPria, imageProfilWanita, infoPria, infoWanita } = req.body 
            console.log(req.body);
            const newCouple = await Couple.create({ namaPria, namaWanita, imageProfilPria, imageProfilWanita, infoPria, infoWanita })
            
            res.status(201).json(newCouple)
        } catch (err) {
            next(err)
            console.log(err);
        }
    }

    static async postGallery(req, res, next){
        try {
            const { CoupleId, imageUrl } = req.body 
            console.log(req.body);
            const newGallery = await Gallery.create({ CoupleId, imageUrl })
            
            res.status(201).json(newGallery)
        } catch (err) {
            next(err)
            console.log(err);
        }
    }

    static async postInfo(req, res, next){
        try {
            const { CoupleId, alamat, jadwalAkad, jadwalResepsi } = req.body 
            console.log(req.body);
            const newInfo = await Info.create({ CoupleId, alamat, jadwalAkad, jadwalResepsi })
            
            res.status(201).json(newInfo)
        } catch (err) {
            next(err)
            console.log(err);
        }
    }

    static async postStory(req, res, next){
        try {
            const { CoupleId, title, description } = req.body 
            console.log(req.body);
            const newStory = await Story.create({ CoupleId, title, description })
            
            res.status(201).json(newStory)
        } catch (err) {
            next(err)
            console.log(err);
        }
    }

    // static async presence(req, res, next){
    //     try {
    //         const { CoupleId, name, totalPerson, status } = req.body 
    //         console.log(req.body);
    //         const newGuest = await Story.create({  CoupleId, name, totalPerson, status  })
            
    //         res.status(201).json(newGuest)
    //     } catch (err) {
    //         next(err)
    //         console.log(err);
    //     }
    // }

    static async getCouple(req, res, next){
        try {
            const findCouple = await Couple.findAll({
                include : [Gallery, Info, Story ]
            })
            res.status(200).json(findCouple)
        } catch (err) {
            next(err)
        }
    }

    static async getCoupleById(req, res, next){
        try {
            const { id } = req.params
            const findCouple = await Couple.findByPk(id, {
                include : [Gallery, Info, Story ]
            })
            res.status(200).json(findCouple)
        } catch (err) {
            next(err)
        }
    }

    static async generateMidtransToken(req, res, next){
        try {
            const emailUser =req.user.email
            let snap = new midtransClient.Snap({
                isProduction : false,
                serverKey : process.env.MIDTRANS_SERVER_KEY
            });

            let parameter = {
                transaction_details: {
                    order_id: "Transaction_" + Math.floor(1000000 + Math.random() * 900000),
                    gross_amount: 100000
                },
                credit_card:{
                    secure : true
                },
                customer_details: {
                    // first_name: "Test",
                    email : emailUser
                }
            };
            const midtransToken = await snap.createTransaction(parameter)
            // console.log(midtransToken);
            res.status(201).json(midtransToken)
        } catch (err) {
            next(err)
            // console.log(err, "ini error");
        }
    }

    static async postGuest(req, res, next){
        try {
            const { name, totalGuest, status  } = req.body
            const newGuest = await Guest.create({name, totalGuest, status})
            res.status(201).json({newGuest})
        } catch(err) {
            next(err)
            console.log(err);
            
        }
    }

    static async getGuestList(req, res, next){
        try {
            const guesLists = await Guest.findAll()
            if(!guesLists){ throw {name : "Not Found"}}
            res.status(200).json(guesLists)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = CoupleController