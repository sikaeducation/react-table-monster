import { useMemo, useCallback, useContext } from "react";
import { selectedRowContext } from "./SelectedRowProvider";

export default function TableRow({ row }) {
  const { selectedId, setSelectedId } = useContext(selectedRowContext);
  const select = useCallback((id) => setSelectedId(id), [setSelectedId]);
  const isSelected = row.id === selectedId;

  return useMemo(() => {
    const { id } = row;
    return (
      <tr
        onClick={() => select(id)}
        className={isSelected ? "active" : ""}
        key={id}
      >
        <td>{id}:</td>
        <td>{Math.round(Math.random() * 10)}</td>
        <td>{Math.round(Math.random() * 10)}</td>
        <td>{Math.round(Math.random() * 10)}</td>
        <td>{Math.round(Math.random() * 10)}</td>
        <td>{Math.round(Math.random() * 10)}</td>
        <td>{Math.round(Math.random() * 10)}</td>
      </tr>
    );
  }, [row, select, isSelected]);
}

