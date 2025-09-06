import { useState } from "react";
import { column, Id } from "../types/types";
import ColumnContainer from "./ColumnContainer";

export default function KanbanBoard() {
  const [columns, setColumns] = useState<column[]>([]);
  console.log(columns);

  function addNewColumn() {
    const columnToAdd: column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
  }

  function generateId(): Id {
    return Date.now(); // safer than Math.random()
  }

  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
  }

  return (
    <div className="flex flex-col w-screen items-center">
      <div className="flex gap-2 m-auto">
        <button
          onClick={addNewColumn}
          className="text-2xl px-4 py-2 cursor-pointer bg-neutral-900 rounded-lg hover:border-red-500 border"
        >
          Add Column
        </button>
      </div>
      <div className="flex flex-row gap-5 mt-10 overflow-x-auto">
        {columns.map((col) => (
          <ColumnContainer
            key={col.id}
            column={col}
            deleteColumn={deleteColumn}
          />
        ))}
      </div>
    </div>
  );
}
  