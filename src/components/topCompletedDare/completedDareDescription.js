import * as React from "react";

const TopCompletedDare = `
{
  tasks(where: { finished: true }, orderBy:amount, orderDirection:desc, first: 1) 
  {
      description
  }
}
`;

export default function CompletedDareDescription() {
  const tcd = useTCD();

  return (
    <div>
      <ul>
        {tcd.map((tcd) => (
          <li key={tcd.id}>&apos;{tcd.description}&apos;</li>
        ))}
      </ul>
    </div>
  );
}

function useTCD() {
  const [tcd, setTCD] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: TopCompletedDare })
    })
      .then((response) => response.json())
      .then((data) => setTCD(data.data.tasks));
  }, []);

  return tcd;
}