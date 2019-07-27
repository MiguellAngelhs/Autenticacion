import React, { Component } from "react"
import "./App.css"

import Nav from './Nav';
import Datos from './Datos';
import Grafica from './Grafica';
import {BrowserRouter  as Router, Switch, Route} from 'react-router-dom';

import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


firebase.initializeApp({
  //Codigos Firebase
  apiKey: "AIzaSyC_nWm2dVWm6LOtavvK1jkA1DaWkqxfUFk",
  authDomain: "fir-authdatos.firebaseapp.com"

})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <Router> 
      <div className="App">

        {this.state.isSignedIn ? (
          <span>
            
            <Nav />
            <Switch>
              <Route path="/"  exact component= {Inicio} />
              <Route path="/datos"  component= {Datos} />
              <Route path="/grafica"  component= {Grafica} />
            
            </Switch>       
          </span>  
                   
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}

      </div>
      </Router>

      
    );

  }
}

const Inicio = () =>(
  <div>
    
    {/* <img alt="profile picture" src={firebase.auth().currentUser.photoURL} /> */}
    <h2> Bienvenido {firebase.auth().currentUser.displayName} </h2>
    <button onClick={() => firebase.auth().signOut()}>Cerrar Sesión</button>       
    
  </div>
)

export default App