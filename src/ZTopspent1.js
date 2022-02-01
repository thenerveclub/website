import * as React from "react";

const Tope = `
{
  userDashStats(orderBy:earned, orderDirection:desc, first: 10) {
    id
    userName
    spent
  }

}
`;

export default function ZSpent() {
  const tope = useTope();

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {tope.map((tope) => (
          <li key={tope.id}>USD {tope.spent/1.e+18}</li>
        ))}
      </ul>
</div>
  );
}

function useTope() {
  const [tope, setTope] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: Tope })
    })
      .then((response) => response.json())
      .then((data) => setTope(data.data.userDashStats));
  }, []);

  return tope;
}