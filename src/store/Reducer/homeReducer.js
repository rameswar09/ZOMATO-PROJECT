
const initialState={
homeData:[]
}
const reducer=(state=initialState,action)=>{
  if(action.type==="SET_HOTELS"){
    console.log("in-reducer-set-hotels");
      console.log(state.homeData);
    return {
      ...state,
      homeData:action.val
    }
  }

  return state
}
export default reducer
