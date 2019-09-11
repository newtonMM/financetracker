import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;


const userSchema = new Schema({
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

userSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

};
userSchema.methods.validPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password);

};

userSchema.methods.toUserJSON = function toUserJSON() {
    return {
        firstName: this.name.first,
        middleName: this.name.middle,
        email: this.email,
    };
  };

export default mongoose.model('User', userSchema);

