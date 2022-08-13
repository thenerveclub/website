import * as React from "react";


const timestamp = Math.floor(Date.now() / 1000);
const TopActiveDare = `
{
  tasks(where: { endTask_gt:"${timestamp}", finished: false }, orderBy:amount, orderDirection:desc, first: 1) 
  {
    description
  }
}
`;


export default function ActiveDareDescription() {
  const tad = useTAD();

  return (
    <div>
      <ul>
        {tad.map((tad) => (
          <li key={tad.id}>&apos;{tad.description}&apos;</li>
        ))}
      </ul>
    </div>
  );
}

function useTAD() {
  const [tad, setTAD] = React.useState([]);

  React.useEffect(() => {
    fetch("http://ec2-3-68-153-1.eu-central-1.compute.amazonaws.com:8000/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: TopActiveDare })
    })
      .then((response) => response.json())
      .then((data) => setTAD(data.data.tasks));
  }, []);

  return tad;
}