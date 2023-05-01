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
    };


}