import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function ResourceLoader({ children, resourceUrl, reasourceName }) {
  const [resource, setResource] = useState(null);
  console.log(resourceUrl);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(resourceUrl);
        setResource(res.data);
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [resourceUrl]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [reasourceName]: resource });
        }
        return child;
      })}
    </>
  );
}

export default ResourceLoader;
