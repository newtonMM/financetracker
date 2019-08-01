import React,{Component} from 'react'
class Navbar extends Component(){
  ComponentDidMount(){
    window.addEventListener('scroll',()=>{
      const isTop=window.scrollY>0;
      const topnav=document.getElementById('topnav');
      if (isTop){
        topnav.classList.add('scrolled');
      }else{
        topnav.classList.remove('scrolled');
      };
    })
  }
  componentWillUnmount(){
    window.removeEventListener('scroll');
  }
 render(){
  return(
    <div className="topnav">
      <div className="logo">
      </div>
    <a className="home" href="#home">Home</a>
    <a  className="account"href="#account">Account</a>
    <a className="contact" href="#contact">Contact</a>
    <a  className="about"href="#about">About</a>
  </div> 
   );
  }
   
}
 export default Navbar