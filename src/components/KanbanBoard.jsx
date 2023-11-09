import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import { useState } from "react";

function KanbanBoard() {
  const [completed, setCompleted] = useState([])
  const [incomplete, setIncomplete] = useState([])

  return (
    <DragDropContext>
      <div className="flex flex-row items-center justify-between">
        <Column title={"TO DO"} id={"1"}></Column>
      </div>
    </DragDropContext>
  );
}

export default KanbanBoard;
