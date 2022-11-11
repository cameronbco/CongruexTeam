import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import congruex_logo from '../../assets/congruex_logo.png';

const Menu = () => (
  <>
  <p><Link to='/home'>Home</Link></p>
  <p><Link to='/second'>Second page</Link></p>
  <p><Link to='/editor_page'>Admin</Link></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navbarRef = useRef();
  useEffect(() => {
    const closeDropdown = e => {
        if (!navbarRef.current.contains(e.target)) {
          setToggleMenu(true);
        }
    };
    document.body.addEventListener('click', closeDropdown);
    return () => document.body.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <div className='navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <Link to='/home'><img src={congruex_logo} alt="logo" /></Link>
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <button type='button'><Link to='/sign_in'>Sign in</Link></button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine  size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenuLine  size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links' >
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <button type='button'><Link to='/sign_in'>Sign in</Link></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;