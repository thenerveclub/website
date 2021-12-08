import * as React from "react";

const Top = `
{
  userDashStats(orderBy:spent, orderDirection:desc, first: 10) {
    id
    userName
    spent
  }
}
`;

export default function ZEarnt() {
  const top = useTop();

  return (
    <div>
      <ul style={{ listStyle: "decimal" }}>
        {top.map((top) => (
          <li key={top.id}>{top.userName}</li>
        ))}
      </ul>
    </div>
  );
}

function useTop() {
  const [top, setTop] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: Top })
    })
      .then((response) => response.json())
      .then((data) => setTop(data.data.userDashStats));
  }, []);

  return top;
}