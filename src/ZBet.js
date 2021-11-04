import * as React from "react";

const Bes = `
  {
    bets(orderBy:endBet, orderDirection:desc, first: 1) 
    {
        endBet
        initiatorAddress
        initiatorName
        description
    }
}
`;

export default function ZBet() {
  const bes = useBes();

  return (
    <div>
      <ul>
        {bes.map((bes) => (
          <li key={bes.id}>{bes.description}</li>
        ))}
      </ul>
    </div>
  );
}

function useBes() {
  const [bes, setBes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: Bes })
    })
      .then((response) => response.json())
      .then((data) => setBes(data.data.bets));
  }, []);

  return bes;
}