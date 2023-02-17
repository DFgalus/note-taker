const router = require('express').Router();
const notesRoute = require('../../routes/api/notesRoute');

router.use(notesRoute);

module.exports = router;