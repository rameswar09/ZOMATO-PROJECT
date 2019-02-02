import React,{Component} from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import './GoogleLogin.css'
const config = {
  apiKey: 'AIzaSyAdHbTQD-2-D4K-sMOC1zs712_gBoy2ROg',
  authDomain: 'zomato-project-4961d.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);
  // The component's Local state.
class googleSign extends Component{
  state = {
    isSignedIn: false,
    closeSign:true
  };
  uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};
componentDidMount() {
  this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      async(user) =>{
        console.log(this.state.isSignedIn);
        this.setState({isSignedIn: !!user})
        console.log(this.state.isSignedIn);
        if(this.state.isSignedIn===true){
          console.log('hello did');
          let userObj={name:user.displayName,email:user.email}
          console.log(userObj);
          let newUser= await fetch('http://localhost:4000/api/user',{method:'post',body:JSON.stringify(userObj),headers:{'Content-Type': 'application/json'}})
          newUser= await newUser.text()
          console.log(newUser);
        }
      }
  );

}
signOut=()=>{
   firebase.auth().signOut()
    window.location.assign("/")

}

  render(){
    if (!this.state.isSignedIn) {
      return (
          <StyledFirebaseAuth className="google-div" uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
      );
    }
    return (
      <div className="sign-out">
        <span>Welcome {firebase.auth().currentUser.displayName}</span>
        <button className="sign-out-button" type="button" onClick={this.signOut}>sign out</button>
      </div>
    );
  }
}
export default googleSign
