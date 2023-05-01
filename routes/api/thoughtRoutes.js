const router = require('express').Router();
const {
    getThought,
    getThoughtById,
    postThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/userController');

// all user API routes
router.route('/').get(getThought).post(postThought);
// targetted user API routes, and update user resources
router.route('/:userId').get(getThoughtById).put(updateThought).delete(deleteThought);
// targetted user(friend) API routes
router.route('/:userId/frineds/:friendsId').post(addReaction).delete(deleteReaction);

module.exports = router;