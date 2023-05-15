import { render } from "@testing-library/react";
import TestimonialCard from "../../components/cards/Testimonial";
// Because <TestimonialCard> might use <NavLink>, we need to wrap it with <BrowserRouter>
import { BrowserRouter } from "react-router-dom";

describe('TestimonialCard component', () => {
  const item = {
    name: "Testimonial",
    description: "This is a testimonial",
    rating: 5,
    photo: "https://via.placeholder.com/150",
  };

  test('it renders', () => {
    render(
      <BrowserRouter>
        <TestimonialCard item={item} />
      </BrowserRouter>
    );
  });
});
