'use client'

import Link from 'next/link'
import { useState } from 'react'

export function ArticleTools() {
  const [large, setLarge] = useState(false)
  const email = () => { window.location.href = 'mailto:?subject=' + encodeURIComponent(document.title) }
  return <div className={`article-tools ${large ? 'large-type' : ''}`}><button type="button" onClick={() => window.print()}>인쇄하기</button><button type="button" onClick={email}>이메일 보내기</button><button type="button" onClick={() => setLarge(false)}>글자 작게</button><button type="button" onClick={() => setLarge(true)}>글자 크게</button><Link href="/">목록으로</Link></div>
}
