var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GroupSchema = new Schema({
  name: String,
  users: [{type: Schema.ObjectId, ref: 'User'}]
});

mongoose.model('Group', GroupSchema);
