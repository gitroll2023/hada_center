"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusicPlayer } from "@/context/MusicPlayerContext";

const CMSongSection = () => {
  const [localIsPlaying, setLocalIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(208); // 3:28 = 208초로 초기화
  const [showLyrics, setShowLyrics] = useState(false);
  const { isPlaying, setPlayingState, showPlayer, audioElement } = useMusicPlayer();
  
  // 웨이브폼 애니메이션 상태
  const [waveHeights, setWaveHeights] = useState(Array.from({ length: 40 }, () => Math.random() * 30 + 10));
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  // 전역 재생 상태가 변경될 때 로컬 상태도 업데이트
  useEffect(() => {
    setLocalIsPlaying(isPlaying);
  }, [isPlaying]);

  // 오디오 시간 업데이트 처리
  useEffect(() => {
    if (!audioElement) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    audioElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [audioElement]);

  // 오디오 요소 이벤트 리스너 설정
  useEffect(() => {
    if (!audioElement) return;
    
    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };
    
    const handleLoadedMetadata = () => {
      if (audioElement.duration && !isNaN(audioElement.duration)) {
        setDuration(audioElement.duration);
      }
    };
    
    audioElement.addEventListener('timeupdate', handleTimeUpdate);
    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    // 컴포넌트 마운트 시 메타데이터 로드 시도
    if (audioElement.readyState >= 2) {
      handleLoadedMetadata();
    }
    
    return () => {
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [audioElement]);

  // 시간 형식 변환 함수 (초 -> MM:SS)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // 재생 상태에 따라 웨이브폼 업데이트
  useEffect(() => {
    // 이전 타이머 정리
    if (animationRef.current) {
      clearInterval(animationRef.current);
      animationRef.current = null;
    }
    
    if (localIsPlaying) {
      // 재생 중일 때는 웨이브폼 애니메이션 시작
      animationRef.current = setInterval(() => {
        setWaveHeights(Array.from({ length: 40 }, () => Math.random() * 100 + 20));
      }, 100);
    } else {
      // 일시정지 상태일 때는 낮은 높이의 정적 웨이브폼
      setWaveHeights(Array.from({ length: 40 }, () => Math.random() * 30 + 10));
    }
    
    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [localIsPlaying]);

  const togglePlayPause = () => {
    console.log("재생 버튼 클릭", { 
      audioElement: !!audioElement,
      paused: audioElement?.paused, 
      readyState: audioElement?.readyState 
    });
    
    // 전역 상태 먼저 변경
    const newPlayingState = !localIsPlaying;
    setLocalIsPlaying(newPlayingState);
    setPlayingState(newPlayingState);
    
    if (newPlayingState) {
      // 재생 상태로 변경
      showPlayer(); // 플레이어 표시
      
      if (audioElement) {
        // 오디오 요소가 로드되었는지 확인
        if (audioElement.readyState < 2) {
          // 오디오가 아직 로드되지 않은 경우
          console.log("오디오 로드 중...");
          audioElement.load();
          
          // 로드 완료 이벤트 리스너 추가
          const handleCanPlay = () => {
            console.log("오디오 로드 완료, 재생 시도");
            audioElement.play().catch((error: Error) => {
              console.error("CM송 섹션 재생 실패:", error);
              setLocalIsPlaying(false);
              setPlayingState(false);
            });
            audioElement.removeEventListener('canplay', handleCanPlay);
          };
          
          audioElement.addEventListener('canplay', handleCanPlay);
        } else {
          // 이미 로드된 경우 바로 재생
          console.log("오디오 이미 로드됨, 바로 재생 시도");
          audioElement.play().catch((error: Error) => {
            console.error("CM송 섹션 재생 실패:", error);
            setLocalIsPlaying(false);
            setPlayingState(false);
          });
        }
      }
    } else {
      // 일시정지 상태로 변경
      if (audioElement) {
        audioElement.pause();
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-purple-100">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        {/* 음표 장식 */}
        <div className="absolute top-1/4 left-1/4 text-indigo-200 text-7xl opacity-20">♪</div>
        <div className="absolute bottom-1/4 right-1/4 text-purple-200 text-7xl opacity-20">♫</div>
        <div className="absolute top-1/2 left-3/4 text-blue-200 text-7xl opacity-20">♩</div>
        
        {/* 움직이는 음악 아이콘들 */}
        <div className="music-icon music-icon-1">♪</div>
        <div className="music-icon music-icon-2">♫</div>
        <div className="music-icon music-icon-3">♬</div>
        <div className="music-icon music-icon-4">♩</div>
        <div className="music-icon music-icon-5">♪</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">하다! 하자!</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            청년공간 하다의 신나는 CM송과 함께 에너지 넘치는 청년의 하루를 시작해보세요!
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/50 overflow-hidden relative">
            {/* 배경 장식 요소 */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl"></div>
            
            {/* 음악 플레이어 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* 앨범 아트 및 재생 버튼 */}
              <div className="relative w-56 h-56 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full animate-pulse-slow opacity-20"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full"></div>
                <div className="absolute inset-3 bg-white rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center cursor-pointer transform hover:scale-105 transition-transform">
                      <button 
                        onClick={togglePlayPause}
                        className="w-full h-full flex items-center justify-center text-white"
                        aria-label={localIsPlaying ? "일시정지" : "노래 재생"}
                      >
                        {localIsPlaying ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 9v6m4-6v6" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {/* 회전하는 원형 진행 바 */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke="url(#songGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 48}`}
                      strokeDashoffset={`${2 * Math.PI * 48 * (1 - currentTime / duration)}`}
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="songGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* 로고 */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">하다</span>
                  </div>
                </div>
              </div>
              
              {/* 노래 정보 및 웨이브폼 */}
              <div className="flex-grow">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">하다! 하자!</h3>
                  <p className="text-gray-600">청년공간 하다 CM송</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </p>
                </div>
                
                {/* 웨이브폼 */}
                <div className="h-24 flex items-center gap-[2px] pr-0">
                  {waveHeights.map((height, index) => (
                    <motion.div
                      key={index}
                      className="w-1 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-full"
                      style={{ 
                        height: `${height}%`,
                        opacity: currentTime / duration > index / waveHeights.length ? 1 : 0.3
                      }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </div>
                
                {/* 가사 보기 버튼 */}
                <div className="mt-6">
                  <button 
                    onClick={() => setShowLyrics(!showLyrics)}
                    className="px-6 py-2.5 bg-white/80 backdrop-blur-sm text-indigo-600 font-medium rounded-full hover:bg-white hover:shadow-md transform hover:scale-105 transition-all duration-300 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    {showLyrics ? '가사 닫기' : '가사 보기'}
                  </button>
                </div>
              </div>
            </div>
            
            {/* CM송 설명 */}
            <div className="mt-8 max-w-3xl mx-auto">
              <div className="p-5 bg-white/70 backdrop-blur-sm rounded-xl text-gray-600 text-center">
                <p className="text-indigo-600 font-medium mb-4 text-sm sm:text-base flex items-center justify-center flex-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span>음악재생은 우측하단에 플레이 버튼!</span>
                </p>
                <p className="whitespace-pre-line leading-relaxed">
                  <span className="font-semibold text-indigo-600">&ldquo;하다! 하자!&rdquo;</span>는 청년공간 하다의 신나는 CM송입니다.
                  
                  &ldquo;하고 싶은 게 너무 많을 땐 혼자 말고 같이 와봐&rdquo;라는 가사처럼 함께 성장하는 청년공간의 의미를 담았습니다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* 가사 모달 */}
      <AnimatePresence>
        {showLyrics && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLyrics(false)}
          >
            <motion.div 
              className="bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 rounded-2xl max-w-lg w-full mx-auto p-6 shadow-2xl border border-indigo-400/30 relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 배경 장식 요소 */}
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
              
              <button 
                className="absolute top-3 right-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-all"
                onClick={() => setShowLyrics(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl mr-3 shadow-md">
                  🎵
                </div>
                <h3 className="text-2xl font-bold text-white">하다! 하자! - 가사</h3>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-inner border border-white/20 relative overflow-hidden">
                {/* 배경 음표 장식 */}
                <div className="absolute top-5 right-5 text-white/5 text-4xl">♪</div>
                <div className="absolute bottom-5 left-5 text-white/5 text-4xl">♫</div>
                
                <div className="text-white/90 whitespace-pre-wrap font-medium leading-relaxed text-center overflow-y-auto max-h-[50vh] px-2 py-1 relative z-10 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                  <p>(intro)</p>
                  <p>짝! 짝!</p>
                  <p>하다! 하자!</p>
                  <p>청년공간 하다!</p>
                  <br />
                  <p>(Verse 1)</p>
                  <p>하고 싶은 게 너무 많을 땐</p>
                  <p>혼자 말고 같이 와봐</p>
                  <p>광주 도심 한복판</p>
                  <p>열려 있는 그 공간!</p>
                  <br />
                  <p>(Pre-Chorus)</p>
                  <p>스터디도! (짝!)</p>
                  <p>네트워킹도! (짝!)</p>
                  <p>쉼도, 꿈도</p>
                  <p>이뤄지는 곳!</p>
                  <br />
                  <p>(Chorus)</p>
                  <p>하다! 하자!</p>
                  <p>청년공간 하다!</p>
                  <p>하다! 하자!</p>
                  <p>청년공간 하다!</p>
                  <br />
                  <p>(Verse 2)</p>
                  <p>청년들의 꿈과 열정이</p>
                  <p>모여드는 그 공간</p>
                  <p>서로 배우고 나누며</p>
                  <p>함께 성장하는 곳!</p>
                  <br />
                  <p>(Pre-Chorus)</p>
                  <p>스터디도! (짝!)</p>
                  <p>네트워킹도! (짝!)</p>
                  <p>쉼도, 꿈도</p>
                  <p>이뤄지는 곳!</p>
                  <br />
                  <p>(Chorus)</p>
                  <p>하다! 하자!</p>
                  <p>청년공간 하다!</p>
                  <p>하다! 하자!</p>
                  <p>청년공간 하다!</p>
                  <br />
                  <p>(Outro)</p>
                  <p>하다! 하자!</p>
                  <p>청년공간 하다!</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style jsx global>{`
        /* 리듬 아이콘 애니메이션 */
        .music-icon {
          position: absolute;
          font-size: 24px;
          opacity: 0;
          animation-duration: 10s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          color: rgba(99, 102, 241, 0.2);
          z-index: 1;
        }
        
        .music-icon-1 {
          top: 10%;
          left: 10%;
          animation-name: float-1;
          animation-delay: 0s;
        }
        
        .music-icon-2 {
          top: 20%;
          right: 20%;
          animation-name: float-2;
          animation-delay: 2s;
        }
        
        .music-icon-3 {
          bottom: 30%;
          left: 30%;
          animation-name: float-3;
          animation-delay: 4s;
        }
        
        .music-icon-4 {
          bottom: 15%;
          right: 15%;
          animation-name: float-4;
          animation-delay: 6s;
        }
        
        .music-icon-5 {
          top: 40%;
          left: 50%;
          animation-name: float-5;
          animation-delay: 8s;
        }
        
        @keyframes float-1 {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.7; }
          50% { transform: translate(20px, 20px); }
          90% { opacity: 0.7; }
          100% { transform: translate(0, 0); opacity: 0; }
        }
        
        @keyframes float-2 {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.7; }
          50% { transform: translate(-20px, 20px); }
          90% { opacity: 0.7; }
          100% { transform: translate(0, 0); opacity: 0; }
        }
        
        @keyframes float-3 {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.7; }
          50% { transform: translate(20px, -20px); }
          90% { opacity: 0.7; }
          100% { transform: translate(0, 0); opacity: 0; }
        }
        
        @keyframes float-4 {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.7; }
          50% { transform: translate(-20px, -20px); }
          90% { opacity: 0.7; }
          100% { transform: translate(0, 0); opacity: 0; }
        }
        
        @keyframes float-5 {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.7; }
          50% { transform: translate(0, 20px); }
          90% { opacity: 0.7; }
          100% { transform: translate(0, 0); opacity: 0; }
        }
        
        /* 느린 펄스 애니메이션 */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CMSongSection;
