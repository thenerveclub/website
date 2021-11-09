import * as React from "react";

const Tearn = `
{
  tasks(orderBy:endTask, orderDirection:desc, first: 1) 
  {
      endTask
      initiatorAddress
      initiatorName
      recipientName
      description
  }
}
`;

export default function TEarn() {
  const tearn = useTearn();

  return (
    <div>
      <ul>
        {tearn.map((tearn) => (
          <li key={tearn.id}>{tearn.recipientName}</li>
        ))}
      </ul>
    </div>
  );
}

function useTearn() {
  const [tearn, setTearn] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: Tearn })
    })
      .then((response) => response.json())
      .then((data) => setTearn(data.data.tasks));
  }, []);

  return tearn;
}