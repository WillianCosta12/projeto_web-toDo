function Form(props) {
  function handleSubmit() {
    props.visible(false);
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
          ></textarea>

          <h3 className="p-3 text-center text-2xl">Selecione a Prioridade</h3>

          <div className="flex justify-center gap-4">
            <div className="flex items-center rounded border border-gray-200 ps-4 dark:border-gray-700">
              <input
                checked
                id="high-priority"
                type="radio"
                value=""
                name="priority"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700"
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
                value=""
                name="priority"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700"
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
                value=""
                name="priority"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700"
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
