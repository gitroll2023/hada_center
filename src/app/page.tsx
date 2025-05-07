import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen mt-[100px]">
      {/* 히어로 섹션 */}
      <section className="relative h-screen flex items-center justify-center pt-0 -mt-[100px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="청년 공간"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">광주광역시 하다 청년공간</h1>
          <p className="text-xl md:text-2xl mb-6">모이면 통하는 청년들과 함께 하다</p>
          <p className="text-lg md:text-xl mb-8">소통하다, 성장하다, 꿈꾸다</p>
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
              청년공간 &apos;하다&apos;는 광주 청년들의 소통과 성장을 위한 열린 공간입니다.
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

      {/* 위치 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">찾아오시는 길</h2>
            <p className="text-sm md:text-lg text-gray-600">
              청년공간 &apos;하다&apos; (광주 도구 서석로85번길 8-3)
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* 구글 지도 임베드 */}
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
                <p className="font-semibold text-blue-800">📍 위치: 광주 도구 서석로85번길 8-3(2~3층)</p>
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
            href="/community" 
            className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block"
          >
            커뮤니티 참여하기
          </Link>
        </div>
      </section>
    </div>
  );
}
