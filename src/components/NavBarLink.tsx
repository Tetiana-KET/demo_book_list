import { NavLink } from 'react-router-dom';

interface LinkProps {
  id: string;
  path: string;
  title: string
}

export function NavBarLink ({id, path, title}: LinkProps){
  return <NavLink
  key={id}
  to={path}
  className={({ isActive, isPending }) =>
        `nav__link ${isPending ? 'pending' : isActive ? 'active' : ''}`}
  >
    {title}
  </NavLink>
}