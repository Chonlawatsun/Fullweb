"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Phone, Facebook, Mail, } from 'lucide-react';
import { motion } from 'framer-motion';


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";


const services = [
  {
    name: "Basic",
    price: "5,990 บาท",
    starterPrice: "5,990 บาท",
    upgradePrice: "7,990 บาท",
    description: "เริ่มต้นธุรกิจให้น่าเชื่อถือ",
    starterFeatures: [
      "เว็บไซต์ 3 - 5 หน้า (หน้าแรก, เกี่ยวกับเรา, ติดต่อเรา)",
      "ดีไซน์เฉพาะตัว ไม่ใช้ธีมสำเร็จรูป",
      "รองรับการแสดงผลหลายอุปกรณ์ Desktop, Tablet, Mobile",
      "ฟอร์มติดต่อ (ส่งข้อความเข้าทาง Email)",
      "เชื่อมต่อกับโซเชียลมีเดีย (เช่น Facebook, Instagram, Line)",
    ],
    upgradeFeatures: [
      "เว็บไซต์ 3 - 5 หน้า (หน้าแรก, เกี่ยวกับเรา, ติดต่อเรา)",
      "ดีไซน์เฉพาะตัว ไม่ใช้ธีมสำเร็จรูป",
      "รองรับการแสดงผลหลายอุปกรณ์ Desktop, Tablet, Mobile",
      "ฟอร์มติดต่อ (ส่งข้อความเข้าทาง Email)",
      "เชื่อมต่อกับโซเชียลมีเดีย (เช่น Facebook, Instagram, Line)",
      "กราฟิกภาพปกส่วนบน (Banner) ภาพประกอบเว็บไซต์ 3 ภาพ",
    ],
  },
  {
    name: "Standard",
    price: "12,000 บาท",
    starterPrice: "12,000 บาท",
    upgradePrice: "14,000 บาท",
    description: "เพิ่มระบบ จัดการเนื้อหาได้",
    starterFeatures: [
      "เว็บไซต์ 5 หน้า",
      "ดีไซน์เฉพาะตัว ไม่ใช้ธีมสำเร็จรูป",
      "รองรับการแสดงผลหลายอุปกรณ์ Desktop, Tablet, Mobile",
      "ฟอร์มติดต่อ (ส่งข้อความเข้าทาง Email)",
      "เชื่อมต่อกับโซเชียลมีเดีย (เช่น Facebook, Instagram, Line)",
      "ระบบจัดการข้อมูลหลังบ้าน สามารถเพิ่ม แก้ไข ข้อมูลเองได้",
    ],
    upgradeFeatures: [
      "เว็บไซต์ 3 - 5 หน้า (หน้าแรก, เกี่ยวกับเรา, ติดต่อเรา)",
      "ดีไซน์เฉพาะตัว ไม่ใช้ธีมสำเร็จรูป",
      "รองรับการแสดงผลหลายอุปกรณ์ Desktop, Tablet, Mobile",
      "ฟอร์มติดต่อ (ส่งข้อความเข้าทาง Email)",
      "เชื่อมต่อกับโซเชียลมีเดีย (เช่น Facebook, Instagram, Line)",
      "ระบบจัดการข้อมูลหลังบ้าน สามารถเพิ่ม แก้ไข ข้อมูลเองได้",
      "กราฟิกภาพปกส่วนบน (Banner) ภาพประกอบเว็บไซต์ 3 ภาพ",
    ],
  },
  {
    name: "Premium",
    price: "45,000 บาท",
    starterPrice: "45,000 บาท",
    upgradePrice: "47,000 บาท",
    description: "ระบบ somethings",
    starterFeatures: [
      "เว็บไซต์ 5 - 8 หน้า",
      "ดีไซน์เฉพาะตัว ไม่ใช้ธีมสำเร็จรูป",
      "รองรับการแสดงผลหลายอุปกรณ์ Desktop, Tablet, Mobile",
      "ระบบ Admin จัดการข้อมูลอแบบเต็มรูปแบบ",
      "ระบบสมาชิก (Login, Register, กำหนดสิทธิ์การเข้าถึง)",
      "มีคู่มือการใช้งาน (User Guide)",
    ],
    upgradeFeatures: [
      "เว็บไซต์ 5 - 8 หน้า",
      "ดีไซน์เฉพาะตัว ไม่ใช้ธีมสำเร็จรูป",
      "รองรับการแสดงผลหลายอุปกรณ์ Desktop, Tablet, Mobile",
      "ระบบ Admin จัดการข้อมูลอแบบเต็มรูปแบบ",
      "ระบบสมาชิก (Login, Register, กำหนดสิทธิ์การเข้าถึง)",
      "มีคู่มือการใช้งาน (User Guide)",
      "กราฟิกภาพปกส่วนบน (Banner) ภาพประกอบเว็บไซต์ 3 ภาพ"
    ],
  },
];

const projects = [
  {
    name: "บริษัท Chooprint",
    images: ["/img/choo1.png", "/img/choo2.png", ]
  },
  {
    name: "บริษัท Lovely med",
    images: ["/img/lovely1.png", "/img/lovely2.png"]
  },
  {
    name: "บริษัท IT108",
    images: ["/img/it108-1.png", "/img/it108-2.png", "/img/it108-3.png"]
  }
];


export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <Navbar />

{/* Section 1: Main Intro */}
<section
  id="home"
  className="relative z-10 text-center px-4 py-24 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-gradient-to-br from-[#1c1c1c] via-[#2a2a2a] to-black"
>

<p className="text-2xl md:text-3xl font-light mb-4 text-white">
  อยากมีเว็บไซต์เป็นของตัวเอง ?
</p>
<h2 className="text-4xl md:text-5xl font-medium mb-6">
  <span className="block relative text-white">
    “ แค่บอกเรา{" "}
    <span className="relative inline-block">
      <span className="relative z-20 text-yellow-400">ทุกอย่างง่ายนิดเดียว</span>
      <span
        className="absolute inset-0 animate-glow bg-gradient-to-r from-yellow-400/10 via-yellow-400/30 to-yellow-400/10 blur-md rounded z-10 pointer-events-none"
        aria-hidden="true"
      ></span>
    </span>{" "}
    ”
  </span>
</h2>

<a
  href="#contact"
  className="mt-6 inline-block px-6 py-3 border-2 border-yellow-400 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
>
  สั่งทำเว็บไซต์เลย
</a>
</section>

      {/* Section 2: Services */}
      <section id="services" className="px-4 py-16 bg-gradient-to-b from-white to-gray-50">

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* ซ้าย: Service Cards */}
          <div className="space-y-6">
          {services.map((service, idx) => (
  <div
    key={idx}
    className="relative bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:bg-gray-100 hover:scale-105 transition duration-300 transform"
    onClick={() => setSelectedService(service)}
  >
    {/* 🔥 ริบบิ้นติดมุมขวาบน สำหรับ Basic */}
    {service.name === "Basic" && (
  <div className="absolute top-0 right-0 bg-yellow-400 text-white text-sm font-medium px-4 py-2 rounded-bl-xl z-10 flex items-center gap-2 shadow-xl ">
    <img src="/icons/hot.png" alt="Hot" className="w-5 h-5 animate-pulse" />
    ฮิตมาก!
  </div>
)}


    <div>
      <h2 className="text-xl font-medium mb-2">{service.name}</h2>
      <p className="text-gray-600 mb-4">{service.description}</p>
    </div>
    <p className="text-right font-medium text-lg mt-auto">
      เริ่มต้น {service.price}
    </p>
  </div>
))}

          </div>

          {/* ขวา: เริ่มต้น / อัพเกรด */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* กล่อง เริ่มต้น */}
<div className="bg-gray-100 rounded-xl shadow-lg p-6 flex flex-col hover:bg-gray-200 hover:scale-105 transition duration-300 transform">
  <h3 className="text-2xl font-medium mb-4 text-center">
    <div>เริ่มต้น</div>
    <div className="mt-3">{selectedService.starterPrice}</div>
  </h3>
  <ul className="space-y-3 text-sm mt-3">
    {selectedService.starterFeatures.map((feature, i) => (
      <li key={i} className="flex items-start">
        <CheckCircle className="text-blue-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
        <span>{feature}</span>
      </li>
    ))}
  </ul>
</div>

{/* กล่อง อัพเกรด */}
<div className="bg-gray-100 rounded-xl shadow-lg p-6 flex flex-col hover:bg-gray-200 hover:scale-105 transition duration-300 transform">
  <h3 className="text-2xl font-medium mb-4 text-center">
    <div>อัพเกรด</div>
    <div className="mt-3">{selectedService.upgradePrice}</div>
  </h3>
  <ul className="space-y-3 text-sm mt-3">
    {selectedService.upgradeFeatures.map((feature, i) => (
      <li key={i} className="flex items-start">
        <CheckCircle className="text-blue-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
        <span>{feature}</span>
      </li>
    ))}
  </ul>
</div>
          </div>
        </div>
      </section>
         
  
        {/* Section 3: Projects */}
      <section id="projects" className="py-20 bg-[#1c1c1c] px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-medium text-white mb-5">ตัวอย่างงาน</h2>
    <p className="text-lg font-light text-white mb-12">เราตั้งใจออกแบบเว็บไซต์ให้ตรงตามความต้องการของลูกค้าให้มากที่สุด</p>

    {/* Project Cards */}
    <div className="flex flex-col gap-12 lg:flex-row lg:flex-wrap lg:justify-center">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="w-full lg:w-[30%] flex-shrink-0 bg-gray-100 p-4 rounded-xl shadow-lg text-left"
        >
          <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            className="rounded-xl overflow-hidden"
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`${project.name} - ${i + 1}`}
                  className="w-full h-[200px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  </div>
</section>

  
        {/* Section: Process */}
      <section id="process" className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 text-center">
  <div className="max-w-6xl mx-auto">
    
    {/* หัวข้อหลัก */}
    <h2 className="text-3xl md:text-4xl font-medium text-[#fbbf24] mb-4">ขั้นตอนการสั่งทำเว็บไซต์</h2>
    <p className="text-lg font-medium bg-black text-white inline-block px-6 py-2 rounded-full mb-12 shadow">
      สั่งงานง่ายมีเพียง 4 ขั้นตอน !
    </p>

    {/* กล่องขั้นตอน */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      
      {[1, 2, 3, 4].map((step) => {
        const titles = [
          "พูดคุยและวางแผน",
          "เสนอราคาและเริ่มงาน",
          "พัฒนาและตรวจสอบ",
          "ส่งมอบเว็บไซต์"
        ];
        const descriptions = [
          "ติดต่อเราที่ page facebook เพื่อแจ้งรายละเอียดเว็บไซต์ที่ต้องการ เช่น ประเภท, เนื้อหา และดีไซน์ที่ชอบ",
          "เราประเมินราคาและแจ้งระยะเวลาการทำงาน ลูกค้าชำระมัดจำเพื่อเริ่มต้น",
          "เราออกแบบและพัฒนาเว็บไซต์ พร้อมส่งให้ลูกค้าเพื่อตรวจสอบและแก้ไข",
          "อัปโหลดเว็บไซต์ให้พร้อมใช้งาน และบริการหลังการขายเบื้องต้น"
        ];
        const iconPaths = [
          "/icons/chat.png",
          "/icons/document.png",
          "/icons/idea.png",
          "/icons/handshake.png"
        ];
        

        return (
          <div
            key={step}
            className="bg-gray-100 rounded-xl p-6 text-left flex flex-col items-center transition transform hover:scale-105 hover:shadow-xl shadow-md"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-white shadow">
              <span className="text-xl font-medium">{step}</span>
            </div>
            <h3 className="text-lg font-medium mb-2 text-center">{titles[step - 1]}</h3>
            <div className="w-20 h-20 mb-6 mt-2">
              <img src={iconPaths[step - 1]} alt={`icon${step}`} className="w-full h-full object-contain" />
            </div>
            <p className="text-sm text-gray-600 text-center">
              {descriptions[step - 1]}
            </p>
          </div>
        );
      })}

    </div>
  </div>
</section>


      {/* Section: Contact Us */}
<section id="contact" className="bg-[#1c1c1c] text-white py-20 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Left Side - Contact Channels */}
    <div>
      <h2 className="text-3xl md:text-4xl font-medium mb-10 text-white">ช่องทางการติดต่อ</h2>
      <div className="space-y-6">
        <a href="#" className="flex items-center px-6 py-4 bg-gray-200 rounded-full shadow hover:scale-105 transition">
          <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mr-4 text-xl">f</span>
          <span className="text-black font-medium">Facebook</span>
        </a>
        <a href="#" className="flex items-center px-6 py-4 bg-gray-200 rounded-full shadow hover:scale-105 transition">
          <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mr-4 text-sm">LINE</span>
          <span className="text-black font-medium">LINE</span>
        </a>
        <a href="mailto:your@email.com" className="flex items-center px-6 py-4 bg-gray-200 rounded-full shadow hover:scale-105 transition">
          <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mr-4 text-xl">✉️</span>
          <span className="text-black font-medium">Email</span>
        </a>
        <a href="tel:0123456789" className="flex items-center px-6 py-4 bg-gray-200 rounded-full shadow hover:scale-105 transition">
          <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mr-4">
            <Phone size={20} />
          </span>
          <span className="text-black font-medium">โทรศัพท์</span>
        </a>
      </div>
    </div>

    {/* Right Side - Contact Form */}
    <div className="bg-white rounded-xl p-8 shadow-md text-black">
      <h3 className="text-2xl font-medium mb-6">ส่งข้อความหาเรา</h3>
      <form>
        <div className="mb-4">
          <label className="block font-medium mb-1">ชื่อของคุณ</label>
          <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="กรอกชื่อของคุณ" />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">อีเมล</label>
          <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="example@email.com" />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">ข้อความ</label>
          <textarea className="w-full px-4 py-2 border border-gray-300 rounded" rows={5} placeholder="คุณต้องการสอบถามอะไร..."></textarea>
        </div>
        <button type="submit" className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition">
          ส่งข้อความ
        </button>
      </form>
    </div>
  </div>
</section>

    </main>
  );
}
