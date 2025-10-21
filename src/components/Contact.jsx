// File: Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  function validate(values) {
    const e = {};
    if (!values.name.trim()) e.name = "Le nom est requis.";
    if (!values.email.trim()) e.email = "L'email est requis.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = "Email invalide.";
    if (!values.message.trim()) e.message = "Le message est requis.";
    return e;
  }

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length) return;

    try {
      setStatus("sending");
      // Remplacez l'URL par votre endpoint réel (ex: /api/contact)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erreur serveur");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title">Contactez-nous</h2>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span className="label-text">Nom</span>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Votre nom"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "err-name" : undefined}
            />
            {errors.name && (
              <span className="error" id="err-name">
                {errors.name}
              </span>
            )}
          </label>

          <label className="field">
            <span className="label-text">Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="votre@exemple.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "err-email" : undefined}
            />
            {errors.email && (
              <span className="error" id="err-email">
                {errors.email}
              </span>
            )}
          </label>

          <label className="field">
            <span className="label-text">Message</span>
            <textarea
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Votre message..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "err-message" : undefined}
            />
            {errors.message && (
              <span className="error" id="err-message">
                {errors.message}
              </span>
            )}
          </label>

          <div className="actions">
            <button className="btn" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Envoi..." : "Envoyer"}
            </button>
            <div className="status-msg" role="status" aria-live="polite">
              {status === "success" && <span className="success">Message envoyé ✅</span>}
              {status === "error" && (
                <span className="error">Une erreur est survenue. Réessayez plus tard.</span>
              )}
            </div>
          </div>
        </form>

        <div className="contact-info">
          <h3>Autres moyens de nous joindre</h3>
          <p>Téléphone : <a href="tel:+212600000000">+212 6 00 00 00 00</a></p>
          <p>Email : <a href="mailto:contact@exemple.com">contact@exemple.com</a></p>
        </div>
      </div>
    </section>
  );
}

