// require schema/model from mongoose
const mongoose = require('mongoose');

// construct new Thought schema class
const thoughtSchema = new mongoose.Schema({

    thoughtText: {},
    createdAt: {},
    username: {},
    reactions: {},

});

//  virtual  reactionCount  retrieves the length of the thought's reactions array field on query.

