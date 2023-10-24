import React, { createContext, useState } from 'react'

const HomelyContext = createContext()

const Context = ({ children }) => {
  const [active, setActive] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const closeNav = () => {
    setActive(false)
  }

  const addToCart = (food) => {
    // Checking if food exists
    const foodExist = cartItems.find((item) => item.id === food.id)
    if (foodExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === food.id
            ? {
                ...foodExist,
                quantity: foodExist.quantity + 1,
              }
            : item
        )
      )
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }])
    }
  }

  const removeFromCart = (food) => {
    const foodExist = cartItems.find((item) => item.id === food.id)
    if (foodExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== food.id))
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === food.id
            ? {
                ...foodExist,
                quantity: foodExist.quantity - 1,
              }
            : item
        )
      )
    }
  }


  const clearCart = ()=>{
    setCartItems([])
  }
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  )

  return (
    <HomelyContext.Provider
      value={{
        active,
        setActive,
        closeNav,
        cartItems,
        addToCart,
        removeFromCart,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </HomelyContext.Provider>
  )
}

export { Context, HomelyContext }
