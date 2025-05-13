import Image from 'next/image';

export default function CommunityPage() {
  const communities = [
    {
      id: 1,
      name: '청년 창업 네트워크',
      members: 28,
      category: '창업/비즈니스',
      description: '창업에 관심 있는 청년들이 모여 아이디어를 공유하고 네트워킹하는 모임입니다.',
      meetingDay: '매주 화요일',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    },
    {
      id: 2,
      name: '광주 청년 독서모임',
      members: 15,
      category: '문화/예술',
      description: '다양한 분야의 책을 함께 읽고 토론하는 독서 모임입니다.',
      meetingDay: '격주 토요일',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 3,
      name: '코딩 스터디',
      members: 12,
      category: 'IT/기술',
      description: '프로그래밍을 함께 공부하고 프로젝트를 진행하는 스터디 그룹입니다.',
      meetingDay: '매주 목요일',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 4,
      name: '청년 마음 건강 모임',
      members: 10,
      category: '심리/건강',
      description: '청년들의 정신 건강과 스트레스 관리를 위한 소통 모임입니다.',
      meetingDay: '격주 수요일',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 5,
      name: '광주 청년 사진 동호회',
      members: 18,
      category: '문화/예술',
      description: '사진 촬영과 작품 공유를 통해 사진 예술을 즐기는 동호회입니다.',
      meetingDay: '매주 일요일',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    },
    {
      id: 6,
      name: '청년 정책 연구회',
      members: 14,
      category: '사회/정책',
      description: '청년 정책에 관심 있는 청년들이 모여 정책을 연구하고 제안하는 모임입니다.',
      meetingDay: '매월 첫째, 셋째 금요일',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  const posts = [
    {
      id: 1,
      title: '청년 창업 네트워크 5월 모임 후기',
      author: '김창업',
      date: '2025.05.05',
      category: '모임후기',
      comments: 12,
      likes: 24,
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 2,
      title: '광주 청년들을 위한 주거 지원 정책 정보',
      author: '정보통',
      date: '2025.05.03',
      category: '정보공유',
      comments: 8,
      likes: 35,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
    },
    {
      id: 3,
      title: '코딩 스터디에서 함께할 멤버를 모집합니다',
      author: '개발자꿈나무',
      date: '2025.05.01',
      category: '모집공고',
      comments: 15,
      likes: 18,
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  return (
    <div className="min-h-screen mt-[100px]">
      {/* 히어로 섹션 */}
      <section className="relative py-20 bg-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="청년 커뮤니티"
            fill
            className="object-cover opacity-25"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6">커뮤니티</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            하다 청년공간의 다양한 커뮤니티에 참여하고 청년들과 함께 소통하세요.
            관심사가 비슷한 청년들과 만나 네트워크를 형성하고 함께 성장할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 커뮤니티 소개 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">활동 중인 커뮤니티</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community) => (
              <div key={community.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={community.image}
                    alt={community.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 m-2 rounded-full text-sm">
                    {community.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{community.name}</h3>
                  <p className="text-gray-600 mb-4">{community.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <p>회원 {community.members}명</p>
                    <p>모임일: {community.meetingDay}</p>
                  </div>
                  <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                    가입하기
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gray-200 text-gray-700 hover:bg-gray-300 font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block">
              더 많은 커뮤니티 보기
            </button>
          </div>
        </div>
      </section>

      {/* 커뮤니티 개설 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">나만의 커뮤니티 만들기</h2>
            <p className="text-gray-600 mb-8 text-center">
              관심 있는 주제로 직접 커뮤니티를 만들고 운영해보세요.
              하다 청년공간에서 다양한 지원을 제공합니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-bold mb-2">커뮤니티 제안</h3>
                <p className="text-gray-600 text-sm">
                  커뮤니티 주제와 활동 계획을 제안합니다.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-bold mb-2">심사 및 승인</h3>
                <p className="text-gray-600 text-sm">
                  담당자 검토 후 커뮤니티 개설을 승인합니다.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-bold mb-2">커뮤니티 운영</h3>
                <p className="text-gray-600 text-sm">
                  승인 후 커뮤니티를 직접 운영합니다.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-blue-500 text-white hover:bg-blue-600 font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block">
                커뮤니티 제안하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 커뮤니티 게시판 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">커뮤니티 게시판</h2>
          
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
              전체
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors">
              공지사항
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors">
              모임후기
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors">
              정보공유
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors">
              모집공고
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors">
              자유게시판
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => (
              <div key={post.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 m-2 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <p>{post.author}</p>
                    <p>{post.date}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <p>댓글 {post.comments}</p>
                    <p>좋아요 {post.likes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-gray-200 text-gray-700 hover:bg-gray-300 font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block">
              더 많은 게시글 보기
            </button>
          </div>
        </div>
      </section>

      {/* 참여 유도 섹션 */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">함께 성장하는 청년 커뮤니티</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            하다 청년공간의 커뮤니티에 참여하여 다양한 청년들과 교류하고 
            함께 성장하는 기회를 만들어보세요.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block">
              커뮤니티 둘러보기
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-500 font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block">
              게시판 바로가기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
