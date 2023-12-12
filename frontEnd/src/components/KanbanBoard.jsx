import { DragDropContext } from "react-beautiful-dnd";
import { taskMock } from "../mocks/TaskMock";
import Column from "./Column";
import { useState, useEffect } from "react";

function KanbanBoard() {

  const [tasks, setTasks] = useState([]);
  
  async function getTasks(){
    const response = await fetch("http://localhost:3000/api/tasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
    });

    const tasks = await response.json()

    setTasks(tasks)

  }

  useEffect(() => {
    getTasks()
  }, [])
  
  let ids = []

  tasks.forEach((task) => {
    ids.push(task.id)
  })

  let finalTask = {
    tasks : tasks,
    columns: {
      "column-1": {
        id: "column-1",
        title: "To do",
        tasksIds: ids
      },
      "column-2": {
        id: "column-2",
        title: "In progress",
        tasksIds: [],
      },
      "column-3": {
        id: "column-3",
        title: "Done",
        tasksIds: [],
      },
    },
    columnOrder: ["column-1", "column-2", "column-3"],
  }

  const [boardState, setBoardState] = useState(finalTask);
  
  useEffect(() => {
    setBoardState(finalTask);
  }, [])

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
      console.log(newTaskIds)
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
          console.log(tasks)
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </div>
    </DragDropContext>
  );
}

export default KanbanBoard;
