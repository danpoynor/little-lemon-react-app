import { render } from "@testing-library/react";
import SpecialCard from "../../components/cards/Special";
// Because <SpecialCard> might use <NavLink>, we need to wrap it with <BrowserRouter>
import { BrowserRouter } from "react-router-dom";

describe('SpecialCard component', () => {
  test('it renders', () => {
    render(
      <BrowserRouter>
        <SpecialCard />
      </BrowserRouter>
    );
  });
});
