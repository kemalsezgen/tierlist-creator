import './App.css';
import { useState } from "react";
import { FcSettings } from 'react-icons/fc';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'

function App() {

  const initialTierList = [
    {
      letter: "S",
      color: "#FF517D"
    },
    {
      letter: "A",
      color: "#F29D13"
    },
    {
      letter: "B",
      color: "#D7E590"
    },
    {
      letter: "C",
      color: "#F5DB75"
    },
    {
      letter: "D",
      color: "#6FE751"
    }
  ];
  
  const [tiers, setTiers] = useState(initialTierList);

  return (
    <div className="App">
      <table className='table'>
        {tiers.map((tier) => (
          <tr className="table-tr" style={{}}>
            <td className="table-td" style={{"width": "70px", "background-color": `${tier.color}`}}>
              {tier.letter}
            </td>
            <td className="table-td" style={{"width": "250px"}}>
              <div>
                <p>{`${tier.letter} Tier heroes`}</p>
              </div>
            </td>
            <td className="table-td">
              <div style={{"padding-left": "20px", "padding-right": "20px"}}>
                <p><FcSettings /></p>
              </div>
            </td>
            <td className="table-td">
              <div style={{"padding-left": "20px", "padding-right": "20px"}}>
                <button><AiOutlineArrowUp /></button>
                <button><AiOutlineArrowDown /></button>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
