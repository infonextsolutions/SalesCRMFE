// Breadcrumb.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <div className="breadcrumbs">
      {pathSegments.map((segment, index) => (
        <React.Fragment key={segment}>
          <Link to={`/${pathSegments.slice(0, index + 1).join('/')}`}>{segment}</Link>
          {index < pathSegments.length - 1 && <span> {">"} </span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
