'use client'

import { useState } from 'react'

const comments = [
  ['바다사람', '211.34.***.**', '2006.11.20 09:44', '새벽에 시설 쪽에서 붉은 불빛이 계속 깜빡였습니다. 사이렌 소리도 몇 번 들었습니다.'],
  ['기다립니다', '61.102.***.**', '2006.11.20 10:17', '남편이 저곳에서 근무합니다. 안전하다는 발표만 하지 말고 가족들이 직접 통화할 수 있게 해주세요.'],
  ['항만작업자', '220.79.***.**', '2006.11.20 12:03', '구조 헬기 두 대가 분명 시설 방향으로 지나갔습니다. 출동하지 않았다는 발표는 사실이 아닙니다.'],
  ['익명', '', '2006.11.20 13:26', '[관리자에 의해 삭제된 댓글입니다.]'],
  ['04구역', '확인 불가', '2006.11.20 23:48', '통신이 끊긴 게 아닙니다.'],
]

export function RevisionHistory() {
  const [open, setOpen] = useState(false)
  return <div className="revision-wrap"><button className="text-link" onClick={() => setOpen(!open)} type="button">수정 내역 3건</button>{open && <div className="revision-popover"><b>기사 수정 내역</b><dl><dt>2006.11.20 08:12</dt><dd>기존 제목: HS-03 연락 두절…구조 헬기 긴급 출동<br />기존 요약: 사고 당시 시설 내부에는 최소 17명의 근무자가 있었던 것으로 알려졌다.</dd><dt>2006.11.20 09:46</dt><dd>수정 제목: HS-03 통신 두절…시설 내부 근무자 연락 불가<br />수정 사유: 관계기관 발표 내용 반영</dd><dt>2006.11.20 11:40</dt><dd>최종 제목: HS-03 해양시설 통신 두절…관리청 “단순 설비 이상”<br /><span className="deleted-text">구조 헬기 긴급 출동 · 근무자 17명 · 연락 불가 · 원인 불명</span><br /><span className="changed-text">안전 이상 없음 · 노후 통신장비 이상</span></dd></dl></div>}</div>
}

export function PhotoViewer({ src, caption }: { src: string; caption?: string }) {
  const [open, setOpen] = useState(false)
  return <><button type="button" className="text-link photo-link" onClick={() => setOpen(true)}>사진 크게 보기</button>{open && <div className="legacy-modal" role="dialog" aria-label="사진 크게 보기" onClick={() => setOpen(false)}><div className="photo-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" type="button" onClick={() => setOpen(false)}>닫기</button><img src={src} alt={caption || 'HS-03 현장 사진'} /><p>{caption}</p><div className="photo-info">촬영일: 2006.11.16　 촬영장소: HS-03 보급 선착장 인근<br />원본 해상도: 640×480　 제공자: 신원 비공개</div></div></div>}</>
}

export function Comments() {
  const [notice, setNotice] = useState(false)
  return <section className="comments"><h2>독자의견</h2><p className="comment-guide">건전한 토론문화 정착을 위해 작성자의 IP 일부가 공개됩니다.</p>{comments.map(([name, ip, date, text], index) => <div className={`comment ${index === 4 ? 'last-comment' : ''}`} key={`${name}-${date}`}><b>{name}</b> {ip && <span>{ip}</span>}<time>{date}</time><p className={index === 3 ? 'removed-comment' : ''}>{text}</p>{index === 3 && <small>삭제 사유: 확인되지 않은 정보 유포</small>}</div>)}<div className="comment-form"><textarea aria-label="의견 입력" placeholder="의견을 입력해 주십시오." /><button type="button" onClick={() => setNotice(true)}>등록</button>{notice && <p className="form-notice">오래된 기사에는 의견을 작성할 수 없습니다.</p>}</div></section>
}

export function ReporterLink({ children }: { children: React.ReactNode }) { return <a href="/reporter/hd-0317">{children}</a> }

export function ExcludedNotice() { const [show, setShow] = useState(false); return <><button className="text-link excluded-link" type="button" onClick={() => setShow(true)}>검색 결과에서 제외된 기사 4건</button>{show && <div className="inline-notice">편집권자 요청에 따라 일부 기사의 검색 노출이 제한되었습니다.</div>}</> }

export function SearchEmpty({ onBack }: { onBack: () => void }) { return <div className="empty-search"><p>검색된 기사가 없습니다.</p><button type="button" onClick={onBack}>이전으로</button></div> }

export function ArchiveCalendar({ selected, onSelect }: { selected: string; onSelect: (date: string) => void }) { return <div className="calendar"><div className="calendar-title">2006년 11월</div><div className="calendar-week"><span>일</span><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span></div><div className="calendar-days">{Array.from({ length: 30 }, (_, i) => { const d = String(i + 1); const enabled = ['20','21','22','23','24'].includes(d); return <button key={d} className={selected === d ? 'selected' : ''} disabled={!enabled} onClick={() => onSelect(d)} type="button">{d}</button> })}</div></div> }
