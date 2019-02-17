export const setUser=(data)=>{
  return{
    type:"SET_USER",
    val:data
  }
}

export const getUserDetails =()=>{
  return dispatch=>{
    fetch('http://localhost:4000/userid')
    .then(res=>res.json())
    .then((data)=>{
      dispatch(setUser(data[0]))
    })
  }
}
// export const saveUserData =(data)=>{
//   return dispatch =>{
//     fetch('http://localhost:4000/userid',{method:'post',body:JSON.stringify(data),headers:{'Content-Type': 'application/json'}})
//     .then((res)=>res.json())
//     .then((data)=>console.log(data))
//   }
// }
