"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">하다 청년공간</h3>
            <p className="mb-2">모이면 통하는 청년들과 함께 하다</p>
            <p>소통하다, 성장하다, 꿈꾸다</p>
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
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 하다 청년공간. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
