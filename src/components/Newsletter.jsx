import React from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2'

const Newsletter = () => {
    // Swal.fire({
    //   title: 'Error!',
    //   text: 'Do you want to continue',
    //   icon: 'error',
    //   confirmButtonText: 'Cool',
    // })
  return (
    <>
      <Wrapper>
        <section>
          <div className='newsletter'>
            <h2>Subscribe to our Newsletter</h2>
            <p>Enter your Email address to get daily offers and news</p>
            <div className='subscribe'>
              <input type='text' required placeholder='Enter your Email' />
              <button>Subscribe</button>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  margin: 100px 0;
  .subscribe,
  .newsletter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin: 0;
    font-size: 40px;
    text-align: center;
  }
  p {
    font-size: 18px;
    font-weight: lighter;
    color: rgba(0, 0, 0, 0.81);
    text-align: center;
  }
  .subscribe {
    margin: 20px 0;
    flex-direction: row;
  }
  input {
    padding-left: 20px;
    width: 400px;
    height: 45px;
    border: 1px solid #959190;
    font-family: inherit;
  }
  input::placeholder {
    font-size: 18px;
    color: #959190;
  }
  input:focus {
    outline: #ff4d00;
  }
  button {
    background: #ff4d00;
    color: #fff;
    padding: 15px 30px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    margin-left: 10px;
  }
  @media screen and (max-width: 700px) {
    h2 {
      font-size: 35px;
    }
    p {
      font-size: 18px;
    }
    .subscribe {
      flex-direction: column;
    }
    button {
      margin-top: 15px;
    }
  }
  @media screen and (max-width: 500px) {
    input {
      width: 300px;
    }
  }
  @media screen and (max-width: 300px) {
    input {
      width: 250px;
    }
  }
`
export default Newsletter
