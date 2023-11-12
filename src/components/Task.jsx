import { Draggable } from "react-beautiful-dnd";

function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`mb-2 rounded border-2 bg-white p-2 ${
            snapshot.isDragging ? "bg-soft-orange" : "bg-blue-green"
          }`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
}

export default Task;
