"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// 이벤트 타입 정의
interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  images: string[];
  color: ColorKey;
}

// 색상 키 타입 정의
type ColorKey = 'orange' | 'blue' | 'purple' | 'green' | 'pink' | 'yellow';

// 이벤트 데이터
const events: Event[] = [
  {
    id: 1,
    title: "할로윈 파티",
    date: "2024.10.29",
    description: "청년들과 함께하는 신나는 할로윈 파티! 다양한 코스튬과 함께 특별한 밤을 즐겨보세요.",
    images: [
      "/images/history/241029 할로윈파티/1.jpg",
      "/images/history/241029 할로윈파티/2.jpg",
      "/images/history/241029 할로윈파티/3.jpg"
    ],
    color: "orange"
  },
  {
    id: 2,
    title: "피터팬 뮤직콘서트",
    date: "2024.11.22",
    description: "청년 아티스트들의 재능을 발휘하는 음악의 밤! 다양한 장르의 음악을 한자리에서 즐겨보세요.",
    images: [
      "/images/history/241122 피터팬 뮤직콘서트/1.jpg",
      "/images/history/241122 피터팬 뮤직콘서트/2.jpg"
    ],
    color: "blue"
  },
  {
    id: 3,
    title: "Lastpage 칵테일파티",
    date: "2024.11.29",
    description: "한 해의 마무리를 특별하게! 다양한 칵테일과 함께하는 소셜 네트워킹 파티에 참여해보세요.",
    images: [
      "/images/history/241129 Lastpage 칵테일파티/1.jpg",
      "/images/history/241129 Lastpage 칵테일파티/2.jpg",
      "/images/history/241129 Lastpage 칵테일파티/3.jpg",
      "/images/history/241129 Lastpage 칵테일파티/4.jpg"
    ],
    color: "purple"
  },
  {
    id: 4,
    title: "Firstpage 북코칭",
    date: "2025.02.04",
    description: "새해 첫 시작을 책과 함께! 독서를 통한 자기계발과 성장을 도와주는 북코칭 프로그램입니다.",
    images: [
      "/images/history/250204 Firstpage 북코칭/1.jpg",
      "/images/history/250204 Firstpage 북코칭/2.jpg",
      "/images/history/250204 Firstpage 북코칭/3.jpg",
      "/images/history/250204 Firstpage 북코칭/4.jpg"
    ],
    color: "green"
  },
  {
    id: 5,
    title: "연애해봄 문화공연",
    date: "2025.03.09",
    description: "봄의 시작과 함께하는 로맨틱한 문화공연! 청년들의 사랑과 열정이 가득한 특별한 행사입니다.",
    images: [
      "/images/history/250309 연애해봄 문화공연/1.jpg",
      "/images/history/250309 연애해봄 문화공연/2.jpg",
      "/images/history/250309 연애해봄 문화공연/3.jpg",
      "/images/history/250309 연애해봄 문화공연/4.jpg",
      "/images/history/250309 연애해봄 문화공연/5.jpg",
      "/images/history/250309 연애해봄 문화공연/6.jpg"
    ],
    color: "pink"
  },
  {
    id: 6,
    title: "폭싹속았수다 체험형 전시회",
    date: "2025.04.11",
    description: "눈을 속이는 재미있는 체험형 전시회! 착시와 트릭아트를 통해 새로운 경험을 해보세요.",
    images: [
      "/images/history/250411 폭싹속았수다 체험형 전시회/1.jpg",
      "/images/history/250411 폭싹속았수다 체험형 전시회/2.jpg",
      "/images/history/250411 폭싹속았수다 체험형 전시회/3.jpg",
      "/images/history/250411 폭싹속았수다 체험형 전시회/4.jpg",
      "/images/history/250411 폭싹속았수다 체험형 전시회/5.jpg",
      "/images/history/250411 폭싹속았수다 체험형 전시회/6.jpg"
    ],
    color: "yellow"
  }
];

// 색상 매핑
const colorMap: { [key in ColorKey]: string } = {
  orange: "from-orange-400 to-red-500",
  blue: "from-blue-400 to-indigo-500",
  purple: "from-purple-400 to-pink-500",
  green: "from-green-400 to-teal-500",
  pink: "from-pink-400 to-purple-500",
  yellow: "from-yellow-400 to-orange-500"
};

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const parallaxRef = useRef(null);
  const eventsRef = useRef<HTMLDivElement>(null);

  // 로딩 효과
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 이벤트 섹션으로 스크롤하는 함수
  const scrollToEvents = () => {
    if (eventsRef.current) {
      const yOffset = -100; // 원하는 오프셋 (위로 100px)
      const y = eventsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // 이벤트 상세 보기 모달
  const EventModal = ({ event, onClose }: { event: Event, onClose: () => void }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      // 모달이 열리면 스크롤 방지
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, []);

    // 이미지 슬라이더 자동 전환
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % event.images.length);
      }, 3000);

      return () => clearInterval(interval);
    }, [event.images.length]);

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={event.images[currentImageIndex]}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
              {event.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
            <button 
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold">{event.title}</h2>
              <span className={`px-4 py-1 rounded-full text-white bg-gradient-to-r ${colorMap[event.color]}`}>
                {event.date}
              </span>
            </div>
            <p className="text-lg text-gray-700 mb-6">{event.description}</p>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // 로딩 화면
  if (isLoading) {
    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
          <div className="relative w-full max-w-md aspect-square">
            {/* 회전하는 원형 이벤트 아이콘들 */}
            {['🎭', '🎨', '🎬', '🎵', '🎉', '🎊'].map((emoji, index) => (
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
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">하다</span>
            </motion.div>
          </div>

          {/* 로딩 텍스처 */}
          <div 
            className="absolute inset-0 mix-blend-overlay opacity-20"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            }}
          />
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
            문화행사 불러오는 중
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
            청년들의 열정과 창의력이 담긴<br /> 문화행사를 준비중입니다.
          </motion.p>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 히어로 섹션 */}
      <section 
        ref={parallaxRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* 배경 비디오/이미지 레이어 */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src="/images/history/250309 연애해봄 문화공연/1.jpg"
                alt="문화행사"
                fill
                className="object-cover"
                style={{ 
                  transform: `scale(1.1) translateY(${scrollY * 0.2}px)`,
                  filter: 'brightness(0.7)'
                }}
                priority
              />
            </div>
          </div>
          
          {/* 움직이는 그라데이션 오버레이 */}
          <motion.div 
            className="absolute inset-0 opacity-70"
            style={{
              background: 'linear-gradient(135deg, #ff4088 0%, #fc7d7b 50%, #3454d1 100%)',
              backgroundSize: '400% 400%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />
          
          {/* 노이즈 텍스처 */}
          <div 
            className="absolute inset-0 mix-blend-overlay opacity-20"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            }}
          />
        </div>
        
        {/* 움직이는 도형 요소들 */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(60px)',
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            />
          ))}
        </div>
        
        {/* 콘텐츠 */}
        <div className="container mx-auto px-4 relative z-10 pt-64 sm:pt-56 md:pt-36">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-8xl font-extrabold leading-tight mb-4">
                  <span className="inline-block transform hover:scale-110 transition-transform duration-300">문</span>
                  <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-75">화</span>
                  <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-150">행</span>
                  <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-225">사</span>
                </h1>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-1 bg-white mb-6"
                />
                
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-xl md:text-3xl font-bold mb-6"
                >
                  청춘의 열정이 폭발하는 공간
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="text-base md:text-xl mb-8 max-w-lg"
                >
                  지루한 일상에서 벗어나 색다른 경험을 찾고 있나요?
                  하다 청년공간에서 펼쳐지는 다양한 문화행사에 참여하고
                  새로운 인연과 영감을 만나보세요.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="flex flex-wrap gap-4"
                >
                  <a 
                    href="#events-anchor" 
                    onClick={scrollToEvents}
                    className="px-6 py-3 md:px-8 md:py-4 bg-white text-pink-600 font-bold rounded-full hover:bg-pink-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-base"
                  >
                    행사 둘러보기
                  </a>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div 
              className="md:w-1/2 mt-6 md:mt-0 w-full px-4 md:px-0"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative w-full">
                {/* 메인 이미지 */}
                <motion.div
                  className="relative z-20 rounded-lg overflow-hidden shadow-2xl transform rotate-3 w-full"
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-[280px] md:h-[420px]">
                    <Image
                      src="/images/history/250309 연애해봄 문화공연/3.jpg"
                      alt="연애해봄 문화공연"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600/70 via-pink-600/40 to-pink-600/20" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="bg-white text-pink-600 px-4 py-1 rounded-full text-sm font-bold">
                        2025.03.09
                      </span>
                      <h3 className="text-white text-xl font-bold mt-2">연애해봄 문화공연</h3>
                    </div>
                  </div>
                </motion.div>
                
                {/* 배경 이미지들 - 모바일에서는 숨김 */}
                <motion.div
                  className="absolute top-20 -left-10 z-10 rounded-lg overflow-hidden shadow-xl transform -rotate-6 opacity-70 hidden md:block"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <Image
                    src="/images/history/241122 피터팬 뮤직콘서트/1.jpg"
                    alt="피터팬 뮤직콘서트"
                    width={300}
                    height={200}
                    className="object-cover"
                  />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-10 -right-5 z-10 rounded-lg overflow-hidden shadow-xl transform rotate-6 opacity-70 hidden md:block"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <Image
                    src="/images/history/241029 할로윈파티/2.jpg"
                    alt="할로윈 파티"
                    width={280}
                    height={180}
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* 스크롤 다운 인디케이터 */}
        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* 이벤트 섹션 */}
      <section id="events" className="py-20" ref={eventsRef}>
        <div id="events-anchor" className="absolute" style={{ top: '-150px' }}></div>
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
              🔥 핫한 문화행사 모음.zip 🔥
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              지루한 일상은 이제 그만! 하다 청년공간에서 펼쳐지는 <span className="font-bold text-pink-500">찐텐</span> 가득한 문화행사들을 만나보세요.
              <br />
              <span className="inline-block mt-2 text-indigo-500 font-medium">우리만의 특별한 추억, 여기서 함께 만들어요!</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group h-full flex flex-col"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={event.images[0]}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <span className={`inline-block px-4 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${colorMap[event.color]}`}>
                      {event.date}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition-colors">{event.title}</h3>
                  <p className="text-gray-600 line-clamp-2 text-sm flex-grow">{event.description}</p>
                  <div className="mt-3 flex justify-end">
                    <span className="text-pink-500 font-medium group-hover:underline text-sm">자세히 보기</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 참여 방법 섹션 */}
      <section className="py-20 bg-gradient-to-b from-white to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              👉 참여 방법 알려드림! 👈
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              간단하게 참여해요! <span className="font-bold text-blue-500">클릭 몇 번</span>으로 모든 행사 즐기기
              <br />
              <span className="inline-block mt-2 text-teal-500 font-medium">궁금한 점은 언제든 문의해주세요!</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">행사 선택하기</h3>
              <p className="text-gray-600">관심 있는 행사를 찾아보고 상세 정보를 확인해보세요!</p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-500 text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">신청하기</h3>
              <p className="text-gray-600">행사 페이지에서 '신청하기' 버튼을 클릭하고 간단한 정보를 입력하세요.</p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">참여하기</h3>
              <p className="text-gray-600">확인 메일을 받은 후, 행사 당일 하다 청년공간으로 오시면 됩니다!</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button 
              onClick={() => setShowInquiryModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              문의하기
            </button>
          </motion.div>
        </div>
      </section>

      {/* 문의하기 모달 */}
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
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 text-3xl mx-auto mb-6">
                  ⏰
                </div>
                <h3 className="text-2xl font-bold mb-4">앗! 아직 신청기간이 아니에요!</h3>
                <p className="text-gray-600 mb-6">
                  조금만 기다려주세요! 곧 신청 오픈 예정이에요. 🙌
                  <br /><br />
                  <span className="text-sm text-gray-500">
                    * 신청 오픈 소식은 인스타그램
                    <br />(@hada_center)에서 가장 먼저 확인하실 수 있어요!
                  </span>
                </p>
                <button 
                  className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-400 text-white font-bold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  onClick={() => setShowInquiryModal(false)}
                >
                  알겠어요!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 이벤트 모달 */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
