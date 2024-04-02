import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';


const CardDetail = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,
        pagination: {
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          600: { slidesPerView: 2 },
          968: { slidesPerView: 3 }
        }
      });
    }
  }, []);

  return (
    <div ref={swiperRef} className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="card__article relative overflow-hidden">
            <img src="infosys.jpg" alt="image" className="card__img w-full rounded-lg" />
            <div className="card__data absolute bottom-0 left-0 right-0 mx-auto opacity-0 transition-opacity duration-1000 delay-100">
              <span className="card__description block text-sm mb-1">Previous year Aptitude Question</span>
              <h2 className="card__title text-lg font-semibold mb-3">Inofys</h2>
              <a href="#" className="card__button text-blue-500 font-semibold">Explore</a>
            </div>
          </div>
        </div>
        {/* Repeat for other slides */}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default CardDetail;




