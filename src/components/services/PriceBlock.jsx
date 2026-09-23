import ButtonLink from '../ButtonLink';
export default function PriceBlock({ price, note, serviceTitle }) {
  return (
    <div className="price-block">
      <div className="price-copy">
        <span className="price-label">{price === null ? 'Tarification' : 'À partir de'}</span>
        <strong className="price-value">{price === null ? 'Sur devis' : `${price.toLocaleString('fr-FR')} €`}</strong>
        <span className="price-note">{note}</span>
      </div>
      <ButtonLink to={`/contact?service=${encodeURIComponent(serviceTitle)}`} variant="outline" className="price-cta">Demander un devis <span aria-hidden="true">→</span></ButtonLink>
    </div>
  );
}
