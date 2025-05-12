import Image from "next/image";
import Link from "next/link";
import ImageProtection from "../components/ImageProtection";

export default function Home() {
  return (
    <div className="min-h-screen mt-[100px]">
      <ImageProtection />
      
      {/* 히어로 섹션 */}
      <section className="relative h-screen flex items-center justify-center pt-0 -mt-[100px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/space/2F.png"
            alt="청년 공간"
            fill
            className="object-cover"
            priority
            unoptimized={false}
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">광주광역시 하다 청년공간</h1>
          <p className="text-lg md:text-xl mb-6">모이면 통하는 청년들과 함께 하다</p>
          <p className="text-base md:text-lg mb-8">소통하다, 성장하다, 꿈꾸다</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="/about" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              공간 소개
            </Link>
            <Link 
              href="/rental" 
              className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-3 px-6 rounded-full transition-colors"
            >
              공간 대여하기
            </Link>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">광주 청년 문화공간</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              청년공간 하다는 광주 청년들의 소통과 성장을 위한 열린 공간입니다.
              다양한 프로그램과 편안한 공간에서 여러분의 꿈과 아이디어를 펼쳐보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl md:text-3xl mb-3 md:mb-4 text-blue-500">🏠</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">하다 청년공간</h3>
              <p className="text-sm md:text-base text-gray-600">
                광주 청년들을 위한 다양한 프로그램과 커뮤니티 활동이 진행됩니다.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl md:text-3xl mb-3 md:mb-4 text-blue-500">👥</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">청년 커뮤니티</h3>
              <p className="text-sm md:text-base text-gray-600">
                다양한 분야의 청년들과 교류하고 네트워크를 형성할 수 있습니다.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl md:text-3xl mb-3 md:mb-4 text-blue-500">🚀</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">성장 프로그램</h3>
              <p className="text-sm md:text-base text-gray-600">
                청년들의 역량 강화와 성장을 위한 다양한 교육 프로그램을 운영합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 공간 사진 갤러리 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">청년공간 하다</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              청년들의 아이디어와 꿈이 자라나는 공간, 하다를 소개합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/images/space/2F.png"
                  alt="하다 청년공간"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  unoptimized={false}
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold mb-2">하다 청년공간 2층</h3>
                <p className="text-sm text-gray-600">청년들이 모여 소통하고 성장하는 공간입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 자체 행사 사진 갤러리 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">HADA</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              청년공간 하다에서 진행된 다양한 행사와 프로그램을 소개합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 할로윈 파티 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-48 md:h-64">
                <Image
                  src="/images/history/241029 할로윈파티/1.jpg"
                  alt="할로윈 파티"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectPosition: 'center' }}
                  unoptimized={false}
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold mb-2">할로윈 파티</h3>
                <p className="text-sm text-gray-600">2024.10.29 - 청년들과 함께한 할로윈 파티</p>
              </div>
            </div>

            {/* 피터팬 뮤직콘서트 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-48 md:h-64">
                <Image
                  src="/images/history/241122 피터팬 뮤직콘서트/1.jpg"
                  alt="피터팬 뮤직콘서트"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectPosition: 'center' }}
                  unoptimized={false}
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold mb-2">피터팬 뮤직콘서트</h3>
                <p className="text-sm text-gray-600">2024.11.22 - 청년 음악가들의 공연</p>
              </div>
            </div>

            {/* Lastpage 칵테일파티 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-48 md:h-64">
                <Image
                  src="/images/history/241129 Lastpage 칵테일파티/1.jpg"
                  alt="Lastpage 칵테일파티"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectPosition: 'center' }}
                  unoptimized={false}
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold mb-2">Lastpage 칵테일파티</h3>
                <p className="text-sm text-gray-600">2024.11.29 - 연말 네트워킹 파티</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 동호회 행사 사진 갤러리 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">하다 동호회 활동</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              청년공간 하다에서 활동 중인 다양한 동호회를 소개합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 콕콕콕 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-40 md:h-52">
                <Image
                  src="/images/group/1 콕콕콕/1.jpg"
                  alt="콕콕콕 동호회"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectPosition: 'center' }}
                  unoptimized={false}
                />
              </div>
              <div className="p-3 bg-white">
                <h3 className="text-base font-semibold mb-1">콕콕콕</h3>
                <p className="text-xs text-gray-600">배드민턴 동호회</p>
              </div>
            </div>

            {/* 위뚜 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-40 md:h-52">
                <Image
                  src="/images/group/2 위뚜/1.jpg"
                  alt="위뚜 동호회"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectPosition: 'center' }}
                  unoptimized={false}
                />
              </div>
              <div className="p-3 bg-white">
                <h3 className="text-base font-semibold mb-1">위뚜</h3>
                <p className="text-xs text-gray-600">보드게임 동호회</p>
              </div>
            </div>

            {/* 리메이크 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-40 md:h-52">
                <Image
                  src="/images/group/3 리메이크/1.jpg"
                  alt="리메이크 동호회"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectPosition: 'center' }}
                  unoptimized={false}
                />
              </div>
              <div className="p-3 bg-white">
                <h3 className="text-base font-semibold mb-1">리메이크</h3>
                <p className="text-xs text-gray-600">업사이클링 동호회</p>
              </div>
            </div>

            {/* 라온하제 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-40 md:h-52">
                <Image
                  src="/images/group/4 라온하제/1.jpg"
                  alt="라온하제 동호회"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectPosition: 'center' }}
                  unoptimized={false}
                />
              </div>
              <div className="p-3 bg-white">
                <h3 className="text-base font-semibold mb-1">라온하제</h3>
                <p className="text-xs text-gray-600">여행 동호회</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 위치 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">찾아오시는 길</h2>
            <p className="text-sm md:text-lg text-gray-600">
              청년공간 하다 (광주 동구 서석로85번길 8-3)
            </p>
          </div>
          
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

      {/* CTA 섹션 */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">함께 성장하는 청년공간</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            하다 청년공간에서 여러분의 아이디어를 실현하고 다양한 청년들과 교류해보세요.
          </p>
          <Link 
            href="/programs" 
            className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block"
          >
            프로그램 참여하기
          </Link>
        </div>
      </section>
    </div>
  );
}
