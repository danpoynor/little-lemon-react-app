import { render, screen } from "@testing-library/react";
import SocialNav from "../../components/navs/Social";
// Because <SocialNav> uses <Link>, we need to wrap it with <BrowserRouter>
import { BrowserRouter } from "react-router-dom";

describe('SocialNav component', () => {
  test('it renders', () => {
    render(
      <BrowserRouter>
        <SocialNav />
      </BrowserRouter>
    );
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('Yelp')).toBeInTheDocument();
  });
});
