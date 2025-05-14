import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MusicPlayerProvider } from "@/context/MusicPlayerContext";
import FloatingMusicPlayerWrapper from "../components/FloatingMusicPlayerWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "하다 청년공간 - 광주광역시 청년 문화공간",
  description: "광주광역시 하다 청년공간은 청년들의 소통과 성장을 위한 열린 공간입니다. 다양한 프로그램, 문화행사, 공간대여 서비스를 제공하며 청년들의 꿈과 열정을 응원합니다.",
  keywords: "하다 청년공간, 광주 청년공간, 청년 문화공간, 광주 문화행사, 청년 프로그램, 공간대여, 청년 커뮤니티, 광주 청년, 하다센터",
  authors: [{ name: "하다 청년공간" }],
  creator: "하다 청년공간",
  publisher: "하다 청년공간",
  verification: {
    other: {
      'naver-site-verification': 'f7edaf37c6dd7311770476781b28c75421de9c50',
      'msvalidate.01': 'B617F4091F08492919255C617E022246',
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.hada-in-gwangju.co.kr/",
    title: "하다 청년공간 - 광주광역시 청년 문화공간",
    description: "광주광역시 하다 청년공간은 청년들의 소통과 성장을 위한 열린 공간입니다. 다양한 프로그램, 문화행사, 공간대여 서비스를 제공합니다.",
    siteName: "하다 청년공간",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "하다 청년공간",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "하다 청년공간 - 광주광역시 청년 문화공간",
    description: "광주광역시 하다 청년공간은 청년들의 소통과 성장을 위한 열린 공간입니다.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: ['/favicon.ico', '/favicon.png'],
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  },
  metadataBase: new URL('https://www.hada-in-gwangju.co.kr'),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [
        { url: '/rss.xml', title: '하다 청년공간 - 행사 및 프로그램 RSS 피드' }
      ]
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MusicPlayerProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <FloatingMusicPlayerWrapper />
          </div>
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
