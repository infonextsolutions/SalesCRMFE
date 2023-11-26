import React, { useState } from "react";
import ComponentSelector from "../ComponentSelector";
import { v4 as uuidv4 } from "uuid";

const Selected_page = ({ component }) => {
  const [selectedPage, setSelectedPage] = useState(
    component.Pageslist[0]?.children
  );
  const uniqueID = uuidv4();

  console.log(component);
  const handlePageClick = (page) => {
    setSelectedPage(page.children);
  };

  return (
    <div className="dashboard">
      <div className="page-list">
        {component.Pageslist.map((page, index) => (
          <button key={index} onClick={() => handlePageClick(page)}>{page.name}</button>
        ))}
      </div>
      {selectedPage &&
        selectedPage.map((component) => {
          return (
            <div
              className={`component_wrapper ${component?.className}`}
              key={component.name}
              id={component.id}
            >
              <ComponentSelector key={component.name} component={component} />
            </div>
          );
        })}
    </div>
  );
};

export default Selected_page;
