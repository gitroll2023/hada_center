import Image from 'next/image';
import Link from 'next/link';

export default function ProgramsPage() {
  const programs = [
    {
      id: 1,
      title: '청년 창업 워크샵',
      category: '역량강화',
      description: '창업에 관심 있는 청년들을 위한 기초 워크샵입니다. 아이디어 발굴부터 비즈니스 모델 구축까지 실무적인 내용을 다룹니다.',
      date: '2025년 5월 15일 ~ 6월 19일 (매주 목요일)',
      time: '19:00 ~ 21:00',
      location: '하다 청년공간 3층 다목적홀',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 2,
      title: '청년 네트워킹 파티',
      category: '네트워킹',
      description: '다양한 분야의 청년들이 모여 서로의 경험과 아이디어를 나누는 네트워킹 행사입니다. 매월 다른 주제로 진행됩니다.',
      date: '2025년 5월 25일',
      time: '18:00 ~ 21:00',
      location: '하다 청년공간 2층 커뮤니티 공간',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    },
    {
      id: 3,
      title: '청년 문화예술 프로젝트',
      category: '문화예술',
      description: '지역 청년 예술가들과 함께하는 문화예술 프로젝트입니다. 다양한 예술 활동을 경험하고 자신만의 작품을 만들어볼 수 있습니다.',
      date: '2025년 6월 1일 ~ 6월 30일',
      time: '주말 14:00 ~ 17:00',
      location: '하다 청년공간 3층 다목적홀',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    },
    {
      id: 4,
      title: '청년 취업 멘토링',
      category: '취업지원',
      description: '다양한 분야의 현직자들이 멘토로 참여하여 취업 준비 청년들에게 실질적인 조언과 도움을 제공합니다.',
      date: '2025년 5월 20일 ~ 6월 24일 (매주 화요일)',
      time: '19:00 ~ 21:00',
      location: '하다 청년공간 2층 커뮤니티 공간',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 5,
      title: '청년 정책 설명회',
      category: '정보제공',
      description: '광주광역시의 다양한 청년 정책과 지원 사업에 대한 정보를 제공하는 설명회입니다.',
      date: '2025년 5월 30일',
      time: '14:00 ~ 16:00',
      location: '하다 청년공간 3층 다목적홀',
      image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 6,
      title: '청년 마음건강 프로그램',
      category: '심리지원',
      description: '청년들의 정신건강과 스트레스 관리를 위한 프로그램입니다. 전문 상담사와 함께하는 그룹 세션으로 진행됩니다.',
      date: '2025년 6월 5일 ~ 6월 26일 (매주 수요일)',
      time: '19:00 ~ 21:00',
      location: '하다 청년공간 2층 커뮤니티 공간',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  return (
    <div className="min-h-screen mt-[100px]">
      {/* 히어로 섹션 */}
      <section className="relative py-20 bg-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="청년 프로그램"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6">프로그램</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            하다 청년공간에서 진행되는 다양한 프로그램을 소개합니다.
            청년들의 역량 강화와 네트워킹을 위한 프로그램들에 참여해보세요.
          </p>
        </div>
      </section>

      {/* 프로그램 카테고리 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
              전체
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors">
              역량강화
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors">
              네트워킹
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors">
              문화예술
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors">
              취업지원
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors">
              정보제공
            </button>
          </div>
        </div>
      </section>

      {/* 프로그램 목록 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 m-2 rounded-full text-sm">
                    {program.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>
                      <span className="font-semibold">일정:</span> {program.date}
                    </p>
                    <p>
                      <span className="font-semibold">시간:</span> {program.time}
                    </p>
                    <p>
                      <span className="font-semibold">장소:</span> {program.location}
                    </p>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                      신청하기
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 정기 프로그램 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">정기 프로그램</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">청년 커뮤니티 지원</h3>
              <p className="text-gray-600 mb-4">
                다양한 주제의 청년 커뮤니티 활동을 지원합니다. 
                관심사가 비슷한 청년들과 함께 모여 활동해보세요.
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>매월 새로운 커뮤니티 모집</li>
                <li>활동 공간 및 물품 지원</li>
                <li>커뮤니티 활동비 지원</li>
              </ul>
              <Link href="/community" className="text-blue-500 hover:underline">
                자세히 알아보기 →
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">청년 상담 프로그램</h3>
              <p className="text-gray-600 mb-4">
                취업, 진로, 심리 등 다양한 분야의 전문가와 1:1 상담을 진행합니다.
                청년들의 고민 해결을 위한 맞춤형 상담 서비스를 제공합니다.
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>매주 화, 목 14:00 ~ 18:00</li>
                <li>사전 예약 필수</li>
                <li>무료 상담 (월 1회)</li>
              </ul>
              <button className="text-blue-500 hover:underline">
                예약하기 →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 프로그램 제안 섹션 */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">프로그램 제안하기</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            하다 청년공간에서 진행하고 싶은 프로그램이 있으신가요?
            여러분의 아이디어를 제안해주세요!
          </p>
          <button className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block">
            프로그램 제안하기
          </button>
        </div>
      </section>
    </div>
  );
}
