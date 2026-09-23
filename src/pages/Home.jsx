import { ArrowUpRight, BadgeCheck, MapPin, MonitorSmartphone, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink';

export default function Home() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="location-tag"><MapPin size={14} aria-hidden="true" /> Développeur web freelance · Caen</div>
          <h1 id="hero-title">Donnons <span>vie</span><br />À votre projet web</h1>
          <div className="hero-accent" aria-hidden="true" />
          <p>Sites vitrines, boutiques en ligne et solutions sur mesure : je vous accompagne pour donner vie à vos idées.</p>
          <ButtonLink to="/contact">Parlons-en <ArrowUpRight size={17} aria-hidden="true" /></ButtonLink>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-circle" />
          <div className="hero-orbit hero-orbit--one" />
          <div className="hero-orbit hero-orbit--two" />
          <div className="hero-dot" />
        </div>
      </section>
      <section className="home-intro container">
        <span className="eyebrow">Des solutions pour chaque projet</span>
        <h2>Votre activité mérite un site à son image.</h2>
        <div className="intro-grid">
          <Link to="/services#vitrine" className="intro-tile"><MonitorSmartphone size={29} /><h3>Sites vitrines</h3><p>Présentez votre activité et gagnez en visibilité.</p><span>Découvrir <ArrowUpRight size={16} /></span></Link>
          <Link to="/services#ecommerce" className="intro-tile"><ShoppingBag size={29} /><h3>E-commerce</h3><p>Créez une boutique qui vous ressemble.</p><span>Découvrir <ArrowUpRight size={16} /></span></Link>
          <Link to="/services#sur-mesure" className="intro-tile"><BadgeCheck size={29} /><h3>Sur mesure</h3><p>Transformez vos besoins en solutions concrètes.</p><span>Découvrir <ArrowUpRight size={16} /></span></Link>
        </div>
      </section>
      <section className="home-cta container">
        <div><span className="eyebrow">Une idée en tête ?</span><h2>Parlons de votre projet.</h2><p>Décrivez-moi votre besoin et recevez un devis personnalisé.</p></div>
        <ButtonLink to="/contact">Me contacter <ArrowUpRight size={17} /></ButtonLink>
      </section>
    </>
  );
}
