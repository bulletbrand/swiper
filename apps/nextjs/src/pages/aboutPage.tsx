import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';

const About = () => (
  <div>
    <h1>About</h1>
    <Swiper
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  </div>
)

export async function getServerSideProps({ req }) {
  return {
    props: {},
  };
}

export default About;
