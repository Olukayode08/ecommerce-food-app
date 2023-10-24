import React from 'react'
import styled from 'styled-components'
import { AboutData } from '../data/HomelyData'

const WhyChooseUs = () => {
  return (
    <>
      <Wrapper id='why-choose-us'>
        <div className='why-choose-us'>
          <h3>Why choose us</h3>
          <p>This is what makes our product different</p>
        </div>
        <div className='about-quality'>
          {AboutData.map((about) => (
            <div key={about.id} className='quality'>
              <img src={about.image} alt='About us' />
              <h5>{about.title}</h5>
              <p className='quality-info'>{about.text}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .why-choose-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
  }
  h3,
  p {
    margin: 10px 0;
  }
  h3 {
    font-size: 40px;
    color: #ff4d00;
    font-weight: 600;
  }
  p {
    font-size: 20px;
    text-align: center;
  }
  .about-quality {
    background: #ffe9e0;
    padding: 25px 0;
    width: 80%;
    margin: auto;
  }
  .about-quality,
  .quality {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .quality {
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    margin: 0 20px;
    height: 350px;
  }
  h5 {
    font-size: 22px;
    margin: 25px 0;
  }
  .quality-info {
    font-size: 17px;
  }
  @media screen and (max-width: 1250px) {
    .about-quality {
      width: 95%;
    }
  }

  @media screen and (max-width: 1100px) {
    .about-quality {
      flex-direction: column;
      width: 50%;
    }
    .quality {
      margin: 20px 0;
      width: 80%;
    }
  }
  @media screen and (max-width: 800px) {
    .about-quality {
      width: 80%;
    }
  }
  @media screen and (max-width: 600px) {
    .about-quality {
      width: 90%;
    }
    h3 {
      font-size: 30px;
    }
    p {
      font-size: 17px;
    }
  }
`
export default WhyChooseUs
