import React from 'react';
import {Route} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'
import './Components/styles/style.css';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Banner from './Components/banner';
import Icons from './Components/icons';
import Featured from './Components/featured'
import Directory from './pages/directory';
import AboutUS from './pages/aboutUs';
import StorePage from './pages/storePage';


function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <Route path="/home">
        <Banner/>
        <Icons></Icons>
        <Featured/>
      </Route>
      <Route path="/directory">
        <Directory></Directory>
      </Route>
      <Route path="/aboutUS">
        <AboutUS/>
      </Route>
      <Route path="/store/:id">
        <StorePage/>
      </Route>
      <Footer/>
    </div>
  );
}

export default App;
