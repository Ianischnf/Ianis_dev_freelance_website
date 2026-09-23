import FeatureList from './FeatureList';
import PriceBlock from './PriceBlock';
export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article id={service.id} className="service-card">
      <div className="service-top">
        <span className="service-icon"><Icon size={21} aria-hidden="true" /></span>
        <div>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      </div>
      <FeatureList features={service.features} />
      <PriceBlock price={service.startingPrice} note={service.priceNote} serviceTitle={service.title} />
    </article>
  );
}
