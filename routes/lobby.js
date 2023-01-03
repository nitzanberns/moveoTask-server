const express = require ('express'); //import the package
const router = express.Router();
const CodeBlock = require('../models/CodeBlock');

router.get('/', async (req, res) => {
    // read from db and return
    try{
        // execute a query to find the code blocks
        const codeBlocks = await CodeBlock.find({});
        // send the result to the client
        res.json(codeBlocks);

    } catch(err) {// handle any errors
        res.json({ message: err });
    }
});

module.exports = router;