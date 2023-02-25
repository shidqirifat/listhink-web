import Image from 'next/image';
import React from 'react';

const services = [
  {
    title: 'Company Profile',
    description:
      'Dengan memiliki website company profile membantu perusahaan membangun identitas merek yang kuat yang mencerminkan proposisi nilai yang unik dan menarik bagi audiens targetnya.',
    image: '/assets/images/service-1.png'
  },
  {
    title: 'UI/UX Design',
    description: 'Membuat desain UI/UX yang baik sangat penting untuk kesuksesan suatu produk.',
    image: '/assets/images/service-2.png'
  }
];

const CardService = ({ title, description, image, i }) => {
  return (
    <div className="grid grid-cols-2 justify-between items-center gap-16">
      <div
        className={`relative h-[240px] w-[85%] flex justify-end ${
          i % 2 === 0 ? 'order-last -right-20' : ''
        }`}>
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <div className={`relative ${i % 2 === 0 ? '' : 'left-20 w-[95%]'}`}>
        <h1 className="font-semibold text-6xl leading-[70px] text-gray-primary font-inter">
          0{i + 1}
        </h1>
        <h2 className="font-semibold text-[40px] leading-[42px] text-black-primary font-inter mt-1 mb-6">
          {title}
        </h2>
        <h3 className="text-2xl leading-8 text-black-primary w-10/12">{description}</h3>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <div className="max-w-7xl px-3 mx-auto mt-[120px]">
      <div className="flex justify-between items-center">
        <h1 className="text-green-primary font-semibold text-8xl leading-[100px] w-full font-inter">
          Layanan Kami
        </h1>
        <div className="">
          <h4 className="font-semibold text-2xl leading-7 text-black-primary">
            Beberapa layanan yang dapat membantu kebutuhan anda.
          </h4>
          <hr className="w-64 bg-gray-primary mt-6" />
        </div>
      </div>
      <div className="mt-[60px] flex flex-col gap-[60px]">
        {services.map((service, i) => (
          <CardService key={i} {...service} i={i} />
        ))}
      </div>
    </div>
  );
}
