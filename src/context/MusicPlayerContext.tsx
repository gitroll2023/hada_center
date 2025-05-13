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
      console.log("오디오 요소 생성");
      audioRef.current = new Audio(songUrl);
      audioRef.current.preload = "auto"; // metadata에서 auto로 변경
      
      // 오디오 이벤트 리스너 설정
      const handleEnded = () => {
        setIsPlaying(false);
      };
      
      const handleCanPlayThrough = () => {
        console.log("오디오 로드 완료 (canplaythrough)");
      };
      
      const handleError = (e: Event) => {
        console.error("오디오 로드 오류:", e);
      };
      
      audioRef.current.addEventListener('ended', handleEnded);
      audioRef.current.addEventListener('canplaythrough', handleCanPlayThrough);
      audioRef.current.addEventListener('error', handleError);
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', handleEnded);
          audioRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
          audioRef.current.removeEventListener('error', handleError);
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    }
  }, [songUrl]);

  // 재생 상태가 변경될 때마다 오디오 요소 업데이트
  useEffect(() => {
    if (!audioRef.current) return;
    
    console.log("재생 상태 변경:", isPlaying, "현재 상태:", audioRef.current.paused);
    
    if (isPlaying) {
      // 현재 위치에서 재생 시작
      console.log("재생 시도 (Context)");
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("재생 실패 (Context):", error);
          setIsPlaying(false);
        });
      }
    } else {
      // 일시정지만 하고 위치는 유지
      console.log("일시정지 (Context)");
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
    console.log("togglePlay 호출됨", { isPlaying, audioRef: !!audioRef.current });
    
    // 새로운 재생 상태 계산
    const newPlayingState = !isPlaying;
    
    // 오디오 요소가 있으면 직접 재생/일시정지
    if (audioRef.current) {
      if (newPlayingState) {
        // 재생
        console.log("togglePlay: 재생 시도");
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("togglePlay: 재생 실패", error);
            setIsPlaying(false);
          });
        }
      } else {
        // 일시정지
        console.log("togglePlay: 일시정지");
        audioRef.current.pause();
      }
    }
    
    // 상태 업데이트
    setIsPlaying(newPlayingState);
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
