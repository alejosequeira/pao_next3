import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Carousel = (props) => {
    return (
        <>
            <div id="carousel" className='blank_space'>
            </div>
            <div  className='body_swiper'>

                <Swiper
                    centeredSlides={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    navigation={true}
                    modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {props.data ? props.data.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-slide-content">
                                <img src={slide.imageUrl} alt={slide.title} />
                                <div className="slide-content">
                                    <h3>{slide.title}</h3>
                                    <p>{slide.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )) : "Loading..."}
                </Swiper>
            </div>
        </>
    );
};

export default Carousel;

