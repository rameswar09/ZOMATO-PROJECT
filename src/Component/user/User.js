import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUserDetails} from '../../store/Actions/userAction.js'
import '../Home/home.css'
import './User.css'
import './userlogo.png'
class user extends Component{
  state={
    userLogo:require('./userlogo.png'),
    userDetails:{},
    nameChange:"",
    emailChange:"",
    phoneNumberChange:"",
    addressChange:""
  }
  componentDidMount(){
    this.props.getUserDetails()
    // let bookingsHotelDataOfUser = await fetch('http://localhost:4000/userid')
    //   bookingsHotelDataOfUser =await bookingsHotelDataOfUser.json()
    // let  userDetails =bookingsHotelDataOfUser[0]
    //   bookingsHotelDataOfUser= bookingsHotelDataOfUser[0].bookings
    //   console.log(bookingsHotelDataOfUser);
    //   this.setState({
    //       bookingsHotelDataOfUser,
    //       userDetails
    //
    //   })
  }

  // saveUserData=async()=>{
  //   let obj={
  //     name:this.state.nameChange,
  //     email:this.state.emailChange,
  //     phoneNumber:this.state.phoneNumberChange,
  //     address:this.state.addressChange
  //   }
  //
  //
  // }
  // onhandleClick=(key)=>{
  //   this.state.userDetails[key]=""
  //   this.setState({
  //     userDetails:this.state.userDetails
  //   })
  // }
  // handleChange=(key,e)=>{
  //   this.state.userDetails[key]=e.target.value
  //   this.setState({
  //     userDetails:this.state.userDetails
  //   })
  // }
  // onClickSave=async()=>{
  //   let updateUserData =await fetch('http://localhost:4000/userid',{method:'post',body:JSON.stringify(this.state.userDetails),headers:{'Content-Type': 'application/json'}})
  //     updateUserData =await updateUserData.json()
  //     this.setState({
  //       userDetails:updateUserData
  //     })
  // }
  render(){
    console.log(this.props.userDetails);
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
            <div className="show-user-div">
              <img className="user-logo-image" src={this.state.userLogo} alt="logo"></img>
                <div className="user-div">
                  <form>
                     <strong>User Name:</strong> <input className="user" name=" username" onClick={(e)=>this.onhandleClick("name")} onChange={(e)=>this.handleChange("name",e)}   value={this.props.userDetails.name}/><br/>
                     <strong>  Email:</strong> <input className="email"   name="email" onClick={(e)=>this.onhandleClick("email")} onChange={(e)=>this.handleChange("email",e)} value={this.props.userDetails.email} /><br/>
                     <strong>Phone:</strong> <input className="phone"  name="phone" onClick={(e)=>this.onhandleClick("phoneNumber")} onChange={(e)=>this.handleChange("phoneNumber",e)} value={this.props.userDetails.phoneNumber} /><br/>
                     <strong>  Address:</strong><input className="address"  name="address" onClick={(e)=>this.onhandleClick("address")} onChange={(e)=>this.handleChange("address",e)} value={this.props.userDetails.address}/><br/>
                     <button className="save" type="button">save</button>
                     </form>
                </div>
            </div>
          </div>
      </div>
    )
  }
}
const mapStateToProps =state=>{
  return{
    userDetails:state.userDetails.userDetails
  }
}
const mapDispatchToProps = dispatch=>{
  return{
    getUserDetails:()=>dispatch(getUserDetails()),
    // saveUserDetails:(data)=>dispatch(saveUserData(data))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(user)
