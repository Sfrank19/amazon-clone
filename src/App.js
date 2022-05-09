import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe('pk_test_51Ktd1PLq9mIg6ChuhZzGF2SSPAMcRTx4I2yBA1KL9h4sSd2nzGc6NIWpyQqwMrcupfc1PzrtgAg7Op8lx25Q5o4S00kmNmtKsK');

function App() {

  const [{}, dispatch] = useStateValue();

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
          <Route path='/orders' element={<><Header/><Orders/></>} />

          <Route path='/login' element={<Login/>} />

          <Route path='/checkout' element={<><Header/><Checkout/></>} />

          <Route path='/payment' element={<><Header/><Elements stripe={promise}><Payment/></Elements></>} />

          <Route path='/' element={<><Header/><Home/></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
