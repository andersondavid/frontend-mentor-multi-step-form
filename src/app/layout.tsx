import DesktopSidebar from './components/DesktopSidebar'
import MobileStepIndicator from './components/MobileStepIndicator'
import PageContainer from './components/PageContainer'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frontend Mentor - Multi-step form',
  description:
    'This is a solution to the Multi-step form challenge on Frontend Mentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="md:flex h-screen w-screen items-center justify-center bg-magnolia">
        <div className="fixed -z-10 h-1/4 w-full bg-sidebar-mobile bg-cover md:hidden"></div>
        <div className="w-full px-4">
          <MobileStepIndicator />
          <PageContainer>
            <DesktopSidebar />
            <div className="md:mx-auto w-full md:max-w-[450px]">{children}</div>
          </PageContainer>
        </div>
      </body>
    </html>
  )
}
