import React, { Component, Fragment } from 'react'
import { Navbar, NavItem } from 'react-materialize'

import './navbar.css'



class Navbars extends Component {
  render() {
    const navbarCSS = {
      background: {
        backgroundColor: "#546E7A"
      }
    }
    return (
      <Fragment>
        <Navbar style = {navbarCSS.background} href = "/feed" brand='Seekr' left >
          <NavItem href="/feed">Home</NavItem>
          <NavItem href="/search">Trail Search</NavItem>
          <NavItem href='/profile'>Profile</NavItem>
        </Navbar>
      </Fragment>
    )
  }
}


export default Navbars


