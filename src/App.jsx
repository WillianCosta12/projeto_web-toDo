import KanbanBoard from "./components/KanbanBoard";

function App() {
  return (
    <div>
      <div className="min-h-screen items-center justify-center bg-gray-100 p-3 px-5">
        <h1 className="p-3 text-center text-5xl">Kanban Board</h1>
        <KanbanBoard />
      </div>
    </div>
  );
}

export default App;
