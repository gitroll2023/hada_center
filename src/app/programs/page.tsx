'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageProtection from '../../components/ImageProtection';

export default function ProgramsPage() {
  // 각 이벤트의 현재 이미지 인덱스를 관리하는 상태
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<number, number>>({});

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

  // 행사 정보 (최신순으로 정렬)
  const events = [
    {
      id: 1,
      title: '폭싹 속았수다 체험형 전시회',
      date: '2025년 4월 11일',
      description: '청년들을 위한 체험형 전시회로, 다양한 시각적 착시와 재미있는 체험 요소를 통해 새로운 경험을 제공합니다.',
      images: [
        '/images/history/250411 폭싹속았수다 체험형 전시회/1.jpg',
        '/images/history/250411 폭싹속았수다 체험형 전시회/2.jpg',
        '/images/history/250411 폭싹속았수다 체험형 전시회/3.jpg',
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
        '/images/history/250309 연애해봄 문화공연/1.jpg',
        '/images/history/250309 연애해봄 문화공연/2.jpg',
        '/images/history/250309 연애해봄 문화공연/3.jpg',
        '/images/history/250309 연애해봄 문화공연/4.jpg',
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
        '/images/history/241129 Lastpage 칵테일파티/1.jpg',
        '/images/history/241129 Lastpage 칵테일파티/2.jpg',
        '/images/history/241129 Lastpage 칵테일파티/3.jpg',
        '/images/history/241129 Lastpage 칵테일파티/4.jpg',
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
        '/images/history/241029 할로윈파티/1.jpg',
        '/images/history/241029 할로윈파티/2.jpg',
        '/images/history/241029 할로윈파티/3.jpg',
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
      
      {/* 히어로 섹션 */}
      <section className="relative py-16 md:py-20 bg-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/history/250309 연애해봄 문화공연/1.jpg"
            alt="청년 프로그램"
            fill
            className="object-cover opacity-20 blur-[2px]"
            priority
            unoptimized={false}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">프로그램</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            하다 청년공간에서 진행되는 다양한 프로그램을 소개합니다.
            청년들의 역량 강화와 네트워킹을 위한 프로그램들에 참여해보세요.
          </p>
        </div>
      </section>

      {/* 행사 섹션 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center">하다 청년공간 행사</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {events.map((event) => {
              const currentIndex = getCurrentImageIndex(event.id);
              return (
                <div key={event.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={event.images[currentIndex]}
                      alt={event.title}
                      fill
                      className="object-cover"
                      unoptimized={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    
                    {/* 이미지 네비게이션 버튼 */}
                    {event.images.length > 1 && (
                      <>
                        <button 
                          onClick={(e) => prevImage(event.id, event.images.length, e)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full z-10 cursor-pointer"
                          aria-label="이전 이미지"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          onClick={(e) => nextImage(event.id, event.images.length, e)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full z-10 cursor-pointer"
                          aria-label="다음 이미지"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                    
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <p className="text-sm mt-1">{event.date}</p>
                      {event.images.length > 1 && (
                        <p className="text-xs mt-1">
                          {currentIndex + 1} / {event.images.length}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm md:text-base">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 동호회 섹션 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center">하다 청년공간 동호회</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {clubs.map((club) => (
              <div key={club.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={club.image}
                    alt={`${club.name} 동호회`}
                    fill
                    className="object-cover"
                    unoptimized={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{club.name}</h3>
                    <p className="text-sm">{club.category}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center">
                      <span className="w-5 h-5 mr-2 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="font-medium">담당자:</span> {club.manager}
                    </p>
                    <p className="flex items-center">
                      <span className="w-5 h-5 mr-2 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="font-medium">일시:</span> {club.schedule}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
