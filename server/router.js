const express = require('express');
const router = express.Router();
const Mark = require('./DBSchemal/mark');
const User = require('./DBSchemal/user');


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
    Mark.find({ username: regex }, function (err, mark) {
        if (err) {
            res.send(err);
        }
        res.json(mark);
    })
});

router.put('/marks/:id', (req, res) => {
    Mark.findById(req.params.id, (err, mark) => {
        if (err) {
            res.send(err);
        }
        mark.username = req.body.username;
        mark.Math = req.body.Math;
        mark.English = req.body.English;
        mark.Physics = req.body.Physics;

        mark.save(err => {
            if (err) {

                res.send(err);
            }
            res.json({ message: true });
        });
    });
});

router.delete('/marks/:id', (req, res) => {
    Mark.remove({
        _id: req.params.id
    }, (err, mark) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: true });

    });
});

router.post('/marks', (req, res) => {
    // console.log(req.body);   
    User.findOne({ username: req.body.username }, function (err, user) {
        if (err) {
            res.send(err);
        }
        // console.log(user); 
        var mark = new Mark();
        mark.username = user.username;
        mark.stuId = user._id;
        mark.English = req.body.English;
        mark.Math = req.body.Math;
        mark.Physics = req.body.Physics;
        mark.save(err => {
            if (err) {
                res.send(err);
            };
            res.json({ message: true });
        });
    })

    

});

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;