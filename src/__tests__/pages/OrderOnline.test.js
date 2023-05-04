import { render, screen } from "@testing-library/react";
import OrderOnlinePage from "../../pages/OrderOnline";

describe('OrderOnlinePage component', () => {
  test('it renders', () => {
    render(<OrderOnlinePage />);
  });

  test('it renders the expected `<H1>` heading', () => {
    render(<OrderOnlinePage />);
    const main_heading = screen.getByRole('heading', {level: 1})
    expect(main_heading).toBeInTheDocument();
    expect(main_heading).toHaveTextContent('Order Online');
  });
});
