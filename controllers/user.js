const User = require('./../models/user');
const Jwt = require('jwt');
require('dotenv').load();


const Usercontrol = {
    aunthenticate: (req, res, next) => {
        const token = req.body.token || req.query.token || req.headers['x-acess-token'];
        if (!token)
            return res.status(403).json({ auth: false, message: 'no token provided ' });
        Jwt.verify(token, config.secret, function (err, decoded) {
            if (err) return res.status(500).json({ auth: false, message: 'failed to authenticate' });

            req.User_id = decoded;
            next();

        });






    },


    register: (req, res) => {

        User.find({ email: req.body.email }, (err, user) => {

            if (!user) {

                const User = new User();

                User.name.first = req.body.Firstname;
                User.name.middle = req.body.Middlename;
                User.name.Last = req.body.Lastname;
                User.occupation = req.body.occupation;
                User.gender = req.body.gender;
                User.email = req.body.email;
                User.password = generateHash(req.body.password);

                user.save(() => {
                    if (err) {
                        return res.status(500).json(err);
                    } else {
                        return res.status(200).json(user);
                    }
                });
            } else {
                res.status(400).json({ message: 'failed to register user!' });

            }

        });
        req.flash('success_msg', 'You are registerd and can now login');
        res.redirect('/users/login');

    },

    login: (req, res) => {
        User.find({ email: req.body.email }, (err, user) => {
            if (err) {
                res.status(500).json({ err });


            }
            if (User.ValidPassword(user, req, body.passwword)) {
                const token = Jwt.sign({ _id: user_id }, config.secret, {
                    expiresIn: 86400
                });
                return res.status(200).json({ auth: true, token: token });
            } else {
                return res.status(400).json({ message: 'error loging in' });
            }

        });

    },
    deleteuser: (req, res) => {
        User.remove({ _id: req.params.User_id, }, (err, user) => {
            if (err) {
                return res.status(500).json(err);

            }
            return res.json(user);

        });


    },

    updateUser: (req, res) => {
        User.findById(User.params.User_id, (err, User) => {
            if (err || !User) {
                return res.status(404).json(err);
            }
            User.name.first = req.body.Firstname;
            User.name.middle = req.body.Middlename;
            User.name.Last = req.body.Lastname;
            User.occupation = req.body.occupation;
            User.gender = req.body.gender;
            User.email = req.body.email;
            User.password = generateHash(req.body.password);

            user.save(() => {
                if (err) {
                    return res.status(500).json({ message: 'failed to create user!' });
                } else {
                    return res.status(200).json(user);
                }
            });


        });

    },

    logout: (req, res) => {
        if (req.token) {
            const token = 0;
            return res.status(200).json(token);

        } return res.status(400);
    },
















};
module.exports = Usercontrol;



