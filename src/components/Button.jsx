function Button(props) {

    return(
        <div className="flex justify-center">
            <button className="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-4 px-6 border border-blue-500 hover:border-transparent rounded mt-3" onClick={props.click}>Adicionar Tarefa</button>
        </div>
    )

}

export default Button