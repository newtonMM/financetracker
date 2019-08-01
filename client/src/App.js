import React, { Component } from 'react';
import Header from './components/header.js';
import Body from './components/Body.js'
import Footer from './components/footer.js'


class App extends Component{
  render(){
    return(
      <div>
  <div className="container-center">
        <Header/>
       </div>
       <div>
      <Body/>
       </div>
       <div>
       <Footer/>
       </div>
      </div>
    );
  }
}



export default App;
