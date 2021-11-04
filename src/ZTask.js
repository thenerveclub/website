import * as React from "react";

const Tas = `
  {
    tasks(orderBy:endTask, orderDirection:desc, first: 1) 
    {
        endTask
        initiatorAddress
        initiatorName
        description
    }
}
`;

export default function ZTask() {
  const tas = useTas();

  return (
    <div>
      <ul>
        {tas.map((tas) => (
          <li key={tas.id}>{tas.description}</li>
        ))}
      </ul>
    </div>
  );
}

function useTas() {
  const [tas, setTas] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: Tas })
    })
      .then((response) => response.json())
      .then((data) => setTas(data.data.tasks));
  }, []);

  return tas;
}