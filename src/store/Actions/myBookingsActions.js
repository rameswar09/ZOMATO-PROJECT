export const setMybookingsHotels=(data)=>{
  return{
    type:"SET_MYBOOKINGS_DATA",
    val:data
  }
}
export const fetchData=()=>{
  console.log('this is fetchData');
  return dispatch=>{
    fetch('http://localhost:4000/userid')
    .then(res=>res.json())
    .then((data)=>{
      dispatch(setMybookingsHotels(data[0].bookings))
    })
  }
}
