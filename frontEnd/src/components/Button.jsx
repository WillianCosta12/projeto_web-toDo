function Button(props) {
  return (
    <div className="flex justify-center">
      <button
        className="mt-3 rounded border border-blue-500 bg-transparent px-6 py-4 font-semibold text-blue-700 hover:border-transparent hover:bg-green-500 hover:text-white"
        onClick={props.click}
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default Button;
