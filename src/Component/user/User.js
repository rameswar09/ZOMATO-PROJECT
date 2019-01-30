import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../Home/home.css'
import './User.css'
import './userlogo.png'
class user extends Component{
  state={
    userLogo:require('./userlogo.png'),
    bookingsHotelDataOfUser:[],
    userDetails:{},
    nameChange:"",
    emailChange:"",
    phoneNumberChange:"",
    addressChange:""
  }
  async componentDidMount(){
    console.log('hello mybookings');
    let bookingsHotelDataOfUser = await fetch('http://localhost:4000/userid')
      bookingsHotelDataOfUser =await bookingsHotelDataOfUser.json()
    let  userDetails =bookingsHotelDataOfUser[0]
      bookingsHotelDataOfUser= bookingsHotelDataOfUser[0].bookings
      console.log(bookingsHotelDataOfUser);
      this.setState({
          bookingsHotelDataOfUser,
          userDetails

      })
  }
  handleChangeName=(e)=>{
    this.setState({
      nameChange:e.target.value
    })
  }
  handleChangeEmail=(e)=>{
    this.setState({
      emailChange:e.target.value
    })
  }
  handleChangePhoneNo=(e)=>{
    this.setState({
      phoneNumberChange:e.target.value
    })
  }
  handleChangeAddress=(e)=>{
    this.setState({
      addressChange:e.target.value
    })
  }
  saveUserData=async()=>{
    let obj={
      name:this.state.nameChange,
      email:this.state.emailChange,
      phoneNumber:this.state.phoneNumberChange,
      address:this.state.addressChange
    }
    let updateUserData =await fetch('http://localhost:4000/userid',{method:'post',body:JSON.stringify(obj),headers:{'Content-Type': 'application/json'}})
      updateUserData =await updateUserData.json()
      this.setState({
        userDetails:updateUserData,
        nameChange:"",
        emailChange:"",
        phoneNumberChange:"",
        addressChange:""
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
            <div className="show-user-div">
              <img className="user-logo-image" src={this.state.userLogo} alt="logo"></img>
                <div className="user-div">
                <p>Name:{this.state.userDetails.name}</p>
                <p>Email:{this.state.userDetails.email}</p>
                <p>Phone Number:{this.state.userDetails.phoneNumber}</p>
                <p>Address:{this.state.userDetails.address}</p>
                Name:<input type="text" onChange={this.handleChangeName} value={this.state.userDetails.name}></input><br/>
                  Email:<input type="email" onChange={this.handleChangeEmail} value={this.state.emailChange}></input><br/>
                  Phone No:<input type="text" onChange={this.handleChangePhoneNo}value={this.state.phoneNumberChange}></input><br/>
                  <label>Address:</label><textarea placeholder="enter address...." onChange={this.handleChangeAddress} value={this.state.addressChange}></textarea><br/>
                  Payment:<select name="pay">
                              <option value="COD">COD</option>
                              <option value="Net Banking">Net Banking</option>
                              <option value="UPI">UPI</option>
                          </select><br/>
                          <button type="type" onClick={this.saveUserData}>Update</button>
                </div>
                <div className="mybookings-div">
                <p className="my-bookings-text">My bookings</p>
                {
                  this.state.bookingsHotelDataOfUser.map((item)=>{
                    return(
                      <div className="featured"><img className="featured-image" src={item.hotel.featured_image} alt=""></img>
                        <p>NAME:<span>{item.hotel.name}</span></p>
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
      </div>
    )
  }
}
export default user
