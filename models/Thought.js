// require schema/model from mongoose
const { time } = require('console');
const mongoose = require('mongoose');

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
        type: Schema.Types.ObjectId,
        ref: 'reactionSchema'
    },

});

//  virtual  reactionCount  retrieves the length of the thought's reactions array field on query.


// uses mongoose model to compile a model on thoughtSchema
const Thought = mongoose.model('thought', thoughtSchema);
const handleError = (err) => console.error(err);

// creates new thought model doc
Thought.create({
    thoughtText: "This is a new thought",
    username: "someuser",
    reactions: [reactionId1, reactionId2] // assuming reactionId1 and reactionId2 are valid object IDs for reactions
  })
.then(thought => {
    console.log(thought);
})
.catch(err => {
    console.error(err);
});

// export Thought
module.exports = Thought;


