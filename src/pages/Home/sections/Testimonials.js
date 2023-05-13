import TestimonialCard from "../../../components/cards/Testimonial";
import DataLoader from "../../../utilities/DataLoader";

export default function SectionTestimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Testimonials</h2>
        </div>
        <DataLoader url="data/testimonials.json" render={(data) => (
          <ul className="testimonial-list">
            {/* Randomize testimonials and limit to first 4 testimonials */}
            {data.sort(() => Math.random() - 0.5)
              .slice(0, 4)
              .map(item => (
                <li key={item.id}>
                  <TestimonialCard key={item.id} item={item} />
                </li>
              ))
            }
          </ul>
        )} />
      </div>
    </section>
  )
}
