const { isErrored } = require('stream');
const { User } = require('../models');

module.exports = {
    // getUser function finds() all users, obj to JSON, catches errors
    getUser( req, res){
        User.find()
        .then((User) => res.json(User))
        .catch((err => {
            console.log({message: err});
            return res.status(500).json(err);
        }));
    },
    // getUserbyId, if id doesnt exist 404 err, else  obj to JSON, and catches error
    async getUserById(req, res){
        console.log(req.params.userId);
        const user = await User.findById(req.params.userId).exec();
 
            return !user
            ? res.status(404).json({message: 'A User with that ID does not exist.'})
            :res.json(user);


        //    return res.status(500).json(err)
    
    },
    // function to Post new user
    postUser(req, res) {
        User.create(req.body)
        .then((User) => res.json(User))
        .catch((err) => res.status(500).json(err));
        console.log(err);

    },
    // update user by id
    updateUser(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            { new: true },//Returns updated doc or og would return
        )
        .then((User) => {
            !User
            ? res.status(404).json({message: 'The user associated with that Id has been updated.'})
            :res.json(User);
        })
        .catch((err) => res.status(500).json(err));
        console.log(err);

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
        console.log(err);

    },
    // adds friend to array
    addFriend(req, res) {
        User.findOneAndUpdate(
            {_id:req.params.userId },
            {$push: {friends: req.params.friendId}},//pushes friends to array
            { new: true },//Returns updated doc or og would return
        )
        .then((User) => {
            !User
            ? res.status(404).json({message: 'The friend associated with this User Id was not succesfully added.'})
            :res.json(User);
        })
        .catch((err) => res.status(500).json(err));
        console.log(err);

    },
    // delete friend from array
    deleteFriend(req, res) {
        User.findOneAndDelete(
            {_id:req.params.userId },
            {$pull: {friends: req.params.friendId}},//pulls friends from array
            { new: true },//Returns updated doc or og would return
        )
        .then((User) => {
            !User
            ? res.status(404).json({message: 'The friend associated with this User Id was not succesfully deleted.'})
            :res.json(User);
        })
        .catch((err) => res.status(500).json(err));
        console.log(err);
    },
};