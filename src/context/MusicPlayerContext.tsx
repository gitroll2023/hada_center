"use client";

import { createContext, useContext, useState, ReactNode, useEffect, useRef } from "react";

interface MusicPlayerContextType {
  isPlayerVisible: boolean;
  songUrl: string;
  songTitle: string;
  songDuration: number;
  isPlaying: boolean;
  audioElement: HTMLAudioElement | null;
  showPlayer: () => void;
  hidePlayer: () => void;
  changeSong: (url: string, title: string, duration: number) => void;
  togglePlay: () => void;
  setPlayingState: (state: boolean) => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType>({
  isPlayerVisible: true,
  songUrl: "/music/cm.mp3",
  songTitle: "하다! 하자!",
  songDuration: 208, // 3:28 = 208초
  isPlaying: false,
  audioElement: null,
  showPlayer: () => {},
  hidePlayer: () => {},
  changeSong: () => {},
  togglePlay: () => {},
  setPlayingState: () => {},
});

export const useMusicPlayer = () => useContext(MusicPlayerContext);

export const MusicPlayerProvider = ({ children }: { children: ReactNode }) => {
  const [isPlayerVisible, setIsPlayerVisible] = useState(true); // 항상 true로 설정
  const [songUrl, setSongUrl] = useState("/music/cm.mp3");
  const [songTitle, setSongTitle] = useState("하다! 하자!");
  const [songDuration, setSongDuration] = useState(208); // 3:28 = 208초
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 컴포넌트 마운트 시 오디오 요소 생성
  useEffect(() => {
    if (typeof window !== 'undefined' && !audioRef.current) {
      audioRef.current = new Audio(songUrl);
      audioRef.current.preload = "metadata";
      
      // 오디오 이벤트 리스너 설정
      const handleEnded = () => {
        setIsPlaying(false);
      };
      
      audioRef.current.addEventListener('ended', handleEnded);
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', handleEnded);
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    }
  }, []);

  // 재생 상태가 변경될 때마다 오디오 요소 업데이트
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      // 현재 위치에서 재생 시작
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("재생 실패:", error);
          setIsPlaying(false);
        });
      }
    } else {
      // 일시정지만 하고 위치는 유지
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // 노래 URL이 변경될 때만 오디오 요소 업데이트
  useEffect(() => {
    if (!audioRef.current) return;
    
    // 현재 재생 중이었다면 새 노래도 자동 재생
    const wasPlaying = isPlaying;
    const currentPosition = audioRef.current.currentTime;
    
    // 노래가 변경된 경우에만 src 변경 및 로드
    if (audioRef.current.src !== new URL(songUrl, window.location.href).href) {
      // 오디오 요소 초기화 및 메타데이터 로드
      audioRef.current.src = songUrl;
      audioRef.current.load();
      audioRef.current.currentTime = 0; // 새 노래는 처음부터 재생
      
      // 이전에 재생 중이었다면 새 노래도 자동 재생
      if (wasPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("자동 재생 실패:", error);
            setIsPlaying(false);
          });
        }
      }
    } else if (wasPlaying && audioRef.current.paused) {
      // 같은 노래인데 재생 상태가 변경된 경우, 현재 위치에서 재생
      audioRef.current.currentTime = currentPosition;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("재생 실패:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [songUrl, isPlaying]);

  // 재생 상태 변경에 따른 플레이어 표시 여부 변경 제거 (항상 표시)
  // useEffect(() => {
  //   if (isPlaying) {
  //     setIsPlayerVisible(true);
  //   } else {
  //     setIsPlayerVisible(false);
  //   }
  // }, [isPlaying]);

  // 디버깅용 로그
  useEffect(() => {
    console.log("MusicPlayerContext state:", { isPlayerVisible, isPlaying, songUrl });
  }, [isPlayerVisible, isPlaying, songUrl]);

  const showPlayer = () => {
    setIsPlayerVisible(true);
  };

  const hidePlayer = () => {
    // 플레이어를 숨기지 않도록 수정 (항상 표시)
    // setIsPlayerVisible(false);
  };

  const changeSong = (url: string, title: string, duration: number) => {
    setSongUrl(url);
    setSongTitle(title);
    setSongDuration(duration);
  };

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  const setPlayingState = (state: boolean) => {
    setIsPlaying(state);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        isPlayerVisible,
        songUrl,
        songTitle,
        songDuration,
        isPlaying,
        audioElement: audioRef.current,
        showPlayer,
        hidePlayer,
        changeSong,
        togglePlay,
        setPlayingState,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
