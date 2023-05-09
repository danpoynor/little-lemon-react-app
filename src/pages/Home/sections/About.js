export default function SectionAbout() {
  return (
    <section className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="name">Little Lemon</h2>
          <p className="location">Chicago</p>
          <p className="description">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
        </div>
        <div className="about-photos">
          <img className="hero-image" src={require('../../../assets/photos/mario-and-adrian-2.jpg')} alt="Adrian and Mario" />
          <img className="hero-image" src={require('../../../assets/photos/mario-and-adrian-1.jpg')} alt="Adrian and Mario" />
        </div>
      </div>
    </section>
  )
}
