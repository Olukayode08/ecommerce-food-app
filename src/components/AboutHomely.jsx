import React from 'react'
import styled from 'styled-components'
import about from '../images/about-image.webp'
import Swal from 'sweetalert2'
import '../index.css'

const AboutHomely = () => {
  const moreAbout = () => {
    <Alert>
      {Swal.fire({
        title: 'About us',
        text: `I make delicious healthy meals for busy people who want to enjoy home made food without the hassle of cooking. Why would you cook when you don't have to? The Hot Plate makes it easy to eat your favorite home cooked food anywhere you want. You deserve to eat great food, whether you're at home or on the go. We'll help you find unique meals wherever you are. With our app, you never have to settle for unhealthy, expensive takeaway food again.`,
        confirmButtonText: 'Cancel',
      })}
    </Alert>

  }
  return (
    <>
      <Wrapper>
        <section id='about-us'>
          <div className='about-us'>
            <div className='about-details'>
              <h2>About us</h2>
              <p>
                I make delicious healthy meals for busy people who want to enjoy
                home made food without the hassle of cooking. Why would you cook
                when you don't have to? The Hot Plate makes it easy to eat your
                favorite home cooked food anywhere you want. You deserve to eat
                great food, whether you're at home or on the go.
              </p>
              <h3 onClick={moreAbout}>See more</h3>
            </div>
            <div className='about-food'>
              <img src={about} alt='About-Homely' />
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  width: 85%;
  margin: 0 auto;

  .about-us {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0;
  }
  .about-details {
    width: 40%;
  }
  h2 {
    font-size: 40px;
    font-weight: 600;
  }
  p {
    font-size: 25px;
    line-height: 35px;
    font-weight: lighter;
  }
  h3 {
    background-color: #ff4d00;
    width: 100px;
    padding: 15px 20px;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
    font-weight: 100;
  }
  .about-food {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1200px) {
    width: 90%;
    img {
      width: 80%;
    }
    .about-details {
      width: 50%;
    }
  }

  @media screen and (max-width: 1000px) {
    .about-us {
      flex-direction: column;
      justify-content: center;
    }
    p,
    h2 {
      text-align: center;
    }
    .about-details {
      width: 80%;
      margin: 40px 0;
    }
    h3 {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 20px;
    }
    h2 {
      font-size: 30px;
    }
  }
`

const Alert = styled.section`
  .alert-text {
    color: yellow;
  }
`
export default AboutHomely
