import { render } from "@testing-library/react";
import HomePage from "../../pages/Home";
import { BrowserRouter } from "react-router-dom";

describe('HomePage component', () => {
  test('it renders', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });
});
