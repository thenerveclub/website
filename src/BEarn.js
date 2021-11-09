import * as React from "react";

const Bearn = `
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

export default function BEarn() {
  const bearn = useBearn();

  return (
    <div>
      <ul>
        {bearn.map((bearn) => (
          <li key={bearn.id}>{bearn.initiatorName}</li>
        ))}
      </ul>
    </div>
  );
}

function useBearn() {
  const [bearn, setBearn] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: Bearn })
    })
      .then((response) => response.json())
      .then((data) => setBearn(data.data.bets));
  }, []);

  return bearn;
}