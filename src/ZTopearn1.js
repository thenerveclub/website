import * as React from "react";
import BigNumber from 'bignumber.js'

const Tope = `
{
  userDashStats(orderBy:earned, orderDirection:desc, first: 10) {
    id
    userName
    earned
  }

}
`;

export default function ZSpent() {
  const tope = useTope();
  const matic = usePrice();

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {tope.map((tope) => (
          <li key={tope.id}>USD {((tope.earned/1.e+18)*matic).toFixed(2)}</li>
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