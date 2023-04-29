import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
// Because <App> uses <Routes> and <Route>, we need to wrap it with <BrowserRouter>
import { BrowserRouter } from "react-router-dom";

describe('App component', () => {
  test('it renders', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test('is contains a <header> element', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('is contains a <footer> element', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
