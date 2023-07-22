import Screens from './components/Screens'

export default function Home() {
  return (
    <main className="relative h-screen w-screen md:flex">
      <div className="fixed -z-10 h-1/4 w-full bg-sidebar-mobile bg-cover md:hidden"></div>
      <Screens />
    </main>
  )
}
