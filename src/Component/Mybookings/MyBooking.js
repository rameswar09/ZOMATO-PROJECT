import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Mybookings.css'
import './../Home/home.css'
import {connect} from 'react-redux'
import {fetchData} from '../../store/Actions/myBookingsActions.js'
class Mybookings extends Component{
   componentDidMount(){
    this.props.getMybookingsData()
  }
  render(){
    console.log(this.props.myBookingsHotels);
    return(
      <div>
        <div className="header-part"><strong className="zomato">zomato</strong></div>
        <div className="search-part">
        </div>
        <div className="total-home-body">
          <div className="links">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/mybookings">My Bookings</Link></li>
            <li><Link to="/user">User</Link></li>
          </ul>
          </div>
          <div className="show-hotels-div-in-MyBooking">
            {
              this.props.myBookingsHotels.map((item)=>{
                return(
                  <div className="featured"><img className="featured-image" src={item.hotel.featured_image} alt=""></img><br/><br/>
                    <strong>NAME:</strong><span>{item.hotel.name}</span><br/><br/>
                <strong>No of persons:</strong><span>{item.noOfPerson}</span><br/><br/>
                  <strong>Date:</strong><span>{item.date}</span><br/><br/>
                    <strong>Time:</strong><span>{item.time}</span>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    myBookingsHotels:state.myBookings.myBookingHotels
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getMybookingsData:()=>dispatch(fetchData())
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Mybookings)
//
