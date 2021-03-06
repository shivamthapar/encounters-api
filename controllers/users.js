var mongoose = require('mongoose'),
    User = mongoose.model("User"),
    ObjectId = mongoose.Types.ObjectId
 
exports.createUser = function(req, res, next) {
    var userModel = new User(req.body);
    User.count(userModel, function(e,c){
      if(c==0){
        userModel.save(function(error, user) {
            if (error) {
                res.status(500);
                res.json({
                    type: false,
                    data: "Error occured: " + error
                })
            } else {
                res.json({
                    type: true,
                    data: user
                })
            }
        });
      }
      else{
        res.json({
          type: true,
          data:userModel
        });
      }
    });
}

exports.viewUser = function(req,res,next){
  User.findOne({fbId: req.params.fbId}, function(err, user){
    if(err){
      res.status(500);
      res.json({
        type:false,
        data: "Error occured: "+err
      });
    }
    else{
      if(user != null)
        res.json({
          type: true,
          data: user
        });
      else
        res.json({
          type: false,
          data: "Error occured: No user found with such Facebook ID."
        });
    }
  });
};

