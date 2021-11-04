import * as React from "react";

const Bcount = `
  {
    globalStats {
        betCount
  }
}
`;

export default function ZBCount() {
  const bcount = useBcount();

  return (
    <div>
      <ul>
        {bcount.map((bcount) => (
          <li key={bcount.id}>{bcount.betCount}</li>
        ))}
      </ul>
    </div>
  );
}

function useBcount() {
  const [bcount, setBcount] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: Bcount })
    })
      .then((response) => response.json())
      .then((data) => setBcount(data.data.globalStats));
  }, []);

  return bcount;
}