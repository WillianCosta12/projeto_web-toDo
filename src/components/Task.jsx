import { Draggable } from "react-beautiful-dnd";

function Task({ task, index }) {
  function getBackgroundColor() {
    switch (task.priority) {
      case "alta":
        return "bg-red-500 border-red-700";
      case "media":
        return "bg-yellow-400 border-yellow-500";
      case "baixa":
        return "bg-green-300 border-green-400";
      default:
        return "bg-blue-green border-blue-green";
    }
  }

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`$ mb-3 flex flex-row rounded-xl border-2 transition-colors ${
            snapshot.isDragging
              ? "bg-dark-blue text-white"
              : getBackgroundColor()
          }`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          // isDragging={snapshot.isDragging}
        >
          {/* Parte colorida no início da barrinha de task */}
          {/* <div
            className="mr-2 w-4 overflow-auto bg-black"
            style={{ borderRadius: "12px 0 0 12px" }}
          ></div> */}
          <div className="w-4"></div>
          {task.content}
        </div>
      )}
    </Draggable>
  );
}

export default Task;
