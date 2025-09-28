import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { HeroSection } from "../../pages/HeroSection"

export const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header/>
      <main className="flex-1 overflow-y-auto">
        <HeroSection/>
      </main>
      <Footer/>
    </div>
  )
}