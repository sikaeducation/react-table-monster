import SelectedRowProvider from "./SelectedRowProvider";
import "./App.css";
import TableRow from "./TableRow";
import rows from "./data";

export default function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          <SelectedRowProvider>
            {rows.map((row) => (
              <TableRow key={row.id} row={row} />
            ))}
          </SelectedRowProvider>
        </tbody>
      </table>
    </div>
  );
}

