"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Phone } from 'lucide-react';
import toast from "react-hot-toast";
import { SetupProviders } from "@/components/SetupProviders";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import ParallaxCard from '../components/ParallaxCard';
import { TemplateCard } from "@/components/TemplateCard";
import { motion } from "framer-motion";

const services = [
  {
    name: "Basic",
    price: "5,990 บาท",
    starterPrice: "5,990 บาท",
    upgradePrice: "7,990 บาท",
    description: "เริ่มต้นธุรกิจให้น่าเชื่อถือ",
    starterFeatures: [
      "เว็บไซต์ 3-5 หน้า (หน้าแรก, เกี่ยวกับเรา, ติดต่อเรา)",
      "ดีไซน์เฉพาะตัว ไม่ใช้ธีมสำเร็จรูป",
      "รองรับการแสดงผลหลายอุปกรณ์ Desktop, Tablet, Mobile",
      "ฟอร์มติดต่อ (ส่งข้อความเข้าทาง Email)",
      "เชื่อมต่อกับโซเชียลมีเดีย (เช่น Facebook, Instagram, Line)",
    ],
    upgradeFeatures: [
      "เว็บไซต์ 3-5 หน้า (หน้าแรก, เกี่ยวกับเรา, ติดต่อเรา)",
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

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const slideInAnimation = {
  hidden: {
    opacity: 0,
    x: -100, // เลื่อนจากทางซ้าย
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

/* ส่งเมล */
  const formData = new FormData(e.currentTarget as HTMLFormElement);
  try {
    const res = await fetch("https://formspree.io/f/xpwdzdow", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      toast.success("ส่งข้อความเรียบร้อยแล้ว!");
      (e.target as HTMLFormElement).reset();
    } else {
      toast.error("เกิดข้อผิดพลาดในการส่ง กรุณาลองใหม่");
    }
  } catch {
    toast.error("การเชื่อมต่อผิดพลาด");
  }
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <Navbar />
{/* ใส่ dev ครอบ section 1 and 2 เพื่อทำใช้พื้นหลังอันเดียวกัน*/}
<div className="bg-gradient-to-b from-[#1c1c1c] via-[#2a2a2a] to-[#1c1c1c] min-h-[200vh]">      
{/* Section 1: Main Intro */}
<section
  id="home"
  className="relative z-10 px-6 py-32 min-h-screen flex flex-col xl:flex-row items-center justify-center bg-transparent"
>
  <div className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-12 max-w-7xl w-full">

    {/* Left: Text */}
    <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center xl:items-start xl:text-center px-4"
        >
          <div className="w-full">
            <p className="text-xl xl:text-2xl font-light mb-4 text-white">
              อยากมีเว็บไซต์เป็นของตัวเอง ?
            </p>

            <h2 className="text-3xl md:text-5xl xl:text-7xl font-medium mb-6 text-white">
              <span className="block relative">
                แค่บอกเรา{" "}
                <span className="relative inline-block">
                  <span className="relative z-20 text-yellow-400">ทุกอย่างง่ายนิดเดียว</span>
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-yellow-400/30 to-yellow-400/10 blur-md rounded z-10 pointer-events-none"
                    aria-hidden="true"
                  ></span>
                </span>{" "}
              </span>
            </h2>

            <a
              href="#contact"
              className="mt-4 inline-block px-8 py-4 border-2 border-yellow-400 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition font-semibold"
            >
              สั่งทำเว็บไซต์เลย
            </a>
          </div>
        </motion.div>

    {/* Right: Image */}
    <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full xl:w-[60%] flex justify-center"
        >
          <motion.img
            src="/MacBook.png"
            alt="สร้างเว็บไซต์ของคุณ"
            className="w-full max-w-[600px] h-auto object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

  </div>
</section>

{/* Section 2: Mobile */}
<section
  id="benefits"
  className="relative z-10 px-6 py-24 min-h-[100vh] bg-transparent -mt-12"
>

  <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto gap-0">

    {/* Left: Image */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 flex justify-center"
>
    <img
      src="/iPhone.png"
      alt="เว็บไซต์รองรับมือถือ"
    className="w-full max-w-[200px] xl:max-w-[300px] h-auto object-cover mt-10"
  />
</motion.div>


    {/* Right: Text */}
    <div 
      className="w-full md:w-1/2 flex flex-col items-center md:items-start text-white"
      data-aos="fade-left" // AOS Animation
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <h2 className="text-3xl md:text-4xl xl:text-6xl font-medium mb-8">
        ทำไมต้องเลือกเราสร้างเว็บไซต์ให้คุณ?
      </h2>

      <ul className="space-y-6 text-lg md:text-xl xl:text-2xl">
        <li className="flex items-center gap-4">
          <i className="fas fa-mobile-alt text-yellow-400 text-3xl"></i>
          รองรับทุกอุปกรณ์ (Responsive)
        </li>
        <li className="flex items-center gap-4">
          <i className="fas fa-palette text-yellow-400 text-3xl"></i>
          ออกแบบตรงตามความต้องการ
        </li>
        <li className="flex items-center gap-4">
          <i className="fas fa-tags text-yellow-400 text-3xl"></i>
          ราคาคุ้มค่า ไม่แพง
        </li>
        <li className="flex items-center gap-4">
          <i className="fas fa-headset text-yellow-400 text-3xl"></i>
          ดูแลและให้คำปรึกษาหลังส่งมอบ
        </li>
      </ul>

      <a
        href="#contact"
        className="mt-10 inline-block px-8 py-4 border-2 border-yellow-400 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition font-semibold"
      >
        ติดต่อเราเลย
      </a>
    </div>

  </div>
</section>
</div>

    {/* Section 3: Services */}
<section id="services" className="min-h-screen px-4 py-16 bg-gradient-to-b from-white to-gray-50 scroll-mt-16">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">

    {/* ฝั่งซ้าย: Service Cards */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="flex flex-col gap-6 h-full lg:flex-[1.5] 2xl:flex-[3]"
    >
      {services.map((service, idx) => (
        <ParallaxCard key={idx}>
          <div
            className="relative bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between h-full hover:bg-gray-100 hover:scale-[1.02] transition duration-300"
            onClick={() => setSelectedService(service)}
          >
            {service.name === "Basic" && (
              <div className="absolute top-0 right-0 bg-yellow-400 text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-bl-xl z-10 flex items-center gap-2 shadow-xl">
                <img src="/icons/hot.png" alt="Hot" className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                ฮิตมาก!
              </div>
            )}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4">{service.description}</p>
            </div>
            <p className="text-right text-base sm:text-lg lg:text-lg font-medium mt-auto">
              เริ่มต้น {service.price}
            </p>
          </div>
        </ParallaxCard>
      ))}
    </motion.div>

    {/* ฝั่งขวา: เริ่มต้น / อัพเกรด (ให้สูงเท่าฝั่งซ้าย) */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 self-stretch lg:flex-[3.5] 2xl:flex-[5]"
    >
      {/* กล่อง เริ่มต้น */}
      <ParallaxCard>
        <div className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 md:p-8 flex flex-col h-full hover:bg-gray-200 hover:scale-[1.02] transition duration-300">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center mb-4">
            <div>เริ่มต้น</div>
            <div className="mt-2 sm:mt-3 text-lg sm:text-xl lg:text-2xl">{selectedService.starterPrice}</div>
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-xm mt-2"> 
            {selectedService.starterFeatures.map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 mt-1 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </ParallaxCard>

      {/* กล่อง อัพเกรด */}
      <ParallaxCard>
        <div className="bg-gray-100 rounded-xl shadow-md p-4 sm:p-6 md:p-8 flex flex-col h-full hover:bg-gray-200 hover:scale-[1.02] transition duration-300">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center mb-4">
            <div>อัพเกรด</div>
            <div className="mt-2 sm:mt-3 text-lg sm:text-xl lg:text-2xl">{selectedService.upgradePrice}</div>
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-xm mt-2">
            {selectedService.upgradeFeatures.map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 mt-1 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </ParallaxCard>
    </motion.div>

  </div>
</section>

{/* Section : Template Showcase */}
<section
  id="templates"
  className="min-h-[80vh] relative z-10 px-6 py-20 bg-gradient-to-br from-[#1c1c1c] via-[#2a2a2a] to-black"
>
  <div
    className="max-w-7xl mx-auto text-center mb-12"
    data-aos="fade-up"
  >
    <h2 className="text-4xl font-medium mb-4 text-amber-50">เทมเพลตของเรา</h2>
    <p className="text-amber-50">เรามีเทมเพลตสวย ๆ ให้เลือกตามสไตล์ที่ต้องการ</p>
  </div>

  {/* Swiper: Template Cards */}
  <Swiper
    modules={[Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    pagination={{ clickable: true }}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="max-w-7xl mx-auto"
    data-aos="fade-up"
  >
    <SwiperSlide>
      <TemplateCard
        title="Finexo"
        description="เทมเพลตธุรกิจหรือเว็บเอเจนซี่"
        image="/tem1.2.png" // คุณเปลี่ยน path รูป preview ได้
        link="/templates/finexo" // ใช้ลิงก์ที่เปิด iframe ได้
      />
    </SwiperSlide>

    <SwiperSlide>
      <TemplateCard
        title="Restaurant Landing"
        description="เทมเพลตสำหรับร้านอาหารหรือคาเฟ่"
        image="/tem1.png"
        link="/templates/Atlas"
      />
    </SwiperSlide>
    {/* เพิ่ม Template อื่น ๆ ได้ตรงนี้ เช่น */}
    {/* <SwiperSlide> <TemplateCard ... /> </SwiperSlide> */}
    <SwiperSlide>
      <TemplateCard
        title="Restaurant Landing"
        description="เทมเพลตสำหรับร้านอาหารหรือคาเฟ่"
        image="/tem1.png"
        link="/templates/restaurant-landing"
      />
    </SwiperSlide>
  </Swiper>
</section>

  
        {/* Section: Process */}
<section id="process" className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 text-center scroll-mt-17">
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
      "ส่งมอบเว็บไซต์ให้ลูกค้า"
    ];
    const descriptions = [
      "ติดต่อเราที่ page facebook เพื่อแจ้งรายละเอียดเว็บไซต์ที่ต้องการ ",
      "เราประเมินราคาและแจ้งระยะเวลาการทำงาน ลูกค้าชำระมัดจำเพื่อเริ่มต้น",
      "เราออกแบบและพัฒนาเว็บไซต์ พร้อมส่งให้ลูกค้าเพื่อตรวจสอบ",
      "อัปโหลดเว็บไซต์ให้พร้อมใช้งาน และบริการหลังการขายเบื้องต้น"
    ];
    const iconPaths = [
      "/icons/chat.png",
      "/icons/document.png",
      "/icons/idea.png",
      "/icons/handshake.png"
    ];
    
    return (
      <ParallaxCard key={step}>
        <div className="bg-gray-100 rounded-xl p-6 text-left flex flex-col items-center transition transform hover:scale-105 hover:shadow-xl shadow-md min-h-[350px] flex-1">
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
      </ParallaxCard>
    );
  })}
</div>

  </div>
</section>


<section id="contact" className="bg-[#1c1c1c] text-white py-20 px-4 scroll-mt-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Contact Channels */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInAnimation} // ใช้ animation ที่กำหนดไว้
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-10 text-white">ช่องทางการติดต่อ</h2>
          
          {/* ช่องทางการติดต่อ */}
          <a href="https://www.facebook.com/Fullweb.dev" className="flex items-center px-6 py-4 bg-gray-200 rounded-full shadow hover:scale-105 transition">
            <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mr-4 text-xl">f</span>
            <span className="text-black font-medium">Full Web - บริการออกแบบและทำเว็บไซต์ครบวงจร</span>
          </a>
          <a href="https://line.me/ti/p/@682nkzsq" className="flex items-center px-6 py-4 bg-gray-200 rounded-full shadow hover:scale-105 transition">
            <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mr-4 text-sm">LINE</span>
            <span className="text-black font-medium">full web service</span>
          </a>
          <a href="mailto:fullweb.teamservice@gmail.com" className="flex items-center px-6 py-4 bg-gray-200 rounded-full shadow hover:scale-105 transition">
            <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mr-4 text-xl">✉️</span>
            <span className="text-black font-medium">fullweb.teamservice@gmail.com</span>
          </a>
          <a href="tel:+66936150842" className="flex items-center px-6 py-4 bg-gray-200 rounded-full shadow hover:scale-105 transition">
            <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mr-4">
              <Phone size={20} />
            </span>
            <span className="text-black font-medium">093-615-0842</span>
          </a>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="bg-white rounded-xl p-8 shadow-md text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardAnimation}
        >
          <h3 className="text-2xl font-medium mb-6">ส่งข้อความหาเรา</h3>
          <form action="https://formspree.io/f/xpwdzdow" method="POST">
            <div className="mb-4">
              <label className="block font-medium mb-1">ชื่อของคุณ</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="กรอกชื่อของคุณ"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">อีเมล</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="example@email.com"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">ข้อความ</label>
              <textarea
                name="message"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                rows={5}
                placeholder={"คุณต้องการสอบถามอะไร...\nช่องทางการติดต่อกลับ เช่น LINE, Facebook,"}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition"
            >
              ส่งข้อความ
            </button>
          </form>
        </motion.div>
      </div>
    </section>

        {/* Footer */}
        <footer className="bg-gray-700 text-white py-6 text-center">
          <p className="text-sm">© 2025 Website Full Web. All rights reserved.</p>
          <p className="text-sm">Designed by Full Web</p>
        </footer>
    </main>
  );
}


