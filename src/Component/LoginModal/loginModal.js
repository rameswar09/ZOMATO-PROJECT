import React,{Component} from 'react';
import './loginModal.css'
class login extends Component{
  state={
    userName:"",
    passWord:"",
    isModalshow:true
  }
  handleChangeUserName=(e)=>{
    this.setState({
      userName:e.target.value
    })
  }
  handleChangePassWord=(e)=>{
    this.setState({
      passWord:e.target.value
    })
  }
  newUser=async(e)=>{
    console.log('hello');
      console.log(this.state.isModalshow);
    let userObj={name:this.state.userName,password:this.state.passWord}
    console.log(userObj);
    let newUser= await fetch('http://localhost:4000/api/user',{method:'post',body:JSON.stringify(userObj),headers:{'Content-Type': 'application/json'}})
    newUser= await newUser.text()
    console.log(newUser);
    this.setState({
      isModalshow:false
    })

  }
  render(){
    let className;
    this.state.isModalshow?className=["modal"]:className=["modal-close"]
    return(
      <div className={className}>
        <div className="modal-content">
          <p>Username:<span><input className="input-box" type="text" placeholder="enter username" onChange={this.handleChangeUserName}></input></span></p>
          <p>Password:<span><input className="input-box" type="password" placeholder="enter password" onChange={this.handleChangePassWord}></input></span></p>
          <button className="submit" type="button" onClick={this.newUser}>Submit</button><span><button className="cancel" type="button">Cancel</button></span>
        </div>
      </div>
    )
  }
}
export default login
// <div className={modalClass}>
//         <div className="modal-content">
//          <span>card Name :</span><span>{this.props.cardName}</span><span className="close" onClick={this.closeModal}>&times;</span>
//          {
//            this.state.cardsData.map((item)=>{
//              return(
//                <div className="check-list-box">
//                  <p><span>Check List Name: </span>{item.name}</p>
//                  <CheckItems cardData={item} cardId={item.idCard}/>
//              </div>
//
//              )
//            })
//          }
//         </div>
//       </div>
