"use client";

import { useMusicPlayer } from "@/context/MusicPlayerContext";
import FloatingMusicPlayer from "./FloatingMusicPlayer";

const FloatingMusicPlayerWrapper = () => {
  const { isPlayerVisible, isPlaying } = useMusicPlayer();

  // 디버깅용 콘솔 로그
  console.log("FloatingMusicPlayerWrapper rendered:", { isPlayerVisible, isPlaying });

  return (
    <FloatingMusicPlayer 
      isVisible={isPlayerVisible}
    />
  );
};

export default FloatingMusicPlayerWrapper;
