
import { Mail, Instagram, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const EMAIL = 'ianischennaf@outlook.com';
const INSTAGRAM = 'ianiswebdev';

export default function Contact() {
  return (
    <section className="contact-page container">

      <SectionHeading
        eyebrow="Contact"
        title="Parlons de votre projet."
        description="Une idée, une question ou un projet web ? N'hésitez pas à me contacter. Je serai ravi d'échanger avec vous."
        centered
      />

      <div className="contact-cards">

        {/* Adresse e-mail */}
        <a
          href={`mailto:${EMAIL}`}
          className="contact-card"
        >
          <Mail size={32} />

          <h2>Par e-mail</h2>

          <p>
            Décrivez-moi votre projet et
            discutons ensemble de vos besoins.
          </p>

          <span className="contact-card-info">
            {EMAIL}
          </span>

          <span className="contact-card-link">
            Envoyer un e-mail
            <ArrowUpRight size={18} />
          </span>
        </a>

        {/* Instagram */}
        <a
          href={`https://www.instagram.com/${INSTAGRAM}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <Instagram size={32} />

          <h2>Sur Instagram</h2>

          <p>
            Découvrez mes réalisations et
            contactez-moi directement
            par message privé.
          </p>

          <span className="contact-card-info">
            @{INSTAGRAM}
          </span>

          <span className="contact-card-link">
            Découvrir mon Instagram
            <ArrowUpRight size={18} />
          </span>
        </a>

      </div>

      <p className="contact-location">
        Développeur web freelance basé à Caen.
        Disponible partout en France à distance.
      </p>

    </section>
  );
}