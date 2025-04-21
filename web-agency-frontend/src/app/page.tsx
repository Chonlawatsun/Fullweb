"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

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


export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <Navbar />

{/* Section 1: Main Intro */}
<section id="home" className="flex flex-col items-center justify-center text-center px-4 py-24 min-h-[calc(100vh-80px)] relative z-10 bg-[#1c1c1c]">
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
  href="#services"
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
      
    </main>
  );
}
