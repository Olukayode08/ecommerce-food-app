import React, { createContext, useState } from 'react'

const HomelyContext = createContext()

const Context = ({children}) => {
  const [active, setActive] = useState(false)

  const closeNav = ()=>{
    setActive(false)
  }

  const addToCart = () =>{
    console.log('Add to cart');
  }
  return (
    <HomelyContext.Provider value={{
      active,
      setActive,
      closeNav,
      addToCart,
    }}>
    {children}
    </HomelyContext.Provider>
  )
}

export {Context, HomelyContext}