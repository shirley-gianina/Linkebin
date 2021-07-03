const router = require('express').Router();
const miscController = require('../controllers/misc.controller');
const peoplesController = require('../controllers/peoples.controllers')
// Home
router.get('/', miscController.home);

// Cities
router.get('/peoples', peoplesController.list);
router.get('/peoples/new', peoplesController.create);
router.get('/peoples/:id', peoplesController.detail)
router.get('/peoples/:id/edit', peoplesController.edit)

// // Courses
// router.get('/courses', miscController.courses);
// router.get('/courses/:id', miscController.getCourse);

module.exports = router;