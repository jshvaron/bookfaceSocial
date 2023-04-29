// c/Require schema/model from mongoose
const monggose = require('mongoose');

// new instance of schema class
const userSchema = new mongoose.Schema({

    // state individual properties of schema types
    username: {},
    email: {},
    thoughts: {},
    friends: {},
})

// Virtual friendCount  retrieves the length of the user's friends array field on query.

