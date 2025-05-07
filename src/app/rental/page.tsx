import Image from 'next/image';

export default function RentalPage() {
  const spaces = [
    {
      id: 1,
      name: '2층 커뮤니티 공간',
      capacity: '최대 30명',
      features: ['무료 와이파이', '음료 제공', '노트북 작업 공간'],
      price: '시간당 10,000원',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      description: '다양한 모임과 네트워킹이 이루어지는 열린 공간입니다. 소규모 모임, 스터디, 네트워킹 등을 위한 테이블과 의자가 구비되어 있습니다.'
    },
    {
      id: 2,
      name: '3층 다목적 홀',
      capacity: '최대 50명',
      features: ['프로젝터 및 스크린', '음향 시스템', '가변형 좌석 배치'],
      price: '시간당 20,000원',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80',
      description: '세미나, 강연, 워크샵 등 다양한 행사를 진행할 수 있는 넓은 공간입니다. 프로젝터, 음향 시스템 등 행사에 필요한 장비가 구비되어 있습니다.'
    },
    {
      id: 3,
      name: '소회의실',
      capacity: '최대 8명',
      features: ['화이트보드', '무료 와이파이', '조용한 환경'],
      price: '시간당 5,000원',
      image: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2103&q=80',
      description: '소규모 회의나 스터디에 적합한 조용한 공간입니다. 화이트보드와 편안한 의자가 구비되어 있어 효율적인 회의가 가능합니다.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative py-20 bg-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80"
            alt="공간 대여"
            fill
            className="object-cover opacity-25"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6">공간 대여</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            하다 청년공간의 다양한 공간을 합리적인 가격으로 대여하세요.
            모임, 세미나, 워크샵 등 다양한 활동에 적합한 공간을 제공합니다.
          </p>
        </div>
      </section>

      {/* 공간 소개 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">대여 가능 공간</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaces.map((space) => (
              <div key={space.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{space.name}</h3>
                  <p className="text-gray-600 mb-4">{space.description}</p>
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <p><span className="font-semibold">수용 인원:</span> {space.capacity}</p>
                    <p><span className="font-semibold">대여 비용:</span> {space.price}</p>
                    <div>
                      <span className="font-semibold">주요 시설:</span>
                      <ul className="list-disc pl-5 mt-1">
                        {space.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                    예약하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대여 절차 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">대여 절차</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">예약 신청</h3>
              <p className="text-gray-600">
                홈페이지에서 원하는 공간과 일정을 선택하여 예약 신청을 합니다.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">승인 확인</h3>
              <p className="text-gray-600">
                담당자 검토 후 예약 승인 여부를 이메일 또는 문자로 안내해 드립니다.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">대여료 납부</h3>
              <p className="text-gray-600">
                예약 승인 후 안내된 계좌로 대여료를 납부합니다.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-3">공간 이용</h3>
              <p className="text-gray-600">
                예약 당일 안내에 따라 공간을 이용합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 예약 캘린더 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">예약 현황</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <p className="text-gray-600">
                아래 캘린더에서 예약 가능한 날짜와 시간을 확인하세요.
              </p>
            </div>
            
            {/* 캘린더 영역 */}
            <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">캘린더가 표시될 영역입니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* 이용 규칙 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">이용 규칙</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <p className="text-gray-600">
                  <span className="font-semibold">예약 취소:</span> 이용일 3일 전까지 취소 시 100% 환불, 이용일 1일 전 취소 시 50% 환불, 당일 취소 시 환불 불가
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <p className="text-gray-600">
                  <span className="font-semibold">이용 시간:</span> 예약 시간을 준수해 주세요. 초과 이용 시 추가 요금이 발생할 수 있습니다.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <p className="text-gray-600">
                  <span className="font-semibold">공간 정리:</span> 이용 후 원상태로 정리해 주세요. 쓰레기는 분리수거해 주시기 바랍니다.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <p className="text-gray-600">
                  <span className="font-semibold">음식물:</span> 간단한 다과는 가능하나, 강한 냄새가 나는 음식은 반입을 자제해 주세요.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <p className="text-gray-600">
                  <span className="font-semibold">시설 파손:</span> 시설물 파손 시 배상 책임이 있습니다.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <p className="text-gray-600">
                  <span className="font-semibold">청년 우대:</span> 만 19세 ~ 39세 청년 및 청년 단체는 대여료 20% 할인 혜택을 제공합니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 문의 섹션 */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">공간 대여 문의</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            공간 대여에 관한 궁금한 점이 있으신가요?
            언제든지 문의해 주세요.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block">
              문의하기
            </button>
            <a 
              href="tel:062-123-4567" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-500 font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block"
            >
              062-123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
