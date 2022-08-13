import * as React from "react";

const GlobalDares = `
  {
    globalStats {
      taskCount
  }
}
`;

export default function Tasks() {
  const dares = useDares();

  return (
    <div>
      <ul>
        {dares.map((dares) => (
          <li key={dares.id}>{dares.taskCount}</li>
        ))}
      </ul>
    </div>
  );
}

function useDares() {
  const [dares, setDares] = React.useState([]);

  React.useEffect(() => {
    fetch("http://ec2-3-68-153-1.eu-central-1.compute.amazonaws.com:8000/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GlobalDares })
    })
      .then((response) => response.json())
      .then((data) => setDares(data.data.globalStats));
  }, []);

  return dares;
}