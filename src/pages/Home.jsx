import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home-content">
      {/* <section>
        <h2>TGM Softwares</h2>
        <p>Welcome to TGM Softwares. Explore our services and games below.</p>
      </section> */}

      <section>
        <h2>Services</h2>
        <div className="card">
          <div className="service-header">
            <div className="service-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
                alt="Google Calendar"
              />
            </div>
            <h3>Agenda Tri - Schedule with WhatsApp</h3>
          </div>

          <p className="service-description">
            Clients schedule via WhatsApp and you control everything with Google Calendar
          </p>
          <Link to="/agenda-tri">View Agenda Tri</Link>
     
        </div>
      </section>

      <section>
        <h2>Games</h2>
        <div className="games-grid">
          <a
            className="game-card-link"
            href="https://store.steampowered.com/app/1982480/Kingdoms_And_Slaves/"
            target="_blank"
            rel="noreferrer"
          >
            <article className="card game-card">
              <h3>Kingdoms And Slaves</h3>
              <img
                src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1982480/header.jpg"
                alt="Kingdoms And Slaves"
              />
              <span>View on Steam</span>
            </article>
          </a>

          <a
            className="game-card-link"
            href="https://store.steampowered.com/app/1405260/Rebellion/"
            target="_blank"
            rel="noreferrer"
          >
            <article className="card game-card">
              <h3>Rebellion</h3>
              <img
                src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1405260/header.jpg"
                alt="Rebellion"
              />
              <span>View on Steam</span>
            </article>
          </a>

          <a
            className="game-card-link"
            href="https://store.steampowered.com/app/1763550/TatuBall_A_Minimalist_LoFi_Puzzle/"
            target="_blank"
            rel="noreferrer"
          >
            <article className="card game-card">
              <h3>TatuBall</h3>
              <img
                src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1763550/header.jpg"
                alt="TatuBall"
              />
              <span>View on Steam</span>
            </article>
          </a>

          <a
            className="game-card-link"
            href="https://store.steampowered.com/app/2119570/Panda_Roll/"
            target="_blank"
            rel="noreferrer"
          >
            <article className="card game-card">
              <h3>PandaRoll</h3>
              <img
                src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2119570/header.jpg"
                alt="PandaRoll"
              />
              <span>View on Steam</span>
            </article>
          </a>
        </div>
      </section>
    </div>
  )
}
