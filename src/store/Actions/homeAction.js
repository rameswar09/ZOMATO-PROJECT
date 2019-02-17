export const GET_HOTELS="GET_HOTELS"
export const setHotels=(data)=>{
  console.log('in setHotels action');
  return{
    type:"SET_HOTELS",
    val:data
  }
}
export const getdata=()=>{
  return dispatch=>{
    fetch('http://localhost:4000/api/restaurants/trending',{method:'get'})
    .then(res=>res.json())
    .then((data)=>{
      console.log(data);
      dispatch(setHotels(data))
    })
  }
}
export const searchData=(text)=>{
  return dispatch=>{
    fetch(`http://localhost:4000/api/restaurants/search/${text}`)
    .then(res=>res.json())
    .then((data)=>{
      dispatch(setHotels(data))
    })
  }
 }
