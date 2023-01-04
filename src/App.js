import logo from './logo.svg';
import './App.css';
import React from 'react';

import Hello from './Hello.js';
import Card from './Congrats Card.js';
import Super from './Super Over League';
import Social from './Social button';
import './Social button.css';
import Notifications from './Notifications Application.js';
import './Notifications Application.css';
import Login from './Login Design.js';
import './Login Design.css';

import Technology from './Technology Cards.js';
import './Technology Cards.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Home from './Home.js'
import './Home.css';

import Works from './Works.js';
import './Works.css';
 
import About from './About';
import './About.css';

import Farm from './Farm.js';
import './Farm.css';

import Destimonial from './Destimonial.js';
import './Destimonial.css';

import Product from './Product.js';
import './Product.css';


import Food from './Food.js';
import './Food.css';

import Responsive from './Responsive.js';

import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Menu from './Menu';
 import Menu1 from './Menu1';
 import Increment from './Increment';

import Fruitscounter from './Fruitscounter';
import './Fruitscounter.css';

import Feedback from './Feedback';
import './Feedback.css'

import Feedback1 from './Feedback1';
import './Feedback1.css'
import Datefunction from './Datefunction';

import Icecream from './Icecream';
import Fakeapi from './Fakeapi';
import Fakeapi1 from './Fakeapi1';

function App() {
  return (
    //  <div className="App">
    //  <h1>Hello World in React JS</h1>
    //  </div>
    // <div className="App">
    //  <Card/>
    // </div>
    // <div>
    //   <Super/>
    // </div>   
    //  <div>
    //    <Social/>
    //  </div>

    // <div>
    //   <Notifications/>
    // </div>
     
    // <div>
    //   <Login/>
    // </div>

    // <div>
    //   <Technology/>
    // </div>
    
    //  <div>
    //     <Home/>
    //  </div>

    //  <div>
    //   <Works/>
    //  </div>
    //  <div>
    //   <About/>
    //  </div>

    //  <div>
    //   <Farm/>
    //  </div>

      // <div>
      //   <Destimonial/>
      // </div>

      //  <div>
      //   <Product/>
      //  </div>

        //  <div>
        //   <Food/>
        //  </div>

        // <div>
        //   <Responsive/>
        // </div>

      //  <div>
      //   <Increment/>
      //  </div>

        // <div>
        //   <Fruitscounter/>
        // </div>

      //   <div>
      //  <Feedback/>
        
      //   </div>

    //  <div>
    //    <Feedback1/>
    //   </div>

    // <div>
    //   <BrowserRouter>
    //    <Routes>
    //     <Route path='/' element={<Menu/>}/>
    //     <Route path='/Hello' element={<Hello/>}/>
    //     <Route path='/CongratsCard' element={<Card/>}/>
    //     <Route path='/SuperOverLeague' element={<Super/>}/>
    //     <Route path='/Socialbutton' element={<Social/>}/>
    //     <Route path='/NotificationsApplication' element={<Notifications/>}/>
    //     <Route path='/LoginDesign' element={<Login/>}/>
    //     <Route path='/TechnologyCards' element={<Technology/>}/>
       
    //    </Routes> 
    //   </BrowserRouter>
    // </div>


    // <div>
    //   <BrowserRouter>
    //    <Routes>
        
    //     <Route path='/' element={[<Menu1/>,<Menu/>]}/>
    //     <Route path='/Hello' element={<Hello/>}/>
    //     <Route path='/CongratsCard' element={<Card/>}/>
    //     <Route path='/SuperOverLeague' element={<Super/>}/>
    //     <Route path='/Socialbutton' element={<Social/>}/>
    //     <Route path='/NotificationsApplication' element={<Notifications/>}/>
    //     <Route path='/LoginDesign' element={<Login/>}/>
    //     <Route path='/TechnologyCards' element={<Technology/>}/>
    //     <Route path='/Responsive' element={<Responsive/>}/>
    //     <Route path='/Home' element={[<Menu1/>,<Menu/>,<Home/>]}/>
    //     <Route path='/Works' element={[<Menu1/>,<Menu/>,<Works/>]}/>
    //     <Route path='/About' element={[<Menu1/>,<Menu/>,<About/>]}/>
    //     <Route path='/Farm' element={[<Menu1/>,<Menu/>,<Farm/>]}/>
    //     <Route path='/Destimonial' element={[<Menu1/>,<Menu/>,<Destimonial/>]}/>
    //     <Route path='/Product' element={[<Menu1/>,<Menu/>,<Product/>]}/>
    //     <Route path='/Food' element={[<Menu1/>,<Menu/>,<Food/>]}/>
        



    //    </Routes> 
    //   </BrowserRouter>
    // </div>

   <div>
      <BrowserRouter>
       <Routes>
       <Route path='/' element={[<Menu1/>,<Menu/>]}/>
       <Route path='/Hello' element={<Hello/>}/>
       <Route path='/CongratsCard' element={<Card/>}/>
       <Route path='/SuperOverLeague' element={<Super/>}/>
       <Route path='/Socialbutton' element={<Social/>}/>
       <Route path='/NotificationsApplication' element={<Notifications/>}/>
       <Route path='/LoginDesign' element={<Login/>}/>
       <Route path='/TechnologyCards' element={<Technology/>}/>
       <Route path='/Responsive' element={<Responsive/>}/>
       <Route path='/Home' element={[<Menu1/>,<Menu/>,<Home/>]}/>
       <Route path='/Works' element={[<Menu1/>,<Menu/>,<Works/>]}/>
       <Route path='/About' element={[<Menu1/>,<Menu/>,<About/>]}/>
       <Route path='/Farm' element={[<Menu1/>,<Menu/>,<Farm/>]}/>
       <Route path='/Destimonial' element={[<Menu1/>,<Menu/>,<Destimonial/>]}/>
       <Route path='/Product' element={[<Menu1/>,<Menu/>,<Product/>]}/>
       <Route path='/Food' element={[<Menu1/>,<Menu/>,<Food/>]}/>
       <Route path='/Feedback' element={<Feedback/>}/>
       <Route path='/Feedback1' element={<Feedback1/>}/>
       <Route path='/Increment' element={<Increment/>}/>
       <Route path='/Fruitscounter' element={<Fruitscounter/>}/>
       <Route path='/Datefunction' element={<Datefunction/>}/>
       <Route path='/Icecream' element={<Icecream/>}/>
       <Route path='/Fakeapi' element={<Fakeapi/>}/>
       <Route path='/Fakeapi1/:id' element={<Fakeapi1/>}/>
       </Routes> 
      </BrowserRouter>
    </div>







  );
}

export default App;
