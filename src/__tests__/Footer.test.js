import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { BrowserRouter } from "react-router-dom";

describe('Footer component', () => {
  test('it renders', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByAltText('Little Lemon logo')).toBeInTheDocument();
  });

  test('it contains a <nav> element', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('it contains an <h4> element for "Navigation"', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const title = 'Navigation';
    const titleEl = screen.getAllByRole('heading', { level: 4 })[0];
    expect(titleEl).toBeInTheDocument();
    expect(titleEl).toHaveTextContent(title);
  });

  test('it contains an <h4> element for "Contact"', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const title = 'Contact';
    const titleEl = screen.getAllByRole('heading', { level: 4 })[1];
    expect(titleEl).toBeInTheDocument();
    expect(titleEl).toHaveTextContent(title);
  });

  test('it contains an <h4> element for "Social Media"', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const title = 'Social Media';
    const titleEl = screen.getAllByRole('heading', { level: 4 })[2];
    expect(titleEl).toBeInTheDocument();
    expect(titleEl).toHaveTextContent(title);
  });
});
