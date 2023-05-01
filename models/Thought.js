// require schema/model from mongoose
const { time } = require('console');
const mongoose = require('mongoose');
const reactions = require('./Reaction')
// construct new Thought schema class
const thoughtSchema = new mongoose.Schema({

    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => new Date(timestamp).toLocaleString(),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reactionSchema'
    },
}, { toJSON: { virtuals: true }, id: false });

//  virtual  reactionCount  retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// uses mongoose model to compile a model on thoughtSchema
const Thought = new mongoose.model('thought', thoughtSchema);

// creates new thought model doc
Thought.create()
    .then(() => console.log('created new document!'))
    .catch(err => handleError(err));
    
// export Thought
module.exports = Thought;


