import * as React from "react";

const Use = `
  {
    globalStats {
      users
  }
}
`;

export default function ZUsers() {
  const use = useUse();

  return (
    <div>
      <ul>
        {use.map((use) => (
          <li key={use.id}>{use.users}</li>
        ))}
      </ul>
    </div>
  );
}

function useUse() {
  const [use, setUse] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: Use })
    })
      .then((response) => response.json())
      .then((data) => setUse(data.data.globalStats));
  }, []);

  return use;
}