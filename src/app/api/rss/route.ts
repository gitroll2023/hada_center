import RSS from 'rss';
import { NextResponse } from 'next/server';

// 행사 데이터 (실제 events 페이지의 데이터와 일치시킴)
const events = [
  {
    id: 1,
    title: "할로윈 파티",
    date: "2024.10.29",
    description: "청년들과 함께하는 신나는 할로윈 파티! 다양한 코스튬과 함께 특별한 밤을 즐겨보세요.",
    link: "/events"
  },
  {
    id: 2,
    title: "피터팬 뮤직콘서트",
    date: "2024.11.22",
    description: "청년 아티스트들의 재능을 발휘하는 음악의 밤! 다양한 장르의 음악을 한자리에서 즐겨보세요.",
    link: "/events"
  },
  {
    id: 3,
    title: "Lastpage 칵테일파티",
    date: "2024.11.29",
    description: "한 해의 마무리를 특별하게! 다양한 칵테일과 함께하는 소셜 네트워킹 파티에 참여해보세요.",
    link: "/events"
  },
  {
    id: 4,
    title: "Firstpage 북코칭",
    date: "2025.02.04",
    description: "새해 첫 시작을 책과 함께! 독서를 통한 자기계발과 성장을 도와주는 북코칭 프로그램입니다.",
    link: "/events"
  },
  {
    id: 5,
    title: "연애해봄 문화공연",
    date: "2025.03.09",
    description: "봄의 시작과 함께하는 로맨틱한 문화공연! 청년들의 사랑과 열정이 가득한 특별한 행사입니다.",
    link: "/events"
  },
  {
    id: 6,
    title: "폭싹 체험형 전시회",
    date: "2025.04.11",
    description: "추억속으로 떠나는 체험형 전시회",
    link: "/events"
  }
];

export async function GET() {
  // RSS 피드 생성
  const feed = new RSS({
    title: '하다 청년공간 - 행사 및 프로그램',
    description: '광주 청년공간 하다의 최신 행사와 프로그램 소식을 확인하세요.',
    site_url: 'https://www.hada-in-gwangju.co.kr',
    feed_url: 'https://www.hada-in-gwangju.co.kr/api/rss',
    image_url: 'https://www.hada-in-gwangju.co.kr/images/logo.png',
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
