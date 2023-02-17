const router = require('express').Router();
const notesRoute = require('../api/notesRoute');

router.use(notesRoute);

module.exports = router;