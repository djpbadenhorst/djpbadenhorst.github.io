import { Link as ReactRouterLink} from 'react-router-dom';
import { isInternalLink } from 'is-internal-link';

export const Link = ({ children, to }) => {
  if (isInternalLink(to)) {
    return (
      <ReactRouterLink to={to}>
        {children}
      </ReactRouterLink>
    );
  }
  return (
    <a href={to}>
      {children}
    </a>
  );
};
