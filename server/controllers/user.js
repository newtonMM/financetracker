const User = require('./../models/user');
const Jwt = require('jsonwebtoken');
require('dotenv');


const userControl = {
    // verify token generated 
    authenticate: (req, res, next) => {
        const token = req.body.token || req.query.token || req.headers['x-acess-token'];
        if (!token)
            return res.status(403).json({ auth: false, message: 'no token provided ' });
        Jwt.verify(token, config.secret, function (err, decoded) {
            if (err) return res.status(500).json({ auth: false, message: 'failed to authenticate' });

            req.user_id = decoded;
            next();

        });

    },
    //posting details of the user
    register: (req, res) => {
        User.find({ email: req.body.email }, (err, users) => {
            if (!users.length) {
                const user = new User();
                user.name.first = req.body.FirstName;
                user.name.middle = req.body.MiddleName;
                user.name.Last = req.body.LastName;
                user.occupation = req.body.occupation;
                user.gender = req.body.gender;
                user.email = req.body.email;
                user.password = generateHash(req.body.password);
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
            // generate token when user request to login
            if (user.ValidPassword(user, req, body.passwword)) {
                const token = Jwt.sign({ _id: user_id }, config.secret, {
                    expiresIn: 86400
                });
                return res.status(200).json({ auth: true, token: token });
            } else {
                return res.status(400).json({ message: 'error loging in' });
            }

        });

    },
    deleteUser: (req, res) => {
        User.remove({ _id: req.params.user_id, }, (err, user) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.json(user);
        });
    },

    updateUser: (req, res) => {
        User.findById(User.params.user_id, (err, user) => {
            if (err || !users) {
                return res.status(404).json(err);
            }
            user.name.first = req.body.Firstname;
            user.name.middle = req.body.Middlename;
            user.name.Last = req.body.Lastname;
            user.occupation = req.body.occupation;
            user.gender = req.body.gender;
            user.email = req.body.email;
            user.password = generateHash(req.body.password);

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
module.exports = userControl;




