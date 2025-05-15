"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
      {/* 3층 공간 이미지 - 은은하게 표시 */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <div className="relative w-full h-full">
            <Image
              src="/images/space/3F_3.jpg"
              alt="3층 공간"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
        
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
      
      {/* 하단 웨이브 효과 - 반응형 웨이브 */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        {/* 모바일용 웨이브 (더 완만한 곱선) */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full block md:hidden" style={{ height: '80px' }}>
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,192L60,197.3C120,203,240,213,360,202.7C480,192,600,160,720,165.3C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        
        {/* 태블릿/데스크톱용 웨이브 (더 뛰렷한 물결) */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full hidden md:block" style={{ height: '120px' }}>
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,128L40,138.7C80,149,160,171,240,165.3C320,160,400,128,480,128C560,128,640,160,720,186.7C800,213,880,235,960,218.7C1040,203,1120,149,1200,133.3C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
