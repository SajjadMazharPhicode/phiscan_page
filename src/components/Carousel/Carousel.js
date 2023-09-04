import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import './index.css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';


function Carousel({sliderImages}) {
    return (
        <Swiper
            style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }}
            navigation={true}
            modules={[Navigation, Autoplay, Pagination]}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            className="mySwiper">
            {sliderImages?.length > 0 ? sliderImages.map((image, i) => (
                <SwiperSlide>
                    <img src={"images/"+image} />
                </SwiperSlide>
            )) : <SwiperSlide>No image found</SwiperSlide>
            }
        </Swiper>
    );
}

export default Carousel