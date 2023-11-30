import { Draggable } from "react-beautiful-dnd";

function Task({ task, index }) {
  function getBackgroundColor() {
    switch (task.priority) {
      case "alta":
        return "bg-red-200 border-red-400";
      case "media":
        return "bg-yellow-200 border-yellow-400";
      case "baixa":
        return "bg-green-200 border-green-400";
      default:
        return "bg-blue-green border-blue-green";
    }
  }
  function getBackgroundContentColor() {
    switch (task.priority) {
      case "alta":
        return "bg-red-400";
      case "media":
        return "bg-yellow-400";
      case "baixa":
        return "bg-green-400";
      default:
        return "bg-blue-green";
    }
  }

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`mb-3 flex flex-col rounded-xl border-2 drop-shadow transition-colors ${
            snapshot.isDragging
              ? "bg-dark-blue text-white"
              : getBackgroundColor()
          }`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          // isDragging={snapshot.isDragging}
        >
          <div
            className={`${getBackgroundContentColor()} rounded-t-lg pl-4 text-lg`}
          >
            {task.content}
          </div>
          <div className="m-1 flex flex-col rounded-xl p-2">
            <p>{task.description}</p>
            <p>
              <span className="text-gray-600">created at:</span>{" "}
              {task.createdAt.toLocaleDateString()}
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <button className="mb-2 rounded border border-blue-700 bg-teal-500 px-3 py-1 font-bold text-white hover:bg-teal-700">
              Editar
            </button>
            <button className="mb-2 rounded border border-blue-700 bg-red-500 px-3 py-1 font-bold text-white hover:bg-red-700">
              Remover
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
