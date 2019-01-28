import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Mybookings.css'
import './../Home/home.css'
class Mybookings extends Component{
  state={
    bookingsHotelDataOfUser:[]
  }
  async componentDidMount(){
    console.log('hello mybookings');
    let bookingsHotelDataOfUser = await fetch('http://localhost:4000/userid')
      bookingsHotelDataOfUser =await bookingsHotelDataOfUser.json()
      bookingsHotelDataOfUser= bookingsHotelDataOfUser[0].bookings
      console.log(bookingsHotelDataOfUser);
      this.setState({
          bookingsHotelDataOfUser
      })
  }
  render(){
    return(
      <div>
        <div className="header-part"><strong className="zomato">zomato</strong></div>
        <div className="search-part">
        </div>
        <div className="total-home-body">
          <div className="links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mybookings">My Bookings</Link></li>
            <li><Link to="/user">User</Link></li>
          </ul>
          </div>
          <div className="show-hotels-div-in-MyBooking">
            {
              this.state.bookingsHotelDataOfUser.map((item)=>{
                return(
                  <div className="featured"><img className="featured-image" src={item.hotel.featured_image} alt=""></img>
                    <p>NAME:<span>{item.hotel.name}</span></p>
                    LOCATION:<span>{item.hotel.location.address}</span><br/>
                  USER RATINGS:<span>{item.hotel.user_rating.aggregate_rating}</span>
                <p><span>No of persons:</span>{item.noOfPerson}</p>
                  <p><span>Date:</span>{item.date}</p>
                    <p><span>Time:</span>{item.time}</p>
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
export default Mybookings
