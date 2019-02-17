const reducer=(state={userDetails:{}},action)=>{
  if(action.type==="SET_USER"){
    return{
      ...state,
      userDetails:action.val
    }
  }
  return state
}
export default reducer
