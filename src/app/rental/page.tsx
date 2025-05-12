import Image from 'next/image';
import ImageProtection from '../../components/ImageProtection';

export default function RentalPage() {
  const spaces = [
    {
      id: 1,
      name: '2층 커뮤니티 공간',
      features: ['무료 와이파이', '음료 제공', '노트북 작업 공간'],
      image: '/images/space/2F.png',
      description: '다양한 모임과 네트워킹이 이루어지는 열린 공간입니다. 소규모 모임, 스터디, 네트워킹 등을 위한 테이블과 의자가 구비되어 있습니다.'
    }
  ];

  return (
    <div className="min-h-screen mt-[100px]">
      <ImageProtection />
      
      {/* 히어로 섹션 */}
      <section className="relative py-20 bg-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/space/2F.png"
            alt="공간 대여"
            fill
            className="object-cover opacity-25"
            priority
            unoptimized={false}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6">공간 대여</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            하다 청년공간의 다양한 공간을 여러분의 모임과 행사에 활용해보세요.
          </p>
        </div>
      </section>

      {/* 공지사항 섹션 */}
      <section className="py-10 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h2 className="text-xl font-bold text-red-600 mb-3">공간 대관 일시 중단 안내</h2>
            <p className="text-gray-700 mb-2">
              현재 하다 청년공간은 내부 행사가 많아 모든 공간의 대관 신청을 일시적으로 중단하고 있습니다.
            </p>
            <p className="text-gray-700 mb-2">
              대관 재개 시점은 추후 공지될 예정이며, 불편을 드려 죄송합니다.
            </p>
            <p className="text-gray-700 font-semibold">
              문의사항: 인스타그램 DM (@hada_in_gwangju)
            </p>
          </div>
        </div>
      </section>

      {/* 공간 소개 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">대여 가능 공간</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              현재는 대관 신청이 불가능하지만, 하다 청년공간에서 제공하는 공간을 미리 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {spaces.map((space) => (
              <div key={space.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover"
                    unoptimized={false}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{space.name}</h3>
                  <p className="text-gray-600 mb-4">{space.description}</p>
                  <div className="mb-4">
                    <span className="font-semibold">시설:</span>
                    <ul className="list-disc list-inside ml-2 mt-1">
                      {space.features.map((feature, index) => (
                        <li key={index} className="text-gray-600">{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <button disabled className="w-full bg-gray-400 text-white py-2 px-4 rounded-md cursor-not-allowed">
                    현재 대관 불가
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대관 절차 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">대관 절차</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              대관 재개 시 아래 절차에 따라 신청해주세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">공간 확인</h3>
              <p className="text-gray-600">웹사이트에서 대여 가능한 공간 확인</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">신청서 작성</h3>
              <p className="text-gray-600">온라인 대관 신청서 작성 및 제출</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">승인 및 결제</h3>
              <p className="text-gray-600">신청 승인 후 대관료 결제</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">공간 이용</h3>
              <p className="text-gray-600">예약 일시에 공간 이용</p>
            </div>
          </div>
        </div>
      </section>

      {/* 문의 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">대관 문의</h2>
            <p className="text-center text-gray-600 mb-6">
              대관에 관한 모든 문의는 인스타그램을 통해서만 받고 있습니다.
              현재는 내부 행사로 인해 대관이 불가능합니다.
            </p>
            <div className="flex flex-col justify-center items-center gap-6 text-center">
              <div>
                <p className="font-semibold text-blue-800">📱 인스타그램</p>
                <p className="text-gray-600">@hada_in_gwangju</p>
              </div>
              <a 
                href="https://www.instagram.com/hada_in_gwangju" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity"
              >
                인스타그램 방문하기
              </a>
              <p className="text-sm text-gray-500 mt-2">
                * 현재는 내부 행사로 인해 대관이 불가능하며, 대관 재개 시 인스타그램을 통해 공지될 예정입니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
