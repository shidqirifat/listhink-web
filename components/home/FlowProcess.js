import Image from 'next/image';
import React, { useState } from 'react';
import Arrow from 'public/assets/icons/arrow-process-left.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const processData = [
  {
    title: 'Pengarahan',
    description:
      'Klien memberi agensi penjelasan singkat tentang harapan mereka untuk proyek tersebut.',
    image: '/assets/images/process-1.png'
  },
  {
    title: 'Negosiasi',
    description:
      'Klien dan agensi menegosiasikan rincian proposal, termasuk ruang lingkup pekerjaan, anggaran, dan jadwal.',
    image: '/assets/images/process-2.png'
  },
  {
    title: 'Kontrak',
    description: 'Klien dan agensi menandatangani kontrak yang meresmikan kesepakatan.',
    image: '/assets/images/process-3.png'
  }
];

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
    <div className="rounded-[40px] border border-gray-primary shadow-lg h-full">
      <div className="w-full h-[192px] relative">
        <Image src={image} alt={title} fill />
      </div>
      <div className="pt-[6px] pl-8 pr-6 pb-6">
        <h2 className="font-medium text-3xl leading-10 text-gray-primary">{number}</h2>
        <div className="rounded-lg py-1 px-[10px] bg-yellow-primary w-max mb-5 mt-[2px]">
          <h1 className="text-2xl leading-9 font-medium text-black-primary">{title}</h1>
        </div>
        <h3 className="text-xl leading-7 font-medium text-black-primary">{description}</h3>
      </div>
    </div>
  );
};

export default function FlowProcess() {
  const [swiper, setSwiper] = useState();

  return (
    <div className="max-w-7xl px-3 mx-auto mt-[140px] relative">
      <div className="flex justify-between items-center">
        <h1 className="font-inter font-semibold text-[40px] leading-[48px] text-black-primary">
          Proses Pengerjaan
        </h1>
        <div className="flex justify-between items-center gap-7">
          <ButtonCarousel onClick={() => swiper.slideTo(swiper.activeIndex - 3)} />
          <ButtonCarousel onClick={() => swiper.slideTo(swiper.activeIndex + 3)} isRight />
        </div>
      </div>
      <div className="flex mt-7">
        <Swiper
          onInit={(swiper) => setSwiper(swiper)}
          modules={[Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          style={{ paddingBottom: '50px' }}>
          {processData.map((process, i) => (
            <SwiperSlide key={i}>
              <CardProcess {...process} number={`0${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
