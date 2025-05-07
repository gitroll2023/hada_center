"use client";

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">하다 청년공간</h3>
            <p className="mb-2">모이면 통하는 청년들과 함께 "하다"</p>
            <p className="mb-2">소통"하다" 성장 "하다"</p>
            <div className="flex items-center mt-4">
              <Link 
                href="https://www.instagram.com/hada_in_gwangju?igsh=MW9iZXV5aDdxdWZhag%3D%3D&utm_source=qr" 
                target="_blank"
                className="mr-4 hover:text-blue-400 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="inline-block"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  공간소개
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-blue-400 transition-colors">
                  프로그램
                </Link>
              </li>
              <li>
                <Link href="/rental" className="hover:text-blue-400 transition-colors">
                  공간대여
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-blue-400 transition-colors">
                  커뮤니티
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">연락처</h3>
            <p className="mb-2">
              <span className="font-semibold">주소:</span> 광주 도구 서석로85번길 8-3(2~3층)
            </p>
            <p className="mb-2">
              <span className="font-semibold">이메일:</span> hada@gwangju.kr
            </p>
            <p className="mb-2">
              <span className="font-semibold">전화:</span> 062-123-4567
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 하다 청년공간. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
