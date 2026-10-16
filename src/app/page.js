import AppShowcase from '@/components/AppShowcase';
import CollegesSection from '@/components/CollegesSection';
import EmployersSection from '@/components/EmployersSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import OpportunitySection from '@/components/OpportunitySection';
import ResumeSection from '@/components/ResumeSection';
import SupportSection from '@/components/SupportSection';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Navbar />
      <Hero />
      <OpportunitySection />
      <ResumeSection />
      <CollegesSection />
      <EmployersSection />
      <AppShowcase />
      <SupportSection />
      <Footer />
    </main>
  );
}
