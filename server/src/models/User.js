const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 

const userSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    password: {
        required: true,
        type: String,
    }
})

userSchema.virtual('repeatPasswords').set(function(value) {
    if(value !== this.password) {
        throw new mongoose.MongooseError('Passwords missmatch');
    }
})

userSchema.pre('save', async function() {
    const hash = await bcrypt.hash(this.password, 10);
    
    this.password = hash;

})

const User = mongoose.model('User', userSchema);

module.exports = User;