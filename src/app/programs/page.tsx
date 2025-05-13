'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageProtection from '../../components/ImageProtection';
import { AnimatePresence, motion } from 'framer-motion';

export default function ProgramsPage() {
  // 각 이벤트의 현재 이미지 인덱스를 관리하는 상태
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<number, number>>({});
  // 모달 표시 상태
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  // 선택된 이벤트 상태
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  // 상세 보기 모달 상태
  const [showDetailModal, setShowDetailModal] = useState(false);
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

  // 이전 이미지로 이동
  const prevImage = (eventId: number, imagesLength: number, e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    e.preventDefault(); // 기본 동작 방지
    
    setCurrentImageIndices(prev => ({
      ...prev,
      [eventId]: prev[eventId] === undefined || prev[eventId] === 0 ? imagesLength - 1 : prev[eventId] - 1
    }));
  };

  // 다음 이미지로 이동
  const nextImage = (eventId: number, imagesLength: number, e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    e.preventDefault(); // 기본 동작 방지
    
    setCurrentImageIndices(prev => ({
      ...prev,
      [eventId]: prev[eventId] === undefined || prev[eventId] === imagesLength - 1 ? 0 : prev[eventId] + 1
    }));
  };

  // 현재 이미지 인덱스 가져오기
  const getCurrentImageIndex = (eventId: number) => {
    return currentImageIndices[eventId] || 0;
  };

  // 이벤트 상세 보기
  const viewEventDetail = (eventId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    
    const event = events.find(e => e.id === eventId);
    if (event) {
      setSelectedEvent(eventId);
      setShowDetailModal(true);
    }
  };

  // 행사 정보 (최신순으로 정렬)
  const events = [
    {
      id: 1,
      title: '폭싹 체험형 전시회',
      date: '2025년 4월 11일',
      description: '청년들을 위한 체험형 전시회로, 다양한 시각적 착시와 재미있는 체험 요소를 통해 새로운 경험을 제공합니다.',
      images: [
        '/images/history/250411 폭싹속았수다 체험형 전시회/3.jpg',
        '/images/history/250411 폭싹속았수다 체험형 전시회/1.jpg',
        '/images/history/250411 폭싹속았수다 체험형 전시회/2.jpg',
        '/images/history/250411 폭싹속았수다 체험형 전시회/4.jpg',
        '/images/history/250411 폭싹속았수다 체험형 전시회/5.jpg',
        '/images/history/250411 폭싹속았수다 체험형 전시회/6.jpg',
      ],
    },
    {
      id: 2,
      title: '연애해봄 문화공연',
      date: '2025년 3월 9일',
      description: '봄을 맞이하여 청년들의 연애와 사랑을 주제로 한 다양한 문화 공연을 선보입니다.',
      images: [
        '/images/history/250309 연애해봄 문화공연/4.jpg',
        '/images/history/250309 연애해봄 문화공연/1.jpg',
        '/images/history/250309 연애해봄 문화공연/2.jpg',
        '/images/history/250309 연애해봄 문화공연/3.jpg',
        '/images/history/250309 연애해봄 문화공연/5.jpg',
        '/images/history/250309 연애해봄 문화공연/6.jpg',
      ],
    },
    {
      id: 3,
      title: 'FirstPage 북코칭 행사',
      date: '2025년 2월 4일',
      description: '책을 통한 자기계발과 성장을 돕는 북코칭 프로그램으로, 독서를 통한 새로운 시작을 응원합니다.',
      images: [
        '/images/history/250204 Firstpage 북코칭/1.jpg',
        '/images/history/250204 Firstpage 북코칭/2.jpg',
        '/images/history/250204 Firstpage 북코칭/3.jpg',
        '/images/history/250204 Firstpage 북코칭/4.jpg',
      ],
    },
    {
      id: 4,
      title: 'LastPage 칵테일파티',
      date: '2024년 11월 29일',
      description: '한 해의 마무리를 위한 칵테일 파티로, 청년들이 모여 네트워킹하고 즐거운 시간을 보내는 행사입니다.',
      images: [
        '/images/history/241129 Lastpage 칵테일파티/4.jpg',
        '/images/history/241129 Lastpage 칵테일파티/1.jpg',
        '/images/history/241129 Lastpage 칵테일파티/2.jpg',
        '/images/history/241129 Lastpage 칵테일파티/3.jpg',
      ],
    },
    {
      id: 5,
      title: '피터팬 뮤직콘서트',
      date: '2024년 11월 22일',
      description: '청년 뮤지션들이 펼치는 음악 공연으로, 다양한 장르의 음악을 즐길 수 있는 콘서트입니다.',
      images: [
        '/images/history/241122 피터팬 뮤직콘서트/1.jpg',
        '/images/history/241122 피터팬 뮤직콘서트/2.jpg',
      ],
    },
    {
      id: 6,
      title: '할로윈파티',
      date: '2024년 10월 29일',
      description: '할로윈을 맞이하여 청년들이 함께 즐기는 테마 파티로, 다양한 코스튬과 게임을 즐길 수 있습니다.',
      images: [
        '/images/history/241029 할로윈파티/2.jpg',
        '/images/history/241029 할로윈파티/3.jpg',
        '/images/history/241029 할로윈파티/1.jpg',
      ],
    },
  ];

  // 동호회 정보
  const clubs = [
    {
      id: 1,
      name: '콕콕콕',
      category: '배드민턴',
      manager: '심O선',
      schedule: '매주 토요일 17시',
      image: '/images/group/1 콕콕콕/1.jpg',
    },
    {
      id: 2,
      name: '위뚜',
      category: '베이킹',
      manager: '하O빈',
      schedule: '협의 후 진행',
      image: '/images/group/2 위뚜/1.jpg',
    },
    {
      id: 3,
      name: '리메이크',
      category: '향수만들기',
      manager: '김O연',
      schedule: '협의 후 진행',
      image: '/images/group/3 리메이크/1.jpg',
    },
    {
      id: 4,
      name: '라온하제',
      category: '베이킹, 퍼스널컬러, 칵테일',
      manager: '최O진',
      schedule: '협의 후 진행',
      image: '/images/group/4 라온하제/1.jpg',
    },
  ];

  return (
    <div className="min-h-screen mt-[100px]">
      <ImageProtection />
      
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 로딩 텍스처 */}
            <div 
              className="absolute inset-0 mix-blend-overlay opacity-20"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
              }}
            />
            
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* 회전하는 원형 프로그램 아이콘들 */}
                {['📚', '🧠', '🎓', '💡', '🔍', '🚀'].map((emoji, index) => (
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
                  <span className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">하다</span>
                </motion.div>
              </div>
              
              {/* 로딩 텍스트 */}
              <motion.div
                className="relative z-20 text-center mt-8"
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
                  프로그램 불러오는 중
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
                  청년들의 성장과 발전을 위한<br /> 다양한 프로그램을 준비중입니다.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 히어로 섹션 */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900 to-purple-900">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* 3D 효과가 있는 원형 요소들 */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* 고정된 위치에 원형 요소 배치 */}
          <div
            className="absolute rounded-full animate-float hidden md:block"
            style={{
              width: '180px',
              height: '180px',
              background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))`,
              left: '15%',
              top: '20%',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              animation: 'float 8s ease-in-out infinite',
            }}
          />
          <div
            className="absolute rounded-full animate-float-delayed"
            style={{
              width: '120px',
              height: '120px',
              background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))`,
              right: '20%',
              top: '15%',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              animation: 'float 7s ease-in-out 1s infinite',
            }}
          />
          <div
            className="absolute rounded-full animate-float hidden md:block"
            style={{
              width: '250px',
              height: '250px',
              background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))`,
              right: '10%',
              bottom: '20%',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              animation: 'float 10s ease-in-out 0.5s infinite',
            }}
          />
          <div
            className="absolute rounded-full animate-float-delayed md:block"
            style={{
              width: '150px',
              height: '150px',
              background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1))`,
              left: '25%',
              bottom: '15%',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              animation: 'float 9s ease-in-out 1.5s infinite',
            }}
          />
          
          {/* 모바일에서만 보이는 작은 원형 요소들 */}
          <div
            className="absolute rounded-full animate-float md:hidden"
            style={{
              width: '80px',
              height: '80px',
              background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))`,
              right: '10%',
              top: '10%',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              animation: 'float 6s ease-in-out infinite',
            }}
          />
          <div
            className="absolute rounded-full animate-float-delayed md:hidden"
            style={{
              width: '60px',
              height: '60px',
              background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1))`,
              left: '15%',
              bottom: '30%',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              animation: 'float 7s ease-in-out 1s infinite',
            }}
          />
        </div>
        
        {/* 콘텐츠 */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
              <span className="inline-block">
                <span className="inline-block">프</span>
                <span className="inline-block">로</span>
                <span className="inline-block">그</span>
                <span className="inline-block">램</span>
              </span>
            </h1>
            
            <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mx-auto mb-8"></div>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              하다 청년공간의 다양한 프로그램으로 <br />
              <span className="font-bold text-yellow-300">당신의 잠재력을 깨워보세요.</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#programs" 
                className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-full hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                프로그램 보기
              </a>
              <a 
                href="#clubs" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
              >
                동호회 참여하기
              </a>
            </div>
          </div>
        </div>
        
        {/* 하단 웨이브 효과 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* 행사 섹션 */}
      <section id="programs" className="py-20 bg-white relative" style={{ marginTop: '-2px' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-3">
              PROGRAMS
            </span>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              하다 청년공간 프로그램
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              청년들의 역량 강화와 네트워킹을 위한 다양한 프로그램을 소개합니다.
              관심 있는 프로그램에 참여하여 새로운 경험을 시작해보세요.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {events.map((event) => {
              const currentIndex = getCurrentImageIndex(event.id);
              const isEven = event.id % 2 === 0;
              
              return (
                <div 
                  key={event.id} 
                  className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl ${
                    event.id === 1 ? 'md:col-span-12' : 'md:col-span-6'
                  } ${event.id >= 3 ? 'md:col-span-4' : ''}`}
                >
                  <div className="relative overflow-hidden" style={{ 
                    height: event.id === 1 ? '400px' : '300px',
                    maxHeight: event.id === 1 ? '400px' : '300px'
                  }}>
                    <Image
                      src={event.images[currentIndex]}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized={false}
                    />
                    
                    {/* 그라데이션 오버레이 */}
                    <div className={`absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-90 bg-gradient-to-t ${
                      isEven ? 'from-indigo-900/90 to-transparent' : 'from-purple-900/90 to-transparent'
                    }`}></div>
                    
                    {/* 이미지 네비게이션 버튼 */}
                    {event.images.length > 1 && (
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
                        <button 
                          onClick={(e) => prevImage(event.id, event.images.length, e)}
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
                          aria-label="이전 이미지"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          onClick={(e) => nextImage(event.id, event.images.length, e)}
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
                          aria-label="다음 이미지"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    )}
                    
                    {/* 이미지 인디케이터 */}
                    {event.images.length > 1 && (
                      <div className="absolute top-4 left-4 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs text-white z-20">
                        {currentIndex + 1} / {event.images.length}
                      </div>
                    )}
                    
                    {/* 콘텐츠 */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 transform transition-transform duration-500">
                      <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                        <div className="flex items-center mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isEven ? 'bg-indigo-200 text-indigo-800' : 'bg-purple-200 text-purple-800'
                          }`}>
                            {event.date}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                        <p className="text-white/80 line-clamp-2 mb-2 transition-opacity duration-500">
                          {event.description}
                        </p>
                        <button 
                          onClick={(e) => viewEventDetail(event.id, e)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors mb-2 ${
                            isEven 
                              ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                              : 'bg-purple-600 hover:bg-purple-700 text-white'
                          }`}
                        >
                          자세히 보기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 동호회 섹션 */}
      <section id="clubs" className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-3">
              CLUBS
            </span>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              하다 청년공간 동호회
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              다양한 관심사를 가진 청년들이 모여 함께 성장하는 동호회를 소개합니다.
              나에게 맞는 동호회를 찾아 새로운 친구들과 특별한 경험을 시작해보세요.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clubs.map((club) => (
              <div 
                key={club.id} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* 배경 장식 요소 */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-bl-full z-0"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-full z-0"></div>
                
                {/* 이미지 */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={club.image}
                    alt={`${club.name} 동호회`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* 동호회 이름 */}
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <h3 className="text-2xl font-bold text-white">{club.name}</h3>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full mt-2">
                      {club.category}
                    </span>
                  </div>
                </div>
                
                {/* 상세 정보 */}
                <div className="p-6 relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-xs text-gray-500 font-medium">담당자</p>
                        <p className="text-gray-800 font-medium">{club.manager}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-xs text-gray-500 font-medium">활동 일정</p>
                        <p className="text-gray-800 font-medium">{club.schedule}</p>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    className="w-full mt-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-shadow duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowInquiryModal(true);
                    }}
                  >
                    참여 신청하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 이벤트 상세 모달 */}
      <AnimatePresence>
        {showDetailModal && selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowDetailModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {events.find(e => e.id === selectedEvent) && (
                <>
                  <div className="relative h-80">
                    <Image
                      src={events.find(e => e.id === selectedEvent)!.images[getCurrentImageIndex(selectedEvent)]}
                      alt={events.find(e => e.id === selectedEvent)!.title}
                      fill
                      className="object-cover"
                      unoptimized={false}
                    />
                    
                    {/* 이미지 네비게이션 버튼 */}
                    {events.find(e => e.id === selectedEvent)!.images.length > 1 && (
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage(selectedEvent, events.find(ev => ev.id === selectedEvent)!.images.length, e);
                          }}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
                          aria-label="이전 이미지"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage(selectedEvent, events.find(ev => ev.id === selectedEvent)!.images.length, e);
                          }}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
                          aria-label="다음 이미지"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    )}
                    
                    {/* 이미지 인디케이터 */}
                    {events.find(e => e.id === selectedEvent)!.images.length > 1 && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-sm text-white z-20">
                        {getCurrentImageIndex(selectedEvent) + 1} / {events.find(e => e.id === selectedEvent)!.images.length}
                      </div>
                    )}
                    
                    {/* 닫기 버튼 */}
                    <button 
                      onClick={() => setShowDetailModal(false)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        {events.find(e => e.id === selectedEvent)!.date}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{events.find(e => e.id === selectedEvent)!.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {events.find(e => e.id === selectedEvent)!.description}
                    </p>
                    <div className="flex justify-end">
                      <button 
                        onClick={() => {
                          setShowDetailModal(false);
                          setShowInquiryModal(true);
                        }}
                        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-shadow duration-300"
                      >
                        참여 신청하기
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 인스타그램 문의 모달 */}
      <AnimatePresence>
        {showInquiryModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowInquiryModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-3xl mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">인스타그램으로 문의하기</h3>
                <div className="text-gray-600 mb-6">
                  <p>동호회 참여 신청은 하다 청년공간 인스타그램을 통해</p>
                  <p>가능합니다.</p>
                  <br />
                  <span className="text-sm text-gray-500">
                    아래 버튼을 클릭하여 인스타그램 페이지로 이동해주세요!
                  </span>
                </div>
                <div className="flex flex-col space-y-3">
                  <a 
                    href="https://www.instagram.com/hada_in_gwangju" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-2"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    인스타그램으로 이동하기
                  </a>
                  <button 
                    className="w-full py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors duration-300"
                    onClick={() => setShowInquiryModal(false)}
                  >
                    닫기
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
