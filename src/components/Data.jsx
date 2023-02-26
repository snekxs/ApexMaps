import { useState, useEffect } from "react";

function firstInterval(f, m, ...p) {
  const h = setInterval(() => {
    f.apply(null, p);
  }, m);
  f.apply(null, p);

  return h;
}

export default function Data() {
  const [data, setData] = useState(null);


  useEffect(() => {
    firstInterval(() => {
      fetch(
        "https://api.mozambiquehe.re/maprotation?auth=ee1be80b0af2c45ea77a855ee7fa2daa&version=2"
      )
        .then((response) => response.json())
        .then((json) => setData(json));
    }, 5000);
  }, []);

  return data;
}
