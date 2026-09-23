import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="brand brand--footer" to="/">IANIS <span>DEV</span></Link>
        <p>Développeur web freelance à Caen</p>
        <span>© {new Date().getFullYear()} Ianis Dev</span>
      </div>
    </footer>
  );
}
