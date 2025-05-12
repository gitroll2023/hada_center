import Image from 'next/image';
import ImageProtection from '../../components/ImageProtection';

export default function AboutPage() {
  return (
    <div className="min-h-screen mt-[100px]">
      <ImageProtection />
      
      {/* 히어로 섹션 */}
      <section className="relative py-20 bg-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/space/2F.png"
            alt="청년 모임 공간"
            fill
            className="object-cover opacity-30 blur-[2px]"
            priority
            unoptimized={false}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">하다 청년공간</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            광주 청년들의 소통과 성장을 위한 열린 공간
          </p>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/space/2F.png"
                alt="하다 청년공간"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
                unoptimized={false}
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">청년공간 하다</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                광주광역시 하다 청년공간은 청년들이 자유롭게 모여 소통하고 성장할 수 있는 
                열린 공간입니다. 하다라는 이름에는 청년들이 함께 모여 다양한 활동을 
                하다라는 의미가 담겨 있습니다.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <span className="font-medium">소통하다, 성장하다, 꿈꾸다, 도전하다</span> - 청년들의 다양한 활동과 
                가능성을 지원하는 공간으로 운영되고 있습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                광주 청년들의 아이디어와 열정이 모여 시너지를 만들어내는 
                하다 청년공간에서 여러분의 꿈을 펼쳐보세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 공간 특징 섹션 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">공간 소개</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/3">
                  <Image
                    src="/images/space/2F.png"
                    alt="2층 커뮤니티 공간"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-sm"
                    unoptimized={false}
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">2층 커뮤니티 공간</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    다양한 모임과 네트워킹이 이루어지는 열린 공간입니다. 
                    소규모 모임, 스터디, 네트워킹 등을 위한 테이블과 의자가 구비되어 있습니다.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>수용인원: 50명 이상</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>무료 와이파이</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>음료 제공</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>노트북 작업 공간</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 이용 안내 섹션 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">이용 안내</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-3xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3">운영 시간</h3>
              <ul className="space-y-2 text-gray-700">
                <li>평일: 10:00 - 21:00</li>
                <li>토요일: 10:00 - 18:00</li>
                <li>일요일 및 공휴일: 휴관</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">이용 대상</h3>
              <ul className="space-y-2 text-gray-700">
                <li>만 19세 ~ 39세 청년</li>
                <li>광주광역시 거주 청년 우대</li>
                <li>청년 관련 단체 및 모임</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">이용 방법</h3>
              <ul className="space-y-2 text-gray-700">
  
                <li>단체 이용: 사전 예약 필요</li>
                <li>공간 대여: 인스타그램 문의</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 위치 섹션 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">찾아오시는 길</h2>
          
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className="text-red-500 mr-2">📍</span>
                주소
              </h3>
              <p className="text-gray-700 ml-7">
                광주 동구 서석로85번길 8-3 (2,3층)
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className="text-red-500 mr-2">🚌</span>
                대중교통
              </h3>
              <ul className="ml-7 space-y-1 text-gray-700">
                <li>버스: 전남여고 정류장 하차</li>
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
                <p className="font-semibold text-blue-800">📍 위치: 광주 동구 서석로85번길 8-3(2,3층)</p>
                <p className="text-sm text-blue-600 mt-1">지도를 클릭하여 구글 지도에서 자세히 보고 길찾기를 이용하실 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
