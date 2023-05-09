import TestimonialCard from "../../../components/cards/Testimonial";
import DataFetcher from "../../../utilities/DataFetcher";

export default function SectionTestimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Testimonials</h2>
        </div>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  )
}
