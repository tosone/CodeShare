var router = require('express').Router();

router.get('/add', require('./lib/add'));
router.get('/list', require('./lib/list'));
router.get('/content', require('./lib/content'));
router.get('/edit', require('./lib/edit'));
router.get('/historyList', require('./lib/historyList'));
router.get('/history', require('./lib/history'));
router.get('/compare', require('./lib/compare'));

router.get('/like', require('./lib/like'));
router.get('/delete',require('./lib/delete'));
router.get('/fork',require('./lib/fork'));


router.post('/postAdd', require('./lib/postAdd'));
router.post('/postEdit', require('./lib/postEdit'));

router.get('/newcode', require('./lib/newCodelist')); //newcode
router.get('/welcomecode', require('./lib/welcomeCodelist')); //welcomecode
router.get('/lang', require('./lib/langCodelist')); //lang
router.get('/tags', require('./lib/tagCodelist')); //tags

module.exports = router;
