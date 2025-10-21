import React from "react";
import "./Apropos.css";

export default function Apropos() {
  return (
    <div className="apropos-container">
      {/* Section 1 */}
      <section className="intro-section">
        <h1>À propos de MasStore</h1>
        <p>Découvrez l’esprit du Maghreb de Fès à travers nos produits officiels.</p>
      </section>

      {/* Section 2 */}
      <section className="mission-section">
        <div className="mission-text">
          <h2>Notre Histoire</h2>
          <p>
            Depuis sa création, MasStore accompagne les supporters du MAS 
            dans leur passion en proposant des articles uniques, modernes 
            et authentiques.
          </p>
        </div>
        <div className="mission-image">
          <img src="/img/99.png" alt="Mission" />
        </div>
      </section>

      {/* Section 3 */}
      <section className="histoire-section">
        <div className="histoire-image">
          <img src="/img/81.png" alt="Histoire" />
        </div>
        <div className="histoire-text">

          <h2>Notre Mission</h2>
          <p>
            Offrir des produits de qualité alliant performance et élégance, 
            inspirés par la passion du <strong>Maghreb de Fès</strong> 
            et l’amour du sport.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="valeurs-section">
        <h2>Nos Valeurs</h2>
        <div className="valeurs-grid">
          <div className="valeur-card">
            <h3>Passion</h3>
            <p>Chaque produit reflète notre amour du club et de la ville de Fès.</p>
          </div>
          <div className="valeur-card">
            <h3>Qualité</h3>
            <p>Nous sélectionnons les meilleurs matériaux pour garantir durabilité et confort.</p>
          </div>
          <div className="valeur-card">
            <h3>Innovation</h3>
            <p>Nous unissons tradition et modernité pour créer une expérience unique.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
