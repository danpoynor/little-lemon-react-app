import DataLoader from "../../../utilities/DataLoader";
import TestimonialCard from "../../../components/cards/Testimonial";

export default function SectionTestimonials() {
  const renderTestimonials = (data) => {
    // Randomize testimonials and limit to first 4 testimonials
    const testimonials = data.sort(() => Math.random() - 0.5).slice(0, 4);

    return (
      <ul className="testimonial-list">
        {testimonials.map(item => (
          <li key={item.id}>
            <TestimonialCard item={item} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Testimonials</h2>
        </div>
        {/* Use render prop pattern to render the menu items */}
        <DataLoader url="data/testimonials.json" render={renderTestimonials} />
      </div>
    </section>
  )
}
