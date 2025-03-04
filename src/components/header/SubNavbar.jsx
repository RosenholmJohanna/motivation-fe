/* eslint-disable react/prop-types */
//import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu, MenuMenu, MenuItem } from "semantic-ui-react";

const SubNavBar = ({ isLoggedIn }) => {
  return (

<>
  <Menu className="borderless" style={{ borderRadius: '0', display: 'flex', justifyContent: 'space-between', border:'none', boxShadow: '0 1px 2px 0 rgba(34, 36, 38, .15)', backgroundColor: '#030511' }}>
    {isLoggedIn ? (
      <>
        <MenuItem
        name='Start'
          as={Link} 
          to='/start' 
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d89dcd' }}
        >
          START
        </MenuItem>

        <MenuItem 
          as={Link} 
          to='/profile' 
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d89dcd' }}
        >
          PROFILE
        </MenuItem>

        <MenuMenu className="borderless" position='right'  > 
          <MenuItem
          name='LOGOUT'
          as={Link} 
          to='/login' 
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  color: '#d89dcd' }}
        />
        </MenuMenu>
      </>
    ) : null}
  </Menu>
</>
)}

export default SubNavBar;