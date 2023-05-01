const { isErrored } = require('stream');
const { Thought } = require('../models/Thought');

module.exports = {
    // getThoughts function finds() all Thoughts, obj to JSON, catches errors
    getThoughts(req, res){
        Thought.find()
        .then((Thought) => res.json(Thought))
        .catch((err => {
            console.log({message: err});
            return res.status(500).json(err);
        }));
    },
    // getThoughtsbyId, if id doesnt exist 404 err, else  obj to JSON, and catches error
    getThoughtsbyId(req, res){
        Thought.findOne({_id: req.params.getThoughtById})
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
          return Thought.findOneAndUpdate(//gets Thought and updates thought field]
            { username: req.body.username },
            { $addToSet: { Thoughts: Thought._id } },//adds here
            { new: true } //Returns updated doc or og would return
          );
        });
    },
    // update Thought by id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.ThoughtId},
            {$set: req.body},
            { new: true },//Returns updated doc or og would return
        )
        .then((Thought) => {
            !Thought
            ? res.status(404).json({message: 'The Thought associated with that Id was not succefully updated'})
            :res.json(Thought);
        })
        .catch((err) => res.status(500).json(err));
        console.log(err);

    },
    // Delete Thought by id
    deleteThought(req, res) {
        Thought.findOneAndDelete(
            {_id: req.params.ThoughtId},
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
    // adds friend to array
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            {_id:req.params.ThoughtId },
            {$push: {friends: req.params.friendId}},//pushes friends to array
            { new: true },//Returns updated doc or og would return
        )
        .then((Thought) => {
            !Thought
            ? res.status(404).json({message: 'The Reaction associated with this ThoughtId was not succesfully added.'})
            :res.json(Thought);
        })
        .catch((err) => res.status(500).json(err));
        console.log(err);

    },
    deleteReaction(req, res) {
        Thought.findOneAndDelete(
            {_id:req.params.ThoughtId },
            {$pull: {friends: req.params.ThoughtId}},//pulls friends from array
            { new: true },//Returns updated doc or og would return
        )
        .then((Thought) => {
            !Thought
            ? res.status(404).json({message: 'The Reaction associated with this Thought Id was not succesfully deleted.'})
            :res.json(Thought);
        })
        .catch((err) => res.status(500).json(err));
        console.log(err);
    },
};
