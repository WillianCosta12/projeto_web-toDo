import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

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

  async function handleSubmit(e) {
    e.preventDefault();
    try{
      if (username === "" || password === "") {
        throw new Error("Preencha todos os campos");
      }
  
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      console.log("response", response);
  
      if (response.ok) {
        const data = await response.json();
        console.log("Usuário logado com sucesso:", data);
        showToastMessage(true, "Usuário Logado com sucesso");
        navigate("/home");
      } else {
        const data = await response.json();
        throw new Error(data.message || "Erro durante o login");
        console.error("Erro ao fazer login:", response.statusText);
      }
    }catch(error){
      showToastMessage(false, error.message || "Erro durante o login");
    }

  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-md bg-white p-6 shadow-md">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              Nome de Usuário
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="username"
              type="text"
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="password"
              type="password"
              onChange={handlePasswordChange}
            />
          </div>
          <button
            className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Entrar
          </button>
          <button
            className="focus:shadow-outline mt-4 w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            onClick={() => navigate("/registro")}
          >
            Registre-se
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
