import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import congruex_logo from '../../assets/congruex_logo.png';
import { UseComponentVisible } from '../index';
// BEM -> Block Element Modifier

const Menu = () => (
  <>
  <p><Link to='/home'>Home</Link></p>
  <p><Link to='/second'>Second page</Link></p>
  <p><Link to='/editor_page'>Admin</Link></p>
  </>
)

// const Menu = () => (
//   <>
//   <ul>
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <Link to="/second">Second page</Link>
//     </li>
//   </ul>
//   </>
// )

const Navbar_better = () => {
  const { btnRef, isComponentVisible, setIsComponentVisible } = UseComponentVisible(true);
  const [toggleMenu, setToggleMenu] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);
  const handleClickOutside = e => {
    if (navbarRef.current && !navbarRef.current.contains(e.target)) {
      setToggleMenu(false);
    }
  }

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
      <div className='navbar-menu' ref={navbarRef} onClick={() => setIsComponentVisible(!isComponentVisible)}>

        {!isComponentVisible
          ? <RiCloseLine  size={27} onClick={() => setIsComponentVisible(true)} />
          : <RiMenuLine  size={27} onClick={() => setIsComponentVisible(false)} />
        }
        {isComponentVisible && (

          <div className='navbar-menu_container scale-up-center'>
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

export default Navbar_better;