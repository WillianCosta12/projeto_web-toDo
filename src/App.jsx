import Button from "./components/Button";
import Form from "./components/Form";
import KanbanBoard from "./components/KanbanBoard";

import { useState } from "react";

function App() {

  const [isForm, setIsFrom] = useState(false);

  function handleClick(){
    setIsFrom(true);
  }

  return (
    <div>
      <div className="min-h-screen items-center justify-center bg-gray-100 p-3 px-5">
        <h1 className="p-3 text-center text-5xl">Kanban Board</h1>
        <KanbanBoard />
        { isForm && 
          <Form visible={setIsFrom}></Form>
        }
        <Button click={handleClick}></Button>
      </div>
    </div>
  );
}

export default App;
