var mongoose =require('mongoose');
mongoose.Promise=global.Promise;
var Userdata =mongoose.model('userdata',{
  id:Number,
  name:String,
  password:String,
  bookings:Array,
  address:String,
  phoneNumber:String
})
module.exports=Userdata
