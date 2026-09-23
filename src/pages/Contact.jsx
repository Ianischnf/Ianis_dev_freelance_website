import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/services';

// Mets ta vraie adresse ici avant la mise en ligne.
const CONTACT_EMAIL = 'contact@exemple.fr';

export default function Contact() {
  const [params] = useSearchParams();
  const initialService = params.get('service') || '';
  const [form, setForm] = useState({ name: '', email: '', service: initialService, message: '' });
  const [submitted, setSubmitted] = useState(false);
  const update = event => setForm(prev => ({ ...prev, [event.target.name]: event.target.value }));
  function submit(event) {
    event.preventDefault();
    // Pas de backend : le visiteur vérifie et envoie depuis sa messagerie.
    const subject = encodeURIComponent(`Demande de devis${form.service ? ` — ${form.service}` : ''}`);
    const body = encodeURIComponent(`Nom : ${form.name}\nE-mail : ${form.email}\nPrestation : ${form.service || 'Non précisée'}\n\nProjet :\n${form.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }
  return (
    <section className="contact-page container">
      <SectionHeading eyebrow="Contact" title="Parlons de votre projet." description="Décrivez-moi votre idée. Je reviendrai vers vous pour en discuter et établir un devis personnalisé." centered />
      <div className="contact-layout">
        <div className="contact-aside">
          <h2>Vous avez un projet en tête ?</h2>
          <p>Site vitrine, boutique e-commerce ou besoin spécifique : je serai ravi d'échanger avec vous, même si votre idée n'est pas encore totalement définie.</p>
          <div className="contact-detail"><Mail size={21} /><div><strong>Par e-mail</strong><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div></div>
          <div className="contact-detail"><MapPin size={21} /><div><strong>Basé à Caen</strong><span>Disponible à distance partout en France</span></div></div>
          <p className="contact-aside-note">Un premier échange écrit vous convient ? Moi aussi !</p>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-row">
            <label>Votre nom <input name="name" value={form.name} onChange={update} required autoComplete="name" placeholder="Votre nom" /></label>
            <label>Votre e-mail <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" placeholder="vous@exemple.fr" /></label>
          </div>
          <label>Votre projet
            <select name="service" value={form.service} onChange={update}>
              <option value="">Choisir une prestation</option>
              {services.map(service => <option key={service.id} value={service.title}>{service.title}</option>)}
              <option value="Autre">Autre / Je ne sais pas encore</option>
            </select>
          </label>
          <label>Décrivez votre besoin <textarea name="message" value={form.message} onChange={update} required minLength={10} rows={6} placeholder="Parlez-moi de votre activité, de vos objectifs et de votre projet…" /></label>
          <button className="button button--primary submit-button" type="submit">Préparer mon e-mail <Send size={17} /></button>
          <p className="form-help">Ce bouton ouvre votre messagerie avec un e-mail prérempli. Aucun message n'est envoyé automatiquement.</p>
          {submitted && <p className="form-status" role="status">Votre messagerie a été sollicitée. Vérifiez votre e-mail puis cliquez sur « Envoyer ».</p>}
        </form>
      </div>
    </section>
  );
}
