import React from "react";
import ComponentSelector from "./ComponentSelector.jsx";
import dynamic from 'next/dynamic'

function Comp({ jsonToRender }) {
  const renderComponent = (componentList) => {
    return componentList?.map((component) => {
      return (
        <div className={`component_wrapper ${component?.className}`} key={component.name} id={component.id}>
          <ComponentSelector key={component.name} component={component} />
        </div>
      );
    });
  };
  return renderComponent(jsonToRender.children);
}

const RenderComponent = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default RenderComponent;
