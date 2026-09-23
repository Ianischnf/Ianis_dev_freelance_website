import ButtonLink from '../components/ButtonLink';
export default function NotFound() {
  return <section className="not-found container"><h1>Cette page n'existe pas.</h1><p>Retournons à l'accueil.</p><ButtonLink to="/">Retour à l'accueil</ButtonLink></section>;
}
