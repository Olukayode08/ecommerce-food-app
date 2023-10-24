import React from 'react'
import styled from 'styled-components'

const Stats = () => {
  return (
    <>
      <Wrapper>
        <div className='stats'>
          <div className='stat'>
            <h2>500+</h2>
            <p>Food Partners</p>
          </div>
          <div className='stat'>
            <h2>100k+</h2>
            <p>Orders Delivered</p>
          </div>
          <div className='stat'>
            <h2>20k+</h2>
            <p>Clients</p>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .stats {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
  }
  .stat {
    margin: 0 25px;
  }
  h2 {
    text-align: center;
  }
  p {
    color: #6c757d;
  }
  @media screen and (max-width: 600px) {
    .stats {
      flex-direction: column;
    }
    .stat {
      margin: 15px 0;
    }
  }
`
export default Stats
