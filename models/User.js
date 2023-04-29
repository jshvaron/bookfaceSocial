// c/Require schema/model from mongoose
const monggose = require('mongoose');

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
    thoughts: {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'Friends'
    },
})

// Virtual friendCount  retrieves the length of the user's friends array field on query.


// complie a User model based off schema

const User = mongoose.model('User', userSchema);

// creates new instance of User models as a doc for mongoose
User.create(
    {
        username: 'JabaTheHutt',
        email: 'bigpapa@hutt.com',
        thoughts: [],
        friends: [],
    },
    (err) => (err ? handleError(err) : console.log('created new document!'))
);

module.exports = User