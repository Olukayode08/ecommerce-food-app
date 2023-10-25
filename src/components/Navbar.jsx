import React, { useContext } from 'react'
import logo from '../images/logo.svg'
import styled from 'styled-components'
import { PiShoppingCart } from 'react-icons/pi'
import { HomelyContext } from '../context/Context'
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const { active, setActive, closeNav, cartItems } = useContext(HomelyContext)
  return (
    <>
      <Wrapper>
        <nav>
          <div className='nav'>
            <div className='logo'>
              <NavLink to='/'>
                <img src={logo} alt='Homely Logo' />
              </NavLink>
            </div>
            <ul className='nav-links'>
              <li>
                <NavLink to='/' className='link'>
                  Home
                </NavLink>
              </li>
              <li>
                <Link
                  to='why-choose-us'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {/* <NavLink  className='link' to='/'> */}
                  Why choose us
                  {/* </NavLink > */}
                </Link>
              </li>
              <li>
                <Link
                  to='our-dishes'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {/* <NavLink  className='link' to='/'> */}
                  Our dishes
                  {/* </NavLink > */}
                </Link>
              </li>
              <li>
                <Link
                  to='about-us'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {/* <NavLink  className='link' to='/'> */}
                  About us
                  {/* </NavLink > */}
                </Link>
              </li>
              <li>
                <Link
                  to='testimonial'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {/* <NavLink className='link' to='/'> */}
                  Testimonials
                  {/* </NavLink> */}
                </Link>
              </li>
              <NavLink to='/cart' className='cart'>
                <PiShoppingCart />
                <h3>Cart</h3>
                <p className='cart-count'>
                  {cartItems.length === 0 ? '0' : cartItems.length}
                </p>
              </NavLink>
            </ul>

            {/* Mobile Navigation */}
            <section
              className={active ? 'mobile-nav nav-height' : 'mobile-nav'}
            >
              <div className='mobile'>
                <NavLink to='/'>
                  <img src={logo} alt='Homely Logo' onClick={closeNav} />
                </NavLink>
                <div className='nav-btn'>
                  <Hamburger
                    toggled={active}
                    toggle={setActive}
                    easing='ease-in'
                    size={20}
                    direction='left'
                  />
                </div>
              </div>

              <div className={active ? 'mobile-links' : 'close-mobile'}>
                {active && (
                  <ul className='mobile-link'>
                    <li>
                      <NavLink to='/' onClick={closeNav} className='link'>
                        Home
                      </NavLink>
                    </li>
                    <li onClick={closeNav}>
                      <Link
                        to='why-choose-us'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={closeNav}
                      >
                        {/* <NavLink className='link' to='/'> */}
                        Why choose us
                        {/* </NavLink> */}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='our-dishes'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={closeNav}
                      >
                        {/* <NavLink className='link' to='/'> */}
                        Our dishes
                        {/* </NavLink> */}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='about-us'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={closeNav}
                      >
                        {/* <NavLink className='link' to='/'> */}
                        About us
                        {/* </NavLink> */}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='testimonial'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={closeNav}
                      >
                        {/* <NavLink className='link' to='/'> */}
                        Testimonials
                        {/* </NavLink> */}
                      </Link>
                    </li>
                    <NavLink to='/cart' className='cart' onClick={closeNav}>
                      <PiShoppingCart />
                      <h3>Cart</h3>
                      <p className='cart-count'>
                        {cartItems.length === 0 ? '0' : cartItems.length}
                      </p>
                    </NavLink>
                  </ul>
                )}
              </div>
            </section>
          </div>
        </nav>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  position: relative;
  margin-bottom: 120px;
  nav {
    background: #ffe9e0;
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
  }
  .nav-links,
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    margin: 0 auto;
  }
  .nav-links {
    width: 130%;
  }
  .link {
    text-decoration: none;
    color: #000;
  }
  .logo {
    width: 70%;
  }
  ul {
    list-style: none;
    li {
      font-size: 18px;
      margin: 0 10px;
      cursor: pointer;
    }
    li:hover {
      color: #ff4d00;
      transition: all 0.3s;
    }
  }
  .cart {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100px;
    height: 50px;
    background-color: #ff4d00;
    border-radius: 15px;
    color: #fff;
    padding: 0 10px;
    cursor: pointer;
    text-decoration: none;
  }
  h3 {
    font-size: 17px;
    font-weight: 200;
  }
  .cart-count {
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 7px;
    color: #000;
  }
  .mobile-nav {
    display: none;
  }

  @media screen and (max-width: 1300px) {
    .nav-links {
      width: 160%;
    }
    .logo {
      width: 40%;
    }
  }
  @media screen and (max-width: 1150px) {
    .logo,
    .nav-links {
      display: none;
    }
    /* Mobile Navigation */
    .mobile-nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      width: 100%;
    }
    .nav-height {
      height: 100vh;
    }
    .mobile {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .mobile-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    ul {
      margin-top: 120px;
      padding: 0;
      li {
        margin: 20px 0;
      }
    }
  }
`

export default Navbar
