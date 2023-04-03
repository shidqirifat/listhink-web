import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import OkFinger from 'public/assets/icons/ok-finger.svg';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Reason = ({ onClick, isActive, children }) => {
  return (
    <button
      className={`rounded-[32px] !border-solid !border-[3px] !border-black-primary py-[18px] transition px-9 inline-block w-max mr-6 mb-6 ${
        isActive ? 'bg-white-primary' : 'hover:bg-white-primary/70'
      }`}
      onClick={onClick}>
      <h2
        className={`${
          isActive ? 'font-semibold' : 'font-normal'
        } text-2xl leading-9 text-black-primary`}>
        {children}
      </h2>
    </button>
  );
};

const CardReason = ({ children }) => {
  return (
    <div className="rounded-[40px] p-8 border-[3px] border-[#7B9684] bg-green-primary shadow-lg">
      <div className="rounded-full p-3 border-2 border-white-primary w-[50px] h-[50px] grid place-content-center">
        <Image src={OkFinger} alt="Ok Finger" width={25} height={25} />
      </div>
      <h3 className="font-medium text-2xl leading-9 text-white-primary mt-4">{children}</h3>
    </div>
  );
};

export default function WhyUs() {
  const [swiper, setSwiper] = useState({});
  const [swiperIndex, setSwiperIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl px-3 mx-auto pt-[120px]">
      <div className="rounded-[80px] px-16 py-[88px] bg-[#F0F0F0]">
        <h1 className="font-inter font-semibold text-[60px] leading-[72px] text-black-primary">
          {t('why_us_title')}
        </h1>
        <div className="mt-11 grid grid-cols-2 gap-20">
          <div className="inline">
            {t('why_us_reasons', { returnObjects: true }).map((reason, i) => (
              <Reason key={i} isActive={swiperIndex === i} onClick={() => swiper.slideTo(i)}>
                {reason}
              </Reason>
            ))}
          </div>
          <div className="max-w-full">
            <Swiper
              onInit={(swiper) => setSwiper(swiper)}
              onSlideChangeTransitionEnd={(swiper) => setSwiperIndex(swiper.realIndex)}
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
              loop={true}>
              {t('why_us_reason_cards', { returnObjects: true }).map((reason, i) => (
                <SwiperSlide key={i * 10}>
                  <CardReason>{reason.title}</CardReason>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
