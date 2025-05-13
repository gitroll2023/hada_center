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
