import React,{Component} from 'react';
import './bookModal.css'
import {connect} from 'react-redux'
import {postHotelData,closeBookModal} from '../../store/Actions/bookTableAction.js'
class bookModal extends Component{
  state={
    curHotelData:this.props.item,
    noOfPerson:"",
    date:"",
    time:"",
    isBookModalClose:true
  }
  handleChangeNoOfPerson=(e)=>{
    this.setState({
      noOfPerson:e.target.value
    })
  }
  handleChangeDate=(e)=>{
    this.setState({
      date:e.target.value
    })
  }
  handleChangeTime=(e)=>{
    console.log(e.target.value);
    this.setState({
      time:e.target.value
    })
  }
  render(){
    let bookObj={
      hotel: this.state.curHotelData,
      noOfPerson:this.state.noOfPerson,
      date:this.state.date,
      time:this.state.time,
    }
  console.log(bookObj);
    let className
    this.props.bookTable?className=["modal"]:className=["modal-close"]
    console.log(this.props.item);
    return(
      <div className={className}>
        <div className="modal-content">
        <p><span><strong>No of persons:</strong></span><input className="no-of-person" type="text" onChange={this.handleChangeNoOfPerson}></input></p>
          <p><span><strong>Date:</strong></span><input className="date"  type="date" onChange={this.handleChangeDate}/></p>
          <form onChange={this.handleChangeTime}>
      <strong>Time:</strong> <input className="time"  type="time" name="usr_time"/>
    </form>
        <button className="book" type="button" onClick={()=>this.props.postHotel(bookObj)}>Book Table</button>
        <button className="cancel-book" type="button" onClick={this.props.cancel}>cancel</button>

        </div>
      </div>
    )
  }
}
const mapStateToProps =state=>{
  return{
    bookTable: state.bookTableModal.isBookModalShow
  }
}
const mapDispatchToProps= dispatch=>{
  return{
    postHotel:(data)=> dispatch(postHotelData(data)),
    cancel:()=>dispatch(closeBookModal())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(bookModal)
