import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Arrow from 'public/assets/icons/arrow-process-left.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const getPaddingSide = (ref) => {
  if (typeof window === 'undefined') return 4;

  return (window.innerWidth - ref.offsetWidth) / 2;
};

const getStylesCarosel = (ref, isMobile) => {
  if (!ref) return null;

  return {
    paddingBottom: '70px',
    paddingLeft: isMobile ? '24px' : getPaddingSide(ref),
    paddingRight: isMobile ? '24px' : getPaddingSide(ref)
  };
};

const ButtonCarousel = ({ isRight, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-20 h-20 py-5 rounded-2xl grid place-content-center hover:bg-green-secondary active:bg-green-secondary-hover transition">
      <Image
        src={Arrow}
        alt="Arrow"
        width={22}
        height={38}
        className={`${isRight ? 'rotate-180' : ''}`}
      />
    </button>
  );
};

const CardProcess = ({ number, title, description, image }) => {
  return (
    <div className="rounded-[40px] border border-gray-primary shadow-lg overflow-hidden h-full">
      <div className="w-full h-[192px] relative">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 gradient-card-process" />
        <h2 className="font-medium text-[52px] md:text-[80px] leading-[76px] md:leading-[90px] text-white-primary font-inter absolute bottom-0 right-5">
          {number}
        </h2>
      </div>
      <div className="pt-[6px] pl-6 md:pl-8 pr-6 pb-8 md:pb-6">
        <div className="rounded-lg py-1 px-[10px] bg-yellow-primary w-max mb-3 md:mb-5 mt-5 md:mt-8">
          <h1 className="text-lg md:text-2xl leading-7 md:leading-9 font-medium text-black-primary">
            {title}
          </h1>
        </div>
        <h3 className="text-base md:text-xl leading-6 md:leading-7 font-medium text-black-primary">
          {description}
        </h3>
      </div>
    </div>
  );
};

export default function FlowProcess() {
  const { displaySize } = useSelector((state) => state);
  const [swiper, setSwiper] = useState();
  const [styleSwiper, setStyleSwiper] = useState({});
  const ref = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => setStyleSwiper(getStylesCarosel(ref.current, displaySize.small));

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [displaySize]);

  return (
    <div className="mt-10 md:mt-[140px] relative">
      <div ref={ref} className="max-w-7xl px-6 md:px-3 mx-auto flex justify-between items-center">
        <h1 className="font-inter font-semibold text-2xl md:text-[40px] leading-7 md:leading-[48px] text-black-primary">
          {t('flow_process_title')}
        </h1>
        {!displaySize.small && (
          <div className="flex justify-between items-center gap-7">
            <ButtonCarousel onClick={() => swiper.slideTo(swiper.activeIndex - 3)} />
            <ButtonCarousel isRight onClick={() => swiper.slideTo(swiper.activeIndex + 3)} />
          </div>
        )}
      </div>
      <div className="flex mt-7">
        <Swiper
          key={ref.current}
          onInit={(swiper) => setSwiper(swiper)}
          modules={[Pagination, Scrollbar]}
          spaceBetween={displaySize.small ? 24 : 50}
          breakpoints={{
            220: { slidesPerView: 1.1 },
            780: { slidesPerView: 2 },
            1024: { slidesPerView: 2.8 }
          }}
          navigation
          pagination={{
            clickable: true,
            bulletClass:
              'bg-green-secondary w-3 h-3 md:w-4 md:h-4 rounded-full inline-block mx-1 md:mx-2 cursor-pointer',
            bulletActiveClass: '!bg-green-primary'
          }}
          scrollbar={{ draggable: true }}
          style={styleSwiper}>
          {t('flow_process_steps', { returnObjects: true }).map((process, i) => (
            <SwiperSlide key={i}>
              <CardProcess {...process} number={`0${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
