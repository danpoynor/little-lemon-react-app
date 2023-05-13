import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import DataLoader from "../../../utilities/DataLoader";
import MenuSpecialCard from "../../../components/cards/MenuSpecial";

export default function SectionHighlights() {
  const [specialItems, setSpecialItems] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("data/menu.json")
      const data = await response.json()
      setSpecialItems(data[0].specials)
    }
    getData()
  }, [])

  if (!specialItems.length) {
    return <div>Loading...</div>;
  }

  return (
    <section className="highlights">
      <div className="container">
        <div className="section-header">
          <h2>This weeks specials!</h2>
          <Link to="/menu" className="btn">Online Menu</Link>
        </div>
        <DataLoader url="data/menu.json" render={(data) => (
          <ul className="special-menu-items">
            {
              data[0] && data[0].specials && data[0].specials.map(item => (
                <li key={item.id}>
                  <MenuSpecialCard key={item.id} item={item} />
                </li>
              ))
            }
          </ul>
        )} />
      </div>
    </section>
  )
}
