module.exports.register=function(req,res){
    res.render('register',{title:'Register'});
}
module.exports.signin=function(req,res){
    res.render('signin',{title:'Sign In'});
};
