"use client";

import { useEffect, useState } from "react";
import ImageProtection from "../components/ImageProtection";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import FloatingMusicPlayer from "@/components/FloatingMusicPlayer";

// 새로운 홈페이지 컴포넌트들 가져오기
import HeroSection from "@/components/home/HeroSection";
import CMSongSection from "@/components/home/CMSongSection";
import SpaceSection from "@/components/home/SpaceSection";
import EventsSection from "@/components/home/EventsSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isPlayerVisible } = useMusicPlayer();

  useEffect(() => {
    // 페이지 로드 애니메이션
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    <div className="min-h-screen">
      <ImageProtection />
      
      {/* 로딩 화면 */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center z-50">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-pulse">
              <span className="text-3xl font-bold text-white">하다</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">청년공간 하다</h2>
            <p className="text-white/80">청년들의 열린 공간</p>
          </div>
        </div>
      )}
      
      {/* 메인 콘텐츠 */}
      <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* 히어로 섹션 */}
        <HeroSection />
        
        {/* CM송 섹션 */}
        <CMSongSection />
        
        {/* 공간 소개 섹션 */}
        <SpaceSection />
        
        {/* 행사 및 프로그램 섹션 */}
        <EventsSection />
        
        {/* 공지사항 및 연락처 섹션 */}
        <ContactSection />
        
        
      </div>
      
      {/* 플로팅 뮤직 플레이어 */}
      <FloatingMusicPlayer isVisible={isPlayerVisible} />
    </div>  
  );
}
