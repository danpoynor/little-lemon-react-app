import { render, screen } from "@testing-library/react";
import LoginPage from "../../pages/Login";

describe('LoginPage component', () => {
  test('it renders', () => {
    render(<LoginPage />);
  });

  test('it renders the expected `<H1>` heading', () => {
    render(<LoginPage />);
    const main_heading = screen.getByRole('heading', {level: 1})
    expect(main_heading).toBeInTheDocument();
    expect(main_heading).toHaveTextContent('Login');
  });
});
