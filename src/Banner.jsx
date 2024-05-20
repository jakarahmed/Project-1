
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Banner() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='../public/slide1.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='../public/slide2.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='../public/slide3.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='../public/slide4.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='../public/slide5.jpg'></img></SwiperSlide>
    
      </Swiper>
    </>
  );
}
