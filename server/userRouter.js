const express = require('express');
const router = express.Router();
const Mark = require('./DBSchemal/mark');
const User = require('./DBSchemal/user');


router.get('/users', (req, res) => {
    User.find((err, users) => {
        if (err) {
            res.send(err);
        }
        // console.log(users);
        res.json(users);
    });
});


router.get('/users/:text', (req, res) => {
    const regex = new RegExp(escapeRegex(req.params.text), 'gi');
    User.find({ username: regex }, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
});

router.put('/users/:id', (req, res) => {

    User.findById(req.params.id, (err, user) => {
        if (err) {
            res.send(err);
        }
        User.findOne({ username: req.body.username }, (err, user1) => {
            if (err) {
                res.send(err);
            }
            if (user1 !== null&&user1._id.toString()!==user._id.toString()) {
                res.json({ message: false, error: "user exists" });
            } else {
                user.username = req.body.username;
                user.role = req.body.role;
                user.save(err => {
                    if (err) {

                        res.send(err);
                    }
                    if (user.role !== 0) {
                        Mark.remove({ username: user.username }, (err, mark) => {
                            if (err) {
                                res.send(err);
                            }

                        })
                    }
                    res.json({ message: true, error: "" });
                });

            }

        })


    });
});

router.delete('/users/:id', (req, res) => {

    User.findOne({
        _id: req.params.id
    }, (err, user) => {
        if (err) {
            res.send(err);
        }
        User.remove({ _id: req.params.id }, (err, user2) => {
            if (err) {
                res.send(err);
            }
            Mark.remove({ username: user.username }, (err, mark) => {
                if (err) {
                    res.send(err);
                }
                User.find((err, users) => {
                    if (err) {
                        res.send(err);
                    }
                    res.json({ users, message: true });
                });
            })
        })
    });
});


router.post('/users', (req, res) => {
    User.findOne({ username: req.body.username }, (err, user1) => {
        if (err) {
            res.send(err);
        }
        if (user1 !== null) {
            res.json({ message: false, error: "user exists" });
        } else {
            var user = new User();
            // console.log(req.body);    
            user.username = req.body.username;
            user.role = req.body.role;
            user.password = req.body.password;
            user.save(err => {
                if (err) {
                    res.send(err);
                };
                res.json({ message: true, error: "" });
            });
        }

    })


});

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;