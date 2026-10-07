import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { WorkstationExit } from '@/components/WorkstationExit'
import './globals.css'

export const metadata: Metadata = { title: '해동일보 | 동해의 오늘을 기록합니다', description: '2006년 11월 해동일보 지역 뉴스 아카이브' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#18314f' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko" className="bg-background"><body className="with-workstation-exit"><WorkstationExit />{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
