const User=require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSignUp = async (req, res) => {

    const{email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message: "Please enter all fields"});
    }
    let user = await User.findOne({email});
    if(user){
        return res.status(400).json({error: "User already exists"});
    }
    const hashpwd = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        email,
        password: hashpwd
    });
    let token = jwt.sign({id: newUser._id}, process.env.SECRET_KEY);
    return res.status(200).json({token,user:newUser});
}


const userLogin = async (req, res) => {

    const{email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message: "Please enter all fields"});
    }
    let user = await User.findOne({email});
    if(user &&  await bcrypt.compare(password, user.password)){
        let token = jwt.sign({email, id: user._id}, process.env.SECRET_KEY);
        return res.status(200).json({token,user});
    }
    else{
        return res.status(400).json({error: "Invalid Credentials"});
    }
}


const getUser = async (req, res) => {

    const user = await User.findById(req.params.id);
    res.json({email: user.email});
}


module.exports = {userLogin,userSignUp,getUser}