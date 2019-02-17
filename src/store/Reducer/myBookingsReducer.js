
const reducer=(state={myBookingHotels:[]},action)=>{
  if(action.type==="SET_MYBOOKINGS_DATA"){
    console.log(state.myBookingHotels);
    console.log('in SET_MYBOOKINGS_DATA');
    return{
      ...state,
      myBookingHotels:action.val
    }
  }
return state
}
export default reducer
