

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { BiSolidStar } from "react-icons/bi";
const TESTIMONIALS = () => {
    return (
        <div>
            <div className='grid grid-cols-5 text-3xl w-[200px] justify-center mx-auto'>
            <BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar />
          
            </div>
            <div >
            <img className="w-[300px] h-[200px] mx-auto p-5" src="../public/download.jpg"></img>
            </div>

            <div>
            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-center w-1/2 my-9"
      >
        <SwiperSlide><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem, odio veritatis sit, enim asperiores in cum ea recusandae, quibusdam rem. Dolore, voluptatibus cumque? Necessitatibus reiciendis eos quaerat enim totam!<h2>JANE DOE</h2></div></SwiperSlide>
        <SwiperSlide><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem, odio veritatis sit, enim asperiores in cum ea recusandae, quibusdam rem. Dolore, voluptatibus cumque? Necessitatibus reiciendis eos quaerat enim totam!<h2>JANE DOE</h2></div></SwiperSlide>
        <SwiperSlide><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem, odio veritatis sit, enim asperiores in cum ea recusandae, quibusdam rem. Dolore, voluptatibus cumque? Necessitatibus reiciendis eos quaerat enim totam!<h2>JANE DOE</h2></div></SwiperSlide>
        <SwiperSlide><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem, odio veritatis sit, enim asperiores in cum ea recusandae, quibusdam rem. Dolore, voluptatibus cumque? Necessitatibus reiciendis eos quaerat enim totam!<h2>JANE DOE</h2></div></SwiperSlide>
        <SwiperSlide><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem, odio veritatis sit, enim asperiores in cum ea recusandae, quibusdam rem. Dolore, voluptatibus cumque? Necessitatibus reiciendis eos quaerat enim totam!<h2>JANE DOE</h2></div></SwiperSlide>
     
      </Swiper>
            </div>
        </div>
    );
};

export default TESTIMONIALS;



