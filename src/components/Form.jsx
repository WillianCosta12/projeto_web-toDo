function Form(props) {

    function handleSubmit(){
        props.visible(false)
    }

    return (
        <div>
            <h2 className="p-3 text-center text-3xl">Cadastrar Tarefa</h2>
            <div className="flex justify-center">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2" onSubmit={handleSubmit}>
                    
                    <label htmlFor="title" className="block text-gray-700 text-base font-bold mb-2">Titulo: </label>
                    <input type="text" name="title" id="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"/>

                    <label htmlFor="description" className="block text-gray-700 text-base font-bold mb-2">Descrição:</label>
                    <textarea name="description" id="description" cols="30" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    
                    <h3 className="p-3 text-center text-2xl">Selecione a Prioridade</h3>

                    <div className="flex justify-center gap-4">
                        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input checked id="high-priority" type="radio" value="" name="priority" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="priority" class="w-full py-4 px-2 ms-2 text-sm font-medium">Alta</label>
                        </div>
                        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input id="medium-priority" type="radio" value="" name="priority" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="priority" class="w-full py-4 px-2 ms-2 text-sm font-medium">Media</label>
                        </div>
                        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input id="low-priority" type="radio" value="" name="priority" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="priority" class="w-full py-4 px-2 ms-2 text-sm font-medium">Baixa</label>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline mt-4">Cadastrar</button>
                    </div>
                </form>

            </div>
        </div>
    )

}

export default Form