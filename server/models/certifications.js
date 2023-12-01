let mongoose = require('mongoose');


let certificationsModel = mongoose.Schema({
    name:String,
    company: String,
    date_of_issue: Number,
    description: String
},
{
        collection: "cert"
});
module.exports = mongoose.model('Certifications',certificationsModel);


