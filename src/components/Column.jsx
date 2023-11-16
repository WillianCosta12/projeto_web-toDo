/* eslint-disable no-unused-vars */
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

function Column({ column, tasks }) {
  return (
    <div className="m-2 flex w-full flex-col rounded-lg border-2 border-gray-500 bg-gray-200">
      <p className="p-2 text-center text-2xl font-semibold">{column.title}</p>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            className={`min-h-[200px] flex-1 p-2 transition-colors ${
              snapshot.isDraggingOver && "bg-gray-400"
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
            // isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task task={task} index={index} key={task.id}></Task>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Column;
