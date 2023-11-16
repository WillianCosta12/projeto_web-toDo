import { Draggable } from "react-beautiful-dnd";

function Task({ task, index }) {
  function getBackgroundColor() {
    switch (task.priority) {
      case "alta":
        return "bg-red-500";
      case "media":
        return "bg-yellow-400";
      case "baixa":
        return "bg-green-300";
      default:
        return "bg-blue-green";
    }
  }

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={` mb-2 flex flex-row rounded-xl border-2 ${
            snapshot.isDragging ? "bg-soft-orange" : getBackgroundColor()
          }`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          // isDragging={snapshot.isDragging}
        >
          <div className="mr-2 w-2 bg-black"></div>
          {task.content}
        </div>
      )}
    </Draggable>
  );
}

export default Task;
