import DataLoader from "../../utilities/DataLoader"
import MenuCard from '../../components/cards/Menu'

export default function Menu() {
  const renderMenu = (data) => {
    return (
      // For each category in data, except 'specials', render a <h2> with
      // the category name and a list of items in that category.
      <ul className="menu-categories">
        {Object.keys(data)?.filter(category => category !== 'specials')?.map(category => (
          <li key={category}>
            <h2>{category.toLocaleUpperCase()}</h2>
            <ul className="menu-items">
              {data[category].map(item => (
                <li key={item.id}>
                  <MenuCard item={item} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="page menu">
      <div className="container">
        <div className="section-header">
          <h1>Menu</h1>
        </div>
        {/* Use render prop pattern to render the menu items */}
        <DataLoader url="data/menu.json" render={renderMenu} />
      </div>
    </div>
  );
}
