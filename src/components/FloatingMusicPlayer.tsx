"use client";

import { useEffect, useState } from "react";
import { useMusicPlayer } from "@/context/MusicPlayerContext";

interface FloatingMusicPlayerProps {
}

const FloatingMusicPlayer = ({}: FloatingMusicPlayerProps) => {
  const { songTitle, songDuration, isPlaying, togglePlay, audioElement } = useMusicPlayer();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(songDuration);

  // 노래 URL이나 duration이 변경될 때마다 상태 업데이트
  useEffect(() => {
    setDuration(songDuration);
  }, [songDuration]);

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

  // 원형 프로그레스 계산
  const calculateProgress = () => {
    if (duration === 0) return 0;
    return (currentTime / duration) * 100;
  };

  // 원형 프로그레스 바 SVG 경로 계산
  const calculateCirclePath = () => {
    const radius = 16; // 원의 반지름 (더 작게 조정)
    const circumference = 2 * Math.PI * radius;
    const progress = calculateProgress();
    const dashoffset = circumference * (1 - progress / 100);
    
    return {
      circumference,
      dashoffset
    };
  };

  const { circumference, dashoffset } = calculateCirclePath();

  const handleTogglePlay = () => {
    togglePlay();
  };

  // 항상 플레이어를 표시 (isVisible 조건 제거)
  return (
    <div className="fixed bottom-4 right-4 z-50 animate-float-in">
      <div className="relative group">
        <div className="absolute -inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-none opacity-0 group-hover:opacity-30 transition duration-300"></div>
        <div className="relative bg-white rounded-full shadow-md p-2 sm:p-2 flex items-center justify-center">
          {/* 원형 프로그레스 바 */}
          <div className="absolute">
            <svg width="42" height="42" viewBox="0 0 42 42" className="sm:w-[42px] sm:h-[42px] w-[48px] h-[48px]">
              {/* 배경 원 */}
              <circle 
                cx="21" 
                cy="21" 
                r="16" 
                fill="none" 
                stroke="#e2e8f0" 
                strokeWidth="2"
              />
              {/* 프로그레스 원 */}
              <circle 
                cx="21" 
                cy="21" 
                r="16" 
                fill="none" 
                stroke="url(#gradient)" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashoffset}
                transform="rotate(-90 21 21)"
              />
              {/* 그라데이션 정의 */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* 재생 버튼 */}
          <button
            onClick={handleTogglePlay}
            className="w-9 h-9 sm:w-9 sm:h-9 md:w-9 md:h-9 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 z-10"
            title={songTitle}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm:w-4 sm:h-4 w-5 h-5">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm:w-4 sm:h-4 w-5 h-5">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingMusicPlayer;
