import RSS from 'rss';
import { NextResponse } from 'next/server';

// 행사 데이터 (실제로는 DB에서 가져오거나 CMS에서 가져올 수 있음)
const events = [
  {
    id: 1,
    title: "청년 네트워킹 데이",
    date: "2025.05.20",
    description: "다양한 분야의 청년들이 모여 네트워킹하는 행사입니다. 새로운 인연과 기회를 만들어보세요.",
    link: "/events/1"
  },
  {
    id: 2,
    title: "스타트업 아이디어 경진대회",
    date: "2025.06.15",
    description: "혁신적인 아이디어를 가진 청년들의 경연장! 당신의 아이디어를 펼쳐보세요.",
    link: "/events/2"
  },
  {
    id: 3,
    title: "청년 문화예술 페스티벌",
    date: "2025.07.10",
    description: "청년 예술가들의 작품 전시와 공연이 어우러진 축제의 장입니다.",
    link: "/events/3"
  },
  {
    id: 4,
    title: "폭싹 체험형 전시회",
    date: "2025.04.11",
    description: "추억속으로 떠나는 체험형 전시회",
    link: "/events/4"
  },
  {
    id: 5,
    title: "연애해봄 문화공연",
    date: "2025.03.09",
    description: "봄을 맞아 청년들을 위한 로맨틱한 문화공연",
    link: "/events/5"
  }
];

export async function GET() {
  // RSS 피드 생성
  const feed = new RSS({
    title: '하다 청년공간 - 행사 및 프로그램',
    description: '광주 청년공간 하다의 최신 행사와 프로그램 소식을 확인하세요.',
    site_url: 'https://www.hada-in-gwangju.co.kr',
    feed_url: 'https://www.hada-in-gwangju.co.kr/api/rss',
    image_url: 'https://www.hada-in-gwangju.co.kr/logo.png',
    language: 'ko',
    pubDate: new Date(),
    copyright: `© ${new Date().getFullYear()} 청년공간 하다. All rights reserved.`
  });

  // 행사 정보를 RSS 아이템으로 추가
  events.forEach(event => {
    const dateObj = new Date(event.date.replace(/\./g, '-'));
    
    feed.item({
      title: event.title,
      description: event.description,
      url: `https://www.hada-in-gwangju.co.kr${event.link}`,
      date: dateObj,
      guid: `event-${event.id}`
    });
  });

  // XML 형식으로 반환
  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
