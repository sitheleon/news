'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = ['종합', '정치', '경제', '사회', '지역', '해양', '과학·기술', '문화', '스포츠']

export function Header() {
  const pathname = usePathname()
  return (
    <>
      <div className="utility-bar"><div className="site-width utility-inner"><span>2006년 11월 23일 목요일</span><span>날씨 해동 12℃ · 맑음　|　로그인　|　회원가입　|　사이트맵</span></div></div>
      <header className="site-header site-width">
        <div className="masthead"><Link href="/" className="brand"><span className="brand-mark">海東</span><span><strong>해동일보</strong><small>동해의 오늘을 기록합니다</small></span></Link><div className="header-ad">해동일보 인터넷판<br /><b>빠르고 정확한 지역 뉴스</b></div></div>
        <nav className="main-nav" aria-label="주요 메뉴">
          {navItems.map((item) => <Link key={item} href={`/?category=${encodeURIComponent(item)}`} className={pathname === '/' && item === '종합' ? 'active' : ''}>{item}</Link>)}
          <Link href="/archive" className="archive-link">2006년 기사 아카이브</Link><Link href="/archive" className="archive-link">기사검색</Link>
        </nav>
        <div className="breaking"><b>속보</b><span>HS-03 해양시설 통신 두절 사흘째…관리청 현장 접근 통제</span><span className="breaking-date">11.23 09:18</span></div>
      </header>
    </>
  )
}
