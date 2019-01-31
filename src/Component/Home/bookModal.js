import React,{Component} from 'react';
import './bookModal.css'
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
  bookTable=async ()=>{
    let bookObj={
      hotel: this.state.curHotelData,
      noOfPerson:this.state.noOfPerson,
      date:this.state.date,
      time:this.state.time,
    }
    let bookHotelByUser =await fetch('http://localhost:4000/api/bookings',{method:'post',body:JSON.stringify(bookObj),headers:{'Content-Type': 'application/json'}})
      bookHotelByUser= await bookHotelByUser.text()
      this.setState({
        isBookModalClose:!this.state.isBookModalClose
      })
  }
  cancel=()=>{
    this.setState({
      isBookModalClose:!this.state.isBookModalClose
    })
  }
  render(){
    let className
    this.state.isBookModalClose?className=["modal"]:className=["modal-close"]
    console.log(this.props.item);
    return(
      <div className={className}>
        <div className="modal-content">
        <p><span><strong>No of persons:</strong></span><input className="no-of-person" type="text" onChange={this.handleChangeNoOfPerson}></input></p>
          <p><span><strong>Date:</strong></span><input className="date"  type="date" onChange={this.handleChangeDate}/></p>
          <form onChange={this.handleChangeTime}>
      <strong>Time:</strong> <input className="time"  type="time" name="usr_time"/>
    </form>
        <button className="book" type="button" onClick={this.bookTable}>Book Table</button>
        <button className="cancel-book" type="button" onClick={this.cancel}>cancel</button>

        </div>
      </div>
    )
  }
}
export default bookModal
