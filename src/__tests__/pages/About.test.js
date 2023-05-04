import { render, screen } from "@testing-library/react";
import AboutPage from "../../pages/About";

describe('AboutPage component', () => {
  test('it renders', () => {
    render(<AboutPage />);
  });

  test('it renders the expected `<H1>` heading', () => {
    render(<AboutPage />);
    const main_heading = screen.getByRole('heading', {level: 1})
    expect(main_heading).toBeInTheDocument();
    expect(main_heading).toHaveTextContent('About');
  });
});
