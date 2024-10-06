
const express = require('express');
const router = express.Router();
const { getUsers, createUser, updateUser } = require('../controllers/userController');

// Define routes
router.get('/users', getUsers);      
router.post('/users', createUser);   
router.put('/users/:id', updateUser);

module.exports = router;
