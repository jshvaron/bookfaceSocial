// c/Require schema/model from mongoose
const mongoose = require('mongoose');

const validateEmail = email => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);

// new instance of schema class
const userSchema = new mongoose.Schema({

    // state individual properties of schema types
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true,//any white space around the characters will be removed before saved to db
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],//validation function for email to use match below by utlizing Regex
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    thoughts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, { toJSON: { virtuals: true }, id: false });


// Virtual friendCount  retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function() {
    return this.friends?.length;
});

// complie a User model based off schema

const User = new mongoose.model('User', userSchema);
console.log(userSchema);
console.log(User);
// creates new instance of User models as a doc for mongoose
// User.create()
//     .then(() => console.log('created new USER document!'))
//     .catch(err => handleError(err));
    
module.exports = User;