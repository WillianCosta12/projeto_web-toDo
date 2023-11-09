import { Droppable } from "react-beautiful-dnd";

function Column({ title, tasks, id }) {
  return (
    <div className="h-[475px] w-[300px] overflow-y-scroll rounded-sm border-gray-400 bg-blue-green scrollbar-none ">
      <h3 className="bg-dark-blue p-2">{title}</h3>

      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          <div
            className="min-h-[100px] flex-1 bg-blue-green p-1 transition-colors"
            ref={provided.innerRef}
            {...provided.droppableProps}
            // isDraggingOver={snapshot.isDraggingOver}
          >
            {provided.placeholder}
          </div>;
        }}
      </Droppable>
    </div>
  );
}

export default Column;
