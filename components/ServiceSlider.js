import React from 'react';
import Image from 'next/image';
// swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// swiper modules
import { Navigation } from 'swiper';
// swiper styles
import 'swiper/css/navigation';
import 'swiper/css';
// images
import Service1Icon from '../public/img/services/service-icon1.svg';
import Service2Icon from '../public/img/services/service-icon2.svg';
import Service3Icon from '../public/img/services/service-icon3.svg';

const services = [
  {
    image: Service1Icon,
    name: 'Pharmacy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quo dignissimos veniam aspernatur, reprehenderit alias officiis, fugiat, neque nobis sed harum. Soluta doloremque at, voluptas aperiam cupiditate sit quidem adipisci.',
    btnText: 'Explore'
  },
  {
    image: Service2Icon,
    name: 'Breed-specific haircuts',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quo dignissimos veniam aspernatur, reprehenderit alias officiis, fugiat, neque nobis sed harum. Soluta doloremque at, voluptas aperiam cupiditate sit quidem adipisci.',
    btnText: 'Explore'
  },
  {
    image: Service3Icon,
    name: 'Cloths',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quo dignissimos veniam aspernatur, reprehenderit alias officiis, fugiat, neque nobis sed harum. Soluta doloremque at, voluptas aperiam cupiditate sit quidem adipisci.',
    btnText: 'Explore'
  },
]

const ServiceSlider = () => {
  return (
    <Swiper 
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 2
        }
      }}  
      className="serviceSlider min-h-[680px]"
    >
      { services.map((service, index) =>{
        return (
          <>
            <SwiperSlide 
              className='border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8'
              key={index}>
                <Image 
                  className='mb-9'
                  src={ service.image }
                />
                <div className='text-[26px] font-medium mb-4'>{ service.name }</div>
                <div className='text-[20px] mb-8'>{ service.description }</div>
                <button className="btn btn-primary">{ service.btnText }</button>
            </SwiperSlide>
          </>
        )
      })}
    </Swiper>
)};

export default ServiceSlider;
