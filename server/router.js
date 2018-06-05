const express    = require('express');        
const router = express.Router(); 
const Mark = require('./DBSchemal/mark');


router.get('/marks', (req, res) => {
    Mark.find((err, marks) => {
        if (err) {
            res.send(err);
        }
        res.json(marks);
    });
});


router.get('/marks/:text', (req, res) => {
    const regex = new RegExp(escapeRegex(req.params.text), 'gi');
    Mark.find({ username:  regex},function(err,mark){
        if (err) {
            res.send(err);
        }
        res.json(mark);
    })
});

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

// router.post('/users', (req, res) => {
//     User.findOne({ username: req.body.username,password:req.body.password},function(err,user){
//         if (err) {
//             res.send(err);
//         }else if(user===null){
//             res.json({message:false});
//         }else{
//             res.json({...user,message:true});
//         }
//     })    
// });


module.exports = router;