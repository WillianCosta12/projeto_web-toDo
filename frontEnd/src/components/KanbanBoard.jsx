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

    const start = boardState.columns[source.droppableId];
    const finish = boardState.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.tasksIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
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
      return;
    }

    const startStaksIds = Array.from(start.tasksIds);
    startStaksIds.splice(source.index, 1);
    const newStart = {
      ...start,
      tasksIds: startStaksIds,
    };

    const finishStaksIds = Array.from(finish.tasksIds);
    finishStaksIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      tasksIds: finishStaksIds,
    };
    const newState = {
      ...boardState,
      columns: {
        ...boardState.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setBoardState(newState);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex justify-center">
        {boardState.columnOrder.map((columnId) => {
          const column = boardState.columns[columnId];
          const tasks = column.tasksIds.map(
            (taskId) => boardState.tasks[taskId],
          );
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </div>
    </DragDropContext>
  );
}

export default KanbanBoard;
