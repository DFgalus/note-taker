//modules 
const path = require('path');
const router = require('express').Router();

//GET route for index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//GET route for notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//export as router
module.exports = router;


