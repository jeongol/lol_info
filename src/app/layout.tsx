import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import logo from "./assets/img/Header_logo.png";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-cyan-700 flex items-center justify-between h-[90px]">
          <div>이미지 영역 추후 추가 예정</div>
          <ul className="text-3xl">
            <Link href="/">메인</Link>
          </ul>
          <ul className="text-3xl">
            <Link href="/champions">챔피언 목록</Link>
          </ul>
          <ul className="text-3xl">
            <Link href="/items">아이템 목록</Link>
          </ul>
          <ul className="text-3xl">
            <Link href="/rotation">챔피언 로테이션 정보</Link>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
