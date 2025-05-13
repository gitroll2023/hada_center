'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageProtection from '../../components/ImageProtection';
import { motion, AnimatePresence } from 'framer-motion';

// SBAggroB 폰트 추가
const fontStyles = `
  @font-face {
    font-family: 'SBAggroB';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default function AboutPage() {
  // 로딩 상태
  const [isLoading, setIsLoading] = useState(true);

  // 로딩 효과
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // 로딩 화면이 사라질 때 스크롤을 맨 위로 이동
      window.scrollTo(0, 0);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-[100px]">
      <ImageProtection />
      
      {/* 폰트 스타일 적용 */}
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      
      {/* 로딩 화면 */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* 회전하는 원형 아이콘들 */}
              {['💙', '🏛️', '🌱', '🤝', '💭', '✨'].map((emoji, index) => (
                <motion.div
                  key={index}
                  className="absolute w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg"
                  initial={{ x: 0, y: 0 }}
                  animate={{
                    x: Math.cos(index * (Math.PI / 3)) * 120,
                    y: Math.sin(index * (Math.PI / 3)) * 120,
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
                    delay: index * 0.2
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
              {/* 중앙 로고 */}
              <motion.div
                className="absolute z-10 bg-white rounded-full w-28 h-28 flex items-center justify-center shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1], rotate: [0, -10, 10, 0] }}
                transition={{ 
                  scale: { duration: 0.8, times: [0, 0.7, 1] },
                  rotate: { duration: 1.2, times: [0, 0.3, 0.6, 1], delay: 0.8 }
                }}
              >
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">하다</span>
              </motion.div>
            </div>

            {/* 로딩 텍스트 */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.h2 
                className="text-2xl font-bold text-white mb-2"
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "mirror" 
                }}
              >
                소개 정보 불러오는 중
              </motion.h2>
              <motion.div className="flex space-x-1 justify-center">
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    className="w-3 h-3 bg-white rounded-full"
                    initial={{ opacity: 0.5, y: 0 }}
                    animate={{ opacity: [0.5, 1, 0.5], y: [0, -5, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: dot * 0.2
                    }}
                  />
                ))}
              </motion.div>
              <motion.p 
                className="text-white/80 text-sm mt-4 max-w-xs mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                광주 청년들의 소통과 성장을 위한<br /> 열린 공간을 소개합니다.
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-500 via-purple-400 to-pink-400 py-16 md:py-24">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="container mx-auto px-4 py-10 md:py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* 왼쪽 텍스트 영역 */}
            <motion.div 
              className="w-full md:w-1/2 text-white ml-4 md:ml-8 lg:ml-12"
              initial={{ opacity: 0, x: -50 }}
              animate={!isLoading ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="inline-block mb-4 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                initial={{ opacity: 0, y: -20 }}
                animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="text-white/80 text-sm font-medium">광주광역시 청년공간</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-center">
                  <span style={{ 
                    fontFamily: 'SBAggroB',
                    fontSize: '1.2em',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
                  }}>하다</span>
                  <span className="ml-4 text-white text-3xl md:text-4xl">청년공간</span>
                </div>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                소통하다, 성장하다, 꿈꾸다, 도전하다<br />
                청년들의 다양한 활동과 가능성을 지원하는 공간
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-3 mb-10"
                initial={{ opacity: 0 }}
                animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                {['#소통', '#성장', '#꿈꾸다', '#도전', '#창작'].map((tag, index) => (
                  <span 
                    key={tag} 
                    className="inline-block text-white/70 hover:text-white transition-colors"
                  >
                    {tag}
                    {index < 4 && <span className="mx-2">•</span>}
                  </span>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <a 
                  href="#intro" 
                  className="inline-block px-6 py-3 bg-white text-blue-500 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg"
                >
                  더 알아보기
                </a>
              </motion.div>
            </motion.div>
            
            {/* 오른쪽 이미지/그래픽 영역 */}
            <motion.div 
              className="w-full md:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={!isLoading ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative h-[400px] w-full">
                {/* 메인 이미지 */}
                <motion.div
                  className="absolute top-0 right-0 w-[90%] h-[90%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
                  initial={{ opacity: 0, y: 30, rotate: 5 }}
                  animate={!isLoading ? { opacity: 1, y: 0, rotate: 5 } : { opacity: 0, y: 30, rotate: 5 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Image
                    src="/images/space/2F.png"
                    alt="하다 청년공간"
                    fill
                    className="object-cover"
                    unoptimized={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
                </motion.div>
                
                {/* 장식 요소들 */}
                <motion.div
                  className="absolute -bottom-5 -left-5 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={!isLoading ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                />
                
                <motion.div
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={!isLoading ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                />
                
                <motion.div
                  className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={!isLoading ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                />
                
                {/* 부가 정보 카드 - 운영시간 제거 */}
                {/* <motion.div
                  className="absolute bottom-10 left-0 w-48 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={!isLoading ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <div className="text-white text-sm">
                    <div className="font-medium mb-1">운영 시간</div>
                    <div className="text-white/70 text-xs">평일: 오전 9시 - 오후 9시</div>
                    <div className="text-white/70 text-xs">주말: 오전 10시 - 오후 6시</div>
                  </div>
                </motion.div> */}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* 스크롤 유도 화살표 */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* 소개 섹션 */}
      <section id="intro" className="pt-20 pb-20 bg-white">
        <div className="h-16" id="intro-anchor"></div> {/* 스크롤 앵커 추가 */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div 
              className="w-full md:w-1/2 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={!isLoading ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-100 rounded-full -z-10"></div>
              <Image
                src="/images/space/2F.png"
                alt="하다 청년공간"
                width={600}
                height={400}
                className="rounded-lg shadow-md relative z-10"
                unoptimized={false}
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={!isLoading ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ opacity: 0, y: -10 }}
                animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                청년공간 <span style={{ 
                  fontFamily: 'SBAggroB', 
                  fontWeight: 900, 
                  fontSize: '1.3em',
                  color: '#3454d1',
                  textShadow: '1px 1px 2px rgba(106, 130, 251, 0.5)',
                  padding: '0 4px',
                  borderBottom: '2px solid #6a82fb'
                }}>&lsquo;하다&rsquo;</span>
              </motion.h2>
              <motion.p 
                className="text-gray-700 mb-5 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.0 }}
              >
                광주광역시 하다 청년공간은 청년들이 자유롭게 모여 소통하고 성장할 수 있는 
                열린 공간입니다. <span className="text-blue-600 font-bold" style={{ fontFamily: 'Paperlogy-8ExtraBold', fontWeight: 900 }}>&lsquo;하다&rsquo;</span>라는 이름에는 청년들이 함께 모여 다양한 활동을 
                하다라는 의미가 담겨 있습니다.
              </motion.p>
              
              <motion.div 
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 mb-5 shadow-sm border border-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 2.2 }}
              >
                <div className="flex flex-col space-y-3">
                  <motion.div 
                    className="text-center mb-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={!isLoading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: 2.4 }}
                  >
                    <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-white text-lg font-semibold shadow-sm">
                      소통하다, 성장하다, 꿈꾸다, 도전하다
                    </span>
                  </motion.div>
                  <motion.p 
                    className="text-gray-700 leading-relaxed text-center"
                    initial={{ opacity: 0 }}
                    animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 2.6 }}
                  >
                    청년들의 다양한 활동과 가능성을<br /> 
                    <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">지원하는 공간</span>으로 운영되고 있습니다.
                  </motion.p>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 2.8 }}
              >
                청년들의 아이디어와 열정으로 시너지를 만들어내는 
                <span style={{ 
                  fontFamily: 'SBAggroB', 
                  fontWeight: 900, 
                  fontSize: '1.2em',
                  color: '#3454d1',
                  textShadow: '1px 1px 2px rgba(106, 130, 251, 0.5)',
                  padding: '0 4px',
                  borderBottom: '2px solid #6a82fb'
                }}>&lsquo;하다&rsquo;</span> 청년공간에서 여러분의 꿈을 펼쳐보세요.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 공간 특징 섹션 */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            하다 청년공간의 특징
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <motion.div 
              className="bg-white p-4 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <div className="w-1/4 md:w-1/3 relative">
                  <div className="absolute -top-2 -left-2 w-6 h-6 sm:w-12 sm:h-12 bg-blue-100 rounded-full -z-10"></div>
                  <div className="aspect-square bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-12 sm:w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div className="w-3/4 md:w-2/3">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-blue-600">다목적 공간</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    다양한 활동과 모임을 위한 유연한 공간으로, 필요에 따라 재구성이 가능합니다.
                  </p>
                  <ul className="space-y-1 md:space-y-2">
                    <li className="flex items-center text-xs md:text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      소규모 모임 및 네트워킹
                    </li>
                    <li className="flex items-center text-xs md:text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      스터디 및 프로젝트 작업
                    </li>
                    <li className="flex items-center text-xs md:text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      문화 행사 및 워크숍
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-4 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <div className="w-1/4 md:w-1/3 relative">
                  <div className="absolute -top-2 -left-2 w-6 h-6 sm:w-12 sm:h-12 bg-green-100 rounded-full -z-10"></div>
                  <div className="aspect-square bg-green-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-12 sm:w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="w-3/4 md:w-2/3">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-green-600">학습 공간</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    집중적인 학습과 연구를 위한 조용하고 쾌적한 환경을 제공합니다.
                  </p>
                  <ul className="space-y-1 md:space-y-2">
                    <li className="flex items-center text-xs md:text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      개인 학습 및 독서
                    </li>
                    <li className="flex items-center text-xs md:text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      온라인 강의 참여
                    </li>
                    <li className="flex items-center text-xs md:text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      자기계발 활동
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-4 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <div className="w-1/4 md:w-1/3 relative">
                  <div className="absolute -top-2 -left-2 w-6 h-6 sm:w-12 sm:h-12 bg-purple-100 rounded-full -z-10"></div>
                  <div className="aspect-square bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-12 sm:w-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="w-3/4 md:w-2/3">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-purple-600">커뮤니티 공간</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                    청년들 간의 소통과 교류를 촉진하는 편안하고 친근한 공간입니다.
                  </p>
                  <ul className="space-y-1 md:space-y-2">
                    <li className="flex items-center text-xs md:text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      네트워킹 및 교류
                    </li>
                    <li className="flex items-center text-xs md:text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      휴식 및 아이디어 공유
                    </li>
                    <li className="flex items-center text-xs md:text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      소규모 모임 및 토론
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 이용 안내 섹션 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            이용 안내
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-yellow-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2 text-yellow-800">운영 시간</h3>
              </div>
              <div className="text-center text-gray-700">
                <p className="mb-2">평일: 오전 9시 - 오후 9시</p>
                <p className="mb-2">주말: 오전 10시 - 오후 6시</p>
                <p className="text-sm text-gray-500 mt-4">* 공휴일 운영시간 변동있을 수 있음</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2 text-blue-800">예약 안내</h3>
              </div>
              <div className="text-center text-gray-700">
                <p className="mb-2">인스타그램: @hada_in_gwangju</p>
                <p className="mb-2">DM으로 문의 및 예약</p>
                <p className="text-sm text-gray-500 mt-4">* 단체 이용은 사전 예약 필요</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-green-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2 text-green-800">이용 규칙</h3>
              </div>
              <div className="text-center text-gray-700">
                <p className="mb-2">청결 유지</p>
                <p className="mb-2">타인 배려</p>
                <p className="text-sm text-gray-500 mt-4">* 자세한 내용은 현장에서 확인</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 위치 섹션 */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            찾아오시는 길
          </motion.h2>
          
          <motion.div 
            className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 flex items-center text-blue-600">
                <span className="text-red-500 mr-2">📍</span>
                주소
              </h3>
              <p className="text-gray-700 ml-7">
                광주 동구 서석로85번길 8-3 (2,3층)
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 flex items-center text-blue-600">
                <span className="text-red-500 mr-2">🚌</span>
                대중교통
              </h3>
              <ul className="ml-7 space-y-1 text-gray-700">
                <li>버스: 전남여고 정류장 하차</li>
                <li>지하철: 광주 1호선 문화전당역 3번 출구에서 도보 10분</li>
              </ul>
            </div>
            
            {/* 지도 영역 */}
            <div className="h-80 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.2714857544465!2d126.920139!3d35.149974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA4JzU5LjkiTiAxMjbCsDU1JzEyLjUiRQ!5e0!3m2!1sko!2skr!4v1620123456789!5m2!1sko!2skr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-4 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg flex items-center border border-blue-100">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">H</div>
              <div>
                <p className="font-semibold text-blue-800">📍 위치: 광주 동구 서석로85번길 8-3(2,3층)</p>
                <p className="text-sm text-blue-600 mt-1">지도를 클릭하여 구글 지도에서 자세히 보고 길찾기를 이용하실 수 있습니다.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
