var mongoose = require("mongoose");

var Schema = mongoose.Schema


var ArticleSchema = new Schema({

    title:String,
    description:String,
    tags:[String]


})




ArticleSchema.index({tags:1,})
ArticleSchema.index({title:"text",description:"text"})





var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;