var mongoose=require('mongoose');
var reviewSchema=new mongoose.Schema({
    Name:String,
    Phno:Number,
    Email:String,
    Password:String,
    State:String,
    City:String,
    reviewText:String,
    createdOn:{
        type:Date,
        default:Date.now
    }
});
mongoose.model('Location',  reviewSchema);
