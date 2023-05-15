import { render, screen } from "@testing-library/react";
import SocialNav from "../../components/navs/Social";
import { BrowserRouter } from "react-router-dom";

describe('SocialNav component', () => {
  test('it initially renders with text "Loading..."', async () => {
    render(
      <BrowserRouter>
        <SocialNav />
      </BrowserRouter>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
