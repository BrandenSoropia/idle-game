const express = require('express');
const router = express.Router();
const fs = require('fs');
const yaml = require('js-yaml');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/get_marketplace_items', function (req, res, next) {
    // Get document, or throw exception on error
    try {
        const marketplaceItems = yaml.safeLoad(fs.readFileSync('public/resources/marketplace_items.yaml', 'utf8'));
        res.send(marketplaceItems)
    } catch (e) {
        console.log(e);
        res.send({ message: "Couldn't get marketplace items. Sorry!"})
    }
});

module.exports = router;
