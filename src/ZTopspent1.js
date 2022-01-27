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

const Change = `
{
  matic-network {
    usd
  }
}
`;

export default function ZEarnt() {
  const top = useTop();
  const change = useChange();

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {top.map((top) => (
          <li key={top.id}>USD {top.spent/1.e+18}{change.usd}</li>
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


function useChange() {
  const [change, setChange] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd", {
      method: "POST",
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8", 
        "cache-control": "max-age=30,public,must-revalidate,s-maxage=60"
      },
      body: JSON.stringify({ query: Change })
    })
      .then((response) => response.json())
      .then((data) => setChange(data.data["matic-network"]));
  }, []);

  return change;
}