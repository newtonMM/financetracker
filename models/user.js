const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        first: { type: String, required: true },
        middle: { type: String, required: true },
        last: { type: String, required: true },
    },
    email: { type: String, required: true },
    password: String,
    Occupation: String,
    gender: String,

});

UserSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

};
UserSchema.methods.validPassword = (User, password) => {
    return bcrypt.compareSync(password, User.password);

};
module.exports = mongoose.model(User, UserSchema);

