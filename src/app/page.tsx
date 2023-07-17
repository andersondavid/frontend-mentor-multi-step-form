import StepList from './components/MobileStepIndicator'
import Screens from './components/Screens'

export default function Home() {
  return (
    <main className="flex h-screen w-screen relative">
      <div className="grow">
        <div className='bg-sidebar-mobile bg-cover absolute h-1/4 w-full -z-10'></div>
        <StepList />
        <Screens />
      </div>
    </main>
  )
}
