"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-800 to-blue-700">
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 움직이는 그라데이션 원 */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-400/30 to-purple-500/30 blur-3xl"
          style={{ 
            top: '10%', 
            left: '10%', 
            transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)` 
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 blur-3xl"
          style={{ 
            bottom: '5%', 
            right: '15%', 
            transform: `translate(${scrollY * -0.03}px, ${scrollY * 0.01}px)` 
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-3xl"
          style={{ 
            top: '40%', 
            right: '25%', 
            transform: `translate(${scrollY * -0.02}px, ${scrollY * -0.04}px)` 
          }}
        />
        
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat bg-center" />
        
        {/* 그리드 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </div>

      {/* 히어로 콘텐츠 */}
      <div className="container mx-auto px-4 relative z-10 h-screen flex flex-col justify-center items-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            <span className="block">청년공간</span>
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 text-transparent bg-clip-text">하다</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            모이면 통하는 청년들과 함께<br />
            다양한 꿈이 실현되는 광주 청년공간입니다.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/about">
              <motion.div 
                className="px-8 py-3 bg-white text-indigo-800 font-medium rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:bg-indigo-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                공간 소개
              </motion.div>
            </Link>
            <Link href="/events">
              <motion.div 
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                행사 일정
              </motion.div>
            </Link>
          </div>
        </motion.div>
        
        {/* 스크롤 다운 인디케이터 */}
        <motion.div 
          className="absolute bottom-16 left-0 right-0 mx-auto flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col items-center">
            <p className="text-white/80 text-sm mb-2">스크롤 하기</p>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
              <motion.div 
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{ 
                  y: [0, 12, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* 하단 웨이브 효과 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
