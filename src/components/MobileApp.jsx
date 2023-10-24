import React from 'react'
import styled from 'styled-components'
import mobile from '../images/mobile.webp'

const MobileApp = () => {
  return (
    <>
      <Wrapper>
        <section>
          <div className='dish-heading'>
            <h2>Get our mobile app</h2>
            <h5>Enjoy better experience</h5>
          </div>
          <div className='about-us'>
            <div className='about-details'>
              <p>
                With our app, you never have to settle for unhealthy, expensive
                takeaway food again. From spicy noodles to fresh salads, we'll
                deliver anywhere in your city. Get tasty meals in just 30
                minutes. It's simple. We make it easy for you to make smart
                business decisions fast. Whether you have a busy schedule or
                just enjoy home-cooked food,
              </p>
            </div>
            <div className='about-food'>
              <img src={mobile} alt='About-Homely' />
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
  .dish-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h2 {
    font-size: 38px;
    margin: 0;
    color: #ff4d00;
  }
  h5 {
    font-size: 22px;
    margin: 15px 0;
    font-weight: 100;
    text-align: center;
  }
  .about-us {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 50px 0;
  }
  .about-details {
    width: 40%;
  }
  p {
    font-size: 25px;
    line-height: 35px;
    font-weight: lighter;
  }
  .about-food {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
  @media screen and (max-width: 1200px) {
    width: 90%;
    img {
      width: 90%;
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

    p {
      text-align: center;
    }
    .about-details {
      width: 80%;
      margin: 40px 0;
    }
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 20px;
    }
    .about-food {
      margin-top: 0;
    }
    h2 {
      font-size: 28px;
    }
    h5 {
      font-size: 20px;
    }
  }
`
export default MobileApp