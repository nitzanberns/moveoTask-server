const mongoose = require('mongoose');

 //define codeBlock
 const codeBlockSchema = mongoose.Schema({
    title: String,
    code: String,
    firstVisited: Boolean //false -> mentor, true -> student

});

//compiling our schema into a Model.
module.exports = mongoose.model('CodeBlock', codeBlockSchema); 