import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import FeaturedSection from './components/FeaturedSection';
import CtaSection from './components/CtaSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <CategorySection />
      <FeaturedSection />
      <CtaSection />
    </main>
  );
}
