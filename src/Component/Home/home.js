import React, {Component} from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import Login from './../LoginModal/loginModal.js'
import BookModal from './bookModal.js'
class home extends Component{
  state={
    hotelsData:[],
    isLogin:false,
    searchHotelText:"",
    isBookModalShow:false,
    curHotelData:{}
  }

  async componentDidMount(){
    let hotels =await fetch('http://localhost:4000/api/restaurants/trending',{method:'get'})
        hotels= await hotels.json()
        // console.log(hotels);
        this.setState({
          hotelsData:hotels
        })
        console.log(this.state.hotelsData);
  }
  loginUser=()=>{
    this.setState({isLogin:!this.state.isLogin})
  }
  handleChange=(e)=>{
    this.setState({
      searchHotelText:e.target.value
    })
    console.log(this.state.searchHotelText);
  }
  getHotelsBySearch=async(e)=>{
    console.log('hello');
    if(e.keyCode===13){
      let getHotelsDataBySearch= await fetch(`http://localhost:4000/api/restaurants/search/${this.state.searchHotelText}`)
      getHotelsDataBySearch= await getHotelsDataBySearch.json()
      this.setState({
        hotelsData:getHotelsDataBySearch
      })
    }
  }
  bookHotel=async(bookDetails)=>{
    this.setState({
      curHotelData:bookDetails,
      isBookModalShow:!this.state.isBookModalShow
    })
    console.log(this.state.curHotelData);
  }
  bookModalShow=()=>{
    this.setState({
      isBookModalShow:!this.state.isBookModalShow
    })
  }
  render(){
    return(
      <div>
      <div className="header-part"><strong className="zomato">zomato</strong><span><div className="login" onClick={this.loginUser}>Login</div></span></div>
      <div className="search-part">
        <div className="search-text-part"><span>Search hotel:</span><input className="search-text" type="text" placeholder="search by name" onChange={this.handleChange} onKeyUp={this.getHotelsBySearch}></input></div>
      </div>
      <div className="total-home-body">
        <div className="links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mybookings">My Bookings</Link></li>
          <li><Link to="/user">User</Link></li>
        </ul>
        </div>
        <div className="show-hotels-div">
          {
            this.state.hotelsData.map((item)=>{
              return(
                <div className="featured"><img className="featured-image" src={item.featured_image} alt=""></img>
                  <p>NAME:<span>{item.name}</span></p>
                  LOCATION:<span>{item.location.address}</span><br/>
                USER RATINGS:<span>{item.user_rating.aggregate_rating}</span>
              <p><button className="Book-button" type="button" onClick={(e)=>this.bookHotel(item)}>Book</button></p>
              </div>
              )
            })
          }
        </div>
      </div>
      {this.state.isLogin?<Login/>:null}
      {this.state.isBookModalShow?<BookModal item={this.state.curHotelData} modalShow={this.bookModalShow}/>:null}

      </div>
    )
  }
}
export default home
  // <footer className="footer"></footer>
  //
  //
