var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  fbId: String,
  name: String,
  groups: [{type: Schema.ObjectId, ref: 'Group'}],
});

mongoose.model('User', UserSchema);
