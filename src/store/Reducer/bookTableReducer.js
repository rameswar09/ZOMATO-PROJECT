const reducer =(state={isBookModalShow:true},action)=>{
  if(action.type==="CLOSE_BOOK_MODAL"){
    return {
      ...state,
      isBookModalShow:false
    }
  }
  return state
}
export default reducer
