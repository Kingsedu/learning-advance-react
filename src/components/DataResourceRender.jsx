import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function DataResourceRender({ getData = () => {}, render }) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        /* const res = await axios.get("http://localhost:9090/current-user"); */
        const data = await getData();
        setResource(data);
        console.log("this is the data render", data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getData]);
  return render(resource);
}

export default DataResourceRender;
{
  /*  {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })} */
}
