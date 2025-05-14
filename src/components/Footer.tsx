"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* 모바일에서는 중앙 정렬, 데스크톱에서는 그리드 레이아웃 */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
          {/* 첫 번째 섹션 - 하다 청년공간 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">하다 청년공간</h3>
            <p className="mb-1 md:mb-2 text-sm md:text-base text-gray-300">모이면 통하는 청년들과 함께 하다</p>
            <p className="text-sm md:text-base text-gray-300">소통하다, 성장하다, 꿈꾸다</p>
          </div>
          
          {/* 두 번째 섹션 - 바로가기 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">바로가기</h3>
            <ul className="flex flex-wrap justify-center md:justify-start gap-3 md:block md:space-y-2">
              <li className="inline-block md:block">
                <Link href="/about" className="text-sm md:text-base text-gray-300 hover:text-blue-400 transition-colors px-2 py-1 md:px-0">
                  공간소개
                </Link>
              </li>
              <li className="inline-block md:block">
                <Link href="/events" className="text-sm md:text-base text-gray-300 hover:text-blue-400 transition-colors px-2 py-1 md:px-0">
                  문화행사
                </Link>
              </li>
              <li className="inline-block md:block">
                <Link href="/programs" className="text-sm md:text-base text-gray-300 hover:text-blue-400 transition-colors px-2 py-1 md:px-0">
                  프로그램
                </Link>
              </li>
              <li className="inline-block md:block">
                <Link href="/rental" className="text-sm md:text-base text-gray-300 hover:text-blue-400 transition-colors px-2 py-1 md:px-0">
                  공간대여
                </Link>
              </li>
         
            </ul>
          </div>
          
          {/* 세 번째 섹션 - 소셜 미디어 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">소셜 미디어</h3>
            <div className="flex justify-center md:justify-start">
              <a 
                href="https://www.instagram.com/hada_in_gwangju" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="mr-2"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm md:text-base">@hada_in_gwangju</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* 저작권 정보 */}
        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-4 md:pt-6 text-center text-xs md:text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} 하다 청년공간. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
