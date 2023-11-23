export const taskMock = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Blablabla1",
      description: "lorem lksdlsdklsdkldslsdkdls",
      priority: "alta",
      createdAt: new Date("2023/10/20"),
    },
    "task-2": {
      id: "task-2",
      content: "Blablabla2",
      description: "lorem lksdlsdklsdkldslsdkdls",
      priority: "media",
      createdAt: new Date("2023/10/20"),
    },
    "task-3": {
      id: "task-3",
      content: "Blablabla3",
      description: "lorem lksdlsdklsdkldslsdkdls",
      priority: "baixa",
      createdAt: new Date("2023/10/20"),
    },
    "task-4": {
      id: "task-4",
      content: "Blablabla4",
      description: "lorem lksdlsdklsdkldslsdkdls",
      priority: "media",
      createdAt: new Date("2023/10/20"),
    },
    "task-5": {
      id: "task-5",
      content: "Blablabla5",
      description: "lorem lksdlsdklsdkldslsdkdls",
      priority: "media",
      createdAt: new Date("2023/10/20"),
    },
    "task-6": {
      id: "task-6",
      content: "Blablabla6",
      description: "lorem lksdlsdklsdkldslsdkdls",
      priority: "baixa",
      createdAt: new Date("2023/10/20"),
    },
    "task-7": {
      id: "task-7",
      content: "Blablabla7",
      description: "",
      priority: "alta",
      createdAt: new Date("2023/10/20"),
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      tasksIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      tasksIds: ["task-5", "task-6"],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      tasksIds: ["task-7"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
