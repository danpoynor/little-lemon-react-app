import { render, screen } from "@testing-library/react";
import DoormatNav from "../../components/navs/Doormat";
// Because <DoormatNav> uses <NavLink>, we need to wrap it with <BrowserRouter>
import { BrowserRouter } from "react-router-dom";

describe('DoormatNav component', () => {
  test('it renders', () => {
    render(
      <BrowserRouter>
        <DoormatNav />
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Reservations')).toBeInTheDocument();
    expect(screen.getByText('Order Online')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
