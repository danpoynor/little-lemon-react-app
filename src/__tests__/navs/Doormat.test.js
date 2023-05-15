import { render, screen } from "@testing-library/react";
import DoormatNav from "../../components/navs/Doormat";
import { BrowserRouter } from "react-router-dom";

describe('DoormatNav component', () => {
  test('it initially renders with text "Loading..."', async () => {
    render(
      <BrowserRouter>
        <DoormatNav />
      </BrowserRouter>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
