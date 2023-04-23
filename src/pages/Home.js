import Hero from '../components/SectionHero';
import SectionHighlights from '../components/SectionHighlights';
import SectionTestimonials from '../components/SectionTestionials';
import SectionAbout from '../components/SectionAbout';

export default function Home() {
  return (
    <>
      <Hero />
      <SectionHighlights />
      <SectionTestimonials />
      <SectionAbout />
    </>
  )
}
