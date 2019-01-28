var express =require('express');
var app =express();
var cors =require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var objectID = require('mongodb').ObjectID;
var hotel=require('./db/restaurants.js')
var userdata=require('./db/userdata.js')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/hotels', {
    useNewUrlParser: true
}, () => {
    console.log('connected!!')
      app.listen(4000,()=>{
        console.log('4000 port is ready');
      })
});
//--------------------------------------------------------------------------------------------
//  api start
//---------------------------------------------------------------------------------------

app.use((req,res,next)=>{
  console.log('hello user');
  next();
})
//--------------------------------------------------------------------------------------------------------
// top 10 hotels
//--------------------------------------------------------------------------------------------------------
app.use('/api/restaurants/trending', async(req,res)=>{
  console.log('in');
  let topHotels=await(hotel.find({}).limit(10).sort({"user_rating.aggregate_rating": -1 }))
  res.send(topHotels)
})
//---------------------------------------------------------------------------------------------------------
// restaurant by id
//--------------------------------------------------------------------------------------------------------------
app.get('/api/restaurants/:id',async(req,res)=>{
  let resId=req.params.id
  resId=parseInt(resId)
  console.log(resId);
  let hotelById= await(hotel.find({"R.res_id":resId}))
  res.send(hotelById)
})
//----------------------------------------------------------------------------------------------------------------
// search by text
//-------------------------------------------------------------------------------------------------------------------
app.get('/api/restaurants/search/:search_text',async(req,res)=>{
  console.log(req.params.search_text);
    var reg= new RegExp(req.params.search_text, "i")
  let searchHotelByText=await hotel.find({$or:[{name: {$regex :reg} },{cuisines: reg},{"location.address": reg}]})
  // console.log('line53',searchHotelByText);
  res.send(searchHotelByText);
})
//----------------------------------------------------------------------------------------
//user get by id
//--------------------------------------------------------------
app.get('/userid',async(req,res)=>{
  let data =await userdata.find({});
  res.send(data)
  console.log(data);

})
//-----------------------------------------------------------
//user post
//-----------------------------------------------------
app.post('/api/user',async(req,res)=>{
  let findUser =await userdata.findOne({name:req.body.name})
    if(findUser==null){
      userdata.insertMany([req.body], (err) => {
      if (err)
        throw err
        res.send('done')
    })
  }else{
      console.log('user already exist');
    res.send('user already exist')

  }

})
//--------------------------------------------------------------------------
// book a hotels
//--------------------------------------------------------------------------
app.post('/api/bookings',async(req,res)=>{
  let hotelData= req.body
    let user= await userdata.findOne({name:"ramu"})
      user.bookings.push(hotelData);
      await user.save();
      res.send('done')
})
