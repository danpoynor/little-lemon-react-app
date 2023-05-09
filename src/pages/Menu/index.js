import { useEffect, useState } from 'react'

import MenuCard from '../../components/cards/Menu'

export default function Menu() {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("data/menu.json")
      const data = await response.json()
      setMenuItems(data)
    }
    getData()
  }, [])

  if (!menuItems.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page menu">
      <div className="container">
        <div className="section-header">
          <h1>Menu</h1>
        </div>
        <h2>Appetizers</h2>
        <ul className="menu-items">
          {menuItems[0].appetizers.map((item) => (
            <li key={item.id}>
              <MenuCard key={item.id} item={item} />
            </li>
          ))}
        </ul>
        <h2>Entrees</h2>
        <ul className="menu-items">
          {menuItems[0].entrees.map((item) => (
            <li key={item.id}>
              <MenuCard key={item.id} item={item} />
            </li>
          ))}
        </ul>
        <h2>Desserts</h2>
        <ul className="menu-items">
          {menuItems[0].desserts.map((item) => (
            <li key={item.id}>
              <MenuCard key={item.id} item={item} />
            </li>
          ))}
        </ul>
        <h2>Drinks</h2>
        <ul className="menu-items">
          {menuItems[0].drinks.map((item) => (
            <li key={item.id}>
              <MenuCard key={item.id} item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
