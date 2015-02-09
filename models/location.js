var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
  name: String,
  lat: Number,
  lng: Number
});

mongoose.model('Location', LocationSchema);
