import * as React from "react";

const Tcount = `
  {
    globalStats {
      taskCount
  }
}
`;

export default function ZTCount() {
  const tcount = useTcount();

  return (
    <div>
      <ul>
        {tcount.map((tcount) => (
          <li key={tcount.id}>{tcount.taskCount}</li>
        ))}
      </ul>
    </div>
  );
}

function useTcount() {
  const [tcount, setTcount] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: Tcount })
    })
      .then((response) => response.json())
      .then((data) => setTcount(data.data.globalStats));
  }, []);

  return tcount;
}