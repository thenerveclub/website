import * as React from "react";
import BigNumber from 'bignumber.js'

const TopCompletedDare = `
{
  tasks(where: { finished: true }, orderBy:amount, orderDirection:desc, first: 1) 
  {
      amount
  }
}
`;


export default function CompletedDareAmount() {
  const tcd = useTCD();
  const matic = usePrice();

  return (
    <div>
      <ul>
        {tcd.map((tcd) => (
          <li key={tcd.id}>${((tcd.amount/1.e+18)*matic).toFixed(2)}</li>
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

function usePrice() {
  const [maticPrice, setPrice] = React.useState([]);

  React.useEffect( async () => {
    const maticPrice = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd`,)
    const priceUst = await maticPrice.json()
    const matic = new BigNumber(priceUst["matic-network"].usd)
    setPrice(new BigNumber(matic));
  }, []);

  return maticPrice;
}