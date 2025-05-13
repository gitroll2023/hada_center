"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const SpaceSection = () => {
  const [activeSpace, setActiveSpace] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const spaces = [
    {
      id: 1,
      title: "2층",
      description: "다양한 행사와 모임이 이루어지는 열린 공간입니다. 청년들의 아이디어가 현실이 되는 곳입니다.",
      image: "/images/space/2F.png",
      color: "from-blue-400 to-blue-600",
      icon: "🏠"
    },
    {
      id: 2,
      title: "3층",
      description: "소규모 모임과 네트워킹이 이루어지는 아늑한 공간입니다. 다양한 청년들과 교류할 수 있습니다.",
      image: "/images/space/2F.png", // 이미지 경로는 실제 3층 이미지로 변경 필요
      color: "from-purple-400 to-purple-600",
      icon: "👥"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-purple-100 via-blue-50 to-white">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-100 to-transparent"></div>
        <div className="absolute -top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">청년공간 하다</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            광주 청년들의 소통과 성장을 위한 열린 공간입니다. 다양한 프로그램과 편안한 공간에서 여러분의 꿈과 아이디어를 펼쳐보세요.
          </p>
        </motion.div>

        {/* 공간 선택 탭 */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-md">
            {spaces.map((space, index) => (
              <button
                key={space.id}
                onClick={() => setActiveSpace(index)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSpace === index 
                    ? `bg-gradient-to-r ${space.color} text-white shadow-sm` 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {space.icon} {space.title}
              </button>
            ))}
          </div>
        </div>

        {/* 선택된 공간 표시 */}
        <motion.div 
          className="max-w-6xl mx-auto"
          key={activeSpace}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-blue-100/50">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* 이미지 */}
              <div className="relative h-72 md:h-auto">
                <Image
                  src={spaces[activeSpace].image}
                  alt={spaces[activeSpace].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/40 to-transparent"></div>
                
                {/* 모바일에서만 보이는 제목 */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
                  <h3 className="text-2xl font-bold text-white">{spaces[activeSpace].title}</h3>
                </div>
              </div>
              
              {/* 설명 */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 hidden md:block text-blue-800">{spaces[activeSpace].title}</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {spaces[activeSpace].description}
                </p>
                <Link href="/about">
                  <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${spaces[activeSpace].color} text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105`}>
                    자세히 보기
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 공간 특징 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          {[
            {
              icon: "🎨",
              title: "다양한 문화 행사",
              description: "연애해봄 문화공연, 폭싹속았수다 체험형 전시회 등 청년들이 직접 기획하고 참여하는 다양한 문화행사",
              color: "from-pink-400 to-pink-600"
            },
            {
              icon: "🤝",
              title: "청년 네트워킹",
              description: "다양한 분야의 청년들이 모여 서로의 아이디어를 공유하고 협업할 수 있는 네트워킹 프로그램",
              color: "from-blue-400 to-blue-600"
            },
            {
              icon: "💡",
              title: "성장 프로그램",
              description: "북코칭, 스터디 그룹 등 청년들의 역량 강화와 자기 개발을 위한 다양한 성장 프로그램",
              color: "from-green-400 to-green-600"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-blue-100/50"
            >
              <div className={`w-14 h-14 mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-2xl`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
