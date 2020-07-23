const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../../models/User')
const { secretOrKey } = require('../../config/keys')

const validateSignup = require('../../validation/signup')
const validateLogin = require('../../validation/login')


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {

     //validate signup data
    const {errors, isValid} = validateSignup(req.body)                           
    if(!isValid){
        return res.status(400).json(errors)
    }
    //if user already exist
    User.findOne({ where: {email: req.body.email} }).then(user => {                            
        if(user){
            return res.status(400).json({email: "Email already exist"})
        }
        else {
            const newUser = new User({
              email: req.body.email,
              phone: req.body.phone,
              password: req.body.password
            });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                  .save()
                  .then(user => res.json(user))
                  .catch(err => console.log(err));
              });
            });
        }
    })
})


// @route POST api/users/login
// @desc Login user
// @access Public
router.post("/login", (req, res) => {

    //validate login data
    const {errors, isValid} = validateLogin(req.body)
    if(!isValid){
        return res.status(400).json(errors)
    }
    //check if registered user
    User.findOne({ where: {email: req.body.email} }).then(user => {
        if(!user){
            return res.status(404).json({usernotfound : "User not found"})
        }
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if(isMatch){
                const payload = {
                    id : user.id,
                    email : user.email
                }
                // return res.status(200).json({LoggedIn : payload})
                jwt.sign(
                    payload,
                    secretOrKey,
                    {
                        expiresIn : 3600
                    },
                    (err,token) => {
                        res.json({
                            success : true,
                            token : "Bearer " + token
                        })
                    }
                )
            } else {
                return res.status(400).json({incorrectpassword : "Incorrect Password"})
            }
        })
    })
})



module.exports = router