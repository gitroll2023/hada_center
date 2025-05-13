import { NextResponse } from 'next/server';
import RSS from 'rss';

export async function GET() {
  const feed = new RSS({
    title: '하다 청년공간',
    description: '광주 청년들의 소통과 성장을 위한 열린 공간, 하다 청년공간의 소식을 전합니다.',
    site_url: 'https://www.hada-in-gwangju.co.kr',
    feed_url: 'https://www.hada-in-gwangju.co.kr/api/rss.xml',
    language: 'ko',
    pubDate: new Date(),
    copyright: `${new Date().getFullYear()} 하다 청년공간`,
  });

  // 주요 페이지 및 콘텐츠 추가
  feed.item({
    title: '하다 청년공간 소개',
    description: '광주 청년들의 소통과 성장을 위한 열린 공간, 하다 청년공간을 소개합니다.',
    url: 'https://www.hada-in-gwangju.co.kr/about',
    date: new Date(),
  });

  feed.item({
    title: '하다 청년공간 문화행사',
    description: '청년들의 열정과 창의력이 담긴 문화행사를 소개합니다.',
    url: 'https://www.hada-in-gwangju.co.kr/events',
    date: new Date(),
  });

  feed.item({
    title: '하다 청년공간 프로그램',
    description: '청년들의 역량 강화와 네트워킹을 위한 다양한 프로그램을 제공합니다.',
    url: 'https://www.hada-in-gwangju.co.kr/programs',
    date: new Date(),
  });

  feed.item({
    title: '하다 청년공간 대여',
    description: '모임, 행사, 스터디 등 다양한 목적으로 공간을 대여할 수 있습니다.',
    url: 'https://www.hada-in-gwangju.co.kr/rental',
    date: new Date(),
  });

  feed.item({
    title: '하다 청년공간 커뮤니티',
    description: '청년들이 서로 소통하고 정보를 나눌 수 있는 커뮤니티 공간입니다.',
    url: 'https://www.hada-in-gwangju.co.kr/community',
    date: new Date(),
  });

  // XML 형식으로 응답
  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
