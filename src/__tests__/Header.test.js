import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
// Because <Header> uses <Link>, we need to wrap it with <BrowserRouter>
import { BrowserRouter } from "react-router-dom";

describe('Header component', () => {
  test('it renders', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByAltText('Little Lemon logo')).toBeInTheDocument();
  });

  test('it contains a <nav> element', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('it contains a <header> element', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  })
});
