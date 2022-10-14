import "./App.css";
import TableRow from "./TableRow";
import rows from "./data";
import {useState} from "react";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="App">
      <table>
        <tbody>
          {rows.map((row) => (
            <TableRow key={row.id} row={row} selectedId={selectedId} setSelectedId={setSelectedId} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

