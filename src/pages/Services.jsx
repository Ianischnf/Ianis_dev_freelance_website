import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/services/ServiceCard';
import { services } from '../data/services';

export default function Services() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);
  return (
    <section className="services-page container">
      <SectionHeading title="Des solutions web adaptées à vos besoins." centered />
      <div className="services-list">
        {services.map(service => <ServiceCard key={service.id} service={service} />)}
      </div>
    </section>
  );
}
