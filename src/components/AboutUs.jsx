import React from 'react'
import styled from 'styled-components'
import aboutImage from '../images/FoodImage.webp'
import { Link } from 'react-scroll'

const AboutUs = () => {
  return (
    <>
      <Wrapper>
        <div className='about-homely' id='hero'>
          <div className='homely-details'>
            <h2>
              Enjoy
              <span>
                {' '}
                home made <br />
                meals{' '}
              </span>
              far away from <br />
              home
            </h2>
            <p>
              Helping you enjoy comfortable and healthy food <br />
              anywhere and anytime on the go
            </p>
            <h5>
              <Link
                to='our-dishes'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Order Now
              </Link>
            </h5>
          </div>
          <div className='homely-img'>
            <img src={aboutImage} alt='Food-Image' />
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  width: 85%;
  margin: 0 auto;
  .about-homely {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
  }
  h2 {
    font-size: 45px;
    margin: 0;
  }
  span {
    color: #ff4d00;
  }
  p {
    font-size: 20px;
    line-height: 25px;
    font-weight: 100;
  }
  h5 {
    background-color: #ff4d00;
    padding: 15px;
    text-align: center;
    width: 100px;
    color: #fff;
    font-size: 17px;
    border-radius: 10px;
  }
  @media screen and (max-width: 1200px) {
    .homely-details {
      width: 100%;
    }
    .homely-img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
    }
    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 1000px) {
    .about-homely {
      flex-direction: column;
    }
    .homely-details {
      width: 80%;
    }
    .homely-img {
      width: 60%;
    }
    br {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    .homely-details {
      width: 97%;
    }
    h2 {
      font-size: 35px;
    }
    p {
      font-size: 19px;
    }
    .homely-img {
      width: 75%;
    }
  }
`
export default AboutUs
