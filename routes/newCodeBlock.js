const express = require ('express'); //import the package
const router = express.Router();
const CodeBlock = require('../models/CodeBlock');

//add new codeBlock
router.post('/', async (req, res) => {
    //create a new codeBlock

    const codeBlock = new CodeBlock({
        "title": req.body.title,
        "code":  req.body.code,
        "firstVisited": false
    });
    try{
        // save the codeBlock to the database
        const savedCodeBlock = await codeBlock.save()
        res.json(savedCodeBlock);
    }catch(err){// handle any errors
        res.json({ message: err });
    }
});
                                    

module.exports = router;