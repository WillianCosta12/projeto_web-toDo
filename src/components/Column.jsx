/* eslint-disable no-unused-vars */
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

function Column({ column, tasks }) {
  return (
    <div className="m-2 rounded border-2 border-gray-600">
      <p className="p-2 text-xl">{column.title}</p>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            className={`p-2 transition-colors ${
              snapshot.isDraggingOver && "bg-gray-400"
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
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
