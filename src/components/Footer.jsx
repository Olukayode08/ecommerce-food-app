import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import {
  BsBalloonHeart,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from 'react-icons/bs'

const Footer = () => {
const getYear = new Date().getFullYear()

  return (
    <>
      <Wrapper>
        <section>
          <footer>
            <div className='footer-details'>
              <img src={logo} alt='Homely-logo' />
              <h4>
                Solution for easy and flexible getting meals for the household.
                You can trust us anywhere through this platform
              </h4>
              <div className='by-me'>
                ©{getYear} Made with <BsBalloonHeart color='red' />{' '}
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='by-me kay'
                  href='https://github.com/Olukayode08'
                >
                  Olukayode
                </a>
              </div>
            </div>
            <div className='about-footer'>
              <div className='about'>
                <h2>About</h2>
                <p>Our Company</p>
                <p>Career</p>
                <p>Investors Relations</p>
                <p>Social Impact</p>
              </div>
              <div className='about socials'>
                <h2>Social</h2>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://twitter.com/_jireazeez'
                >
                  <BsTwitter color='#fff' />
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.instagram.com/_jireazeez'
                >
                  <BsInstagram color='#fff' />
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.linkedin.com/in/olukayode-azeez-a09b94238?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5IK1v8KwTmyD4QGeb%2BI8wA%3D%3D'
                >
                  <BsLinkedin color='#fff' />
                </a>
              </div>
            </div>
          </footer>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  background-color: rgba(255, 77, 0, 0.6);
  padding: 30px;
  .about-footer,
  footer {
    display: flex;
    justify-content: center;
  }
  .footer-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  h4 {
    font-weight: 500;
    color: #fff;
    width: 90%;
    line-height: 25px;
  }
  .by-me {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    margin: 10px 0;
    width: 100%;
  }
  .kay:hover{
    color: #ff4d00;
    transition: all 0.3s;
  }
  .about-footer {
    width: 100%;
    justify-content: space-around;
    align-items: flex-start;
  }
  .about {
    display: flex;
    flex-direction: column;
    color: #fff;
  }
  .socials {
    align-items: center;
  }
  h2 {
    font-size: 25px;
    font-weight: 500;
    margin: 0 0 15px 0;
  }

  p {
    margin: 15px 0;
    cursor: pointer;
  }
  p:hover {
    color: #ff4d00;
    transition: all 0.3s;
  }
  a {
    text-decoration: none;
    margin: 10px 0;
    font-size: 25px;
    :hover {
      color: #ff4d00;
      transition: all 0.3s;
    }
  }
  @media screen and (max-width: 900px) {
    footer {
      padding-left: 30px;
    }
    .about-footer,
    footer {
      flex-direction: column;
      align-items: flex-start;
      width: 70%;
    }
    .footer-details {
      padding: 0;
    }
    .about {
      align-items: flex-start;
    }
    .socials {
      align-items: center;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 15px;
    h4 {
      width: 100%;
    }
  }
`
export default Footer
