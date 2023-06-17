import { Component } from "react";
import "./NavbarStyles.css";
import { Menuitems } from "./Menuitems";
import img1 from "./img1.png" ;
import {Link} from "react-router-dom";




class Navbar extends Component{
  state = {clicked: false};
  handleclick = () =>{
    this.setState({clicked: !this.state.clicked})
  };

  handleMouseEnter = (index) => {
    // Set the subMenuIndex state to the index of the hovered item
    this.setState({ subMenuIndex: index });
  };

  handleMouseLeave = () => {
    // Reset the subMenuIndex state when the mouse leaves the Services item
    this.setState({ subMenuIndex: null });
  };
   render(){
    return(
        <>
   
     <div className="NavbarItems">
     <div className="logoContainer">
     <img src={img1} className="logo"/><h1 className="navbar-logo">LifeQuest</h1>
     
     <div className="menu-icons" onClick={this.handleclick}>
      <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
    

     </div>
      </div>
    
  
<div>
<ul className={this.state.clicked ? "nav-menu.active": "nav-menu"}>
     {Menuitems.map((item,index) =>{
        if (item.subMenuItems) {
          return (
            <li
              key={index}
              className="nav-item"
              onMouseEnter={() => this.handleMouseEnter(index)}
              onMouseLeave={this.handleMouseLeave}
            >

              <a className="nav-links" href="#">
                <i className={item.icon}></i>
                {item.title} <i className="fas fa-caret-down"></i>
              </a>
              

              {this.state.subMenuIndex === index && (
                <ul className="sub-menu">
                  {item.subMenuItems.map((subMenuItem, subMenuIndex) => (
                    <li key={subMenuIndex}>
                      <Link to={subMenuItem.url}>{subMenuItem.title}</Link>
                    </li>
                    
                  ))}
                </ul>
              )}
            </li>
          );
        } else {
        return(
              <li key={index}>
              <Link className={item.className} to={item.url}>
              {item.title}

              </Link>
          </li>
          );
      }
    })}
  </ul>

  
     
  

</div>
    
   </div>
   

   
   
    </>
    


    );

   }
}

export default Navbar;
