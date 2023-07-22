import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Reason = ({ onClick, isActive, children }) => {
  return (
    <button
      className={`rounded-[32px] border-solid border-[3px]
      transition px-5 lg:px-9 py-4 lg:py-[18px] inline-block w-max mr-4 lg:mr-6 mb-4 lg:mb-6 ${
        isActive
          ? 'bg-white-primary shadow-lg border-black-primary'
          : 'hover:bg-white-primary/70 border-black-primary/80'
      }`}
      onClick={onClick}>
      <h2
        className={`${
          isActive ? 'font-semibold' : 'font-normal'
        } text-base lg:text-2xl leading-6 lg:leading-9 text-black-primary`}>
        {children}
      </h2>
    </button>
  );
};

const CardReason = ({ children, icon }) => {
  const { displaySize } = useSelector((state) => state);
  const size = displaySize.small ? 32 : 48;

  return (
    <div className="rounded-[40px] p-6 md:p-8 border-[3px] border-[#7B9684] bg-green-primary shadow-lg">
      <Image src={`/assets/icons/${icon}.svg`} alt={icon} width={size} height={size} />
      <h3 className="font-medium text-base lg:text-2xl leading-6 lg:leading-9 text-white-primary mt-2 md:mt-4">
        {children}
      </h3>
    </div>
  );
};

export default function WhyUs() {
  const [swiper, setSwiper] = useState({});
  const [swiperIndex, setSwiperIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl lg:px-3 mx-auto pt-10 md:pt-[120px]">
      <div className="lg:rounded-[80px] px-8 lg:px-16 pt-6 pb-9 lg:py-[88px] bg-[#F0F0F0]">
        <h1 className="font-inter font-semibold text-[40px] md:text-[60px] leading-[48px] md:leading-[72px] text-black-primary">
          {t('why_us_title')}
        </h1>
        <div className="mt-9 md:mt-11 grid md:grid-cols-2 gap-10 lg:gap-20">
          <div className="inline">
            {t('why_us_reasons', { returnObjects: true }).map((reason, i) => (
              <Reason key={i} isActive={swiperIndex === i} onClick={() => swiper.slideToLoop(i)}>
                {reason}
              </Reason>
            ))}
          </div>
          <div className="w-[calc(100vw-64px)] md:max-w-full">
            <Swiper
              onInit={(swiper) => setSwiper(swiper)}
              onSlideChangeTransitionEnd={(swiper) => setSwiperIndex(swiper.realIndex)}
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              simulateTouch={false}
              autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
              loop={true}>
              {t('why_us_reason_cards', { returnObjects: true }).map((reason, i) => (
                <SwiperSlide key={i * 10}>
                  <CardReason icon={reason.icon}>{reason.title}</CardReason>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
