import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form(props) {

  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  function showToastMessage(type, message) {
    if (type) {
      toast.success(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  async function handleSubmit() {
    props.visible(false);

    try {
      if (content === "") {
        throw new Error("Preencha o titulo da tarefa");
      }

      const response = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, description, priority }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Erro durante o cadastro");
      }

      showToastMessage(true, "Tarefa registrada com sucesso");
    } catch (error) {
      showToastMessage(false, error.message || "Erro durante o cadastro");
    }

  }

  return (
    <div>
      <h2 className="p-3 text-center text-3xl">Cadastrar Tarefa</h2>
      <div className="flex justify-center">
        <form
          className="mb-4 w-1/2 rounded bg-white px-8 pb-8 pt-6 shadow-md"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="title"
            className="mb-2 block text-base font-bold text-gray-700"
          >
            Titulo:{" "}
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="focus:shadow-outline mb-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <label
            htmlFor="description"
            className="mb-2 block text-base font-bold text-gray-700"
          >
            Descrição:
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <h3 className="p-3 text-center text-2xl">Selecione a Prioridade</h3>

          <div className="flex justify-center gap-4">
            <div className="flex items-center rounded border border-gray-200 ps-4 dark:border-gray-700">
              <input
                checked
                id="high-priority"
                type="radio"
                value="alta"
                name="priority"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700"
                onChange={(e) => setPriority(e.target.value)}
              />
              <label
                htmlFor="priority"
                className="ms-2 w-full px-2 py-4 text-sm font-medium"
              >
                Alta
              </label>
            </div>
            <div className="flex items-center rounded border border-gray-200 ps-4 dark:border-gray-700">
              <input
                id="medium-priority"
                type="radio"
                value="media"
                name="priority"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700"
                onChange={(e) => setPriority(e.target.value)}
              />
              <label
                htmlFor="priority"
                className="ms-2 w-full px-2 py-4 text-sm font-medium"
              >
                Media
              </label>
            </div>
            <div className="flex items-center rounded border border-gray-200 ps-4 dark:border-gray-700">
              <input
                id="low-priority"
                type="radio"
                value="baixa"
                name="priority"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700"
                onChange={(e) => setPriority(e.target.value)}
              />
              <label
                htmlFor="priority"
                className="ms-2 w-full px-2 py-4 text-sm font-medium"
              >
                Baixa
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="focus:shadow-outline mt-4 rounded bg-blue-500 px-5 py-3 font-bold text-white hover:bg-blue-700 focus:outline-none"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
