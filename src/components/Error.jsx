import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <Wrapper>
        <section>
          <h1>404!</h1>
          <p>Page not found</p>
          <Link className='link' to='/'>
            Back Home
          </Link>
          <Link className='link' to='/cart'>
            Back to Cart
          </Link>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  width: 40%;
  background-color: #ff4d00;

  margin: auto;
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 35vh;
  }
  h1 {
    font-size: 30px;
    margin: 0;
  }
  p{
    font-size: 20px;
  }
  .link {
    text-decoration: none;
    background-color: #fff;
    padding: 20px;
    margin: 10px;
    color: #000;
  }
  .link:hover {
    background-color: #000;

    color: #fff;
    transition: all 0.3s;
  }
`
export default Error
