const express = require('express');
const router = express.Router();
const User = require('../model/user');
const {registerValidation, loginValidation} = require('../validation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// // validation
// const Joi = require('@hapi/joi');

// const schema = Joi.object({
//     name: Joi.string()
//         .min(6)
//         .required(),
//     email: Joi.string()
//         .min(6)
//         .required()
//         .email(),
//     password: Joi.string()
//         .min(6)
//         .required()
// });

// Register a user, request method: POST
router.post('/register', async (req, res) => {

    // // validate the data before registering user
    // const { error } =  schema.validate(req.body);
    // // res.send(error.details[0].message);
    // if (error) {
    //     return res.status(400).send(error.details[0].message)
    // }

    // Lets validate the data before creating user
    const {error} = registerValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    // checking if the email is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
        return res.status(400).send('Email already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    try {
        const saveUser = await user.save();
        res.status(201).send(saveUser);
    } catch (error) {
        res.status(400).send(error);
    }
 
});

// Login
router.post ('/login', async (req, res) => {
    // Lets validate the data before creating user
    const {error} = loginValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    // checking if the user exists
    const user = await User.findOne({ email: req.body.email });
    // console.log(user);
    if (!user) {
        return res.status(400).send("Email not found!");
    }

    //if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) {
        return res.status(400).send("Invalid Password");
    }

    // Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY);
    res.header('auth-token', token).send(token);
    // res.send('Logged in!');
});


module.exports = router;
