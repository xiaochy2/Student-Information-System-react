const express    = require('express');        
const login = express.Router(); 

login.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log(req.body);
    if(username === "admin"&&password === "admin"){
        res.json({message:true});
    }else{
        res.json({message:false});
    }
    
    
});


module.exports = login;
