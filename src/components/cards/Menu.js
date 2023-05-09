export default function MenuCard ({item}) {
  return (
    <figure className="menu-card">
      <img src={item.image} alt={item.name} className="image" />
      <figcaption className="info">
        <h3 className="name">{item.name}</h3>
        <p className="description">Description: {item.description}</p>
        <p className="price">Price: ${item.price}</p>
      </figcaption>
    </figure>
  )
}
