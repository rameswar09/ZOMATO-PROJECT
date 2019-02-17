import React, {Component} from 'react'
import {connect} from 'react-redux'
import './home.css'
import {Link} from 'react-router-dom'
import BookModal from './bookModal.js'
import FullModal from './hotelDetailsModal.js'
import Login from '../LoginModal/GoogleLogin.js'
import {getdata,searchData}from '../../store/Actions/homeAction.js'
class home extends Component{
  state={
    hotelsData:[],
    searchHotelText:"",
    isBookModalShow:false,
    curHotelData:{},
  }
   componentDidMount(){
    this.props.getTopHotels()
  }

  handleChange=(e)=>{
    this.setState({
      searchHotelText:e.target.value
    })
  }
  getSearchHotels=(e)=>{
      if(e.keyCode===13){
        console.log("enter");
        console.log(this.state.searchHotelText);
        this.props.getSearchHotels(this.state.searchHotelText)
      }
    }
  bookHotel=(bookDetails)=>{
    this.setState({
      curHotelData:bookDetails,
      isBookModalShow:!this.state.isBookModalShow
    })
    console.log(this.state.curHotelData);
  }
  handleChangeShowHotel=(item)=>{
    this.setState({
      isShowHotelModal:!this.state.isShowHotelModal,
      curHotelDetailsData:item
    })
  }
  render(){
    console.log(this.props.hotelsData);
    return(
      <div>
      <div className="header-part"><strong className="zomato">zomato</strong>
      <Login/>
      </div>
      <div className="search-part">
        <div className="search-text-part"><span>Search hotel:</span><input className="search-text" type="text" placeholder="search by name" onChange={this.handleChange} onKeyUp={this.getSearchHotels}></input></div>
      </div>
      <div className="total-home-body">
        <div className="links">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/mybookings">My Bookings</Link></li>
          <li><Link to="/user">User</Link></li>
        </ul>
        </div>
        <div className="show-hotels-div">
          {
            this.props.hotelsData.map((item)=>{
              return(
                <div className="featured"><img className="featured-image" src={item.featured_image} alt="" onClick={(e)=>this.handleChangeShowHotel(item)}></img>
                  <p><strong>NAME:</strong><span>{item.name}</span></p>
                <strong>USER RATINGS:</strong><span>{item.user_rating.aggregate_rating}</span>
              <p><button className="Book-button" type="button" onClick={(e)=>this.bookHotel(item)}>Book</button></p>
              </div>
              )
            })
          }
        </div>
      </div>
      {this.state.isLogin?<Login/>:null}
      {this.state.isBookModalShow?<BookModal item={this.state.curHotelData} modalShow={this.bookModalShow}/>:null}
      {this.state.isShowHotelModal?<FullModal hotelData={this.state.curHotelDetailsData}/>:null}
      </div>
    )
  }
}
const mapStateToProps = state => {
    return {
        hotelsData: state.home.homeData
    };
};
const mapDispatchToProps =dispatch=>{
  return{
    getTopHotels:()=>dispatch(getdata()),
    getSearchHotels:(text)=>dispatch(searchData(text))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(home)
