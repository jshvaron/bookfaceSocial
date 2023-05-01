const { isErrored } = require('stream');
const { User } = require('../models/User');

module.exports = {
    // getUser function finds() all users, obj to JSON, catches errors
    getUser(req, res){
        User.find()
        .then((User) => res.json(User))
        .catch((err => {
            console.log({message: err});
            return res.status(500).json(err);
        }));
    },
    // getUserbyId, if id doesnt exist 404 err, else  obj to JSON, and catches error
    getUserById(req, res){
        User.findOne({_id: req.params.getUserById})
        .then((User) => {
            !User
            ? res.status(404).json({message: 'A User with that ID does not exist.'})
            :res.json(User);
        })
        .catch((err) => res.status(500).json(err));
    },
    // function to Post new user
    postUser(req, res) {
        User.create(req.body)
        .then((User) => res.json(User))
        .catch((err) => res.status(500));
    },
    // update user by id
    UpdateUser(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
        )
        .then((User) => {
            !User
            ? res.status(404).json({message: 'The user associated with that Id has been updated.'})
            :res.json(User);
        })
        .catch((err) => res.status(500).json(err));
    },
    // Delete user by id
    deleteUser(req, res) {
        User.findOneAndDelete(
            {_id: req.params.userId},
            {$set: req.body},
        )
        .then((User) => {
            res.json({message: 'The user associated with that Id has been deleted'})
        })
        .then((User) => {
            !User
            ? res.status(404).json({message: 'A User with that ID does not exist.'})
            :res.json(User);
        })
        .catch((err) => res.status(500).json(err));

}