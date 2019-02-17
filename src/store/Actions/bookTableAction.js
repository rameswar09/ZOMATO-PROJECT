export const closeBookModal=()=>{
  return{
    type:"CLOSE_BOOK_MODAL"
  }
}
export const postHotelData=(data)=>{
  console.log(data);
  return dispatch=>{
    fetch('http://localhost:4000/api/bookings',{method:'post',body:JSON.stringify(data),headers:{'Content-Type': 'application/json'}})
    .then(res=>res.text())
    .then((data)=>dispatch(closeBookModal()))
  }
}
