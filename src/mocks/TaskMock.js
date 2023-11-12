export const taskMock = {
  tasks: {
    "task-1": { id: "task-1", content: "Blablabla1" },
    "task-2": { id: "task-2", content: "Blablabla2" },
    "task-3": { id: "task-3", content: "Blablabla3" },
    "task-4": { id: "task-4", content: "Blablabla4" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      tasksIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  columnOrder: ["column-1"],
};
