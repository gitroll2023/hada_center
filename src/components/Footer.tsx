"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">하다 청년공간</h3>
            <p className="mb-2">모이면 통하는 청년들과 함께 &quot;하다&quot;</p>
            <p>소통&quot;하다&quot;, 성장&quot;하다&quot;, 꿈꾸&quot;다&quot;</p>
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
