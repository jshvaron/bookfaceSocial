// Require schema/model from mongoose
const { ObjectId, Timestamp } = require('bson')
const mongoose = require('mongoose')

// new instance of schema class

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => Date(timestamp).tolocalString(),
    },
    toJSON: {
        getters: true
    },
    id: false
});


module.exports = reactionSchema;