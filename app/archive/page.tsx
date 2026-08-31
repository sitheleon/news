'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/Footer'
import { ArchiveCalendar, ExcludedNotice } from '@/components/ArticleExtras'
import { getArticleBySlug } from '@/lib/articles'

const archiveData: Record<string, { title: string; slug?: string; items: string[] }> = {
  '20': { title: 'HS-03 통신 두절 사건이 메인 헤드라인', slug: 'hs03-signal-loss', items: ['HS-03 해양시설 통신 두절…관리청 “단순 설비 이상”', '동해안 일부 지역 강풍주의보'] },
  '21': { title: '공식 근무자 수와 가족이 보관한 명단이 다르다', slug: 'hs03-worker-list', items: ['“분명 17명이었습니다”…공식 근무자 수와 다른 가족 증언', '지역 수산시장 겨울철 특별 점검'] },
  '22': { title: '의료용 냉동장비 반입 의혹', slug: 'hs03-medical-equipment', items: ['사고 사흘 전 HS-03에 의료용 냉동장비 대량 반입', '지역 항만 물동량 전년 대비 증가'] },
  '23': { title: '편집국 검토 기사', slug: 'deleted-hs03-report', items: ['HS-03 내부 근무자의 마지막 제보'] },
  '24': { title: '일반 지역 뉴스', items: ['동해안 겨울철 어선 안전점검 실시', '지역 항만 물동량 전년 대비 증가', '해저 통신케이블 교체 사업 착수', '해양시설관리청 정기 인사 발표', '연안 여객선 운항 시간 일부 변경'] },
}

export default function ArchivePage() {
  const [selected, setSelected] = useState('20')
  const [data, setData] = useState(archiveData['20'])
  return <><Header /><main className="site-width page-shell"><div className="breadcrumb">홈 &gt; 2006년 기사 아카이브</div><div className="content-grid"><section className="main-content archive-page"><div className="section-heading"><h1>2006년 11월 기사 아카이브</h1><span>날짜를 선택하십시오</span></div><ArchiveCalendar selected={selected} onSelect={(date) => { setSelected(date); setData(archiveData[date]) }} /><section className="archive-results"><h2>11월 {selected}일 주요 기사</h2><p className="archive-lead">{data.title}</p>{data.items.map((item, i) => <div className="archive-item" key={item}>{data.slug && i === 0 ? <Link href={`/article/${data.slug}`}>{item}</Link> : <span>{item}</span>}{selected === '23' && i === 0 && <em>편집국 검토 중</em>}</div>)}</section>{selected === '24' && <div className="excluded-wrap"><ExcludedNotice /></div>}</section><Sidebar /></div></main><Footer /></>
}

void getArticleBySlug
