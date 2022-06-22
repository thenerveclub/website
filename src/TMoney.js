import * as React from "react";

const Tmoney = `
{
  tasks(orderBy:endTask, orderDirection:desc, first: 1) 
  {
      endTask
      initiatorAddress
      initiatorName
      recipientName
      description
      amount
  }
}
`;


export default function TMoney() {
  const tmoney = useTmoney();

  return (
    <div>
      <ul>
        {tmoney.map((tmoney) => (
          <li key={tmoney.id}>${(tmoney.amount/1.e+18).toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

function useTmoney() {
  const [tmoney, setTmoney] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: Tmoney })
    })
      .then((response) => response.json())
      .then((data) => setTmoney(data.data.tasks));
  }, []);

  return tmoney;
}