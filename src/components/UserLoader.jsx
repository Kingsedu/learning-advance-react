import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function UserLoader({ children, userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:9090/users/${userId}`);
        setUser(res.data);
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [userId]);
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

export default UserLoader;
