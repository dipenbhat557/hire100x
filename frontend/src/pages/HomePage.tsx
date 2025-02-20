import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { HireTalent } from '../components/HireTalent';
// import { Testimonials } from '../components/Testimonials';
import { AboutUs } from '../components/AboutUs';
import { VideoRecruitment } from '../components/VideoRecruitment';
import { JoinSection } from '../components/JoinSection';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <HireTalent />
        {/* <Testimonials /> */}
        <AboutUs />
        <VideoRecruitment />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}