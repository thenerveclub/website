import * as React from "react";
import BigNumber from 'bignumber.js'

const Tmoney = `
{
  globalStats {
    taskEarnings
}
}
`;


export default function TMoney() {
  const tmoney = useTmoney();
  const matic = usePrice();

  return (
    <div>
      <ul>
        {tmoney.map((tmoney) => (
          <li key={tmoney.id}>${((tmoney.taskEarnings/1.e+18)*matic).toFixed(2)}</li>
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
      .then((data) => setTmoney(data.data.globalStats));
  }, []);

  return tmoney;
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