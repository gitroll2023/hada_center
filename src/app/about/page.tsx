import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative py-20 bg-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="청년 모임 공간"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6">공간 소개</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            청년공간 &apos;하다&apos;는 광주 청년들의 소통과 성장을 위한 열린 공간입니다.
          </p>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="하다 청년공간"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">하다 청년공간</h2>
              <p className="text-gray-600 mb-4">
                광주광역시 하다 청년공간은 청년들이 자유롭게 모여 소통하고 성장할 수 있는 
                열린 공간입니다. &apos;하다&apos;라는 이름에는 청년들이 함께 모여 다양한 활동을 
                &apos;하다&apos;라는 의미가 담겨 있습니다.
              </p>
              <p className="text-gray-600 mb-4">
                소통&quot;하다&quot;, 성장&quot;하다&quot;, 꿈꾸&quot;다&quot;, 도전&quot;하다&quot; - 청년들의 다양한 활동과 
                가능성을 지원하는 공간으로 운영되고 있습니다.
              </p>
              <p className="text-gray-600">
                광주 청년들의 아이디어와 열정이 모여 시너지를 만들어내는 
                하다 청년공간에서 여러분의 꿈을 펼쳐보세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 공간 특징 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">공간 특징</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">2층 - 커뮤니티 공간</h3>
              <p className="text-gray-600 mb-4">
                다양한 모임과 네트워킹이 이루어지는 열린 공간입니다. 
                소규모 모임, 스터디, 네트워킹 등을 위한 테이블과 의자가 구비되어 있습니다.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>최대 30명 수용 가능</li>
                <li>무료 와이파이</li>
                <li>음료 제공</li>
                <li>노트북 작업 공간</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">3층 - 다목적 홀</h3>
              <p className="text-gray-600 mb-4">
                세미나, 강연, 워크샵 등 다양한 행사를 진행할 수 있는 넓은 공간입니다.
                프로젝터, 음향 시스템 등 행사에 필요한 장비가 구비되어 있습니다.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>최대 50명 수용 가능</li>
                <li>프로젝터 및 스크린</li>
                <li>음향 시스템</li>
                <li>가변형 좌석 배치</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 이용 안내 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">이용 안내</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">운영 시간</h3>
              <ul className="space-y-2 text-gray-600">
                <li>평일: 10:00 - 21:00</li>
                <li>토요일: 10:00 - 18:00</li>
                <li>일요일 및 공휴일: 휴관</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">이용 대상</h3>
              <ul className="space-y-2 text-gray-600">
                <li>만 19세 ~ 39세 청년</li>
                <li>광주광역시 거주 청년 우대</li>
                <li>청년 관련 단체 및 모임</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">이용 방법</h3>
              <ul className="space-y-2 text-gray-600">
                <li>개인 이용: 현장 방문</li>
                <li>단체 이용: 사전 예약 필요</li>
                <li>공간 대여: 홈페이지 예약</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 위치 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">찾아오시는 길</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">주소</h3>
              <p className="text-gray-600">
                광주 도구 서석로85번길 8-3(2~3층)
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">대중교통</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>버스: 123번, 456번 - 하다청년공간 정류장 하차</li>
                <li>지하철: 광주 1호선 문화전당역 3번 출구에서 도보 10분</li>
              </ul>
            </div>
            
            {/* 지도 영역 */}
            <div className="h-80 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.2714857544465!2d126.920139!3d35.149974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA4JzU5LjkiTiAxMjbCsDU1JzEyLjUiRQ!5e0!3m2!1sko!2skr!4v1620123456789!5m2!1sko!2skr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-4 bg-blue-50 p-4 rounded-lg flex items-center">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">H</div>
              <div>
                <p className="font-semibold text-blue-800">📍 정확한 위치: 광주 도구 서석로85번길 8-3(2~3층)</p>
                <p className="text-sm text-blue-600 mt-1">지도를 클릭하여 구글 지도에서 자세히 보고 길찾기를 이용하실 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
