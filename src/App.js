import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import WhyChooseUs from './components/WhyChooseUs'
import OurDishes from './components/OurDishes'
import AboutHomely from './components/AboutHomely'
import MobileApp from './components/MobileApp'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Error from './components/Error'
import { Route, Router, Routes } from 'react-router-dom'
import CartPage from './components/CartPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <AboutUs />
              <Stats />
              <WhyChooseUs />
              <OurDishes />
              <AboutHomely />
              <MobileApp />
              <Testimonials />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  )
}
export default App
