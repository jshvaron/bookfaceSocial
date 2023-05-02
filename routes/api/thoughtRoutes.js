const router = require('express').Router();
const {
    getThoughts,
    getThoughtsbyId,
    postThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// all user API routes
router.route('/')
    .get(getThoughts)
    .post(postThought);
// targetted user API routes, and update user resources
router.route('/:userId')
    .get(getThoughtsbyId)
    .put(updateThought)
    .delete(deleteThought);
// targetted user(friend) API routes
router.route('/:userId/friends/:friendsId')
    .post(addReaction)
    .delete(deleteReaction);

module.exports = router;