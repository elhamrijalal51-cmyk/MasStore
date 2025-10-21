import React from "react";
import "./Accueil.css";
import { Link } from "react-router-dom";



/* === SLIDER PANORAMIQUE === */
function PanoramaSlider({ images = ["/img/20.png", "/img/21.png", "/img/23.png"], duration = 30, children }) {
  const items = [...images, ...images,...images]; // duplication pour boucle fluide
  return (
    <section className="panorama">
      <div className="panorama-track" style={{ animationDuration: `${duration}s` }}>
        {items.map((src, idx) => (
          <div className="panorama-item" key={idx}>
            <img src={src} alt={`panorama-${idx}`} />
          </div>
        ))}
      </div>

      <div className="panorama-overlay" />
      <div className="panorama-content">{children}</div>
    </section>
  );
}

/* === PAGE D'ACCUEIL === */
export default function Accueil() {
  return (
    <main className="accueil">
      {/* Slider principal */}
      <PanoramaSlider images={["/img/20.png", "/img/21.png", "/img/23.png"]} duration={25}>
        <div className="hero-content">
          <h1>⚽ MasStore - Équipe du Maghreb de Fès</h1>
          <p> Découvrez nos nouveaux maillots, accessoires et équipements officiels de l’équipe de Fès.</p>
          <button className="hero-btn"><Link to="/produits">Voir les produits </Link></button>
        </div>
      </PanoramaSlider>

    </main>
  );
}
