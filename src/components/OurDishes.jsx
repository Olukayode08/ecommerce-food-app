import React, { useContext } from 'react'
import styled from 'styled-components'
import { Dishes } from '../data/HomelyData'
import { HomelyContext } from '../context/Context'

const OurDishes = () => {
  const { addToCart } = useContext(HomelyContext)

  return (
    <>
      <Wrapper id='our-dishes'>
        <div className='dish-heading'>
          <h2>Our daily dishes</h2>
          <h5>Check out recommended dishes of your choice</h5>
        </div>
        <div className='homely-dishes'>
          {Dishes.map((dish) => (
            <div key={dish.id} className='dish-details'>
              <img src={dish.foodImg} alt='Homely-meals' />
              <h1>{dish.foodName}</h1>
              <div className='homely-price'>
                <p>#{dish.price}.00</p>
                <div onClick={() => addToCart(dish)}>
                  <button>+ Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  width: 95%;
  margin: 0 auto;
  .dish-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px 0;
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
  .homely-dishes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .dish-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ff4d00;
    width: 400px;
    padding: 20px;
  }
  .homely-price {
    display: flex;
    justify-content: space-around;
    width: 90%;
    align-items: center;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
  button {
    border: none;
    background-color: #ff4d00;
    color: #fff;
    padding: 15px 50px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: lighter;
    cursor: pointer;
  }
  .in-cart {
    background-color: #fff;
    border: 1px solid #ff4d00;
    color: #000;
  }
  @media screen and (max-width: 1200px) {
    .dish-details {
      width: 300px;
    }
    .homely-price {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 600px) {
    .dish-details {
      width: 250px;
      border: none;
      border-bottom: 1px solid #ff4d00;
    }
    h2 {
      font-size: 28px;
    }
    h5 {
      font-size: 20px;
    }
  }
`
export default OurDishes
