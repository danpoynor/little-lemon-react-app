import { render } from "@testing-library/react";
import TestimonialCard from "../../components/cards/Testimonial";
// Because <TestimonialCard> might use <NavLink>, we need to wrap it with <BrowserRouter>
import { BrowserRouter } from "react-router-dom";

describe('TestimonialCard component', () => {
  test('it renders', () => {
    render(
      <BrowserRouter>
        <TestimonialCard />
      </BrowserRouter>
    );
  });
});
