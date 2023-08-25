import React, { useState, useEffect } from "react";

export function dynamicImportComponent(componentName) {
  const DynamicComponent = (props) => {
    const [Component, setComponent] = useState(null);
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        import("deezy-widget")
          .then((module) => {
            if (module[componentName]) {
              setComponent(() => module[componentName]);
            } else {
              throw new Error(`Component ${componentName} not found in module`);
            }
          })
          .catch((error) => {
            setRetryCount((prevCount) => prevCount + 1);
          });
      }, 100);

      return () => clearTimeout(timer);
    }, [retryCount]);

    return Component ? <Component {...props} /> : null;
  };

  return DynamicComponent;
}
