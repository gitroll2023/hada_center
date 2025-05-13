"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const events = [
    {
      id: 1,
      title: "연애해봄 문화공연",
      date: "2025.03.09",
      description: "봄을 맞이한 청년 문화공연",
      image: "/images/history/250309 연애해봄 문화공연/1.jpg",
      color: "bg-pink-500"
    },
    {
      id: 2,
      title: "Firstpage 북코칭",
      date: "2025.02.04",
      description: "청년들을 위한 독서 코칭 프로그램",
      image: "/images/history/250204 Firstpage 북코칭/blur2.png",
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Lastpage 칵테일파티",
      date: "2024.11.29",
      description: "청년들의 네트워킹 칵테일 파티",
      image: "/images/history/241129 Lastpage 칵테일파티/1.jpg",
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "폭싹속았수다 체험형 전시회",
      date: "2024.10.15",
      description: "청년들이 직접 기획한 체험형 전시회",
      image: "/images/history/250309 연애해봄 문화공연/1.jpg", // 실제 이미지로 변경 필요
      color: "bg-green-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-indigo-100">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-5 bg-[url('/images/pattern.svg')] bg-repeat bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-800">하다 행사</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            청년공간 하다에서 진행된 다양한 행사와 프로그램을 소개합니다
          </p>
        </motion.div>

        {/* 이벤트 카드 그리드 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              {/* 이벤트 이미지 */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* 날짜 태그 */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm" style={{ backgroundColor: event.color }}>
                  {event.date}
                </div>
                
                {/* 제목 및 설명 */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-200 transition-colors">{event.title}</h3>
                  <p className="text-sm text-white/90">{event.description}</p>
                </div>
              </div>
              
              {/* 호버 시 나타나는 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-indigo-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link href="/events">
                  <div className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/30 transition-all transform hover:scale-105">
                    자세히 보기
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 더 많은 행사 보기 버튼 */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/events">
            <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
              더 많은 행사 보기
            </div>
          </Link>
        </motion.div>
        
        {/* 이벤트 통계 */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "24+", label: "문화행사", icon: "🎭" },
            { value: "12+", label: "교육 프로그램", icon: "📚" },
            { value: "30+", label: "네트워킹 이벤트", icon: "🤝" },
            { value: "500+", label: "참여 청년", icon: "👥" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index + 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md border border-indigo-100/50"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-indigo-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
