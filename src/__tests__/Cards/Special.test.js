import { render } from "@testing-library/react";
import MenuSpecialCard from "../../components/cards/MenuSpecial";
// Because <SpecialCard> might use <NavLink>, we need to wrap it with <BrowserRouter>
import { BrowserRouter } from "react-router-dom";

describe('SpecialCard component', () => {
  const item = {
    name: "Special",
    description: "This is a special",
    price: 10.99,
    image: "https://via.placeholder.com/150",
  };

  test('it renders', () => {
    render(
      <BrowserRouter>
        <MenuSpecialCard item={item} />
      </BrowserRouter>
    );
  });
});
