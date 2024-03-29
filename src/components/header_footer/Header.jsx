import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ManuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./sideDrawer.jsx"
class Header extends Component {
    state = {
        drawerOpen : false,
        headerShow: false
    }

<<<<<<< HEAD:src/components/header_footer/Header.jsx
    componentDidMount(){
      window.addEventListener("scroll", this.handleScroll)
    }

    handleScroll = () => {

      if(window.scrollY > 0){

        this.setState({
          headerShow: true
        })

      }else{
        this.setState({
          headerShow: false
        })   
      }

=======
    componentDidMount() {
      window.addEventListener("scroll" , this.handleCsroll);
    }


    handleCsroll = () => {
      if(window.scrollY > 0){
        this.setState({
          headerShow: true
        })
      }else{
        this.setState({
          headerShow: false
        })
      }
    
>>>>>>> fd1d944e851517e1cfa52a5436f2d143b58c6821:src/components/header_footer/Header.js
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
<<<<<<< HEAD:src/components/header_footer/Header.jsx
          backgroundColor: this.state.headerShow ? "#2f2f2f": 'transparent',
=======
          backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
>>>>>>> fd1d944e851517e1cfa52a5436f2d143b58c6821:src/components/header_footer/Header.js
          boxShadow: "none",
          padding: "10px 0"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <ManuIcon />
          </IconButton>

          <SideDrawer
          open={this.state.drawerOpen}
          onClose={(value)=> this.toggleDrawer(value)}
          
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
