import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function CurrentUserLoader({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:9090/current-user");
        setUser(res.data);
        console.log(res.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
}

export default CurrentUserLoader;
