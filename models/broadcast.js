var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BroadcastSchema = new Schema({
  from: {type: Schema.ObjectId, ref: 'User'},
  groups: [{type: Schema.ObjectId, ref: 'Group'}],
  to: [{type: Schema.ObjectId, ref: 'User'}],
  location: {type: Schema.ObjectId, ref: 'Location'},
  startTime: Date,
  endTime: Date
});

mongoose.model('Broadcast', BroadcastSchema);
