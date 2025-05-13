"use client";

import Image from "next/image";
import Link from "next/link";
import ImageProtection from "../components/ImageProtection";
import { useEffect, useState, useRef } from "react";
import { useMusicPlayer } from "@/context/MusicPlayerContext";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [localIsPlaying, setLocalIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(208); // 3:28 = 208초로 초기화
  const videoRef = useRef<HTMLVideoElement>(null);
  const { showPlayer, setPlayingState, isPlaying, audioElement } = useMusicPlayer();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    // 페이지 로드 애니메이션
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  // 전역 재생 상태가 변경될 때 로컬 상태 동기화
  useEffect(() => {
    console.log("전역 재생 상태 변경:", isPlaying);
    setLocalIsPlaying(isPlaying);
  }, [isPlaying]);

  // 오디오 요소 이벤트 리스너 설정
  useEffect(() => {
    if (!audioElement) return;
    
    console.log("오디오 요소 이벤트 리스너 설정");
    
    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };
    
    const handleLoadedMetadata = () => {
      console.log("메인 페이지: 오디오 메타데이터 로드됨", audioElement.duration);
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

  return (
    <div className="min-h-screen">
      <ImageProtection />
      
      {/* 청년 스냅샷 인트로 섹션 */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 via-indigo-900 to-indigo-800">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-50">
          <div className="relative w-full h-full">
            <Image
              src="/images/history/250204 Firstpage 북코칭/blur2.png"
              alt="하다 청년공간"
              fill
              className="object-cover"
              priority
              unoptimized={false}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-indigo-800/90"></div>
        </div>
        
        {/* 콘텐츠 */}
        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          {/* 타이틀과 태그 */}
          <div className="text-center text-white">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="inline-block px-4 py-1 bg-blue-500/80 rounded-full text-sm font-medium animate-pulse">청년</span>
              <span className="inline-block px-4 py-1 bg-purple-500/80 rounded-full text-sm font-medium animate-pulse delay-100">문화</span>
              <span className="inline-block px-4 py-1 bg-pink-500/80 rounded-full text-sm font-medium animate-pulse delay-200">소통</span>
              <span className="inline-block px-4 py-1 bg-green-500/80 rounded-full text-sm font-medium animate-pulse delay-300">성장</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="block transform transition-transform duration-700 hover:scale-105">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">하다</span>
                <span className="ml-4">청년공간</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
              모이면 통하는 청년들과 함께 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 font-medium">하다</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link 
                href="/about" 
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full transition-all border border-white/30"
              >
                <span className="relative z-10">공간 소개</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-600/40 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link 
                href="/rental" 
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full transition-all border border-white/30"
              >
                <span className="relative z-10">공간 대여하기</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-pink-600/40 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CM송 섹션 - "하다! 하자!" - 히어로 섹션 바로 아래로 이동 */}
      <section className="py-16 bg-gradient-to-b from-indigo-800 via-indigo-700 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">하다! 하자!</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              청년공간 하다의 신나는 CM송과 함께 에너지 넘치는 청년의 하루를 시작해보세요!
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-purple-600/30 rounded-2xl p-4 sm:p-6 shadow-lg backdrop-blur-sm border border-blue-400/30 overflow-hidden relative animate-fade-in-up">
              {/* 배경 장식 요소 */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl"></div>
              
              {/* 리듬 아이콘 애니메이션 */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="music-icon music-icon-1">🎵</div>
                <div className="music-icon music-icon-2">🎶</div>
                <div className="music-icon music-icon-3">🎵</div>
                <div className="music-icon music-icon-4">🎧</div>
                <div className="music-icon music-icon-5">🎤</div>
              </div>
              
              {/* 오디오 플레이어 */}
              <div className="relative z-10">
                <div className="flex flex-col items-center justify-between bg-indigo-800/60 backdrop-blur-md rounded-xl p-4 sm:p-5 shadow-md border border-indigo-400/30">
                  <div className="flex items-center w-full mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl mr-3 sm:mr-4 shadow-md animate-pulse">
                      🎵
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">하다! 하자!</h3>
                      <p className="text-sm sm:text-base text-white/90">청년공간 하다 CM송</p>
                      <p className="text-xs sm:text-sm text-white/80 mt-1">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full">
                    <button 
                      className="flex-1 bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-all transform hover:scale-105 flex items-center justify-center shadow-md"
                      onClick={() => {
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
                                  console.error("메인 페이지 재생 실패:", error);
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
                                console.error("메인 페이지 재생 실패:", error);
                                setLocalIsPlaying(false);
                                setPlayingState(false);
                              });
                            }
                          }
                        } else {
                          // 일시정지 상태로 변경
                          console.log("오디오 일시정지");
                          if (audioElement) {
                            audioElement.pause();
                          }
                        }
                      }}
                    >
                      {localIsPlaying ? (
                        <>
                          <span className="mr-1 sm:mr-2 inline-flex items-center justify-center" style={{ width: '16px', height: '16px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                              <rect x="6" y="4" width="4" height="16" />
                              <rect x="14" y="4" width="4" height="16" />
                            </svg>
                          </span> 
                          일시정지
                        </>
                      ) : (
                        <>
                          <span className="mr-1 sm:mr-2 inline-flex items-center justify-center" style={{ width: '16px', height: '16px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                          노래 재생
                        </>
                      )}
                    </button>
                    
                    {/* 가사 보기 버튼 - 모달로 변경 */}
                    <button 
                      className="flex-1 bg-indigo-500/50 hover:bg-indigo-500/70 text-white font-bold py-2 px-3 sm:px-5 rounded-full transition-all transform hover:scale-105 border border-indigo-300/30 shadow-md"
                      onClick={() => {
                        const modal = document.getElementById('lyricsModal');
                        if (modal) {
                          modal.classList.remove('hidden');
                          // 모달이 표시될 때 flex 스타일 추가
                          modal.classList.add('flex');
                        }
                      }}
                    >
                      가사 보기
                    </button>
                    
                    <audio 
                      id="cmSongAudio"
                      controls 
                      className="hidden"
                      src="/music/cm.mp3"
                      onLoadedMetadata={(e) => {
                        console.log("오디오 메타데이터 로드됨", e.currentTarget.duration);
                        // 오디오 요소가 로드되면 duration 업데이트
                        if (e.currentTarget.duration && !isNaN(e.currentTarget.duration)) {
                          setDuration(e.currentTarget.duration);
                        }
                      }}
                      onPlay={() => {
                        console.log("오디오 재생 시작 (onPlay)");
                        setLocalIsPlaying(true);
                        setPlayingState(true);
                      }}
                      onPause={() => {
                        console.log("오디오 일시정지 (onPause)");
                        setLocalIsPlaying(false);
                        setPlayingState(false);
                      }}
                      onEnded={() => {
                        console.log("오디오 재생 종료 (onEnded)");
                        setLocalIsPlaying(false);
                        setPlayingState(false);
                      }}
                      preload="auto"
                    >
                      브라우저가 오디오 재생을 지원하지 않습니다.
                    </audio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 가사 모달 */}
      <div 
        id="lyricsModal" 
        className="fixed inset-0 bg-black/70 z-50 hidden items-center justify-center p-4"
        onClick={(e) => {
          // 모달 바깥쪽 클릭 시 닫기
          if (e.target === e.currentTarget) {
            const modal = document.getElementById('lyricsModal');
            if (modal) {
              modal.classList.add('hidden');
              modal.classList.remove('flex');
            }
          }
        }}
      >
        <div className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 rounded-2xl max-w-lg w-full mx-auto p-6 shadow-2xl border border-blue-400/30 relative animate-fade-in-up">
          {/* 배경 장식 요소 */}
          <div className="absolute -top-5 -right-5 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
          
          <button 
            className="absolute top-3 right-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-all"
            onClick={() => {
              const modal = document.getElementById('lyricsModal');
              if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
              }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl mr-3 shadow-md">
              🎵
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">하다! 하자! - 가사</h3>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-inner border border-white/20 relative overflow-hidden">
            {/* 배경 음표 장식 */}
            <div className="absolute top-5 right-5 text-white/5 text-4xl">♪</div>
            <div className="absolute bottom-5 left-5 text-white/5 text-4xl">♫</div>
            
            <pre className="text-blue-100 whitespace-pre font-medium leading-relaxed text-center overflow-y-auto max-h-[50vh] px-2 py-1 relative z-10 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
{`(intro)
짝! 짝!
하다! 하자!
청년공간 하다!

(Verse 1)
하고 싶은 게 너무 많을 땐
혼자 말고 같이 와봐
광주 도심 한복판
열려 있는 그 공간!

(Pre-Chorus)
스터디도! (짝!)
네트워킹도! (짝!)
쉼도, 꿈도
이뤄지는 곳!

(Chorus)
하다! 하자!
청년공간 하다!
하다! 하자!
청년공간 하다!

(Verse 2)
청년들의 꿈과 열정이
모여드는 그 공간
서로 배우고 나누며
함께 성장하는 곳!

(Pre-Chorus)
스터디도! (짝!)
네트워킹도! (짝!)
쉼도, 꿈도
이뤄지는 곳!

(Chorus)
하다! 하자!
청년공간 하다!
하다! 하자!
청년공간 하다!

(Outro)
하다! 하자!
청년공간 하다!`}
            </pre>
          </div>
        </div>
      </div>

      {/* 소개 섹션 - 카드 형태 */}
      <section className="py-20 bg-gradient-to-b from-indigo-600 via-indigo-500 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">광주 청년 문화공간</h2>
            <p className="text-lg text-white md:text-gray-200 max-w-3xl mx-auto leading-relaxed">
              청년공간 하다는 광주 청년들의 소통과 성장을 위한 열린 공간입니다.
              다양한 프로그램과 편안한 공간에서 여러분의 꿈과 아이디어를 펼쳐보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl mb-6">🏠</div>
              <h3 className="text-xl font-bold mb-4 text-blue-600">하다 청년공간</h3>
              <p className="text-gray-600">
                광주 청년들을 위한 다양한 프로그램과 커뮤니티 활동이 진행됩니다.
              </p>
              <div className="mt-6">
                <Link href="/about" className="text-blue-500 font-medium hover:text-blue-700 transition-colors">
                  자세히 보기 →
                </Link>
              </div>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-2xl mb-6">🎨</div>
              <h3 className="text-xl font-bold mb-4 text-green-600">문화 행사</h3>
              <p className="text-gray-600">
                다양한 문화 행사와 이벤트를 통해 청년들의 문화 활동을 지원합니다.
              </p>
              <div className="mt-6">
                <Link href="/events" className="text-green-500 font-medium hover:text-green-700 transition-colors">
                  자세히 보기 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 공간 사진 갤러리 섹션 - 청년문화패스 스타일 */}
      <section className="py-20 bg-gradient-to-b from-blue-50 via-blue-100/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">청년공간 하다</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              청년공간 하다는 광주 청년들의 소통과 성장을 위한 열린 공간입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-lg group">
              <div className="relative h-72">
                <Image
                  src="/images/space/2F.png"
                  alt="하다 청년공간"
                  fill
                  className="object-cover transition-transform group-hover:scale-110 duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  unoptimized={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">하다 청년공간 2층</h3>
                  <p className="text-sm">다양한 행사와 모임이 이루어지는 공간입니다.</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg group">
              <div className="relative h-72">
                <Image
                  src="/images/space/2F.png"
                  alt="하다 청년공간"
                  fill
                  className="object-cover transition-transform group-hover:scale-110 duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectPosition: 'center' }}
                  unoptimized={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">하다 청년공간 3층</h3>
                  <p className="text-sm">다양한 행사와 모임이 이루어지는 공간입니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 행사 섹션 - 청년문화패스 스타일 */}
      <section className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">하다 행사</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              청년공간 하다에서 진행된 다양한 행사와 프로그램을 소개합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 할로윈 파티 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative h-56">
                <Image
                  src="/images/history/241029 할로윈파티/2.jpg"
                  alt="할로윈 파티"
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectPosition: 'center' }}
                  unoptimized={false}
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">2024.10.29</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-700">할로윈 파티</h3>
                <p className="text-gray-600 mb-4">청년들과 함께한 할로윈 파티</p>
                <Link href="#" className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  자세히 보기 →
                </Link>
              </div>
            </div>

            {/* 피터팬 뮤직콘서트 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative h-56">
                <Image
                  src="/images/history/241122 피터팬 뮤직콘서트/1.jpg"
                  alt="피터팬 뮤직콘서트"
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectPosition: 'center' }}
                  unoptimized={false}
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">2024.11.22</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-purple-700">피터팬 뮤직콘서트</h3>
                <p className="text-gray-600 mb-4">청년 음악가들의 공연</p>
                <Link href="#" className="inline-block text-purple-600 font-medium hover:text-purple-800 transition-colors">
                  자세히 보기 →
                </Link>
              </div>
            </div>

            {/* Lastpage 칵테일파티 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative h-56">
                <Image
                  src="/images/history/241129 Lastpage 칵테일파티/4.jpg"
                  alt="Lastpage 칵테일파티"
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectPosition: 'center' }}
                  unoptimized={false}
                />
                <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">2024.11.29</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-pink-700">Lastpage 칵테일파티</h3>
                <p className="text-gray-600 mb-4">연말 네트워킹 파티</p>
                <Link href="#" className="inline-block text-pink-600 font-medium hover:text-pink-800 transition-colors">
                  자세히 보기 →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/programs" 
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
            >
              더 많은 행사 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 공지사항 및 소식 섹션 */}
      <section className="py-20 bg-gradient-to-b from-purple-50 via-purple-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">공지사항 및 소식</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              청년공간 하다의 최신 소식과 공지사항을 확인하세요
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-blue-700">5월 청년 네트워킹 행사 안내</h3>
                <span className="text-sm text-gray-500">2025.05.10</span>
              </div>
              <p className="mt-3 text-gray-600">5월 청년 네트워킹 행사가 5월 25일에 개최됩니다. 많은 참여 바랍니다.</p>
            </div>
            
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-blue-700">청년공간 하다 운영시간 변경 안내</h3>
                <span className="text-sm text-gray-500">2025.05.05</span>
              </div>
              <p className="mt-3 text-gray-600">5월부터 청년공간 하다의 운영시간이 변경됩니다. 자세한 내용을 확인해주세요.</p>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-blue-700">청년 동아리 모집 안내</h3>
                <span className="text-sm text-gray-500">2025.04.28</span>
              </div>
              <p className="text-gray-600 mb-4">2025년 청년 동아리를 모집합니다. 관심 있는 청년들의 많은 지원 바랍니다.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="#" 
              className="inline-block bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold py-3 px-8 rounded-full border-2 border-purple-300 transition-all transform hover:scale-105"
            >
              더 많은 소식 보기
            </Link>
          </div>
        </div>
      </section>
      <style jsx global>{`
        /* 리듬 아이콘 애니메이션 */
        .music-icon {
          position: absolute;
          font-size: 24px;
          opacity: 0;
          animation-duration: 10s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          color: rgba(255, 255, 255, 0.2);
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
        
        /* 페이드인 애니메이션 */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
