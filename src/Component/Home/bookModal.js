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
        <div className="featured"><img className="featured-image" src={this.state.curHotelData.featured_image} alt=""></img>
          <p>NAME:<span>{this.state.curHotelData.name}</span></p>
          LOCATION:<span>{this.state.curHotelData.location.address}</span><br/>
        USER RATINGS:<span>{this.state.curHotelData.user_rating.aggregate_rating}</span>
        </div>
        <p><span>No of persons</span><input type="text" onChange={this.handleChangeNoOfPerson}></input></p>
          <p><span>Date:</span><input type="date" onChange={this.handleChangeDate}/></p>
          <form onChange={this.handleChangeTime}>
      Select a time: <input type="time" name="usr_time"/>
    </form>
        <button type="button" onClick={this.bookTable}>Book Table</button>
        <button type="button" onClick={this.cancel}>cancel</button>

        </div>
      </div>
    )
  }
}
export default bookModal
