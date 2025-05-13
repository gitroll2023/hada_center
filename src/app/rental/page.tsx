'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageProtection from '../../components/ImageProtection';
import { motion, AnimatePresence } from 'framer-motion';

export default function RentalPage() {
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

  const spaces = [
    {
      id: 1,
      name: '2층 커뮤니티 공간',
      features: ['무료 와이파이', '음료 제공', '노트북 작업 공간'],
      image: '/images/space/2F.png',
      description: '다양한 모임과 네트워킹이 이루어지는 열린 공간입니다. 소규모 모임, 스터디, 네트워킹 등을 위한 테이블과 의자가 구비되어 있습니다.'
    }
  ];

  return (
    <div className="min-h-screen mt-[100px]">
      <ImageProtection />
      
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-gradient-to-r from-teal-600 to-emerald-500 overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* 회전하는 원형 렌탈 아이콘들 */}
              {['🏢', '🪑', '💻', '☕', '📝', '🎮'].map((emoji, index) => (
                <motion.div
                  key={index}
                  className="absolute w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg"
                  style={{
                    top: '50%',
                    left: '50%',
                    margin: '-1.5rem',
                  }}
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
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-28 h-28 flex items-center justify-center shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1], rotate: [0, -10, 10, 0] }}
                transition={{ 
                  scale: { duration: 0.8, times: [0, 0.7, 1] },
                  rotate: { duration: 1.2, times: [0, 0.3, 0.6, 1], delay: 0.8 }
                }}
              >
                <span className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">하다</span>
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
                공간 정보 불러오는 중
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
                당신의 아이디어가 실현될 수 있는<br /> 최적의 공간을 준비중입니다.
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 히어로 섹션 */}
      <section className="relative min-h-[700px] md:min-h-[800px] flex items-center py-20 md:py-32 overflow-hidden">
        {/* 배경 */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal-800 to-emerald-600">
          {/* 배경 패턴 */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm63 31c1.657 0 3-1.343 3-3s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM34 90c1.657 0 3-.895 3-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.657 0 3-.895 3-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* 부유하는 요소들 */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-10 left-[10%] w-32 h-32 bg-teal-300 rounded-full opacity-20 blur-xl animate-float"></div>
          <div className="absolute bottom-20 left-[20%] w-36 h-36 bg-teal-200 rounded-full opacity-20 blur-xl animate-float-slow overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200/20 to-emerald-200/30"></div>
            <div className="absolute -inset-1 bg-white/20 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-300/30 rounded-full shadow-lg animate-pulse overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200/20 to-emerald-300/30"></div>
            <div className="absolute -inset-1 bg-white/20 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
          </div>
          <div className="absolute -top-6 -right-10 w-24 h-24 bg-emerald-300/30 rounded-full shadow-lg animate-pulse overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-teal-300/30"></div>
            <div className="absolute -inset-1 bg-white/20 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
          </div>
        </div>
        
        {/* 콘텐츠 */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-3/5 mb-10 md:mb-0 text-center md:text-left md:pl-8 lg:pl-12">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight">
                당신의 <span className="text-teal-300">아이디어</span>가<br />
                <span className="relative inline-block">
                  실현되는 공간
                  <span className="absolute -bottom-2 left-0 right-0 h-2 bg-teal-300/80 rounded-full"></span>
                </span>
              </h1>
              
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                하다 청년공간에서 당신의 창의적인 모임과<br />
                프로젝트를 위한 최적의 공간을 만나보세요.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#spaces" className="bg-white text-teal-700 hover:bg-teal-50 transition-colors py-3 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl">
                  공간 둘러보기
                </a>
                <a href="#inquiry" className="bg-teal-600 text-white hover:bg-teal-700 transition-colors py-3 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl">
                  문의하기
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-2/5 hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full backdrop-blur-sm"></div>
                <div className="relative p-2">
                  <div className="relative overflow-hidden rounded-full aspect-square shadow-xl border-4 border-white/30">
                    <Image
                      src="/images/space/2F.png"
                      alt="하다 청년공간"
                      fill
                      className="object-cover scale-110 hover:scale-125 transition-transform duration-700"
                      unoptimized={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-800/40 to-transparent"></div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-300/30 rounded-full shadow-lg animate-pulse overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-200/20 to-emerald-300/30"></div>
                    <div className="absolute -inset-1 bg-white/20 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
                  </div>
                  
                  <div className="absolute -top-6 -right-10 w-24 h-24 bg-emerald-300/30 rounded-full shadow-lg animate-pulse overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-teal-300/30"></div>
                    <div className="absolute -inset-1 bg-white/20 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 하단 웨이브 효과 */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ marginBottom: "-2px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,220L48,213.3C96,207,192,193,288,192C384,191,480,203,576,202.7C672,203,768,191,864,186.7C960,181,1056,181,1152,186.7C1248,192,1344,203,1392,208.7L1440,213L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* 공지사항 섹션 */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-50 to-orange-50 p-8 md:p-10 rounded-2xl shadow-lg border-l-4 border-red-400 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-200 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-red-600">공간 대관 일시 중단 안내</h2>
              </div>
              
              <div className="bg-white/70 p-6 rounded-xl mb-6 shadow-sm">
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  현재 하다 청년공간은 내부 행사가 많아 모든 공간의 대관 신청을 일시적으로 중단하고 있습니다.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  대관 재개 시점은 추후 공지될 예정이며, 불편을 드려 죄송합니다.
                </p>
              </div>
              
              <div className="flex items-center bg-white/70 p-5 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold text-lg">
                    문의사항: 인스타그램 DM (@hada_in_gwangju)
                  </p>
                  <a 
                    href="https://www.instagram.com/hada_in_gwangju" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-red-500 hover:text-red-600 text-sm font-medium flex items-center mt-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    인스타그램 바로가기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 공간 소개 섹션 */}
      <section id="spaces" className="py-20 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-3">
              SPACES
            </span>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
              대여 가능 공간
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              현재는 대관 신청이 불가능하지만, 하다 청년공간에서 제공하는 공간을 미리 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {spaces.map((space) => (
              <div key={space.id} className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-80">
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover"
                    unoptimized={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{space.name}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{space.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      시설 및 특징
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {space.features.map((feature, index) => (
                        <div key={index} className="flex items-center bg-teal-50 p-3 rounded-lg">
                          <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 text-2xl mx-auto mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <button disabled className="w-full bg-gradient-to-r from-gray-400 to-gray-500 text-white py-3 px-6 rounded-xl cursor-not-allowed font-medium shadow-md">
                      현재 대관 불가
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대관 절차 섹션 */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-teal-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-30 -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-30 -ml-40 -mb-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-3">
              PROCESS
            </span>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              대관 절차
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              대관 재개 시 아래 절차에 따라 신청해주세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 mb-10 md:mb-0 rounded-2xl shadow-lg text-center relative transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-lg font-bold">1</div>
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 text-2xl mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">공간 확인</h3>
              <p className="text-gray-600">웹사이트에서 대여 가능한 공간을 확인하고 용도에 맞는 공간을 선택하세요.</p>
            </div>
            
            <div className="bg-white p-8 mb-10 md:mb-0 rounded-2xl shadow-lg text-center relative transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-lg font-bold">2</div>
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 text-2xl mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">신청서 작성</h3>
              <p className="text-gray-600">온라인 대관 신청서를 작성하고 필요한 정보와 함께 제출해주세요.</p>
            </div>
            
            <div className="bg-white p-8 mb-10 md:mb-0 rounded-2xl shadow-lg text-center relative transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-lg font-bold">3</div>
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 text-2xl mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">승인 및 결제</h3>
              <p className="text-gray-600">신청 내용 검토 후 승인되면 안내에 따라 대관료를 결제해주세요.</p>
            </div>
            
            <div className="bg-white p-8 mb-10 md:mb-0 rounded-2xl shadow-lg text-center relative transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-lg font-bold">4</div>
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 text-2xl mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">공간 이용</h3>
              <p className="text-gray-600">예약한 일시에 공간을 이용하고 이용 규칙을 준수해주세요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 문의 섹션 */}
      <section id="inquiry" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-teal-50 to-emerald-50 p-10 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-teal-200 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-200 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-3">
                  CONTACT
                </span>
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                  대관 문의
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  대관에 관한 모든 문의는 인스타그램을 통해서만 받고 있습니다.
                  <br />현재는 내부 행사로 인해 대관이 불가능합니다.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md flex items-center w-full md:w-auto">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">인스타그램</h3>
                    <p className="text-gray-600">@hada_in_gwangju</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://www.instagram.com/hada_in_gwangju" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-4 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
                >
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    인스타그램 방문하기
                  </div>
                </a>
                
                <p className="text-sm text-gray-500 mt-6">
                  * 현재는 내부 행사로 인해 대관이 불가능하며, 대관 재개 시 인스타그램을 통해 공지될 예정입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
