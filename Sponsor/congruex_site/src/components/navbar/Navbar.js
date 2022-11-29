import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import congruex_logo from '../../assets/congruex_logo.png';
import { useOnClickOutside } from '../../hooks';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navbarRef = useRef();
  useOnClickOutside(navbarRef, () => setToggleMenu(false));
  
  const Menu = () => (
    <>
      <p><Link onClick={() => setToggleMenu(false)} to='/home'>Home</Link></p>
      <p><Link onClick={() => setToggleMenu(false)} to='/second'>Second page</Link></p>
      <p><Link onClick={() => setToggleMenu(false)} to='/editor_page'>Admin</Link></p>
      <p><Link onClick={() => setToggleMenu(false)} to='/chandler_page'>Chandler</Link></p>
      <p><Link onClick={() => setToggleMenu(false)} to='/shane_page'>Shane</Link></p>
      <p><Link onClick={() => setToggleMenu(false)} to='/ryan_page'>Ryan</Link></p>
    </>
  )
  
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
      <div className='gpt3__navbar-menu' ref={navbarRef}>
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