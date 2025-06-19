import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '上海森泽智创人工智能技术有限公司 - 智能体数字员工外包服务',
  description: '专业的智能体数字员工外包服务提供商，为企业提供招聘、人力资源、客服销售等场景的AI数字员工解决方案，助力企业数字化转型升级。',
  keywords: '数字员工,AI外包,智能体,人工智能,企业服务,数字化转型',
  authors: [{ name: '上海森泽智创人工智能技术有限公司' }],
  robots: 'index, follow',
  metadataBase: new URL('https://hireclouds.com'),
  openGraph: {
    title: '上海森泽智创人工智能技术有限公司 - 智能体数字员工外包服务',
    description: '专业的智能体数字员工外包服务提供商，助力企业数字化转型升级。',
    type: 'website',
    locale: 'zh_CN',
    url: 'https://hireclouds.com',
    siteName: '智创云AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: '上海森泽智创人工智能技术有限公司 - 智能体数字员工外包服务',
    description: '专业的智能体数字员工外包服务提供商，助力企业数字化转型升级。',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 