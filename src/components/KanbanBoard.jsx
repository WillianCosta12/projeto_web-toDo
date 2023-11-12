import { DragDropContext } from "react-beautiful-dnd";
import { taskMock } from "../mocks/TaskMock";
import Column from "./Column";
import { useState } from "react";

function KanbanBoard() {
  const [boardState, setBoardState] = useState(taskMock);

  function onDragEnd(result) {}

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {boardState.columnOrder.map((columnId) => {
        const column = boardState.columns[columnId];
        const tasks = column.tasksIds.map((taskId) => boardState.tasks[taskId]);
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}

export default KanbanBoard;
