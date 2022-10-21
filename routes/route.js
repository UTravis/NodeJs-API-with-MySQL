const express = require('express');
const { post, getPost, getPostById, updatePost, deletePost } = require('../controllers/app');

const router = express.Router();

router.get('/get', getPost);
router.get('/get/:id', getPostById);
router.post('/post', post)
router.patch('/update/:id', updatePost)
router.delete('/delete/:id', deletePost)

module.exports = router;