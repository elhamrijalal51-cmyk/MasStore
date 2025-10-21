import React from "react";
import "./Produits.css";

const produits = [
  { id: 1, nom: "Maillot domicile 23-24", prix: "349 MAD", image: "../img/P2.png" },
  { id: 2, nom: "Maillot extérieur 23-24", prix: "299 MAD", image: "/img/P4.png" },
  { id: 3, nom: "Maillot domicile 22-23", prix: "349 MAD", image: "/img/P3.png" },
  { id: 4, nom: "Maillot extérieur 22-23", prix: "299 MAD", image: "/img/P1.png" },
  { id: 5, nom: "Casquette de supporter", prix: "199 MAD", image: "/img/8.png" },
  { id: 6, nom: "Echarpe équipe ", prix: "249 MAD", image: "/img/p6..png" },
  { id: 7, nom: "Ballon Pro", prix: "249 MAD", image: "/img/P5.png" },
  { id: 8, nom: "Nike Mercurial ", prix: "249 MAD", image: "/img/P7.png" },

  
];

export default function Produits() {
  return (
    <section className="produits-section">
      <h2 className="produits-titre">Nos prosuits Populaires</h2>
      <div className="produits-grid">
        {produits.map((p) => (
          <div key={p.id} className="produit-card">
            <div className="image-container">
              <img src={p.image} alt={p.nom} />
            </div>
            <div className="produit-info">
              <h3>{p.nom}</h3>
              <p className="prix">{p.prix}</p>
              <button className="btn-acheter">Acheter</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
