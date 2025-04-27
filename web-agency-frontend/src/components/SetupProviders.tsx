'use client';

import { useEffect } from 'react';
// @ts-ignore
import AOS from 'aos';
import '@fortawesome/fontawesome-free/css/all.min.css';  // โหลด FontAwesome ไอคอน
import 'aos/dist/aos.css';                               // โหลด AOS Animation CSS

export function SetupProviders() {
  useEffect(() => {
    AOS.init({
      duration: 1200,  // default ความเร็ว Animation 1.2 วิ
      once: true,      // เล่น Animation แค่ครั้งเดียวตอนเลื่อนมาเจอ
    });
    AOS.refresh();     // เผื่อมีปัญหา Element ใหม่ๆ ต้อง refresh
  }, []);

  return null; // ไม่ต้อง render อะไรเลย
}
