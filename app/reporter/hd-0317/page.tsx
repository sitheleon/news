'use client'

import { useEffect, useState } from 'react'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/Footer'
import { SearchEmpty } from '@/components/ArticleExtras'

export default function ReporterPage() {
  const [empty, setEmpty] = useState(false)
  useEffect(() => { document.title = '기자정보 없음 | 해동일보' }, [])
  return <><Header /><main className="site-width page-shell"><div className="breadcrumb">홈 &gt; 기자정보</div><div className="content-grid"><section className="main-content reporter-page">{empty ? <SearchEmpty onBack={() => setEmpty(false)} /> : <><div className="section-heading"><h1>기자정보</h1></div><div className="reporter-card"><h2>등록된 기자 정보를 찾을 수 없습니다.</h2><dl><dt>기자번호</dt><dd>HD-0317</dd><dt>소속</dt><dd>사회부</dd><dt>이름</dt><dd>기록 없음</dd><dt>이메일</dt><dd>사용 중지</dd><dt>최종 접속</dt><dd>2006.11.23 02:17</dd><dt>최종 기사 작성</dt><dd>HS-03 내부 근무자의 마지막 제보</dd><dt>현재 상태</dt><dd>퇴사 처리</dd></dl></div><p className="reporter-note">해당 기자의 작성 기사 18건은 편집권자 요청에 따라 검색 결과에서 제외되었습니다.</p><button className="legacy-button" type="button" onClick={() => setEmpty(true)}>작성 기사 보기</button></>}</section><Sidebar /></div></main><Footer /></>
}
