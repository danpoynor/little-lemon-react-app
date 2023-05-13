export default function MenuCard ({item}) {
  return (
    <figure className="menu-card">
      <div className="photo" style={{ backgroundImage: `url(${item.image})` }}></div>
      <figcaption className="info">
        <div className="name-price">
          <h3 className="name">{item.name}</h3><span className='price'>${item.price}</span>
        </div>
        <p className="description">{item.description}</p>
      </figcaption>
    </figure>
  )
}
