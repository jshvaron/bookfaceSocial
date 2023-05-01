const router = require('express').Router();
const {
    getUser,
    getUserById,
    postUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// all user API routes
router.route('/').get(getUser).post(postUser);
// targetted user API routes, and update user resources
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);
// targetted user(friend) API routes
router.route('/:userId/frineds/:friendsId').post(addFriend).delete(deleteFriend);

module.exports = router;