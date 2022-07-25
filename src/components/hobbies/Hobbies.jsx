import React from 'react'
import './hobbies.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {img: AVTR1,
    hobby:  'Cars',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel maiores distinctio eius! Rem repellat laborum magnam consectetur iusto maiores commodi ipsam aliquid quia cum libero voluptatem consequatur, tempore nobis!'
  },
  {img: AVTR2,
    hobby:  'Programming',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel maiores distinctio eius! Rem repellat laborum magnam consectetur iusto maiores commodi ipsam aliquid quia cum libero voluptatem consequatur, tempore nobis!'
  },
  {img: AVTR3,
    hobby:  'SportGames',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel maiores distinctio eius! Rem repellat laborum magnam consectetur iusto maiores commodi ipsam aliquid quia cum libero voluptatem consequatur, tempore nobis!'
  },
  {img: AVTR4,
    hobby:  'Video Games',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel maiores distinctio eius! Rem repellat laborum magnam consectetur iusto maiores commodi ipsam aliquid quia cum libero voluptatem consequatur, tempore nobis!'
  },

]

const Hobbies = () => {
  return (
    <section id='hobbies'>
      <h5>My favorite activities</h5>
      <h2>Hobbies</h2>
      <Swiper className="hobbies__container container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
     >
        
      {data.map(({img, hobby, description}, index) => {
        return (
          <SwiperSlide key={index} className="hobbies">
          <div className="hobby__img">
            <img src={img} alt={hobby} />
          </div>
          <h5 className='hobby__name'>{hobby}</h5>
            <small className='hobby__description'>{description}</small>
        </SwiperSlide>
        )
      })}
      </Swiper>
    </section>
  )
}

export default Hobbies