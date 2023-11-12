import { DragDropContext } from "react-beautiful-dnd";
import { taskMock } from "../mocks/TaskMock";
import Column from "./Column";
import { useState } from "react";

function KanbanBoard() {
  const [boardState, setBoardState] = useState(taskMock);

  function onDragEnd(result) {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = boardState.columns[source.droppableId];
    const newTaskIds = Array.from(column.tasksIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      tasksIds: newTaskIds,
    };

    const newBoardState = {
      ...boardState,
      columns: {
        ...boardState.columns,
        [newColumn.id]: newColumn,
      },
    };

    setBoardState(newBoardState);
  }

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
