var mongoose =require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const Hotel =new Schema({
      "_id":Number,
      "photos_url": String,
      "user_rating": {},
      "name":String,
      "cuisines": String,
      "has_table_booking": Number,
      "location": {},
      "featured_image": String,
      "thumb": String
},{versionKey:false})
var hotel =mongoose.model('restaurants',Hotel)
module.exports =hotel
