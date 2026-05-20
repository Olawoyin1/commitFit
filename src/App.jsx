
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppPreview from './components/AppPreview';
import TrustSection from './components/TrustSection';
import ProblemSection from './components/ProblemSection';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import { DynamicIslandTOC } from './components/ui/dynamic-island-toc';

function App() {
  return (
    <DynamicIslandTOC selector="main h2, main h3, [data-toc]">
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <ProblemSection />
          <AppPreview />
          <Features />
          <TrustSection />
          <HowItWorks />
          <Testimonial />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </DynamicIslandTOC>
  );
}

export default App;
