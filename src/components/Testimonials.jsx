import React from 'react'
import styled from 'styled-components'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import { testimonials } from '../data/HomelyData'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

const Testimonials = () => {
  return (
    <>
      <Wrapper id='testimonial'>
        <section>
          <div className='dish-heading'>
            <h2>Testimonials</h2>
            <h5>This is what our client are saying</h5>
          </div>
          <div>
            <div className='slider-container'>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  prevEl: '.swiper-custom-navigation-prev',
                  nextEl: '.swiper-custom-navigation-next',
                }}
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div>
                      <article className='slider'>
                        <h3 className='name'>{testimonial.name}</h3>
                        <p className='state'>{testimonial.state}</p>
                        <p className='text'>{testimonial.about}</p>
                      </article>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className='btn-container'>
            <button className='swiper-custom-navigation-prev backNavigate'>
              <AiOutlineArrowLeft size={25} />
            </button>
            <button className='swiper-custom-navigation-next frontNavigate'>
              <AiOutlineArrowRight size={25} />
            </button>
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
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

  /* Swiper Styles */
  .slider-container {
    width: 500px;
    height: 230px;
    background-color: rgba(255, 77, 0, 0.6);
    color: #fff;
    padding: 20px;
    border-radius: 20px;
    margin: 30px 0;
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .name {
    font-size: 27px;
    font-weight: 500;
  }
  .state {
    font-size: 24px;
    margin: 10px 0;
  }
  .text {
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.2px;
    margin-bottom: 50px;
  }
  .frontNavigate {
    position: absolute;
    top: 55%;
    right: 25%;
    background-color: #ff4d00;
    border: none;
    padding: 7px;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }
  .backNavigate {
    position: absolute;
    top: 55%;
    left: 25%;
    background-color: #ff4d00;
    border: none;
    padding: 7px;
    color: #fff;
    border-radius: 7px;
    cursor: pointer;
  }
  @media screen and (max-width: 1200px) {
    .backNavigate {
      left: 10%;
    }
    .frontNavigate {
      right: 10%;
    }
  }
  @media screen and (max-width: 900px) {
    .btn-container {
      display: none;
    }
  }
  @media screen and (max-width: 700px) {
    .slider-container {
      width: 365px;
      height: 280px;
    }
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 28px;
    }
    h5 {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 400px) {
    .slider-container {
      width: 300px;
      height: 300px;
    }
  }
  @media screen and (max-width: 280px) {
    .slider-container {
      width: 270px;
      height: 300px;
    }
  }
`

export default Testimonials
