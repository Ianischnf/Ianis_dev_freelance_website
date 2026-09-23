import { CircleCheck } from 'lucide-react';
export default function FeatureList({ features }) {
  return (
    <div className="service-features">
      <h3>Ce qui est inclus</h3>
      <ul>
        {features.map(feature => <li key={feature}><CircleCheck size={17} strokeWidth={1.6} aria-hidden="true" /><span>{feature}</span></li>)}
      </ul>
    </div>
  );
}
