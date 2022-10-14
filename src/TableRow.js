export default function TableRow({ row, selectedId, setSelectedId }) {
  const select = (id) => setSelectedId(id)
  const isSelected = row.id === selectedId;

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
}

