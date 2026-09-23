import { Link } from 'react-router-dom';

export default function ButtonLink({ to, children, variant = 'primary', className = '' }) {
  return <Link to={to} className={`button button--${variant} ${className}`.trim()}>{children}</Link>;
}
