import { render, screen } from "@testing-library/react";
import NoPage from "../../pages/NoPage";

describe('NoPage component', () => {
  test('it renders', () => {
    render(<NoPage />);
  });

  test('it renders the expected `<H1>` heading', () => {
    render(<NoPage />);
    const main_heading = screen.getByRole('heading', {level: 1})
    expect(main_heading).toBeInTheDocument();
    expect(main_heading).toHaveTextContent('404');
  });
});
