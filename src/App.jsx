import ReachOutSection from "./components/Contact";
import IntroSection from "./components/IntoSection";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/Services";
import MyWorkSection from "./components/Work";

export default function App() {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <ServicesSection />
      <MyWorkSection />
      <ReachOutSection />
    </div>
  )
}