import { LandingBackground } from "./background";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Stats } from "./stats";
import { Services } from "./services";
import { WhyUs } from "./why-us";
import { Doctors } from "./doctors";
import { Testimonials } from "./testimonials";
import { Appointment } from "./appointment";
import { Footer } from "./footer";
import { BackToTop } from "./back-to-top";

export function LandingPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-clip font-light text-slate-700">
      <LandingBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Doctors />
        <Testimonials />
        <Appointment />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
