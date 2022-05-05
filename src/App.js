import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {

  const [dispatch] = useStateValue();

  useEffect(() => {
    //Runs once when the app component loads when array is empty. like a Dynamic IF statement
    auth.onAuthStateChanged(authUser => {
      console.log('USER IS', authUser);

      if (authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])

  return (
    //BEM CONVENTION
    <Router>
      <div className="app">

        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/checkout' element={<><Header/><Checkout/></>} />
          <Route path='/payment' element={<><Header/><Payment/></>} />
          <Route path='/' element={<><Header/><Home/></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
