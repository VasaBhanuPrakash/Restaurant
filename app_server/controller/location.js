module.exports.homelist=function(req,res){
    res.render('location-list',{title:'Home'});
};
module.exports.addReview=function(req,res){
    res.render('location-Review-Form',{title:'Add Review'});
};