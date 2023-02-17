const router = require('express').Router();
const notesRoute = require('../../../Develop/routes/api/notesRoute');

router.use(notesRoute);

module.exports = router;