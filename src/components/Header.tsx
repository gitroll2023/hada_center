"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-50 to-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="하다 청년공간 로고"
              width={120}
              height={120}
              priority
            />
          </Link>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center">
          <div className="flex space-x-1">
            <Link href="/about" className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium">
              공간소개
            </Link>
            <Link href="/programs" className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium">
              프로그램
            </Link>
            <Link href="/rental" className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium">
              공간대여
            </Link>
            <Link href="/community" className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium">
              커뮤니티
            </Link>
          </div>
          <div className="ml-6 pl-6 border-l border-gray-200">
            <Link 
              href="https://www.instagram.com/hada_in_gwangju?igsh=MW9iZXV5aDdxdWZhag%3D%3D&utm_source=qr" 
              target="_blank" 
              className="flex items-center text-gray-600 hover:text-pink-500 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-1"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="text-sm font-medium">Instagram</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-inner">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            <Link 
              href="/about" 
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              공간소개
            </Link>
            <Link 
              href="/programs" 
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              프로그램
            </Link>
            <Link 
              href="/rental" 
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              공간대여
            </Link>
            <Link 
              href="/community" 
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              커뮤니티
            </Link>
            <Link 
              href="https://www.instagram.com/hada_in_gwangju?igsh=MW9iZXV5aDdxdWZhag%3D%3D&utm_source=qr" 
              target="_blank" 
              className="flex items-center text-gray-700 hover:text-pink-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              인스타그램
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
