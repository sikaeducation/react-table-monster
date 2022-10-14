import { createContext, useState } from "react";

export const selectedRowContext = createContext();

export default function SelectedRowProvider({ children }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <selectedRowContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </selectedRowContext.Provider>
  );
}
