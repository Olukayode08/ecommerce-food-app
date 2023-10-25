import React, { useContext } from 'react'
import { HomelyContext } from '../context/Context'
import styled from 'styled-components'

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, totalPrice, clearCart } =
    useContext(HomelyContext)

  return (
    <Wrapper>
      <div>
        <div>
          {cartItems.length === 0 && <h1>No items are added to the cart</h1>}
        </div>

        <div className='food-in-cart'>
          {cartItems.map((item) => (
            <div key={item.id} className='food-item'>
              <img src={item.foodImg} alt='Food' />
              <div className='name-price'>
                <p className='food-name'>{item.foodName}</p>
                <div>
                  #{item.price}.00 x {item.quantity}
                </div>
                <h4 className='total-cost'>
                  Total: {item.price * item.quantity}.00
                </h4>
              </div>
              <div className='btn'>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item)}>-</button>
              </div>
            </div>
          ))}
        </div>
        <h1>Grand Total: #{totalPrice}.00</h1>
        <div className='clear-cart'>
          {cartItems.length >= 1 && (
            <button onClick={clearCart}>Clear cart</button>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: auto;
  .food-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ff4d00;
    margin: 30px 0;
  }
  img {
    width: 30%;
  }
  .name-price {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 20px;
    font-size: 20px;
  }
  .food-name {
    font-size: 23px;
    font-weight: 500;
  }
  .total-cost{
    margin: 15px 0;
    color: #ff4d00;
  }
  .btn{
    flex-shrink: 0;
  }
  button {
    margin: 0 10px;
    background: #fff;
    border: 2px solid #ff4d00;
    padding: 7px 14px;
    color: #ff4d00;
    font-size: 22px;
    border-radius: 7px;
  }
  button:hover {
    color: #fff;
    background: #ff4d00;
    transition: all 0.2s;
  }
  h1 {
    text-align: center;
    font-size: 25px;
  }
  .clear-cart{
    display: flex;
    align-items: flex-end;
    justify-content: right;
  }
  @media screen and (max-width: 1100px) {
    width: 85%;
  }
  @media screen and (max-width: 700px) {
    img {
      display: none;
    }
  }
`
export default CartPage
