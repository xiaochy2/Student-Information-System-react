const express    = require('express');        
const login = express.Router(); 
const User = require('./user');

login.post('/login', (req, res) => {
    User.findOne({ username: req.body.username,password:req.body.password},function(err,user){
        if (err) {
            res.send(err);
        }else if(user===null){
            res.json({message:false});
        }else{
            res.json({...user,message:true});
        }
    })    
});


module.exports = login;
