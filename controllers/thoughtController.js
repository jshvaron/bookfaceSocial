const { isErrored } = require('stream');
const { Thought } = require('../models/Thought');

module.exports = {
    // getThoughts function finds() all Thoughts, obj to JSON, catches errors
    getThoughts(req, res){
        Thought.find()
        .then((Thought) => res.json(User))
        .catch((err => {
            console.log({message: err});
            return res.status(500).json(err);
        }));
    },
    // getThoughtsbyId, if id doesnt exist 404 err, else  obj to JSON, and catches error
    getThoughtsbyId(req, res){
        Thought.findOne({_id: req.params.getUserById})
        .then((Thought) => {
            !Thought
            ? res.status(404).json({message: 'A Thought with that ID does not exist.'})
            :res.json(Thought);
        })
        .catch((err) => res.status(500).json(err));
        console.log(err);
    },
    // function to Post new Thought
    postThought(req, res) {
        Thought.create(req.body)
        .then((Thought) => {
          return Thought.findOneAndUpdate(//gets user and u[dates thought field]
            { username: req.body.username },
            { $addToSet: { thoughts: thought._id } },//adds here
            { new: true } //Returns updated doc or og would return
          );
        });
    },
    // update Thought by id
    UpdateThought(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            { new: true },//Returns updated doc or og would return
        )
        .then((Thought) => {
            !Thought
            ? res.status(404).json({message: 'The Thought associated with that Id has been updated.'})
            :res.json(User);
        })
        .catch((err) => res.status(500).json(err));
        console.log(err);

    },
    // Delete Thought by id
    deleteThought(req, res) {
        Thought.findOneAndDelete(
            {_id: req.params.userId},
            {$set: req.body},
        )
        .then((Thought) => {
            res.json({message: 'The Thought associated with that Id has been deleted'})
        })
        .then((Thought) => {
            !Thought
            ? res.status(404).json({message: 'A Thought with that ID does not exist.'})
            :res.json(Thought);
        })
        .catch((err) => res.status(500).json(err));
        console.log(err);

    },
};
