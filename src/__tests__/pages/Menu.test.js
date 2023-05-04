import { render, screen } from "@testing-library/react";
import MenuPage from "../../pages/Menu";

describe('MenuPage component', () => {
  test('it renders', () => {
    render(<MenuPage />);
  });

  test('it renders the expected `<H1>` heading', () => {
    render(<MenuPage />);
    const main_heading = screen.getByRole('heading', {level: 1})
    expect(main_heading).toBeInTheDocument();
    expect(main_heading).toHaveTextContent('Menu');
  });
});
