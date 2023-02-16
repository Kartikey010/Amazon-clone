// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

import Checkit from "./Checkit"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import React, { useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js'
import Homescreen from "./Homescreen";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase"
import { useStateValue } from "./StateProvider";
import Payment from "./Payment"

function App() {
  const [{},dispatch] =useStateValue();

  useEffect(()=>{
    // will only run once when the app component loads..

    auth.onAuthStateChanged(authUser =>{
      console.log("THE USER IS >>>" , authUser);
      if(authUser){
        // the user just logged in / the user was logged in
        dispatch({  // firebase and data layer dono milke ye action perform kar rahe
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        // th user is logged out 
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <>
    
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route exact path="/" element={<Homescreen/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path ="/payment" element ={<Payment/>}/>
    </Routes>
    </>
  );
}

export default App;
